# 语法基础

Python 的语法设计简洁明了，易于理解和学习。本章将介绍 Python 的基本语法规则和代码风格。

## 基本语法规则

### 1. 缩进

Python 使用缩进来表示代码块，而不是大括号 `{}`。这是 Python 最显著的特征之一。

```python
# 正确的缩进
if True:
    print("这是正确的缩进")
    if True:
        print("这是嵌套的缩进")

# 错误的缩进会导致 IndentationError
if True:
print("这会报错")  # IndentationError
```

**缩进规则**：
- 通常使用 4 个空格作为一个缩进级别
- 同一代码块的语句必须保持相同的缩进级别
- 不要混用空格和制表符

### 2. 注释

Python 支持单行注释和多行注释：

```python
# 这是单行注释

"""
这是多行注释
可以跨越多行
通常用于文档字符串
"""

'''
这也是多行注释
使用三个单引号
'''

def greet(name):
    """
    这是函数的文档字符串
    用于描述函数的功能
    """
```

## 变量命名规则

遵循 PEP 8 命名规范：

1. **变量名**：小写字母，单词间用下划线分隔（`snake_case`）。

   ```python
   user_name = "Alice"
   ```

2. **常量名**：全大写字母，单词间用下划线分隔（`UPPER_CASE`）。

   ```python
   MAX_USERS = 100
   ```

3. **类名**：首字母大写的驼峰命名法（`CamelCase`）。

   ```python
   class UserProfile:
       pass
   ```

- **解释**：统一的命名规范提高代码可读性。
- **适用场景**：适用于所有 Python 代码。

## 代码风格指南 (PEP 8)

1. **行长度**：每行不超过 79 字符。
2. **导入顺序**：标准库 → 第三方库 → 本地模块。
3. **空格使用**：
   - 运算符两侧加空格：`a = b + c`
   - 逗号后加空格：`[1, 2, 3]`

```python
# 良好的代码风格示例
import os
import sys

from django import forms
import requests

from .models import User
```

- **解释**：PEP 8 是 Python 的官方风格指南。
- **适用场景**：适用于团队协作和开源项目。

## 常见语法错误

1. **缩进错误**：
   ```python
   if True:
   print("缺少缩进")  # IndentationError
   ```

2. **拼写错误**：
   ```python
   pront("拼写错误")  # NameError
   ```

3. **括号不匹配**：
   ```python
   print("Hello'  # SyntaxError
   ```

- **解释**：初学者常犯的错误可以通过工具（如 `pylint`）避免。
- **适用场景**：适用于调试和学习阶段。
    return f"Hello, {name}!"

### 3. 行和语句

```python
# 一行一个语句（推荐）
x = 1
y = 2
z = 3

# 一行多个语句（不推荐）
x = 1; y = 2; z = 3

# 长语句可以用反斜杠换行
total = item_one + \
        item_two + \
        item_three

# 在括号内可以自然换行
total = (item_one +
         item_two +
         item_three)

# 列表、字典等可以跨行
fruits = [
    'apple',
    'banana',
    'orange'
]
```

### 4. 标识符命名规则

标识符是用来标识变量、函数、类等的名称。

**命名规则**：
- 只能包含字母、数字和下划线
- 不能以数字开头
- 区分大小写
- 不能使用 Python 关键字

```python
# 合法的标识符
name = "Alice"
age_1 = 25
_private = "private variable"
MyClass = "class name"

# 非法的标识符
# 2name = "error"      # 不能以数字开头
# my-name = "error"    # 不能包含连字符
# class = "error"      # 不能使用关键字
```

### 5. 关键字

Python 有一些保留的关键字，不能用作标识符：

```python
import keyword
print(keyword.kwlist)
```

常见关键字：
```
False, None, True, and, as, assert, break, class, continue, 
def, del, elif, else, except, finally, for, from, global, 
if, import, in, is, lambda, nonlocal, not, or, pass, 
raise, return, try, while, with, yield
```

## 数据类型概览

Python 有几种基本的数据类型：

### 1. 数字类型

```python
# 整数
age = 25
negative = -10

# 浮点数
price = 19.99
scientific = 1.5e-4  # 科学计数法

# 复数
complex_num = 3 + 4j
```

### 2. 字符串

```python
# 单引号
name = 'Alice'

# 双引号
message = "Hello, World!"

# 三引号（多行字符串）
text = """
这是一个
多行字符串
"""

# 原始字符串（不转义）
path = r"C:\Users\Alice\Documents"

# f-string（格式化字符串）
name = "Bob"
age = 30
info = f"My name is {name}, I'm {age} years old"
```

### 3. 布尔类型

```python
is_student = True
is_working = False

# 布尔运算
result = True and False  # False
result = True or False   # True
result = not True        # False
```

### 4. 空值

```python
value = None  # 表示空值或无值
```

## 变量和赋值

### 1. 变量赋值

```python
# 简单赋值
x = 10
name = "Alice"

# 多重赋值
a = b = c = 1

# 序列解包
x, y, z = 1, 2, 3
name, age = "Bob", 25

# 交换变量
a, b = b, a
```

### 2. 变量类型

Python 是动态类型语言，变量的类型在运行时确定：

```python
x = 10        # x 是整数
x = "hello"   # 现在 x 是字符串
x = [1, 2, 3] # 现在 x 是列表

# 查看变量类型
print(type(x))  # <class 'list'>
```

## 运算符

