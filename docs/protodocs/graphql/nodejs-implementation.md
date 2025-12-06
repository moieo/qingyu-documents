# Node.js GraphQL 实现详解

Node.js 生态系统拥有最丰富的 GraphQL 库和工具，是构建 GraphQL API 的首选平台之一。

## 1. 主要框架对比

| 框架 | 特点 | 适用场景 |
|------|------|----------|
| Apollo Server | 功能最全，生态完善 | 生产环境，企业级应用 |
| Express GraphQL | 轻量级，官方支持 | 简单项目，快速原型 |
| GraphQL Yoga | 现代化，全栈友好 | 全栈应用，Next.js 集成 |
| Mercurius | 高性能，Fastify 集成 | 高性能 API，微服务 |

## 2. Apollo Server

### 安装和配置

```bash
npm install @apollo/server graphql
# Express 集成
npm install express cors body-parser
# 或者使用独立版本
npm install @apollo/server-standalone
```

### 基础实现

```javascript
// server.js
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// Schema 定义
const typeDefs = `#graphql
  type Query {
    hello: String
    users: [User]
    user(id: ID!): User
  }

  type Mutation {
    createUser(name: String!, email: String!): User
    updateUser(id: ID!, name: String, email: String): User
    deleteUser(id: ID!): Boolean
  }

  type User {
    id: ID!
    name: String!
    email: String!
    posts: [Post]
  }

  type Post {
    id: ID!
    title: String!
    content: String!
    author: User!
  }
`;

// 模拟数据
const users = [
  { id: '1', name: '张三', email: 'zhangsan@example.com' },
  { id: '2', name: '李四', email: 'lisi@example.com' },
];

// Resolver 实现
const resolvers = {
  Query: {
    hello: () => 'Hello, Apollo Server!',
    users: () => users,
    user: (parent, { id }) => users.find(user => user.id === id),
  },
  Mutation: {
    createUser: (parent, { name, email }) => {
      const user = { id: String(users.length + 1), name, email };
      users.push(user);
      return user;
    },
    updateUser: (parent, { id, name, email }) => {
      const userIndex = users.findIndex(user => user.id === id);
      if (userIndex === -1) throw new Error('User not found');
      
      if (name) users[userIndex].name = name;
      if (email) users[userIndex].email = email;
      
      return users[userIndex];
    },
    deleteUser: (parent, { id }) => {
      const userIndex = users.findIndex(user => user.id === id);
      if (userIndex === -1) return false;
      
      users.splice(userIndex, 1);
      return true;
    },
  },
  User: {
    posts: (parent) => {
      // 实现获取用户帖子的逻辑
      return [];
    },
  },
};

// 创建服务器
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// 启动服务器
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀 Server ready at ${url}`);
```

### Express 集成

```javascript
// server-with-express.js
import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

await server.start();

app.use('/graphql',
  cors(),
  bodyParser.json(),
  expressMiddleware(server, {
    context: async ({ req }) => ({ token: req.headers.token }),
  }),
);

app.listen(4000, () => {
  console.log('🚀 Server ready at http://localhost:4000/graphql');
});
```

## 3. Express GraphQL

### 安装和配置

```bash
npm install express graphql express-graphql
```

### 基础实现

```javascript
// express-graphql-server.js
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';

// 构建 Schema
const schema = buildSchema(`
  type Query {
    hello: String
    user(id: ID!): User
    users: [User]
  }

  type Mutation {
    createUser(name: String!, email: String!): User
  }

  type User {
    id: ID!
    name: String!
    email: String!
  }
`);

// Resolver 实现
const root = {
  hello: () => 'Hello, Express GraphQL!',
  user: ({ id }) => ({ id, name: '测试用户', email: 'test@example.com' }),
  users: () => [
    { id: '1', name: '用户1', email: 'user1@example.com' },
    { id: '2', name: '用户2', email: 'user2@example.com' },
  ],
  createUser: ({ name, email }) => ({
    id: String(Math.random()),
    name,
    email,
  }),
};

const app = express();

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true, // 启用 GraphiQL 界面
}));

app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');
```

## 4. 数据库集成

### MongoDB + Mongoose

```javascript
// mongodb-integration.js
import mongoose from 'mongoose';

// 定义 Mongoose 模型
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
});

const User = mongoose.model('User', userSchema);

// Resolver 实现
const resolvers = {
  Query: {
    users: async () => await User.find(),
    user: async (parent, { id }) => await User.findById(id),
  },
  Mutation: {
    createUser: async (parent, { name, email }) => {
      const user = new User({ name, email });
      return await user.save();
    },
    updateUser: async (parent, { id, name, email }) => {
      return await User.findByIdAndUpdate(
        id,
        { name, email },
        { new: true }
      );
    },
    deleteUser: async (parent, { id }) => {
      await User.findByIdAndDelete(id);
      return true;
    },
  },
};

// 连接数据库
mongoose.connect('mongodb://localhost:27017/graphql-demo');
```

### PostgreSQL + Prisma

```javascript
// prisma-integration.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const resolvers = {
  Query: {
    users: async () => await prisma.user.findMany({
      include: { posts: true },
    }),
    user: async (parent, { id }) => await prisma.user.findUnique({
      where: { id: parseInt(id) },
      include: { posts: true },
    }),
  },
  Mutation: {
    createUser: async (parent, { name, email }) => {
      return await prisma.user.create({
        data: { name, email },
      });
    },
  },
};
```

## 5. 高级特性

### DataLoader 解决 N+1 问题

```javascript
// dataloader-setup.js
import DataLoader from 'dataloader';

