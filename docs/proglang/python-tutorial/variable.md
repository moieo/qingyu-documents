# 变量与常量

变量是程序中用来存储数据的容器，是编程的基础概念之一。Python 中的变量具有动态类型的特性，使用起来非常灵活。

## 变量的概念

### 什么是变量

变量就像是一个标签，贴在某个数据对象上。当我们创建变量时，实际上是在内存中创建了一个对象，然后用变量名来引用这个对象。

```python
# 创建变量
name = "Alice"      # name 指向字符串对象 "Alice"
age = 25           # age 指向整数对象 25
height = 1.68      # height 指向浮点数对象 1.68

print(name, age, height)
```

### 变量的特点

1. **动态类型**：变量的类型在运行时确定
2. **可重新赋值**：变量可以指向不同类型的对象
3. **引用语义**：变量存储的是对象的引用，而不是对象本身

```python
# 动态类型示例
x = 10          # x 是整数
print(type(x))  # <class 'int'>

x = "hello"     # 现在 x 是字符串
print(type(x))  # <class 'str'>

x = [1, 2, 3]   # 现在 x 是列表
print(type(x))  # <class 'list'>
```

## 变量命名规则

### 基本规则

1. **只能包含字母、数字和下划线**
2. **不能以数字开头**
3. **区分大小写**
4. **不能使用 Python 关键字**

```python
# 合法的变量名
name = "Alice"
age_1 = 25

# 非法的变量名
# 2name = "error"      # 不能以数字开头
# my-name = "error"    # 不能包含连字符
# class = "error"      # 不能使用关键字
# my name = "error"    # 不能包含空格
```

## 变量的作用域

### 1. 局部变量

局部变量是在函数内部定义的变量，只能在函数内部访问。

```python
def foo():
    local_var = "I'm local"  # 局部变量
    print(local_var)

foo()
# print(local_var)  # 报错：NameError: name 'local_var' is not defined
```

### 2. 全局变量

全局变量是在函数外部定义的变量，可以在整个程序中被访问。

```python
global_var = "I'm global"  # 全局变量

def bar():
    print(global_var)  # 可以访问全局变量

bar()
print(global_var)  # 可以访问全局变量
```

### 3. global 关键字

`global` 关键字用于在函数内部声明变量为全局变量，从而可以在函数内部修改全局变量的值。

```python
x = 10  # 全局变量

def modify_global():
    global x  # 声明 x 为全局变量
    x = 20    # 修改全局变量的值

modify_global()
print(x)  # 20
```

**注意事项**：
- 滥用 `global` 可能导致代码难以维护和理解。
- 建议优先使用函数参数和返回值传递数据，避免过多依赖全局变量。

## 命名约定

### PEP 8 命名约定

Python 社区遵循 PEP 8 命名约定：

```python
# 变量和函数：小写字母，用下划线分隔
user_name = "alice"
total_count = 100

def calculate_average():
    pass

# 常量：全大写字母，用下划线分隔
MAX_SIZE = 1000
DEFAULT_TIMEOUT = 30

# 类名：首字母大写的驼峰命名
class UserAccount:
    pass

# 私有变量：以下划线开头
_internal_var = "internal use"
__private_var = "very private"

# 特殊变量：双下划线包围
__version__ = "1.0.0"
```

### 有意义的变量名

```python
# 不好的命名
a = 25
b = 1.68
c = a * b * b

# 好的命名
age = 25
height = 1.68
bmi = age * height * height

# 更好的命名
person_age = 25
person_height_meters = 1.68
body_mass_index = person_age * person_height_meters * person_height_meters
```

## 变量赋值

### 基本赋值

```python
# 简单赋值
x = 10
name = "Alice"
is_student = True

# 赋值是创建引用
a = [1, 2, 3]
b = a           # b 和 a 指向同一个列表
b.append(4)
print(a)        # [1, 2, 3, 4]
```

### 多重赋值

