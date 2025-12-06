---
title: 'HTTP 方法详解'
---

# HTTP 方法详解 🔧

(◕‿◕✿) 在这一章中，我们将详细学习各种 HTTP 方法的使用场景和最佳实践呢~ ✨

## GET - 获取资源

GET 方法用于从服务器获取资源信息，应该是安全的和幂等的。

### 使用场景

- 获取资源列表
- 获取单个资源详情
- 搜索和过滤资源

### 示例

```http
GET /api/users HTTP/1.1
Host: api.example.com
Accept: application/json
```

```http
GET /api/users/123 HTTP/1.1
Host: api.example.com
Accept: application/json
```

### 查询参数

```http
GET /api/users?page=1&limit=10&status=active HTTP/1.1
Host: api.example.com
```

## POST - 创建资源

POST 方法用于在服务器创建新资源。

### 使用场景

- 创建新资源
- 执行复杂操作
- 提交表单数据

### 示例

```http
POST /api/users HTTP/1.1
Host: api.example.com
Content-Type: application/json

{
  "name": "小明",
  "email": "xiaoming@example.com",
  "age": 25
}
```

### 响应

```http
HTTP/1.1 201 Created
Location: /api/users/456
Content-Type: application/json

{
  "id": 456,
  "name": "小明",
  "email": "xiaoming@example.com",
  "age": 25
}
```

## PUT - 完整更新资源

PUT 方法用于完整更新现有资源，如果资源不存在则创建。

### 使用场景

- 完整更新资源
- 替换资源内容

### 示例

```http
PUT /api/users/123 HTTP/1.1
Host: api.example.com
Content-Type: application/json

{
  "name": "小明",
  "email": "newemail@example.com",
  "age": 26
}
```

## PATCH - 部分更新资源

PATCH 方法用于部分更新资源，只修改指定的字段。

### 使用场景

- 更新部分字段
- 增量更新

### 示例

```http
PATCH /api/users/123 HTTP/1.1
Host: api.example.com
Content-Type: application/json

{
  "email": "updated@example.com"
}
```

## DELETE - 删除资源

DELETE 方法用于删除指定的资源。

### 使用场景

- 删除单个资源
- 删除资源集合

### 示例

```http
DELETE /api/users/123 HTTP/1.1
Host: api.example.com
```

### 软删除 vs 硬删除

```http
# 软删除
PATCH /api/users/123 HTTP/1.1
Host: api.example.com
Content-Type: application/json

{
  "deleted": true
}

# 硬删除
DELETE /api/users/123 HTTP/1.1
Host: api.example.com
```

## 方法特性对比

| 方法 | 安全性 | 幂等性 | 缓存性 |
|------|--------|--------|--------|
| GET | ✅ | ✅ | ✅ |
| POST | ❌ | ❌ | ❌ |
| PUT | ❌ | ✅ | ❌ |
| PATCH | ❌ | ❌ | ❌ |
| DELETE | ❌ | ✅ | ❌ |

### 说明

- **安全性**：不会修改服务器状态
- **幂等性**：多次执行结果相同
- **缓存性**：响应可以被缓存

## 其他 HTTP 方法

### HEAD

与 GET 相同，但不返回响应体，只返回头部信息。

### OPTIONS

用于获取资源支持的 HTTP 方法。

```http
OPTIONS /api/users HTTP/1.1
Host: api.example.com
```

```http
HTTP/1.1 200 OK
Allow: GET, POST, OPTIONS
```

!!! tip "最佳实践"
    正确使用 HTTP 方法是设计优秀 API 的基础，记住每个方法的特点和适用场景哦！(★ω★)

在下一章中，我们将学习 HTTP 状态码的含义和使用~ 🚀