// 创建 User DataLoader
const createUserLoader = () => {
  return new DataLoader(async (userIds) => {
    const users = await User.find({ _id: { $in: userIds } });
    const userMap = {};
    users.forEach(user => {
      userMap[user._id.toString()] = user;
    });
    return userIds.map(id => userMap[id] || null);
  });
};

// 在 context 中提供 DataLoader
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({
    userLoader: createUserLoader(),
  }),
});

// 在 Resolver 中使用
const resolvers = {
  Post: {
    author: async (post, args, context) => {
      return context.userLoader.load(post.authorId);
    },
  },
};
```

### 订阅（实时数据）

```javascript
// subscriptions.js
import { ApolloServer, PubSub } from '@apollo/server';
import { createServer } from 'http';
import { WebSocketServer } from 'ws';
import { useServer } from 'graphql-ws/lib/use/ws';

const pubsub = new PubSub();

const typeDefs = `#graphql
  type Subscription {
    userCreated: User
    postCreated: Post
  }

  type Mutation {
    createUser(name: String!, email: String!): User
    createPost(title: String!, content: String!, authorId: ID!): Post
  }
`;

const resolvers = {
  Subscription: {
    userCreated: {
      subscribe: () => pubsub.asyncIterator(['USER_CREATED']),
    },
    postCreated: {
      subscribe: () => pubsub.asyncIterator(['POST_CREATED']),
    },
  },
  Mutation: {
    createUser: async (parent, { name, email }) => {
      const user = await User.create({ name, email });
      await pubsub.publish('USER_CREATED', { userCreated: user });
      return user;
    },
    createPost: async (parent, { title, content, authorId }) => {
      const post = await Post.create({ title, content, authorId });
      await pubsub.publish('POST_CREATED', { postCreated: post });
      return post;
    },
  },
};
```

### 认证和授权

```javascript
// auth-middleware.js
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

app.use('/graphql',
  cors(),
  bodyParser.json(),
  expressMiddleware(server, {
    context: async ({ req }) => {
      // 验证 JWT token
      const token = req.headers.authorization || '';
      const user = await verifyToken(token);
      
      return {
        user,
        isAuthenticated: !!user,
        isAdmin: user?.role === 'admin',
      };
    },
  }),
);

// 在 Resolver 中使用认证
const resolvers = {
  Query: {
    users: (parent, args, context) => {
      if (!context.isAuthenticated) {
        throw new Error('Authentication required');
      }
      return User.find();
    },
    adminData: (parent, args, context) => {
      if (!context.isAdmin) {
        throw new Error('Admin access required');
      }
      return getAdminData();
    },
  },
};
```

## 6. 性能优化

### 查询复杂度限制

```javascript
// query-complexity.js
import { createComplexityLimitRule } from 'graphql-validation-complexity';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  validationRules: [
    createComplexityLimitRule(1000, {
      onCost: (cost) => {
        console.log(`Query cost: ${cost}`);
      },
    }),
  ],
});
```

### 缓存策略

```javascript
// caching.js
import responseCachePlugin from '@apollo/server-plugin-response-cache';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [
    responseCachePlugin({
      // 缓存配置
      sessionId: (requestContext) => 
        requestContext.request.http.headers.get('sessionid') || null,
    }),
  ],
});

// Resolver 级别的缓存
const resolvers = {
  Query: {
    users: {
      resolve: async () => await User.find(),
      extensions: {
        cacheControl: {
          maxAge: 60, // 缓存 60 秒
        },
      },
    },
  },
};
```

## 7. 测试

### 单元测试

```javascript
// user-resolver.test.js
import { ApolloServer } from '@apollo/server';
import { typeDefs, resolvers } from './schema';

describe('User Resolvers', () => {
  let testServer;

  beforeAll(() => {
    testServer = new ApolloServer({
      typeDefs,
      resolvers,
    });
  });

  it('should fetch users', async () => {
    const query = `
      query {
        users {
          id
          name
          email
        }
      }
    `;

    const response = await testServer.executeOperation({
      query,
    });

    expect(response.body.kind).toBe('single');
    expect(response.body.singleResult.errors).toBeUndefined();
    expect(response.body.singleResult.data.users).toBeDefined();
  });
});
```

## 8. 部署和监控

### Docker 部署

```dockerfile
# Dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

EXPOSE 4000

CMD ["node", "server.js"]
```

### 生产环境配置

```javascript
// production-server.js
import { ApolloServer } from '@apollo/server';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: process.env.NODE_ENV !== 'production',
  plugins: [
    // 生产环境插件
    ApolloServerPluginLandingPageProductionDefault(),
    ApolloServerPluginUsageReporting(),
  ],
});
```

## 最佳实践

1. **使用 TypeScript**：提高代码质量和开发体验
2. **实现 DataLoader**：避免 N+1 查询问题
3. **限制查询复杂度**：防止恶意查询
4. **统一的错误处理**：提供清晰的错误信息
5. **适当的日志记录**：便于调试和监控
6. **安全配置**：认证、授权和输入验证

## 相关资源

- [Apollo Server 官方文档](https://www.apollographql.com/docs/apollo-server/)
- [Express GraphQL 文档](https://github.com/graphql/express-graphql)
- [GraphQL.js 文档](https://graphql.org/graphql-js/)
- [Node.js GraphQL 最佳实践](https://graphql.org/learn/best-practices/)