```python
# 同时给多个变量赋相同值
a = b = c = 0
print(a, b, c)  # 0 0 0

# 注意：对于可变对象要小心
list1 = list2 = []
list1.append(1)
print(list2)    # [1] - list2 也被修改了

# 正确的方式
list1 = []
list2 = []
list1.append(1)
print(list2)    # [] - list2 不受影响
```

### 序列解包

```python
# 元组解包
point = (3, 4)
x, y = point
print(x, y)     # 3 4

# 列表解包
numbers = [1, 2, 3]
a, b, c = numbers
print(a, b, c)  # 1 2 3

# 字符串解包
word = "hi"
first, second = word
print(first, second)  # h i

# 交换变量
a = 10
b = 20
a, b = b, a
print(a, b)     # 20 10
```

### 扩展解包

```python
# 使用 * 收集多余的元素
numbers = [1, 2, 3, 4, 5]
first, *middle, last = numbers
print(first)    # 1
print(middle)   # [2, 3, 4]
print(last)     # 5

# 忽略不需要的值
data = ("Alice", 25, "Engineer", "New York")
name, age, *_ = data
print(name, age)  # Alice 25

# 嵌套解包
nested = [(1, 2), (3, 4)]
(a, b), (c, d) = nested
print(a, b, c, d)  # 1 2 3 4
```

## 变量作用域进阶

### nonlocal 关键字

```python
def outer_function():
    x = 10
    
    def inner_function():
        nonlocal x
        x += 1
        print(f"Inner: {x}")
    
    inner_function()
    print(f"Outer: {x}")

outer_function()
# Inner: 11
# Outer: 11
```

### LEGB 规则

Python 按照 LEGB 顺序查找变量：

1. **L**ocal - 局部作用域
2. **E**nclosing - 嵌套作用域
3. **G**lobal - 全局作用域
4. **B**uilt-in - 内置作用域

```python
# 内置作用域
print(len([1, 2, 3]))  # len 是内置函数

# 全局作用域
global_var = "global"

def outer():
    # 嵌套作用域
    enclosing_var = "enclosing"
    
    def inner():
        # 局部作用域
        local_var = "local"
        print(local_var)        # local
        print(enclosing_var)    # enclosing
        print(global_var)       # global
        print(len([1, 2]))      # 内置函数
    
    inner()

outer()
```

## 常量

Python 没有真正的常量，但有约定俗成的常量表示方法。

### 常量约定

```python
# 使用全大写字母表示常量
PI = 3.14159
MAX_SIZE = 1000
DEFAULT_NAME = "Unknown"
API_URL = "https://api.example.com"

# 在模块中定义常量
# config.py
DATABASE_URL = "postgresql://localhost/mydb"
DEBUG = True
SECRET_KEY = "your-secret-key"
```

### 使用 Final 类型提示

```python
from typing import Final

# Python 3.8+ 支持 Final
PI: Final = 3.14159
MAX_USERS: Final[int] = 1000

# 这只是类型提示，不会阻止修改
PI = 2.71828  # 仍然可以修改，但 IDE 会警告
```

### 创建真正的常量

```python
class Constants:
    """常量类"""
    PI = 3.14159
    MAX_SIZE = 1000
    
    def __setattr__(self, name, value):
        raise AttributeError("Cannot modify constant")

# 使用
constants = Constants()
print(constants.PI)
# constants.PI = 3.14  # 会抛出异常
```

## 变量的内存管理

### 对象引用

```python
# 变量是对象的引用
a = [1, 2, 3]
b = a           # b 和 a 引用同一个对象

print(id(a))    # 对象的内存地址
print(id(b))    # 相同的内存地址
print(a is b)   # True

# 创建新对象
c = [1, 2, 3]
print(id(c))    # 不同的内存地址
print(a is c)   # False
print(a == c)   # True (值相等)
```

### 小整数缓存

```python
# Python 缓存小整数 (-5 到 256)
a = 100
b = 100
print(a is b)   # True

# 大整数不缓存
x = 1000
y = 1000
print(x is y)   # False (可能为 False)
```

### 字符串驻留

