# 列表

列表(list)是 Python 中最常用的数据结构之一，它是一个有序、可变的集合，可以包含不同类型的元素。

## 创建列表

```python
# 空列表
empty_list = []
empty_list = list()

# 包含元素的列表
numbers = [1, 2, 3, 4, 5]
fruits = ["apple", "banana", "cherry"]
mixed = [1, "hello", 3.14, True]

# 使用 range() 创建
numbers = list(range(10))  # [0, 1, 2, ..., 9]

# 列表推导式
squares = [x**2 for x in range(10)]
```

## 访问列表元素

```python
fruits = ["apple", "banana", "cherry", "orange", "kiwi"]

# 通过索引访问
print(fruits[0])    # apple
print(fruits[2])    # cherry
print(fruits[-1])   # kiwi (最后一个元素)

# 切片操作
print(fruits[1:3])  # ['banana', 'cherry']
print(fruits[:3])   # ['apple', 'banana', 'cherry']
print(fruits[2:])    # ['cherry', 'orange', 'kiwi']
print(fruits[::2])   # ['apple', 'cherry', 'kiwi'] (步长为2)
print(fruits[::-1])  # 反转列表
```

## 修改列表

```python
fruits = ["apple", "banana", "cherry"]

# 修改元素
fruits[1] = "blueberry"
print(fruits)  # ['apple', 'blueberry', 'cherry']
```

## 添加元素

```python
fruits = ["apple", "banana", "cherry"]

# 添加元素
fruits.append("orange")  # 末尾添加
fruits.insert(1, "mango")  # 指定位置插入
print(fruits)  # ['apple', 'mango', 'banana', 'cherry', 'orange']

# 合并列表
more_fruits = ["grape", "pear"]
fruits.extend(more_fruits)
# 等同于 fruits += more_fruits
print(fruits)  # ['apple', 'mango', 'banana', 'cherry', 'orange', 'grape', 'pear']
```

## 删除元素

```python
fruits = ["apple", "banana", "cherry", "orange", "kiwi"]

# 根据值删除
fruits.remove("banana")  # 删除第一个匹配项
print(fruits)  # ['apple', 'cherry', 'orange', 'kiwi']

# 根据索引删除
del fruits[1]  # 删除 'cherry'
popped = fruits.pop()  # 删除并返回最后一个元素
print(popped)  # kiwi
print(fruits)  # ['apple', 'orange']

# 清空列表
fruits.clear()
print(fruits)  # []
```

## 列表操作

```python
# 长度
numbers = [1, 2, 3]
print(len(numbers))  # 3

# 成员测试
print(2 in numbers)  # True
print(5 not in numbers)  # True

# 计数
numbers = [1, 2, 2, 3, 2, 4]
print(numbers.count(2))  # 3

# 查找索引
print(numbers.index(3))  # 3 (第一次出现的索引)

# 排序
numbers.sort()  # 升序
numbers.sort(reverse=True)  # 降序

# 反转
numbers.reverse()

# 复制
numbers_copy = numbers.copy()  # 浅拷贝
numbers_copy = numbers[:]      # 另一种浅拷贝方式
```

## 列表推导式

```python
# 基本形式
squares = [x**2 for x in range(10)]
print(squares)  # [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

# 带条件的推导式
even_squares = [x**2 for x in range(10) if x % 2 == 0]
print(even_squares)  # [0, 4, 16, 36, 64]

# 嵌套推导式
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
flattened = [num for row in matrix for num in row]
print(flattened)  # [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

## 列表与函数

```python
# 列表作为函数参数
def process_numbers(numbers):
    return [x * 2 for x in numbers if x > 5]

print(process_numbers([2, 4, 6, 8, 10]))  # [12, 16, 20]

# 返回多个值的函数
def min_max(numbers):
    return min(numbers), max(numbers)

minimum, maximum = min_max([3, 1, 4, 1, 5, 9, 2])
print(f"最小值: {minimum}, 最大值: {maximum}")  # 最小值: 1, 最大值: 9
```

## 深拷贝与浅拷贝

### 浅拷贝

浅拷贝只复制列表的引用，不复制嵌套对象。

```python
import copy

original = [[1, 2], [3, 4]]
shallow_copy = copy.copy(original)

original[0][0] = 99
print(shallow_copy)  # [[99, 2], [3, 4]]
```

- **解释**：浅拷贝后，修改嵌套对象会影响原列表。
- **适用场景**：适用于不需要独立嵌套对象的场景。

### 深拷贝

深拷贝会递归复制所有嵌套对象。

```python
deep_copy = copy.deepcopy(original)

original[0][0] = 100
print(deep_copy)  # [[99, 2], [3, 4]]
```

- **解释**：深拷贝后，嵌套对象与原列表完全独立。
- **适用场景**：适用于需要完全独立副本的场景。

## 列表的性能优化

### 时间复杂度

| 操作               | 时间复杂度 |
|--------------------|------------|
| 索引访问 (`list[i]`) | O(1)       |
| 追加 (`append`)     | O(1)       |
| 插入 (`insert`)     | O(n)       |
| 删除 (`remove`)     | O(n)       |
| 切片               | O(k)       |

- **解释**：了解时间复杂度有助于优化代码性能。
- **适用场景**：适用于需要高效操作的场景。

### 高效使用列表

- **预分配空间**：使用 `[None] * size` 预分配列表空间。
- **避免频繁插入/删除**：考虑使用 `collections.deque`。

## 列表与其他数据结构的对比

| 特性               | 列表 (`list`) | 元组 (`tuple`) | 集合 (`set`) |
|--------------------|---------------|----------------|--------------|
| 可变性            | 可变          | 不可变         | 可变         |
| 有序性            | 有序          | 有序           | 无序         |
| 重复元素          | 允许          | 允许           | 不允许       |
| 适用场景          | 动态数据      | 固定数据       | 去重/查找    |

## 实践练习

### 练习1：列表去重

```python
def remove_duplicates(lst):
    """返回去重后的列表，保持顺序"""
    seen = set()
    result = []
    for item in lst:
        if item not in seen:
            seen.add(item)
            result.append(item)
    return result

# print(remove_duplicates([1, 2, 2, 3, 4, 4, 5]))  # [1, 2, 3, 4, 5]
```

### 练习2：矩阵转置

```python
def transpose(matrix):
    """转置矩阵"""
    return [[row[i] for row in matrix] for i in range(len(matrix[0]))]

# matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
# print(transpose(matrix))  # [[1, 4, 7], [2, 5, 8], [3, 6, 9]]
```

### 练习3：列表分组

```python
def group_by(lst, key_func):
    """根据 key_func 对列表元素分组"""
    groups = {}
    for item in lst:
        key = key_func(item)
        if key not in groups:
            groups[key] = []
        groups[key].append(item)
    return groups

# words = ["apple", "banana", "cherry", "date", "elderberry"]
# print(group_by(words, len))  # {5: ['apple', 'cherry'], 6: ['banana'], 4: ['date'], 10: ['elderberry']}
```

## 小结

本章介绍了 Python 列表的核心知识：

- **创建和访问**：索引、切片操作
- **修改列表**：添加、删除、合并等操作
- **列表操作**：排序、反转、查找等
- **列表推导式**：简洁创建列表的方式
- **列表与函数**：作为参数和返回值

列表是 Python 中最灵活的数据结构之一，掌握它的使用对编程至关重要。