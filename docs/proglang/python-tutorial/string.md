# 字符串

字符串(string)是 Python 中最常用的数据类型之一，用于表示文本数据。字符串是不可变的序列，支持多种操作和方法。

## 创建字符串

```python
# 单引号
str1 = 'Hello, World!'

# 双引号
str2 = "Python Programming"

# 三引号 (多行字符串)
str3 = """This is a
multi-line
string."""

# 转义字符
str4 = "He said, \"Hello!\""
print(str4)  # He said, "Hello!"

# 原始字符串 (忽略转义)
path = r"C:\Users\Name\Documents"
print(path)  # C:\Users\Name\Documents
```

## 字符串操作

```python
# 连接
str1 = "Hello"
str2 = "World"
combined = str1 + " " + str2  # "Hello World"

# 重复
repeated = "Hi! " * 3  # "Hi! Hi! Hi! "

# 长度
print(len("Python"))  # 6

# 成员测试
print("th" in "Python")  # True
print("java" not in "Python")  # True
```

## 字符串索引和切片

```python
s = "Python"

# 索引
print(s[0])   # 'P'
print(s[-1])  # 'n' (最后一个字符)

# 切片
print(s[1:4])   # 'yth' (索引1到3)
print(s[:3])    # 'Pyt' (从开始到索引2)
print(s[3:])    # 'hon' (索引3到末尾)
print(s[::2])   # 'Pto' (步长为2)
print(s[::-1])  # 'nohtyP' (反转字符串)

## 字符串格式化

### 1. f-strings (Python 3.6+)

```python
name = "Alice"
age = 25
print(f"{name} is {age} years old.")  # Alice is 25 years old.
```

- **解释**：`f-strings` 是简洁高效的格式化方式。
- **适用场景**：适用于需要内联变量和表达式的场景。

### 2. format 方法

```python
print("{0} is {1} years old.".format(name, age))  # Alice is 25 years old.
print("{name} is {age} years old.".format(name="Bob", age=30))
```

- **解释**：`format` 方法支持位置参数和关键字参数。
- **适用场景**：适用于需要灵活格式化的场景。

### 3. % 格式化

```python
print("%s is %d years old." % (name, age))  # Alice is 25 years old.
```

- **解释**：`%` 是传统的格式化方式。
- **适用场景**：适用于兼容旧代码的场景。

## 字符串方法

### 1. split 和 join

```python
s = "apple,banana,cherry"
print(s.split(","))  # ['apple', 'banana', 'cherry']
print("-".join(["apple", "banana"]))  # apple-banana
```

- **解释**：`split` 用于分割字符串，`join` 用于合并列表为字符串。
- **适用场景**：适用于需要处理 CSV 或分隔数据的场景。

### 2. strip

```python
s = "   hello   "
print(s.strip())  # "hello"
```

- **解释**：`strip` 用于去除首尾空白字符。
- **适用场景**：适用于需要清理用户输入的场景。

## 字符串编码

Python 字符串默认使用 Unicode 编码。

```python
s = "你好"
print(s.encode("utf-8"))  # b'\xe4\xbd\xa0\xe5\xa5\xbd'
print(b"\xe4\xbd\xa0\xe5\xa5\xbd".decode("utf-8"))  # 你好
```

- **解释**：`encode` 和 `decode` 用于编码转换。
- **适用场景**：适用于需要处理多语言或二进制数据的场景。

## 字符串方法

### 大小写转换

```python
s = "Python Programming"

print(s.lower())      # 'python programming'
print(s.upper())      # 'PYTHON PROGRAMMING'
print(s.title())      # 'Python Programming'
print(s.capitalize()) # 'Python programming'
print(s.swapcase())   # 'pYTHON pROGRAMMING'
```

### 查找和替换

```python
s = "Hello, World!"

# 查找
print(s.find("World"))  # 7 (返回索引)
print(s.find("Java"))   # -1 (未找到)
print(s.index("o"))     # 4 (第一个'o'的索引)

# 替换
print(s.replace("World", "Python"))  # "Hello, Python!"
```

### 拆分和连接

```python
# 拆分
text = "apple,banana,cherry"
print(text.split(","))  # ['apple', 'banana', 'cherry']

# 多行拆分
lines = "Line 1\nLine 2\nLine 3"
print(lines.splitlines())  # ['Line 1', 'Line 2', 'Line 3']

# 连接
words = ["Python", "is", "awesome"]
print(" ".join(words))  # "Python is awesome"
```

### 去除空白

```python
s = "   Python   "

print(s.strip())    # "Python"
print(s.lstrip())   # "Python   "
print(s.rstrip())   # "   Python"
```

### 格式化

```python
# 旧式格式化
print("Name: %s, Age: %d" % ("Alice", 25))

# str.format()
print("Name: {}, Age: {}".format("Bob", 30))
print("Name: {1}, Age: {0}".format(30, "Bob"))

# f-strings (Python 3.6+)
name = "Charlie"
age = 35
print(f"Name: {name}, Age: {age}")
```

## 字符串验证

```python
# 检查组成
print("123".isdigit())  # True
print("abc".isalpha())  # True
print("abc123".isalnum())  # True

# 检查大小写
print("Python".islower())  # False
print("PYTHON".isupper())  # True

# 检查空白
print("   ".isspace())  # True
```

## 字符串编码

```python
# 编码为字节
s = "你好"
b = s.encode("utf-8")  # b'\xe4\xbd\xa0\xe5\xa5\xbd'

# 解码为字符串
print(b.decode("utf-8"))  # "你好"
```

## 实践练习

### 练习1：回文检查

```python
def is_palindrome(s):
    """检查字符串是否为回文"""
    s = s.lower().replace(" ", "")
    return s == s[::-1]

# print(is_palindrome("A man a plan a canal Panama"))  # True
```

### 练习2：统计字符频率

```python
def char_frequency(text):
    """统计字符出现频率"""
    freq = {}
    for char in text:
        freq[char] = freq.get(char, 0) + 1
    return freq

# print(char_frequency("Hello World"))
```

### 练习3：密码强度检查

```python
def password_strength(password):
    """检查密码强度"""
    if len(password) < 8:
        return "Weak: 至少8个字符"
    
    has_upper = any(c.isupper() for c in password)
    has_lower = any(c.islower() for c in password)
    has_digit = any(c.isdigit() for c in password)
    has_special = any(not c.isalnum() for c in password)
    
    score = sum([has_upper, has_lower, has_digit, has_special])
    
    if score == 4:
        return "Strong"
    elif score >= 2:
        return "Medium"
    else:
        return "Weak"

# print(password_strength("Password123!"))  # Strong
```

## 小结

本章介绍了 Python 字符串的核心知识：

- **创建和操作**：连接、重复、成员测试
- **索引和切片**：访问子字符串
- **字符串方法**：大小写转换、查找替换、拆分连接等
- **格式化**：旧式、str.format()、f-strings
- **验证和编码**：检查字符串组成、编码转换

字符串是 Python 中最常用的数据类型之一，掌握其操作对编程至关重要。