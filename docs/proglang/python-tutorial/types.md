# 数据类型

Python 是一种动态类型语言，变量的类型在运行时确定。Python 提供了丰富的内置数据类型，每种类型都有其特定的用途和操作方法。

## 数据类型概述

Python 的内置数据类型可以分为以下几类：

- **数字类型**：`int`、`float`、`complex`
- **序列类型**：`str`、`list`、`tuple`、`range`
- **映射类型**：`dict`
- **集合类型**：`set`、`frozenset`
- **布尔类型**：`bool`
- **空值类型**：`NoneType`

## 数字类型

### 1. 整数类型 (int)

整数类型用于表示没有小数部分的数字。

```python
# 基本整数
age = 25
negative = -10
zero = 0

# 不同进制的整数
binary = 0b1010      # 二进制，等于 10
octal = 0o12         # 八进制，等于 10
hexadecimal = 0xa    # 十六进制，等于 10

print(binary, octal, hexadecimal)  # 10 10 10

# 大整数（Python 3 中整数大小没有限制）
big_number = 123456789012345678901234567890
print(big_number)
```

**整数操作**：

```python
a = 10
b = 3

print(a + b)    # 加法: 13
print(a - b)    # 减法: 7
print(a * b)    # 乘法: 30
print(a / b)    # 除法: 3.3333... (返回浮点数)
print(a // b)   # 整除: 3
print(a % b)    # 取余: 1
print(a ** b)   # 幂运算: 1000

# 绝对值
print(abs(-5))  # 5

# 转换为其他进制
num = 10
print(bin(num))  # 二进制: 0b1010
print(oct(num))  # 八进制: 0o12
print(hex(num))  # 十六进制: 0xa
```

## 类型转换

Python 提供了内置函数用于显式类型转换。

```python
# 字符串转整数
print(int("42"))  # 42

# 浮点数转整数 (截断小数部分)
print(int(3.9))    # 3

# 整数转字符串
print(str(42))     # "42"

# 列表转元组
print(tuple([1, 2, 3]))  # (1, 2, 3)
```

- **解释**：类型转换需确保数据格式正确，否则会引发 `ValueError`。
- **适用场景**：适用于需要处理不同数据类型的场景。

## 类型检查

`isinstance` 和 `type` 用于检查变量类型。

```python
x = 42
print(isinstance(x, int))  # True
print(type(x) == int)      # True

# 检查多个类型
print(isinstance(x, (int, float)))  # True
```

- **解释**：`isinstance` 支持继承关系检查，`type` 返回精确类型。
- **适用场景**：适用于需要动态检查类型的场景。

## 动态类型特性

Python 是动态类型语言，变量类型可以随时改变。

```python
x = 42      # x 是整数
x = "hello" # x 现在是字符串
```

- **优势**：灵活，代码简洁。
- **限制**：可能导致运行时错误，需谨慎使用。
- **适用场景**：适用于需要快速开发和原型设计的场景。

### 2. 浮点数类型 (float)

浮点数用于表示带有小数部分的数字。

```python
# 基本浮点数
price = 19.99
temperature = -5.5
zero_float = 0.0

# 科学计数法
scientific = 1.5e-4    # 0.00015
large_num = 2.5e6      # 2500000.0

print(scientific, large_num)
```

**浮点数操作**：

```python
import math

x = 3.7
y = 2.3

print(x + y)        # 加法: 6.0
print(x - y)        # 减法: 1.4000000000000004
print(x * y)        # 乘法: 8.51
print(x / y)        # 除法: 1.6086956521739131

# 数学函数
print(math.ceil(x))   # 向上取整: 4
print(math.floor(x))  # 向下取整: 3
print(round(x))       # 四舍五入: 4
print(round(x, 1))    # 保留1位小数: 3.7

# 浮点数精度问题
print(0.1 + 0.2)      # 0.30000000000000004
print(round(0.1 + 0.2, 1))  # 0.3

# 使用 Decimal 处理精确小数
from decimal import Decimal
d1 = Decimal('0.1')
d2 = Decimal('0.2')
print(d1 + d2)        # 0.3
```

