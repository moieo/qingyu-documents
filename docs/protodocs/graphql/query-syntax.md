# GraphQL 查询语法

## 基本查询结构

### 简单查询

```graphql
# 获取用户信息
query {
  user {
    name
    email
    age
  }
}
```

### 带别名的查询

```graphql
query {
  zhangsan: user(id: "1") {
    name
    email
  }
  lisi: user(id: "2") {
    name
    email
  }
}
```

### 嵌套查询

```graphql
query {
  user(id: "1") {
    name
    posts {
      title
      comments {
        content
        author {
          name
        }
      }
    }
  }
}
```

## 参数传递

### 基本参数

```graphql
query {
  user(id: "1") {
    name
  }
  
  posts(first: 10, after: "cursor") {
    title
  }
}
```

### 使用变量

```graphql
query GetUser($userId: ID!, $limit: Int = 10) {
  user(id: $userId) {
    name
    posts(first: $limit) {
      title
    }
  }
}
```

变量值：
```json
{
  "userId": "1",
  "limit": 5
}
```

## 变更操作

### 创建数据

```graphql
mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
    id
    name
    email
  }
}
```

### 更新数据

```graphql
mutation UpdateUser($id: ID!, $input: UpdateUserInput!) {
  updateUser(id: $id, input: $input) {
    id
    name
    email
  }
}
```

### 删除数据

```graphql
mutation DeleteUser($id: ID!) {
  deleteUser(id: $id) {
    success
    message
  }
}
```

## 订阅操作

### 实时订阅

```graphql
subscription OnUserCreated {
  userCreated {
    id
    name
    email
    createdAt
  }
}
```

### 带参数的订阅

```graphql
subscription OnUserPosts($userId: ID!) {
  userPosts(userId: $userId) {
    id
    title
    content
  }
}
```

## 指令（Directives）

### @include 指令

```graphql
query GetUser($id: ID!, $withPosts: Boolean!) {
  user(id: $id) {
    name
    email
    posts @include(if: $withPosts) {
      title
    }
  }
}
```

### @skip 指令

```graphql
query GetUser($id: ID!, $skipEmail: Boolean!) {
  user(id: $id) {
    name
    email @skip(if: $skipEmail)
  }
}
```

### @deprecated 指令

```graphql
type User {
  name: String!
  fullName: String! @deprecated(reason: "使用 name 字段代替")
}
```

## 片段（Fragments）

### 基本片段

```graphql
fragment UserInfo on User {
  id
  name
  email
  createdAt
}

query {
  user(id: "1") {
    ...UserInfo
  }
}
```

### 内联片段

```graphql
query {
  search(query: "graphql") {
    ... on User {
      name
      email
    }
    ... on Post {
      title
      content
    }
  }
}
```

## 联合类型和接口查询

### 接口查询

```graphql
query {
  node(id: "1") {
    ... on User {
      name
      email
    }
    ... on Post {
      title
      content
    }
  }
}
```

### 联合类型查询

```graphql
query {
  search(query: "graphql") {
    ... on User {
      name
    }
    ... on Product {
      title
      price
    }
  }
}
```

## 分页查询

### 基于游标的分页

```graphql
query {
  posts(first: 10, after: "cursor") {
    edges {
      node {
        id
        title
        content
      }
      cursor
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
  }
}
```

### 基于偏移量的分页

```graphql
query {
  posts(limit: 10, offset: 20) {
    id
    title
    content
    totalCount
  }
}
```

## 错误处理

### 查询中的错误处理

```graphql
query {
  user(id: "1") {
    name
    email
  }
}
```

响应示例：
```json
{
  "data": {
    "user": null
  },
  "errors": [
    {
      "message": "用户不存在",
      "path": ["user"],
      "locations": [{"line": 2, "column": 3}]
    }
  ]
}
```

## 性能优化技巧

1. **只请求需要的字段**
2. **使用分页避免大数据集**
3. **合理使用片段减少重复代码**
4. **利用数据加载器减少 N+1 查询**
5. **使用持久化查询减少网络开销**