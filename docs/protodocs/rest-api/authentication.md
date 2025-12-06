---
title: '认证授权'
---

# REST API 认证授权 🔐

(◕‿◕✿) 在这一章中，我们将学习 API 安全认证和授权的各种机制呢~ ✨

## 认证 vs 授权

### 认证（Authentication）

验证用户身份，确认"你是谁"。

### 授权（Authorization）

验证用户权限，确认"你能做什么"。

## 常用认证方式

### 1. API Key

最简单的认证方式，适合机器对机器的通信。

#### 请求示例

```http
GET /api/users HTTP/1.1
Host: api.example.com
X-API-Key: your-api-key-here
```

#### 优缺点

- ✅ 简单易用
- ✅ 适合内部服务
- ❌ 安全性较低
- ❌ 难以撤销

### 2. Bearer Token (JWT)

基于 JSON Web Token 的认证方式。

#### 请求示例

```http
GET /api/users HTTP/1.1
Host: api.example.com
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

#### JWT 结构

```
Header.Payload.Signature
```

**Header**:
```json
{
  "alg": "HS256",
  "typ": "JWT"
}
```

**Payload**:
```json
{
  "sub": "1234567890",
  "name": "小明",
  "iat": 1516239022,
  "exp": 1516242622
}
```

#### 优缺点

- ✅ 无状态
- ✅ 可包含用户信息
- ✅ 易于扩展
- ❌ Token 无法主动撤销
- ❌ 需要安全存储密钥

### 3. OAuth 2.0

行业标准的授权框架。

#### 授权流程

```
客户端 → 授权服务器 → 资源所有者 → 授权服务器 → 客户端
```

#### 授权类型

- **授权码模式** - Web 应用
- **隐式模式** - 单页应用
- **密码模式** - 受信任的客户端
- **客户端凭证模式** - 机器对机器

#### 请求示例

```http
POST /oauth/token HTTP/1.1
Host: auth.example.com
Content-Type: application/x-www-form-urlencoded

grant_type=password&
username=user@example.com&
password=password&
client_id=your-client-id&
client_secret=your-client-secret
```

### 4. Basic Authentication

基本的用户名密码认证。

#### 请求示例

```http
GET /api/users HTTP/1.1
Host: api.example.com
Authorization: Basic dXNlcjpwYXNzd29yZA==
```

## 授权机制

### 基于角色的访问控制（RBAC）

```json
{
  "user": {
    "id": "user_123",
    "roles": ["user", "editor"],
    "permissions": [
      "articles:read",
      "articles:write",
      "comments:read"
    ]
  }
}
```

### 权限检查

```javascript
// 检查用户权限
function hasPermission(user, resource, action) {
  return user.permissions.includes(`${resource}:${action}`);
}

// 使用示例
if (!hasPermission(user, 'articles', 'delete')) {
  return res.status(403).json({
    error: '没有删除文章的权限'
  });
}
```

## 安全最佳实践

### 1. 使用 HTTPS

```http
# 强制使用 HTTPS
Strict-Transport-Security: max-age=31536000; includeSubDomains
```

### 2. Token 安全

- 设置合理的过期时间
- 使用安全的签名算法
- 避免在 URL 中传递 token
- 实现 token 刷新机制

### 3. 密码安全

- 使用 bcrypt 等安全哈希算法
- 强制密码复杂度要求
- 实现密码重置流程
- 记录登录尝试

### 4. 速率限制

```http
HTTP/1.1 200 OK
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 99
X-RateLimit-Reset: 1640995200
```

### 5. CORS 配置

```javascript
// Express.js CORS 配置
app.use(cors({
  origin: ['https://example.com', 'https://app.example.com'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
```

## 实现示例

### JWT 认证中间件

```javascript
// Express.js 中间件
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({
      error: '需要认证 token'
    });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({
        error: 'token 无效'
      });
    }
    req.user = user;
    next();
  });
};
```

### 权限检查中间件

```javascript
const requirePermission = (resource, action) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({
        error: '需要认证'
      });
    }

    const hasPerm = req.user.permissions.includes(`${resource}:${action}`);
    
    if (!hasPerm) {
      return res.status(403).json({
        error: '没有权限执行此操作'
      });
    }

    next();
  };
};

// 使用示例
app.delete('/api/articles/:id', 
  authenticateToken, 
  requirePermission('articles', 'delete'),
  deleteArticleHandler
);
```

## 安全测试

### 常见安全漏洞

- SQL 注入
- XSS 攻击
- CSRF 攻击
- 信息泄露
- 不安全的直接对象引用

### 测试工具

- OWASP ZAP
- Burp Suite
- Nmap
- SQLMap

!!! warning "安全提醒"
    API 安全是系统安全的第一道防线，务必：
    
    - 定期进行安全审计
    - 监控异常访问
    - 及时更新依赖
    - 遵循最小权限原则
    
    安全无小事，防范于未然！(◕‿◕✿)

恭喜你完成了 REST API 的学习之旅！现在你已经掌握了设计安全、高效 API 的关键知识~ 🎉