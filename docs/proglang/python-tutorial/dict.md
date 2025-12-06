# 字典

字典(dict)是 Python 中的键值对集合，它是可变的、无序的，并且键必须是唯一的。字典是 Python 中非常高效的数据结构。

## 创建字典

```python
# 空字典
empty_dict = {}
empty_dict = dict()

# 包含键值对的字典
person = {"name": "Alice", "age": 25, "city": "New York"}

# 使用 dict() 构造函数
person = dict(name="Bob", age=30, city="Boston")

# 从键列表创建
keys = ["name", "age", "city"]
values = ["Charlie", 35, "Chicago"]
person = dict(zip(keys, values))

# 字典推导式
squares = {x: x**2 for x in range(6)}
print(squares)  # {0: 0, 1: 1, 2: 4, 3: 9, 4: 16, 5: 25}
```

## 访问字典元素

```python
person = {"name": "Alice", "age": 25, "city": "New York"}

# 通过键访问
print(person["name"])  # Alice

# 使用 get() 方法
print(person.get("age"))     # 25
print(person.get("country"))  # None
print(person.get("country", "USA"))  # USA (默认值)

# 获取所有键
print(person.keys())   # dict_keys(['name', 'age', 'city'])

# 获取所有值
print(person.values()) # dict_values(['Alice', 25, 'New York'])

# 获取所有键值对
print(person.items())  # dict_items([('name', 'Alice'), ('age', 25), ('city', 'New York')])
```

## 修改字典

```python
person = {"name": "Alice", "age": 25}

# 添加/修改元素
person["city"] = "New York"  # 添加
person["age"] = 26           # 修改

# 使用 update() 方法
person.update({"age": 27, "country": "USA"})
print(person)  # {'name': 'Alice', 'age': 27, 'city': 'New York', 'country': 'USA'}

# 合并字典 (Python 3.9+)
dict1 = {"a": 1, "b": 2}
dict2 = {"b": 3, "c": 4}
merged = dict1 | dict2  # {'a': 1, 'b': 3, 'c': 4}
```

## 删除元素

```python
person = {"name": "Alice", "age": 25, "city": "New York"}

# 使用 del
if "age" in person:
    del person["age"]
print(person)  # {'name': 'Alice', 'city': 'New York'}

# 使用 pop()
city = person.pop("city")  # 删除并返回值
print(city)  # New York
print(person)  # {'name': 'Alice'}

# 使用 popitem() (删除最后添加的键值对)
person = {"name": "Alice", "age": 25}
key, value = person.popitem()  # 可能是 ('age', 25)
print(f"Removed: {key}={value}")

# 清空字典
person.clear()
print(person)  # {}
```

## 字典操作

```python
# 长度
print(len({"a": 1, "b": 2}))  # 2

# 成员测试 (检查键)
person = {"name": "Alice", "age": 25}
print("name" in person)    # True
print("city" not in person)  # True

# 复制
original = {"a": 1, "b": 2}
shallow_copy = original.copy()

# 嵌套字典
employees = {
    "Alice": {"age": 25, "position": "Developer"},
    "Bob": {"age": 30, "position": "Manager"}
}
print(employees["Alice"]["position")  # Developer
```

## 字典视图

```python
person = {"name": "Alice", "age": 25}

# 视图是动态的
keys = person.keys()
person["city"] = "New York"
print(keys)  # dict_keys(['name', 'age', 'city'])

# 可以转换为列表
keys_list = list(person.keys())
```

## 字典与函数

```python
# 作为函数参数
def print_person_info(info):
    print(f"Name: {info['name']}")
    print(f"Age: {info['age']}")
    if "city" in info:
        print(f"City: {info['city']}")

# print_person_info({"name": "Alice", "age": 25, "city": "NY"})

# 返回字典
def create_person(name, age, city=None):
    person = {"name": name, "age": age}
    if city:
        person["city"] = city
    return person

# alice = create_person("Alice", 25, "New York")
```

## 默认字典 (defaultdict)

```python
from collections import defaultdict

# 默认值为 0 的字典
counter = defaultdict(int)
words = ["apple", "banana", "apple", "cherry"]
for word in words:
    counter[word] += 1
print(counter)  # defaultdict(<class 'int'>, {'apple': 2, 'banana': 1, 'cherry': 1})

# 默认值为列表的字典
grouped = defaultdict(list)
data = [("a", 1), ("b", 2), ("a", 3)]
for key, value in data:
    grouped[key].append(value)
print(grouped)  # defaultdict(<class 'list'>, {'a': [1, 3], 'b': [2]})
```

## 有序字典 (OrderedDict)

```python
from collections import OrderedDict

# 记住插入顺序
d = OrderedDict()
d["first"] = 1
d["second"] = 2
d["third"] = 3
print(list(d.keys()))  # ['first', 'second', 'third']

# 在 Python 3.7+ 中，普通字典也保持插入顺序
```

## 实践练习

### 练习1：单词计数

**题目**：实现一个 `word_count` 函数，统计给定文本中每个单词出现的频率。

```python
def word_count(text):
    """统计文本中单词出现的频率"""
    words = text.split()
    count = {}
    for word in words:
        count[word] = count.get(word, 0) + 1
    return count

# text = "apple banana apple cherry banana apple"
# print(word_count(text))  # {'apple': 3, 'banana': 2, 'cherry': 1}
```

### 练习2：字典翻转

```python
def invert_dict(d):
    """翻转字典的键和值"""
    return {v: k for k, v in d.items()}

# original = {"a": 1, "b": 2, "c": 3}
# print(invert_dict(original))  # {1: 'a', 2: 'b', 3: 'c'}
```

### 练习3：配置文件解析

```python
def parse_config(lines):
    """将配置行解析为字典"""
    config = {}
    for line in lines:
        if "=" in line:
            key, value = line.split("=", 1)
            config[key.strip()] = value.strip()
    return config

# config_lines = ["name = Alice", "age = 25", "city = New York"]
# print(parse_config(config_lines))  # {'name': 'Alice', 'age': '25', 'city': 'New York'}
```

## 小结

本章介绍了 Python 字典的核心知识：

- **创建和访问**：键值对操作
- **修改和删除**：添加、更新、删除元素
- **字典操作**：成员测试、长度、复制等
- **字典视图**：keys(), values(), items()
- **特殊字典**：defaultdict, OrderedDict

字典是 Python 中非常高效和灵活的数据结构，适用于需要快速查找的场景。