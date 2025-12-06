# GraphQL 协议文档

GraphQL 是一种用于 API 的查询语言，也是一个用于执行查询的运行时。它提供了一种更高效、强大和灵活的方式来开发 Web API。

## 目录

- [基本概念](basic-concepts.md)
- [查询语法](query-syntax.md)
- [类型系统](type-system.md)
- [最佳实践](best-practices.md)

## 什么是 GraphQL？

GraphQL 是由 Facebook 开发的一种 API 查询语言，它允许客户端精确地指定需要的数据，避免了传统 REST API 中的过度获取或不足获取问题。

### 主要特性

- **精确查询**：客户端可以精确指定需要哪些字段
- **单一端点**：所有操作都通过单个端点完成
- **强类型系统**：明确的类型定义和验证
- **实时数据**：支持订阅实现实时更新

## 快速开始

```graphql
# 查询示例
query {
  user(id: "1") {
    name
    email
    posts {
      title
      content
    }
  }
}
```

## 相关资源

- [GraphQL 官方文档](https://graphql.org/)
- [GraphQL 规范](https://spec.graphql.org/)
- [Apollo GraphQL](https://www.apollographql.com/)