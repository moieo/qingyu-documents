# GraphQL 最佳实践

## 设计原则

### 1. 以客户端为中心

GraphQL 的核心优势是让客户端精确指定需要的数据。设计 Schema 时应考虑客户端的使用场景。

**好的实践：**
```graphql
# 客户端可以精确选择需要的字段
query {
  user(id: "1") {
    name
    email
    posts {
      title
      createdAt
    }
  }
}
```

### 2. 使用描述性命名

使用清晰、一致的命名约定。

**命名规范：**
- 类型：`PascalCase`（如 `UserProfile`）
- 字段：`camelCase`（如 `firstName`）
- 枚举值：`SCREAMING_SNAKE_CASE`（如 `ACTIVE_STATUS`）
- 参数：`camelCase`（如 `sortBy`）

### 3. 合理的非空约束

谨慎使用非空约束，避免过度限制。

```graphql
# 适度使用非空
type User {
  id: ID!           # ID 应该非空
  name: String!     # 名字应该非空
  email: String     # 邮箱可能为空
  age: Int          # 年龄可能为空
}
```

## Schema 设计最佳实践

### 1. 使用接口抽象公共字段

```graphql
# 定义公共接口
interface Timestamped {
  createdAt: String!
  updatedAt: String!
}

interface Node {
  id: ID!
}

# 实现接口
type User implements Node & Timestamped {
  id: ID!
  name: String!
  createdAt: String!
  updatedAt: String!
}

type Post implements Node & Timestamped {
  id: ID!
  title: String!
  content: String!
  createdAt: String!
  updatedAt: String!
}
```

### 2. 使用输入类型封装参数

```graphql
# 使用输入类型
input CreateUserInput {
  name: String!
  email: String!
  password: String!
}

input UpdateUserInput {
  name: String
  email: String
}

input PaginationInput {
  limit: Int! = 10
  offset: Int! = 0
}

# 在变更中使用
mutation {
  createUser(input: CreateUserInput!): User!
  updateUser(id: ID!, input: UpdateUserInput!): User!
}
```

### 3. 设计一致的变更模式

```graphql
# 一致的变更命名
mutation {
  createUser(input: CreateUserInput!): User!
  updateUser(id: ID!, input: UpdateUserInput!): User!
  deleteUser(id: ID!): Boolean!
  
  createPost(input: CreatePostInput!): Post!
  updatePost(id: ID!, input: UpdatePostInput!): Post!
  deletePost(id: ID!): Boolean!
}
```

## 查询优化

### 1. 避免过度嵌套

**避免：**
```graphql
query {
  user(id: "1") {
    posts {
      comments {
        author {
          posts {
            comments {  # 过度嵌套！
              content
            }
          }
        }
      }
    }
  }
}
```

**推荐：**
```graphql
query {
  user(id: "1") {
    posts {
      title
      comments(first: 5) {
        content
        author {
          name
        }
      }
    }
  }
}
```

### 2. 使用分页控制数据量

```graphql
# 游标分页
query {
  posts(first: 10, after: "cursor") {
    edges {
      node {
        id
        title
      }
      cursor
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}

# 偏移量分页
query {
  posts(limit: 10, offset: 20) {
    id
    title
    totalCount
  }
}
```

### 3. 合理使用片段

```graphql
# 定义可重用的片段
fragment UserBasicInfo on User {
  id
  name
  email
}

fragment PostBasicInfo on Post {
  id
  title
  createdAt
}

# 使用片段
query {
  user(id: "1") {
    ...UserBasicInfo
    posts {
      ...PostBasicInfo
    }
  }
}
```

## 性能优化

### 1. 解决 N+1 查询问题

使用 DataLoader 批量处理数据请求：

```javascript
// DataLoader 示例
const userLoader = new DataLoader(async (userIds) => {
  const users = await User.find({ _id: { $in: userIds } });
  return userIds.map(id => users.find(user => user.id === id));
});

// Resolver 中使用
const postResolver = {
  author: async (post) => {
    return userLoader.load(post.authorId);
  }
};
```

### 2. 查询复杂度分析

限制查询复杂度，防止恶意查询：

