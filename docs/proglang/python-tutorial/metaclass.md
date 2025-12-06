# 元类

元类是类的类，用于控制类的创建行为。

## type 创建类

```python
# 传统方式
class MyClass:
    pass

# 使用 type
MyClass = type('MyClass', (), {})
```

## 自定义元类

```python
class Meta(type):
    def __new__(cls, name, bases, namespace):
        print(f"创建类: {name}")
        return super().__new__(cls, name, bases, namespace)

class MyClass(metaclass=Meta):
    pass  # 输出: 创建类: MyClass
```

## 元类应用

### 自动注册子类

```python
class PluginMeta(type):
    plugins = []
    
    def __init__(cls, name, bases, namespace):
        super().__init__(name, bases, namespace)
        if name != "BasePlugin":
            PluginMeta.plugins.append(cls)

class BasePlugin(metaclass=PluginMeta):
    pass

class Plugin1(BasePlugin):
    pass

class Plugin2(BasePlugin):
    pass

print(PluginMeta.plugins)  # [<class '__main__.Plugin1'>, <class '__main__.Plugin2'>]

## 元类的工作原理

元类通过 `__new__` 和 `__init__` 方法控制类的创建过程：

1. **`__new__`**：负责创建类对象。
2. **`__init__`**：负责初始化类对象。

```python
class Meta(type):
    def __new__(cls, name, bases, namespace):
        print(f"创建类: {name}")
        return super().__new__(cls, name, bases, namespace)
    
    def __init__(cls, name, bases, namespace):
        print(f"初始化类: {name}")
        super().__init__(name, bases, namespace)

class MyClass(metaclass=Meta):
    pass
# 输出:
# 创建类: MyClass
# 初始化类: MyClass
```

- **解释**：元类可以拦截类的创建和初始化过程。
- **适用场景**：适用于需要动态修改类定义的场景。

## 元类的实际应用场景

1. **ORM 框架**：如 Django 的模型类。
2. **API 验证**：自动验证类的属性。
3. **插件系统**：自动注册子类。

```python
# ORM 示例
class ModelMeta(type):
    def __init__(cls, name, bases, namespace):
        super().__init__(name, bases, namespace)
        if hasattr(cls, "Meta"):
            cls._meta = cls.Meta

class Model(metaclass=ModelMeta):
    class Meta:
        db_table = "users"

class User(Model):
    pass

print(User._meta.db_table)  # users
```

- **解释**：元类可以用于实现类似 ORM 的高级功能。
- **适用场景**：适用于框架开发。

## 元类的限制

1. **复杂性高**：元类的代码通常难以理解和维护。
2. **性能开销**：元类的动态特性可能带来性能损失。
3. **过度设计**：大多数场景下不需要使用元类。

- **解释**：元类适合高级场景，普通开发中应谨慎使用。

### 强制方法实现

```python
class AbstractMeta(type):
    def __new__(cls, name, bases, namespace):
        if "required_method" not in namespace:
            raise TypeError(f"{name} 必须实现 required_method")
        return super().__new__(cls, name, bases, namespace)

class Base(metaclass=AbstractMeta):
    pass

class GoodClass(Base):
    def required_method(self):
        pass

# class BadClass(Base):  # TypeError
#     pass
```

## 实践练习

### 练习1：单例模式

```python
class SingletonMeta(type):
    _instances = {}
    
    def __call__(cls, *args, **kwargs):
        if cls not in cls._instances:
            cls._instances[cls] = super().__call__(*args, **kwargs)
        return cls._instances[cls]

class Singleton(metaclass=SingletonMeta):
    pass

a = Singleton()
b = Singleton()
print(a is b)  # True
```

### 练习2：ORM 模型

```python
class ModelMeta(type):
    def __new__(cls, name, bases, namespace):
        fields = {}
        for k, v in namespace.items():
            if isinstance(v, Field):
                fields[k] = v
        namespace["_fields"] = fields
        return super().__new__(cls, name, bases, namespace)

class Field:
    pass

class Model(metaclass=ModelMeta):
    pass

class User(Model):
    name = Field()
    age = Field()

print(User._fields)  # {'name': <__main__.Field object>, 'age': <__main__.Field object>}
```

## 小结

元类是 Python 的高级特性，常用于框架开发。