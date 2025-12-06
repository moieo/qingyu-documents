# 标准库

Python 标准库提供了丰富的内置模块，覆盖了各种常见任务，无需额外安装即可使用。

## 常用模块

### os - 操作系统接口

```python
import os

# 文件和目录操作
os.mkdir("new_dir")
print(os.listdir("."))
os.remove("file.txt")

# 环境变量
print(os.getenv("PATH"))
```

- **适用场景**：适用于需要与操作系统交互的场景，如文件管理、环境变量读取等。

### sys - 系统相关

```python
import sys

# 命令行参数
print(sys.argv)

# Python 路径
print(sys.path)

# 退出程序
sys.exit(1)
```

- **适用场景**：适用于需要获取系统信息或控制程序行为的场景。

### datetime - 日期时间

```python
from datetime import datetime, timedelta

now = datetime.now()
print(now.strftime("%Y-%m-%d %H:%M:%S"))

tomorrow = now + timedelta(days=1)
print(tomorrow.strftime("%Y-%m-%d %H:%M:%S"))
```

- **解释**：`datetime` 提供了日期和时间的处理功能，`timedelta` 用于时间间隔计算。
- **适用场景**：适用于需要处理日期时间、时间计算、格式化等场景。

## collections 模块

`collections` 提供了高性能的容器数据类型。

### 1. defaultdict

```python
from collections import defaultdict

d = defaultdict(int)
d["apple"] += 1
print(d["apple"])  # 1
print(d["banana"])  # 0 (默认值)
```

- **解释**：`defaultdict` 为不存在的键提供默认值。
- **适用场景**：适用于需要统计或分组的场景。

### 2. Counter

```python
from collections import Counter

words = ["apple", "banana", "apple", "cherry"]
word_counts = Counter(words)
print(word_counts)  # Counter({'apple': 2, 'banana': 1, 'cherry': 1})
```

- **解释**：`Counter` 用于快速统计元素出现次数。
- **适用场景**：适用于需要频率统计的场景。

### 3. namedtuple

```python
from collections import namedtuple

Point = namedtuple("Point", ["x", "y"])
p = Point(10, 20)
print(p.x, p.y)  # 10 20
```

- **解释**：`namedtuple` 为元组字段命名，提高可读性。
- **适用场景**：适用于需要轻量级数据结构的场景。

## itertools 模块

`itertools` 提供了高效的迭代工具。

### 1. 无限迭代器

```python
from itertools import count, cycle, repeat

# 无限计数
for i in count(10):
    if i > 15: break
    print(i)  # 10, 11, ..., 15
```

- **解释**：`count` 生成无限序列。
- **适用场景**：适用于需要无限迭代的场景。

### 2. 组合生成器

```python
from itertools import combinations, permutations

print(list(combinations("ABC", 2)))  # [('A', 'B'), ('A', 'C'), ('B', 'C')]
print(list(permutations("ABC", 2)))  # [('A', 'B'), ('A', 'C'), ('B', 'A'), ...]
```

- **解释**：`combinations` 和 `permutations` 生成组合和排列。
- **适用场景**：适用于需要组合或排列的场景。

## json 模块

`json` 用于处理 JSON 数据。

```python
import json

data = {"name": "Alice", "age": 25}
json_str = json.dumps(data)
print(json_str)  # {"name": "Alice", "age": 25}

parsed = json.loads(json_str)
print(parsed["name"])  # Alice
```

- **解释**：`json.dumps` 和 `json.loads` 用于序列化和反序列化 JSON。
- **适用场景**：适用于需要处理 JSON 数据的场景，如 API 交互、配置文件读写等。

### re - 正则表达式

```python
import re

pattern = r"\b\w{4}\b"
matches = re.findall(pattern, "This is a test string")
print(matches)  # ['This', 'test']
```

- **解释**：`re` 模块提供了正则表达式的匹配和搜索功能。
- **适用场景**：适用于需要模式匹配、文本搜索、数据验证等场景。

## 其他实用模块

- `collections` - 特殊容器类型
- `itertools` - 迭代器工具
- `random` - 随机数生成
- `argparse` - 命令行解析
- `logging` - 日志记录
- `csv` - CSV 文件处理
- `zipfile` - ZIP 压缩文件
- `subprocess` - 运行子进程

## 实践练习

### 练习1：文件搜索

```python
import os

def find_files(extension, directory="."):
    """查找指定扩展名的文件"""
    return [f for f in os.listdir(directory) 
            if f.endswith(extension)]

# print(find_files(".py"))
```

### 练习2：日志分析

```python
import re
from collections import Counter

def analyze_logs(filename):
    """分析日志中的IP访问频率"""
    ip_pattern = r"\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}"
    with open(filename) as f:
        ips = re.findall(ip_pattern, f.read())
    return Counter(ips)

# print(analyze_logs("access.log"))
```

## 小结

标准库是 Python 的强大优势，熟练掌握能极大提高开发效率。