```javascript
// 查询复杂度限制
const depthLimit = require('graphql-depth-limit');
const complexityLimit = require('graphql-query-complexity');

// 应用限制
app.use('/graphql', graphqlHTTP({
  validationRules: [
    depthLimit(10),
    complexityLimit({
      maximumComplexity: 1000,
      variables: {}
    })
  ]
}));
```

### 3. 缓存策略

```graphql
# 使用 @cacheControl 指令
type Query {
  user(id: ID!): User @cacheControl(maxAge: 3600)
  posts: [Post] @cacheControl(maxAge: 300)
}

type User @cacheControl(maxAge: 3600) {
  id: ID!
  name: String!
  email: String! @cacheControl(maxAge: 1800)
}
```

## 错误处理

### 1. 统一的错误格式

```graphql
type MutationResponse {
  success: Boolean!
  message: String
  code: String
}

type UserMutationResponse implements MutationResponse {
  success: Boolean!
  message: String
  code: String
  user: User
}

mutation {
  createUser(input: CreateUserInput!): UserMutationResponse!
}
```

### 2. 自定义错误类型

```graphql
type Error {
  message: String!
  code: String!
  field: String
}

type UserResponse {
  user: User
  errors: [Error!]
}

query {
  user(id: "1"): UserResponse!
}
```

## 安全最佳实践

### 1. 查询白名单

```javascript
// 使用持久化查询
const { createPersistedQueryLink } = require('@apollo/client/persisted-queries');

// 只允许预定义的查询
const link = createPersistedQueryLink().concat(httpLink);
```

### 2. 查询深度限制

```javascript
// 限制查询深度
const depthLimit = require('graphql-depth-limit');

app.use('/graphql', graphqlHTTP({
  validationRules: [depthLimit(5)]
}));
```

### 3. 查询复杂度限制

```javascript
// 限制查询复杂度
const { createComplexityLimitRule } = require('graphql-validation-complexity');

const complexityRule = createComplexityLimitRule(1000, {
  scalarCost: 1,
  objectCost: 5,
  listFactor: 10,
});
```

## 版本管理

### 1. 渐进式演进

避免破坏性变更，使用渐进式演进策略：

```graphql
# 添加新字段（安全）
type User {
  id: ID!
  name: String!
  email: String!
  phone: String  # 新增可选字段
}

# 弃用旧字段（安全）
type User {
  id: ID!
  name: String!
  fullName: String @deprecated(reason: "使用 name 字段")
}
```

### 2. 避免破坏性变更

**不要：**
- 删除字段
- 更改字段类型
- 将可选字段改为必需
- 删除枚举值

## 监控和日志

### 1. 查询日志

```javascript
// 记录查询和性能
app.use('/graphql', (req, res, next) => {
  const startTime = Date.now();
  
  res.on('finish', () => {
    const duration = Date.now() - startTime;
    console.log(`Query: ${req.body.operationName}, Duration: ${duration}ms`);
  });
  
  next();
});
```

### 2. 性能监控

```javascript
// Apollo Studio 性能监控
const { ApolloServerPluginUsageReporting } = require('apollo-server-core');

const server = new ApolloServer({
  plugins: [
    ApolloServerPluginUsageReporting({
      sendVariableValues: { all: true },
    }),
  ],
});
```

## 测试策略

### 1. Schema 测试

```javascript
// 测试 Schema 定义
const { graphql } = require('graphql');

describe('User Schema', () => {
  it('should fetch user by id', async () => {
    const query = `
      query {
        user(id: "1") {
          name
          email
        }
      }
    `;
    
    const result = await graphql(schema, query);
    expect(result.errors).toBeUndefined();
  });
});
```

### 2. 集成测试

```javascript
// 使用 Apollo Client 测试
import { ApolloClient, InMemoryCache } from '@apollo/client';

describe('User Integration', () => {
  it('should create user', async () => {
    const mutation = gql`
      mutation CreateUser($input: CreateUserInput!) {
        createUser(input: $input) {
          id
          name
        }
      }
    `;
    
    const result = await client.mutate({
      mutation,
      variables: { input: { name: 'Test', email: 'test@example.com' } }
    });
    
    expect(result.data.createUser.name).toBe('Test');
  });
});
```

## 总结

遵循这些最佳实践可以帮助您构建高效、可维护和安全的 GraphQL API。记住要根据具体业务需求调整这些实践，并持续监控和改进您的 GraphQL 实现。