# 装饰器

装饰器用于修改或扩展函数的行为，是 Python 的高级特性之一。

## 基本装饰器

```python
def my_decorator(func):
    def wrapper():
        print("Before function call")
        func()
        print("After function call")
    return wrapper

@my_decorator
def say_hello():
    print("Hello!")

say_hello()
# 输出:
# Before function call
# Hello!
# After function call
```

- **解释**：装饰器 `my_decorator` 接受一个函数 `func`，并返回一个新的函数 `wrapper`，用于扩展 `func` 的行为。
- **适用场景**：适用于需要在函数执行前后添加额外逻辑的场景（如日志记录、性能测试）。

## 带参数的装饰器

```python
def repeat(n):
    def decorator(func):
        def wrapper(*args, **kwargs):
            for _ in range(n):
                func(*args, **kwargs)
        return wrapper
    return decorator

@repeat(3)
def greet(name):
    print(f"Hello {name}!")

greet("Alice")
# 输出:
# Hello Alice!
# Hello Alice!
# Hello Alice!
```

- **解释**：`repeat(n)` 是一个工厂函数，返回一个装饰器 `decorator`，用于重复调用被装饰的函数 `n` 次。
- **适用场景**：适用于需要动态配置装饰器行为的场景。

## 类装饰器

```python
class MyDecorator:
    def __init__(self, func):
        self.func = func
    
    def __call__(self, *args, **kwargs):
        print("Before function call")
        result = self.func(*args, **kwargs)
        print("After function call")
        return result

@MyDecorator
def say_hello():
    print("Hello!")

say_hello()
# 输出:
# Before function call
# Hello!
# After function call
```

- **解释**：类装饰器通过实现 `__call__` 方法，将类的实例作为装饰器使用。
- **适用场景**：适用于需要保存状态或复杂逻辑的装饰器场景。

## 装饰器原理

装饰器本质上是高阶函数，接受一个函数作为参数，并返回一个新的函数。Python 通过 `@` 语法糖简化了装饰器的使用。

## 高级用法

### 1. 多个装饰器

```python
@decorator1
@decorator2
def my_function():
    pass
```

- **解释**：多个装饰器按从上到下的顺序依次应用。

### 2. 装饰器链

```python
def decorator1(func):
    def wrapper():
        print("Decorator 1")
        func()
    return wrapper

def decorator2(func):
    def wrapper():
        print("Decorator 2")
        func()
    return wrapper

@decorator1
@decorator2
def greet():
    print("Hello!")

greet()
# 输出:
# Decorator 1
# Decorator 2
# Hello!
```

- **解释**：装饰器链可以组合多个装饰器的功能。

### 3. 计时装饰器

```python
class Timer:
    def __init__(self, func):
        self.func = func
    
    def __call__(self, *args, **kwargs):
        import time
        start = time.time()
        result = self.func(*args, **kwargs)
        end = time.time()
        print(f"{self.func.__name__} executed in {end-start:.4f}s")
        return result

@Timer
def long_running():
    import time
    time.sleep(2)

# long_running()  # long_running executed in 2.0002s
```

## 内置装饰器

```python
class MyClass:
    @classmethod
    def class_method(cls):
        print(f"Called from {cls.__name__}")
    
    @staticmethod
    def static_method():
        print("Called statically")
    
    @property
    def name(self):
        return self._name
    
    @name.setter
    def name(self, value):
        self._name = value
```

## 实践练习

### 练习1：缓存装饰器

```python
def cache(func):
    memo = {}
    def wrapper(*args):
        if args not in memo:
            memo[args] = func(*args)
        return memo[args]
    return wrapper

@cache
def fibonacci(n):
    if n < 2:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

# print(fibonacci(50))  # 快速计算
```

### 练习2：权限检查

```python
def requires_admin(func):
    def wrapper(user, *args, **kwargs):
        if user["is_admin"]:
            return func(user, *args, **kwargs)
        else:
            raise PermissionError("Admin required")
    return wrapper

@requires_admin
def delete_user(user, username):
    print(f"Deleting user {username}")

# admin = {"name": "Alice", "is_admin": True}
# delete_user(admin, "Bob")
```

## 小结

装饰器是 Python 强大的功能，可用于修改函数行为而不改变其源代码。