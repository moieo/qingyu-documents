# 集合

集合(set)是 Python 中的无序、不重复元素集，支持数学上的集合运算。集合是可变的，但元素必须是不可变类型。

## 创建集合

```python
# 空集合
empty_set = set()  # 注意: {} 创建的是字典

# 包含元素的集合
fruits = {"apple", "banana", "cherry"}
numbers = {1, 2, 3, 4, 5}

# 从其他序列创建
letters = set("hello")  # {'h', 'e', 'l', 'o'}
numbers = set(range(5))  # {0, 1, 2, 3, 4}

# 集合推导式
squares = {x**2 for x in range(10)}
print(squares)  # {0, 1, 4, 9, 16, 25, 36, 49, 64, 81}
```

## 集合操作

```python
# 添加元素
fruits = {"apple", "banana"}
fruits.add("orange")
fruits.add("apple")  # 重复元素不会添加
print(fruits)  # {'apple', 'banana', 'orange'}

# 更新集合
fruits.update(["cherry", "mango"])
fruits.update({"grape", "pear"})
print(fruits)  # 添加多个元素

# 删除元素
fruits.remove("banana")  # 如果元素不存在会引发 KeyError
fruits.discard("kiwi")   # 即使元素不存在也不会报错

popped = fruits.pop()    # 随机删除并返回一个元素
print(f"Removed: {popped}")

# 清空集合
fruits.clear()
print(fruits)  # set()
```

## 集合运算

### 1. 并集 (Union)

```python
A = {1, 2, 3}
B = {3, 4, 5}
print(A | B)       # {1, 2, 3, 4, 5}
print(A.union(B))  # {1, 2, 3, 4, 5}
```

- **解释**：并集包含所有出现在两个集合中的元素。
- **适用场景**：适用于需要合并两个集合的场景。

### 2. 交集 (Intersection)

```python
print(A & B)              # {3}
print(A.intersection(B))  # {3}
```

- **解释**：交集包含同时出现在两个集合中的元素。
- **适用场景**：适用于需要查找共同元素的场景。

### 3. 差集 (Difference)

```python
print(A - B)              # {1, 2}
print(A.difference(B))    # {1, 2}
```

- **解释**：差集包含只出现在第一个集合中的元素。
- **适用场景**：适用于需要排除某些元素的场景。

### 4. 对称差集 (Symmetric Difference)

```python
print(A ^ B)                      # {1, 2, 4, 5}
print(A.symmetric_difference(B))  # {1, 2, 4, 5}
```

- **解释**：对称差集包含只出现在一个集合中的元素。
- **适用场景**：适用于需要查找非共同元素的场景。

## 集合的性能特点

集合操作的时间复杂度：

| 操作               | 时间复杂度 |
|--------------------|------------|
| 添加 (`add`)       | O(1)       |
| 删除 (`remove`)    | O(1)       |
| 查找 (`in`)        | O(1)       |
| 并集/交集/差集     | O(len(s))  |

- **解释**：集合基于哈希表实现，大多数操作是常数时间。
- **适用场景**：适用于需要高效查找和去重的场景。

## 不可变集合 (frozenset)

`frozenset` 是不可变的集合，可以作为字典的键或另一个集合的元素。

```python
fs = frozenset([1, 2, 3])
d = {fs: "value"}  # 合法

# fs.add(4)  # 报错: frozenset 不可变
```

- **解释**：`frozenset` 适用于需要不可变集合的场景。
- **适用场景**：适用于需要哈希集合的场景。

```python
A = {1, 2, 3, 4, 5}
B = {4, 5, 6, 7, 8}

# 并集
print(A | B)   # {1, 2, 3, 4, 5, 6, 7, 8}
print(A.union(B))  # 同上

# 交集
print(A & B)   # {4, 5}
print(A.intersection(B))  # 同上

# 差集
print(A - B)   # {1, 2, 3}
print(A.difference(B))  # 同上

# 对称差集 (仅在其中一个集合中的元素)
print(A ^ B)   # {1, 2, 3, 6, 7, 8}
print(A.symmetric_difference(B))  # 同上

# 子集和超集
print({1, 2} <= A)  # True (子集)
print(A >= {1, 2})  # True (超集)
print({1, 6} <= A)  # False

# 不相交测试
print(A.isdisjoint({6, 7, 8}))  # False (有交集)
print(A.isdisjoint({9, 10}))    # True
```

## 集合方法

```python
# 长度
print(len({1, 2, 3}))  # 3

# 成员测试
print(2 in {1, 2, 3})  # True
print(5 not in {1, 2, 3})  # True

# 复制
numbers = {1, 2, 3}
numbers_copy = numbers.copy()
```

## 不可变集合 (frozenset)

```python
# 创建不可变集合
immutable = frozenset([1, 2, 3])

# 不可变集合可以作为字典的键
set_dict = {frozenset({1, 2}): "value"}
print(set_dict[frozenset({2, 1})])  # 'value'

# 不可变集合不支持修改操作
# immutable.add(4)  # 会引发 AttributeError
```

## 集合与函数

```python
# 作为函数参数
def unique_count(elements):
    return len(set(elements))

# print(unique_count([1, 2, 2, 3, 3, 3]))  # 3

# 返回集合
def get_vowels(text):
    vowels = {"a", "e", "i", "o", "u"}
    return vowels.intersection(text.lower())

# print(get_vowels("Hello World"))  # {'e', 'o'}
```

## 实践练习

### 练习1：查找共同好友

```python
def common_friends(friends1, friends2):
    """返回两个朋友列表的共同好友"""
    set1 = set(friends1)
    set2 = set(friends2)
    return set1 & set2

# alice_friends = ["Bob", "Charlie", "Diana"]
# bob_friends = ["Alice", "Charlie", "Eve"]
# print(common_friends(alice_friends, bob_friends))  # {'Charlie'}
```

### 练习2：统计唯一单词

```python
def unique_words(filename):
    """统计文件中不同单词的数量"""
    with open(filename, "r") as f:
        words = set()
        for line in f:
            words.update(line.strip().split())
        return len(words)

# print(unique_words("sample.txt"))
```

### 练习3：集合覆盖问题

```python
def set_cover(universe, subsets):
    """近似解决集合覆盖问题"""
    elements = set(universe)
    selected = []
    
    while elements:
        # 选择覆盖最多剩余元素的子集
        subset = max(subsets, key=lambda s: len(elements & s))
        selected.append(subset)
        elements -= subset
        
    return selected

# universe = {1, 2, 3, 4, 5}
# subsets = [{1, 2, 3}, {2, 4}, {3, 4, 5}, {1, 5}]
# print(set_cover(universe, subsets))  # 可能输出 [{1, 2, 3}, {3, 4, 5}]
```

## 小结

本章介绍了 Python 集合的核心知识：

- **创建集合**：字面量、构造函数、推导式
- **集合操作**：添加、删除、清空
- **集合运算**：并集、交集、差集、对称差集
- **不可变集合**：frozenset
- **集合应用**：去重、成员测试、数学运算

集合是处理唯一性和集合运算的高效工具，适用于需要快速成员测试和数学运算的场景。