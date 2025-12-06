---
title: '状态码说明'
---

# HTTP 状态码说明 📊

(◕‿◕✿) 在这一章中，我们将学习各种 HTTP 状态码的含义和正确使用方式呢~ ✨

## 状态码分类

HTTP 状态码分为 5 个类别，每个类别都有特定的含义：

### 1xx - 信息性状态码

表示请求已被接收，需要继续处理。

### 2xx - 成功状态码

表示请求已成功被服务器接收、理解、并接受。

### 3xx - 重定向状态码

表示需要客户端采取进一步的操作才能完成请求。

### 4xx - 客户端错误状态码

表示客户端可能发生了错误，妨碍了服务器的处理。

### 5xx - 服务器错误状态码

表示服务器在处理请求的过程中有错误或者异常状态发生。

## 常用状态码详解

### 2xx 成功

#### 200 OK

请求成功，响应中包含请求的结果。

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "status": "success",
  "data": {
    "id": 123,
    "name": "小明"
  }
}
```

#### 201 Created

请求成功，并且创建了新资源。

```http
HTTP/1.1 201 Created
Location: /api/users/456
Content-Type: application/json

{
  "status": "success",
  "data": {
    "id": 456,
    "name": "新用户"
  }
}
```

#### 204 No Content

请求成功，但没有返回内容。

```http
HTTP/1.1 204 No Content
```

### 3xx 重定向

#### 301 Moved Permanently

资源已永久移动到新位置。

```http
HTTP/1.1 301 Moved Permanently
Location: https://new-api.example.com/users
```

#### 302 Found

资源临时移动到新位置。

### 4xx 客户端错误

#### 400 Bad Request

客户端请求有语法错误，服务器无法理解。

```http
HTTP/1.1 400 Bad Request
Content-Type: application/json

{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "请求参数验证失败",
    "details": [
      {
        "field": "email",
        "message": "邮箱格式不正确"
      }
    ]
  }
}
```

#### 401 Unauthorized

请求需要用户认证。

```http
HTTP/1.1 401 Unauthorized
WWW-Authenticate: Bearer
Content-Type: application/json

{
  "error": {
    "code": "UNAUTHORIZED",
    "message": "需要认证"
  }
}
```

#### 403 Forbidden

服务器理解请求，但拒绝执行。

```http
HTTP/1.1 403 Forbidden
Content-Type: application/json

{
  "error": {
    "code": "FORBIDDEN",
    "message": "没有访问权限"
  }
}
```

#### 404 Not Found

请求的资源不存在。

```http
HTTP/1.1 404 Not Found
Content-Type: application/json

{
  "error": {
    "code": "NOT_FOUND",
    "message": "用户不存在"
  }
}
```

#### 409 Conflict

请求与当前资源状态冲突。

```http
HTTP/1.1 409 Conflict
Content-Type: application/json

{
  "error": {
    "code": "CONFLICT",
    "message": "邮箱已被注册"
  }
}
```

### 5xx 服务器错误

#### 500 Internal Server Error

服务器内部错误。

```http
HTTP/1.1 500 Internal Server Error
Content-Type: application/json

{
  "error": {
    "code": "INTERNAL_ERROR",
    "message": "服务器内部错误"
  }
}
```

#### 503 Service Unavailable

服务暂时不可用。

```http
HTTP/1.1 503 Service Unavailable
Retry-After: 3600
Content-Type: application/json

{
  "error": {
    "code": "SERVICE_UNAVAILABLE",
    "message": "服务维护中，请稍后重试"
  }
}
```

## 状态码使用指南

### 成功响应

| 场景 | 状态码 | 说明 |
|------|--------|------|
| 获取资源 | 200 | 返回资源数据 |
| 创建资源 | 201 | 返回创建的资源，包含 Location 头 |
| 删除资源 | 200 或 204 | 返回删除结果或无内容 |
| 更新资源 | 200 | 返回更新后的资源 |

### 错误响应

| 场景 | 状态码 | 说明 |
|------|--------|------|
| 参数错误 | 400 | 请求参数验证失败 |
| 认证失败 | 401 | 需要登录或 token 无效 |
| 权限不足 | 403 | 没有访问权限 |
| 资源不存在 | 404 | 请求的资源不存在 |
| 资源冲突 | 409 | 与现有资源冲突 |

### 错误响应格式

```json
{
  "error": {
    "code": "ERROR_CODE",
    "message": "错误描述",
    "details": [
      {
        "field": "字段名",
        "message": "具体错误信息"
      }
    ]
  }
}
```

!!! note "重要提示"
    正确使用状态码可以让 API 更加清晰和易于使用，记得为不同的场景选择合适的状态码哦！(★ω★)

在下一章中，我们将学习 REST API 设计的最佳实践~ 🚀