### 1. 算术运算符

```python
a = 10
b = 3

print(a + b)   # 加法: 13
print(a - b)   # 减法: 7
print(a * b)   # 乘法: 30
print(a / b)   # 除法: 3.3333...
print(a // b)  # 整除: 3
print(a % b)   # 取余: 1
print(a ** b)  # 幂运算: 1000
```

### 2. 比较运算符

```python
a = 10
b = 5

print(a == b)  # 等于: False
print(a != b)  # 不等于: True
print(a > b)   # 大于: True
print(a < b)   # 小于: False
print(a >= b)  # 大于等于: True
print(a <= b)  # 小于等于: False
```

### 3. 逻辑运算符

```python
x = True
y = False

print(x and y)  # 与: False
print(x or y)   # 或: True
print(not x)    # 非: False
```

### 4. 赋值运算符

```python
x = 10

x += 5   # 等同于 x = x + 5
x -= 3   # 等同于 x = x - 3
x *= 2   # 等同于 x = x * 2
x /= 4   # 等同于 x = x / 4
x //= 2  # 等同于 x = x // 2
x %= 3   # 等同于 x = x % 3
x **= 2  # 等同于 x = x ** 2
```

## 输入输出

### 1. 输出 - print()

```python
# 基本输出
print("Hello, World!")

# 输出多个值
print("Name:", "Alice", "Age:", 25)

# 指定分隔符
print("apple", "banana", "orange", sep=", ")

# 指定结束符
print("Hello", end=" ")
print("World")  # 输出: Hello World

# 格式化输出
name = "Bob"
age = 30
print(f"My name is {name}, I'm {age} years old")
```

### 2. 输入 - input()

```python
# 获取用户输入
name = input("请输入您的姓名: ")
print(f"您好, {name}!")

# 输入数字（需要类型转换）
age = int(input("请输入您的年龄: "))
height = float(input("请输入您的身高(米): "))

print(f"您今年 {age} 岁，身高 {height} 米")
```

## 代码风格指南

Python 有官方的代码风格指南 PEP 8，以下是一些重要的规范：

### 1. 命名约定

```python
# 变量和函数名：小写字母，用下划线分隔
user_name = "alice"
def calculate_total():
    pass

# 常量：全大写字母，用下划线分隔
MAX_SIZE = 100
PI = 3.14159

# 类名：首字母大写的驼峰命名
class UserAccount:
    pass

# 私有变量：以下划线开头
_private_var = "private"
__very_private = "very private"
```

### 2. 空格使用

```python
# 运算符两边加空格
x = y + z

# 函数参数逗号后加空格
def func(a, b, c):
    pass

# 不要在括号内加空格
func(a, b, c)  # 正确
# func( a, b, c )  # 错误

# 列表索引不加空格
list[0]  # 正确
# list[ 0 ]  # 错误
```

### 3. 行长度

```python
# 每行不超过 79 个字符
# 长语句可以用括号换行
result = (some_function(arg1, arg2) +
          another_function(arg3, arg4))
```

### 4. 导入语句

```python
# 标准库导入
import os
import sys

# 第三方库导入
import requests
import numpy as np

# 本地模块导入
from mymodule import myfunction

# 避免使用 import *
# from module import *  # 不推荐
```

## 常见错误

### 1. 缩进错误

```python
# 错误示例
if True:
print("缩进错误")  # IndentationError

# 正确示例
if True:
    print("正确的缩进")
```

### 2. 语法错误

```python
# 错误示例
if True  # SyntaxError: 缺少冒号
    print("语法错误")

# 正确示例
if True:
    print("正确的语法")
```

### 3. 名称错误

```python
# 错误示例
print(undefined_variable)  # NameError

# 正确示例
defined_variable = "Hello"
print(defined_variable)
```

## 实践练习

### 练习 1：基本语法

```python
# 创建变量并输出
name = "你的姓名"
age = 20
height = 1.75

print(f"姓名: {name}")
print(f"年龄: {age}")
print(f"身高: {height}米")
```

### 练习 2：用户交互

```python
# 获取用户信息并计算
name = input("请输入您的姓名: ")
birth_year = int(input("请输入您的出生年份: "))

current_year = 2024
age = current_year - birth_year

print(f"{name}，您今年大约 {age} 岁")
```

### 练习 3：简单计算器

```python
# 简单的计算器
num1 = float(input("请输入第一个数字: "))
operator = input("请输入运算符 (+, -, *, /): ")
num2 = float(input("请输入第二个数字: "))

if operator == '+':
    result = num1 + num2
elif operator == '-':
    result = num1 - num2
elif operator == '*':
    result = num1 * num2
elif operator == '/':
    if num2 != 0:
        result = num1 / num2
    else:
        result = "错误：除数不能为零"
else:
    result = "错误：无效的运算符"

print(f"结果: {result}")
```

## 小结

本章介绍了 Python 的基本语法规则，包括：

- **缩进**：Python 使用缩进表示代码块
- **注释**：使用 `#` 进行单行注释，使用三引号进行多行注释
- **标识符**：变量、函数、类的命名规则
- **数据类型**：数字、字符串、布尔值等基本类型
- **运算符**：算术、比较、逻辑、赋值运算符
- **输入输出**：`print()` 和 `input()` 函数
- **代码风格**：遵循 PEP 8 规范

掌握这些基础语法是学习 Python 的第一步，为后续学习更复杂的概念打下坚实的基础。