```python
# 短字符串可能被驻留
s1 = "hello"
s2 = "hello"
print(s1 is s2)  # True (可能为 True)

# 长字符串或包含特殊字符的字符串通常不驻留
s3 = "hello world with spaces"
s4 = "hello world with spaces"
print(s3 is s4)  # False (可能为 False)
```

## 变量的生命周期

### 局部变量的生命周期

```python
def create_local():
    local_var = "I exist only in this function"
    print(f"Created: {local_var}")
    return local_var

result = create_local()
print(f"Returned: {result}")
# local_var 在函数结束后被销毁
```

### 全局变量的生命周期

```python
# 全局变量在程序运行期间一直存在
global_var = "I exist throughout the program"

def use_global():
    print(global_var)

use_global()
print(global_var)  # 仍然存在
```

## 实践练习

### 练习 1：变量交换

```python
# 不使用临时变量交换两个变量的值
a = 10
b = 20

print(f"交换前: a = {a}, b = {b}")

# 方法1：使用元组解包
a, b = b, a

print(f"交换后: a = {a}, b = {b}")

# 方法2：算术运算（仅适用于数字）
a = a + b
b = a - b
a = a - b

print(f"再次交换: a = {a}, b = {b}")
```

### 练习 2：作用域理解

```python
x = "global"

def test_scope():
    print(f"1. {x}")  # 访问全局变量
    
    x = "local"       # 创建局部变量
    print(f"2. {x}")  # 访问局部变量

def test_global():
    global x
    print(f"3. {x}")  # 访问全局变量
    
    x = "modified global"  # 修改全局变量
    print(f"4. {x}")

print(f"开始: {x}")
test_scope()
print(f"scope后: {x}")
test_global()
print(f"global后: {x}")
```

### 练习 3：变量引用

```python
# 理解变量引用
original_list = [1, 2, 3]
reference_list = original_list
copy_list = original_list.copy()

print("初始状态:")
print(f"original: {original_list}")
print(f"reference: {reference_list}")
print(f"copy: {copy_list}")

# 修改原始列表
original_list.append(4)

print("\n修改 original_list 后:")
print(f"original: {original_list}")
print(f"reference: {reference_list}")  # 也被修改
print(f"copy: {copy_list}")           # 不受影响

# 检查引用关系
print(f"\noriginal is reference: {original_list is reference_list}")
print(f"original is copy: {original_list is copy_list}")
```

## 最佳实践

### 1. 命名建议

```python
# 使用描述性的名称
user_count = 100        # 而不是 uc 或 count
max_retry_attempts = 3  # 而不是 max_retry

# 避免使用内置函数名
# list = [1, 2, 3]      # 不好，覆盖了内置的 list
my_list = [1, 2, 3]     # 好

# 使用一致的命名风格
user_name = "Alice"     # 蛇形命名
user_age = 25
user_email = "alice@example.com"
```

### 2. 变量初始化

```python
# 明确初始化变量
total = 0
items = []
user_data = {}

# 避免未初始化的变量
# if some_condition:
#     result = calculate()
# print(result)  # 可能未定义

# 正确的方式
result = None
if some_condition:
    result = calculate()
if result is not None:
    print(result)
```

### 3. 避免全局变量

```python
# 不好：使用全局变量
counter = 0

def increment():
    global counter
    counter += 1

# 好：使用类或函数参数
class Counter:
    def __init__(self):
        self.value = 0
    
    def increment(self):
        self.value += 1

# 或者使用函数参数
def increment(counter):
    return counter + 1
```

## 小结

本章介绍了 Python 中变量和常量的重要概念：

- **变量概念**：变量是对象的引用，具有动态类型特性
- **命名规则**：遵循 PEP 8 命名约定，使用有意义的名称
- **赋值操作**：支持多重赋值、序列解包等灵活的赋值方式
- **作用域**：理解 LEGB 规则和变量的可见性
- **常量约定**：使用全大写字母表示常量
- **内存管理**：理解对象引用和变量的生命周期

掌握变量的使用是编程的基础，正确理解变量的作用域和引用机制对于编写高质量的 Python 代码至关重要。