### 3. 复数类型 (complex)

复数由实部和虚部组成，虚部用 `j` 或 `J` 表示。

```python
# 创建复数
c1 = 3 + 4j
c2 = complex(2, 5)    # 2+5j
c3 = complex('1+2j')  # 从字符串创建

print(c1, c2, c3)

# 复数属性
print(c1.real)        # 实部: 3.0
print(c1.imag)        # 虚部: 4.0
print(abs(c1))        # 模长: 5.0
print(c1.conjugate()) # 共轭复数: (3-4j)

# 复数运算
print(c1 + c2)        # (5+9j)
print(c1 * c2)        # (-14+23j)
```

## 字符串类型 (str)

字符串是字符的序列，用于表示文本数据。

### 1. 字符串创建

```python
# 不同的引号方式
single = 'Hello'
double = "World"
triple_single = '''多行
字符串'''
triple_double = """另一种
多行字符串"""

# 原始字符串（不转义）
raw_string = r"C:\Users\Alice\Documents"
print(raw_string)  # C:\Users\Alice\Documents

# 格式化字符串
name = "Alice"
age = 25
f_string = f"My name is {name}, I'm {age} years old"
print(f_string)
```

### 2. 转义字符

```python
# 常用转义字符
print("Hello\nWorld")      # 换行
print("Hello\tWorld")      # 制表符
print("Hello\\World")      # 反斜杠
print("Hello\"World\"")    # 双引号
print("Hello\'World\'")    # 单引号

# Unicode 字符
print("\u4e2d\u6587")      # 中文
print("\U0001F600")        # 😀 表情符号
```

### 3. 字符串操作

```python
text = "Hello, World!"

# 基本操作
print(len(text))           # 长度: 13
print(text[0])             # 第一个字符: H
print(text[-1])            # 最后一个字符: !
print(text[0:5])           # 切片: Hello

# 字符串方法
print(text.upper())        # 转大写: HELLO, WORLD!
print(text.lower())        # 转小写: hello, world!
print(text.title())        # 标题格式: Hello, World!
print(text.capitalize())   # 首字母大写: Hello, world!

# 查找和替换
print(text.find("World"))  # 查找位置: 7
print(text.count("l"))     # 计数: 3
print(text.replace("World", "Python"))  # Hello, Python!

# 分割和连接
words = text.split(", ")   # ['Hello', 'World!']
joined = "-".join(words)   # Hello-World!
print(words, joined)

# 去除空白
spaced = "  Hello World  "
print(spaced.strip())      # "Hello World"
print(spaced.lstrip())     # "Hello World  "
print(spaced.rstrip())     # "  Hello World"
```

### 4. 字符串格式化

```python
name = "Alice"
age = 25
score = 95.5

# f-string (推荐，Python 3.6+)
print(f"Name: {name}, Age: {age}, Score: {score:.1f}")

# format() 方法
print("Name: {}, Age: {}, Score: {:.1f}".format(name, age, score))
print("Name: {0}, Age: {1}, Score: {2:.1f}".format(name, age, score))
print("Name: {n}, Age: {a}, Score: {s:.1f}".format(n=name, a=age, s=score))

# % 格式化（旧式，不推荐）
print("Name: %s, Age: %d, Score: %.1f" % (name, age, score))
```

## 布尔类型 (bool)

布尔类型只有两个值：`True` 和 `False`。

```python
# 布尔值
is_student = True
is_working = False

# 布尔运算
print(True and False)   # False
print(True or False)    # True
print(not True)         # False

# 比较运算返回布尔值
print(5 > 3)           # True
print(10 == 10)        # True
print("hello" != "world")  # True

# 真值测试
print(bool(1))         # True
print(bool(0))         # False
print(bool("hello"))   # True
print(bool(""))        # False
print(bool([1, 2, 3])) # True
print(bool([]))        # False
print(bool(None))      # False
```

## 空值类型 (NoneType)

`None` 表示空值或无值，类似于其他语言中的 `null`。

