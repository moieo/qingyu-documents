# Python GraphQL 实现详解

Python 生态系统中有多个优秀的 GraphQL 库，各有特色，适合不同的使用场景。

## 主要库对比

| 库名称 | 特点 | 适用场景 |
|--------|------|----------|
| Graphene | 成熟稳定，社区活跃 | 生产环境，Django 集成 |
| Strawberry | 现代语法，类型安全 | 新项目，FastAPI 集成 |
| Ariadne | Schema-first 开发 | 已有 GraphQL schema |

## 1. Graphene

### 安装
```bash
pip install graphene
# Django 集成
pip install graphene-django
# SQLAlchemy 集成
pip install graphene-sqlalchemy
```

### 基本使用

```python
import graphene

class User(graphene.ObjectType):
    id = graphene.ID()
    name = graphene.String()
    email = graphene.String()

class Query(graphene.ObjectType):
    hello = graphene.String()
    user = graphene.Field(User, id=graphene.ID(required=True))
    
    def resolve_hello(self, info):
        return "Hello, GraphQL!"
    
    def resolve_user(self, info, id):
        # 从数据库或其他数据源获取用户
        return User(id=id, name="张三", email="zhangsan@example.com")

schema = graphene.Schema(query=Query)

# 执行查询
result = schema.execute('''
    query {
        user(id: "1") {
            name
            email
        }
    }
''')
print(result.data)
```

### Django 集成

```python
# schema.py
import graphene
import graphene_django
from .models import User as UserModel

class UserType(graphene_django.DjangoObjectType):
    class Meta:
        model = UserModel
        fields = ("id", "name", "email")

class Query(graphene.ObjectType):
    users = graphene.List(UserType)
    user_by_id = graphene.Field(UserType, id=graphene.ID())
    
    def resolve_users(self, info):
        return UserModel.objects.all()
    
    def resolve_user_by_id(self, info, id):
        return UserModel.objects.get(id=id)

schema = graphene.Schema(query=Query)
```

## 2. Strawberry

### 安装

```bash
pip install strawberry
# FastAPI 集成
pip install "strawberry-graphql[fastapi]"
```

### 基本使用

```python
from typing import Optional
import strawberry

@strawberry.type
class User:
    id: strawberry.ID
    name: str
    email: str

@strawberry.type
class Query:
    @strawberry.field
    def hello(self) -> str:
        return "Hello, Strawberry!"
    
    @strawberry.field
    def user(self, id: strawberry.ID) -> Optional[User]:
        # 实现数据获取逻辑
        return User(id=id, name="李四", email="lisi@example.com")

schema = strawberry.Schema(query=Query)

# FastAPI 集成
from strawberry.fastapi import GraphQLRouter
import fastapi

app = fastapi.FastAPI()
graphql_app = GraphQLRouter(schema)
app.include_router(graphql_app, prefix="/graphql")
```

### 高级特性

```python
import strawberry
from typing import List

@strawberry.input
class CreateUserInput:
    name: str
    email: str

@strawberry.type
class Mutation:
    @strawberry.mutation
    def create_user(self, input: CreateUserInput) -> User:
        # 创建用户逻辑
        return User(id="1", name=input.name, email=input.email)

@strawberry.type
class Subscription:
    @strawberry.subscription
    async def count(self, target: int = 100) -> int:
        for i in range(target):
            yield i
            await asyncio.sleep(1)

schema = strawberry.Schema(
    query=Query,
    mutation=Mutation,
    subscription=Subscription
)
```

## 3. Ariadne

### 安装
```bash
pip install ariadne
```

### Schema-first 开发

```python
from ariadne import QueryType, make_executable_schema
from ariadne.asgi import GraphQL
import asyncio

# GraphQL schema
type_defs = """
    type Query {
        hello: String!
        user(id: ID!): User
    }
    
    type User {
        id: ID!
        name: String!
        email: String!
    }
"""

query = QueryType()

@query.field("hello")
def resolve_hello(*_):
    return "Hello, Ariadne!"

@query.field("user")
def resolve_user(*_, id):
    return {"id": id, "name": "王五", "email": "wangwu@example.com"}

schema = make_executable_schema(type_defs, query)

# ASGI 应用
app = GraphQL(schema, debug=True)
```

## 性能优化

### 1. DataLoader 模式

```python
from promise import Promise
from promise.dataloader import DataLoader

class UserLoader(DataLoader):
    def batch_load_fn(self, keys):
        # 批量查询用户
        users = UserModel.objects.filter(id__in=keys)
        user_dict = {user.id: user for user in users}
        return Promise.resolve([user_dict.get(key) for key in keys])

user_loader = UserLoader()
```

### 2. 查询复杂度限制

```python
from graphql import validate_simple

# 限制查询深度和复杂度
MAX_DEPTH = 10
MAX_COMPLEXITY = 1000
```

## 部署建议

### 生产环境配置

```python
# settings.py
GRAPHENE = {
    "SCHEMA": "myapp.schema.schema",
    "MIDDLEWARE": [
        "graphene_django.debug.DjangoDebugMiddleware",
    ],
}
```

### 监控和日志

```python
import logging

logger = logging.getLogger(__name__)

class GraphQLLoggingMiddleware:
    def resolve(self, next, root, info, **args):
        logger.info(f"GraphQL Query: {info.operation.name}")
        return next(root, info, **args)
```

## 最佳实践

1. **使用类型提示**：提高代码可读性和 IDE 支持
2. **实现 DataLoader**：避免 N+1 查询问题
3. **限制查询复杂度**：防止恶意查询
4. **错误处理**：统一的错误响应格式
5. **文档化**：为每个字段和类型添加描述

## 相关资源

- [Graphene 官方文档](https://docs.graphene-python.org/)
- [Strawberry 官方文档](https://strawberry.rocks/)
- [Ariadne 官方文档](https://ariadnegraphql.org/)
- [GraphQL Python 中文指南](https://graphql.cn/code/#python)