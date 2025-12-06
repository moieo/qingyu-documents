# GraphQL 基本概念

## 核心概念

### 1. Schema（模式）

GraphQL Schema 定义了 API 的类型系统，描述了可用的数据和操作。

```graphql
# Schema 定义示例
type Query {
  user(id: ID!): User
  posts: [Post]
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
```

### 2. Query（查询）

查询用于从服务器获取数据。

```graphql
# 基本查询
query {
  user(id: "1") {
    name
    email
  }
}

# 带参数的查询
query GetUser($userId: ID!) {
  user(id: $userId) {
    name
    email
    posts {
      title
      content
    }
  }
}
```

### 3. Mutation（变更）

变更用于修改服务器上的数据。

```graphql
# 创建用户
mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
    id
    name
    email
  }
}

# 变量
{
  "input": {
    "name": "张三",
    "email": "zhangsan@example.com"
  }
}
```

### 4. Subscription（订阅）

订阅用于实时数据更新。

```graphql
subscription OnUserCreated {
  userCreated {
    id
    name
    email
  }
}
```

## 类型系统

### 标量类型

- `Int`：有符号 32 位整数
- `Float`：有符号双精度浮点数
- `String`：UTF-8 字符串
- `Boolean`：true 或 false
- `ID`：唯一标识符

### 对象类型

定义数据对象的结构。

```graphql
type Product {
  id: ID!
  name: String!
  price: Float!
  inStock: Boolean!
}
```

### 枚举类型

定义一组固定的值。

```graphql
enum UserRole {
  ADMIN
  USER
  GUEST
}
```

### 接口和联合类型

```graphql
# 接口
interface Node {
  id: ID!
}

# 联合类型
union SearchResult = User | Product | Post
```

## 操作类型

| 操作类型 | 描述 |
|---------|------|
| Query | 读取数据操作 |
| Mutation | 写入数据操作 |
| Subscription | 实时数据订阅 |

## 字段和参数

### 字段（Fields）

字段表示对象上的属性。

```graphql
query {
  user {
    name    # 字段
    email   # 字段
  }
}
```

### 参数（Arguments）

参数用于向字段传递数据。

```graphql
query {
  user(id: "1") {  # id 是参数
    name
  }
}
```

## 变量

变量允许在查询中参数化值。

```graphql
query GetUser($userId: ID!) {
  user(id: $userId) {
    name
  }
}
```

## 片段

片段用于重用字段选择。

```graphql
fragment UserFields on User {
  id
  name
  email
}

query {
  user(id: "1") {
    ...UserFields
  }
}
```