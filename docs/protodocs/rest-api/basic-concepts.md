---
title: '基础概念'
---

# REST API 基础概念 📚

(◕‿◕✿) 在这一章中，我们将深入了解 REST API 的核心概念和术语呢~ ✨

## 资源（Resource）

在 REST 中，一切皆为资源。资源可以是任何可以被命名的信息，比如用户、订单、产品等。

### 资源标识

每个资源都有一个唯一的标识符，通常使用 URI（Uniform Resource Identifier）来表示：

```
/users/123
/products/456
/orders/789
```

## URI 设计原则

### 使用名词而非动词

✅ 正确：
```
GET /users
POST /users
PUT /users/123
```

❌ 错误：
```
GET /getUsers
POST /createUser
PUT /updateUser/123
```

### 使用复数形式

```
/users          # 用户集合
/users/123      # 特定用户
/products       # 产品集合
/orders         # 订单集合
```

## 表示（Representation）

资源可以有多种表示形式，客户端通过 Accept 头指定期望的格式：

### 常见格式

- **JSON**：最常用的数据格式
- **XML**：传统的数据格式
- **HTML**：网页表示
- **纯文本**：简单数据

### 示例请求头

```http
GET /api/users/123 HTTP/1.1
Host: api.example.com
Accept: application/json
```

## 无状态性（Stateless）

每个请求都包含所有必要的信息，服务器不保存客户端的状态：

### 有状态 vs 无状态

| 有状态 | 无状态 |
|--------|--------|
| 服务器保存会话信息 | 每个请求独立 |
| 需要会话管理 | 不需要会话 |
| 扩展性差 | 扩展性好 |

## 统一接口

REST 使用统一的接口来操作资源：

### 标准 HTTP 方法

- `GET` - 获取资源
- `POST` - 创建资源
- `PUT` - 更新资源
- `DELETE` - 删除资源

### 标准状态码

- `200` - 成功
- `201` - 创建成功
- `400` - 客户端错误
- `404` - 资源不存在
- `500` - 服务器错误

## 可缓存性

响应可以被缓存，提高性能：

### 缓存控制头

```http
HTTP/1.1 200 OK
Content-Type: application/json
Cache-Control: max-age=3600
ETag: "abc123"
```

## 分层系统

客户端无需知道是否连接到最终服务器：

### 典型分层

```
客户端 → 负载均衡器 → 应用服务器 → 数据库
```

!!! note "重要概念"
    理解这些基础概念是设计优秀 REST API 的关键哦！(★ω★)

在下一章中，我们将深入了解 HTTP 方法的具体用法~ 🚀