```python
# None 值
value = None
print(value)           # None
print(type(value))     # <class 'NoneType'>

# 检查是否为 None
if value is None:
    print("value 是 None")

if value is not None:
    print("value 不是 None")

# 函数默认返回 None
def no_return():
    pass

result = no_return()
print(result)          # None
```

## 类型检查和转换

### 1. 类型检查

```python
# type() 函数
x = 42
print(type(x))         # <class 'int'>
print(type(x) == int)  # True

# isinstance() 函数（推荐）
print(isinstance(x, int))      # True
print(isinstance(x, (int, float)))  # True（检查多种类型）

# 检查多种数据类型
data = [42, 3.14, "hello", True, None]
for item in data:
    print(f"{item}: {type(item).__name__}")
```

### 2. 类型转换

```python
# 数字类型转换
x = 42
y = 3.14
z = "123"

print(float(x))        # 42.0
print(int(y))          # 3
print(int(z))          # 123
print(str(x))          # "42"

# 字符串转换
num_str = "456"
float_str = "3.14"
print(int(num_str))    # 456
print(float(float_str)) # 3.14

# 布尔转换
print(bool(1))         # True
print(bool(0))         # False
print(int(True))       # 1
print(int(False))      # 0

# 处理转换错误
try:
    result = int("abc")
except ValueError as e:
    print(f"转换错误: {e}")
```

## 数据类型的内存和性能

### 1. 对象身份和相等性

```python
# is vs ==
a = [1, 2, 3]
b = [1, 2, 3]
c = a

print(a == b)          # True (值相等)
print(a is b)          # False (不是同一个对象)
print(a is c)          # True (是同一个对象)

# 小整数缓存
x = 100
y = 100
print(x is y)          # True (小整数被缓存)

x = 1000
y = 1000
print(x is y)          # False (大整数不缓存)
```

### 2. 可变性和不可变性

```python
# 不可变类型：int, float, str, tuple, frozenset
x = 10
y = x
x = 20
print(y)               # 10 (y 不受影响)

# 可变类型：list, dict, set
list1 = [1, 2, 3]
list2 = list1
list1.append(4)
print(list2)           # [1, 2, 3, 4] (list2 也被修改)
```

## 实践练习

### 练习 1：数据类型识别

```python
# 创建不同类型的变量并识别类型
data = [
    42,
    3.14,
    "Hello",
    True,
    None,
    3+4j,
    [1, 2, 3],
    {"name": "Alice"}
]

for item in data:
    print(f"值: {item}, 类型: {type(item).__name__}")
```

### 练习 2：类型转换练习

```python
# 用户输入处理
def safe_convert():
    user_input = input("请输入一个数字: ")
    
    try:
        # 尝试转换为整数
        int_value = int(user_input)
        print(f"整数: {int_value}")
    except ValueError:
        try:
            # 尝试转换为浮点数
            float_value = float(user_input)
            print(f"浮点数: {float_value}")
        except ValueError:
            print("输入的不是有效数字")

# safe_convert()  # 取消注释运行
```

### 练习 3：字符串处理

```python
# 文本处理练习
text = "  Python Programming Language  "

print(f"原始文本: '{text}'")
print(f"长度: {len(text)}")
print(f"去除空白: '{text.strip()}'")
print(f"大写: '{text.upper()}'")
print(f"小写: '{text.lower()}'")
print(f"单词数: {len(text.split())}")
print(f"包含'Python': {text.find('Python') != -1}")
print(f"替换后: '{text.replace('Python', 'Java')}'")
```

## 小结

本章详细介绍了 Python 的基本数据类型：

- **数字类型**：整数、浮点数、复数
- **字符串类型**：文本数据的表示和操作
- **布尔类型**：逻辑值 True 和 False
- **空值类型**：None 表示空值

重要概念：
- Python 是动态类型语言，变量类型在运行时确定
- 使用 `type()` 和 `isinstance()` 进行类型检查
- 不同类型之间可以进行转换，但要注意异常处理
- 理解可变性和不可变性对于编程很重要

掌握这些基本数据类型是学习 Python 的基础，为后续学习复杂数据结构和算法打下坚实基础。