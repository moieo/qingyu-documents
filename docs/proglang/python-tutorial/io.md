# 输入输出

输入输出(I/O)是程序与外部世界交互的重要方式。Python 提供了丰富的 I/O 功能，包括控制台输入输出、文件操作等。

## 控制台输入输出

### print() 函数

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

### input() 函数

```python
# 获取用户输入
name = input("请输入您的姓名: ")
print(f"您好, {name}!")

# 输入数字（需要类型转换）
age = int(input("请输入您的年龄: "))
height = float(input("请输入您的身高(米): "))

print(f"您今年 {age} 岁，身高 {height} 米")
```

## 文件操作

### 打开文件

```python
# 打开文件的基本语法
# file = open(filename, mode)

# 常见模式
# 'r' - 读取 (默认)
# 'w' - 写入 (会覆盖)
# 'a' - 追加
# 'x' - 创建新文件
# 'b' - 二进制模式
# 't' - 文本模式 (默认)
# '+' - 读写模式

- **解释**：文件模式可以组合使用，例如 `'rb'` 表示以二进制模式读取。
- **适用场景**：根据需求选择合适的文件模式。

### 读取文件

```python
# 读取整个文件
with open("example.txt", "r") as file:
    content = file.read()
    print(content)

# 逐行读取
with open("example.txt", "r") as file:
    for line in file:
        print(line.strip())  # strip() 去除换行符

# 读取所有行到列表
with open("example.txt", "r") as file:
    lines = file.readlines()
    print(lines)
```

### 写入文件

```python
# 写入文件
with open("output.txt", "w") as file:
    file.write("这是第一行\n")
    file.write("这是第二行\n")

# 追加内容
with open("output.txt", "a") as file:
    file.write("这是追加的内容\n")
```

### 文件操作示例

```python
# 文件复制
def copy_file(source, destination):
    with open(source, "r") as src, open(destination, "w") as dst:
        dst.write(src.read())
    print(f"文件 {source} 已复制到 {destination}")

# copy_file("source.txt", "copy.txt")  # 取消注释运行

# 统计文件行数
def count_lines(filename):
    with open(filename, "r") as file:
        return len(file.readlines())

# print(f"文件有 {count_lines('example.txt')} 行")  # 取消注释运行
```

## 标准流

Python 提供了三个标准流：

```python
import sys

# 标准输入
sys.stdin  # 通常对应键盘输入

# 标准输出
sys.stdout  # 通常对应控制台输出

# 标准错误
sys.stderr  # 通常用于错误信息

# 重定向示例
with open("output.log", "w") as f:
    sys.stdout = f
    print("这条消息会写入文件")
    sys.stdout = sys.__stdout__  # 恢复标准输出
```

## 序列化与反序列化

### JSON

```python
import json

# 将 Python 对象转换为 JSON 字符串
data = {"name": "Alice", "age": 25, "scores": [90, 85, 95]}
json_str = json.dumps(data, indent=2)
print(json_str)

# 将 JSON 字符串写入文件
with open("data.json", "w") as f:
    json.dump(data, f, indent=2)

# 从 JSON 字符串加载
loaded_data = json.loads(json_str)
print(loaded_data["name"])  # Alice

# 从 JSON 文件加载
with open("data.json", "r") as f:
    loaded_from_file = json.load(f)
    print(loaded_from_file["age"])  # 25
```

### pickle

```python
import pickle

# 序列化对象
data = {"name": "Bob", "hobbies": ["reading", "swimming"]}
with open("data.pkl", "wb") as f:
    pickle.dump(data, f)

# 反序列化
with open("data.pkl", "rb") as f:
    loaded = pickle.load(f)
    print(loaded["hobbies"])  # ['reading', 'swimming']
```

## 实践练习

### 练习1：日志记录器

```python
def log_message(message, level="INFO", filename="app.log"):
    """将消息记录到文件"""
    import datetime
    timestamp = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    log_entry = f"[{timestamp}] [{level}] {message}\n"
    
    with open(filename, "a") as f:
        f.write(log_entry)

# log_message("程序启动")  # 取消注释运行
# log_message("发生错误", "ERROR")  # 取消注释运行
```

### 练习2：CSV 文件处理

```python
import csv

def read_csv(filename):
    """读取 CSV 文件并打印内容"""
    with open(filename, "r") as f:
        reader = csv.reader(f)
        for row in reader:
            print(", ".join(row))

# read_csv("data.csv")  # 取消注释运行

def write_csv(filename, data):
    """将数据写入 CSV 文件"""
    with open(filename, "w", newline="") as f:
        writer = csv.writer(f)
        writer.writerows(data)

# data = [
#     ["Name", "Age", "City"],
#     ["Alice", 25, "New York"],
#     ["Bob", 30, "Los Angeles"]
# ]
# write_csv("output.csv", data)  # 取消注释运行
```

### 练习3：配置文件解析

```python
import configparser

def read_config(filename):
    """读取配置文件"""
    config = configparser.ConfigParser()
    config.read(filename)
    
    for section in config.sections():
        print(f"[{section}]")
        for key, value in config.items(section):
            print(f"{key} = {value}")

# 创建示例配置文件
with open("config.ini", "w") as f:
    f.write("""
[database]
host = localhost
port = 3306
username = admin
password = secret

[settings]
debug = True
log_level = INFO
""")

# read_config("config.ini")  # 取消注释运行
```

## 小结

本章介绍了 Python 的输入输出功能：

- **控制台 I/O**：print() 和 input() 函数
- **文件操作**：打开、读取、写入文件
- **标准流**：sys.stdin, sys.stdout, sys.stderr
- **序列化**：JSON 和 pickle 模块

掌握这些 I/O 操作是开发实用程序的基础，它们让程序能够与用户交互、处理文件和数据。