# 元组

元组(tuple)是 Python 中的不可变序列，与列表类似但不可修改。元组通常用于存储不可变的数据集合。

## 创建元组

```python
# 空元组
empty_tuple = ()
empty_tuple = tuple()

# 单元素元组 (注意逗号)
single_item = (42,)  # 必须加逗号
not_a_tuple = (42)    # 这不是元组，是整数

# 多元素元组
numbers = (1, 2, 3, 4, 5)
fruits = ("apple", "banana", "cherry")
mixed = (1, "hello", 3.14, True)

# 从其他序列创建
numbers = tuple(range(5))  # (0, 1, 2, 3, 4)
```

## 访问元组元素

```python
fruits = ("apple", "banana", "cherry", "orange", "kiwi")

# 通过索引访问
print(fruits[0])    # apple
print(fruits[2])    # cherry
print(fruits[-1])   # kiwi (最后一个元素)

# 切片操作
print(fruits[1:3])  # ('banana', 'cherry')
print(fruits[:3])   # ('apple', 'banana', 'cherry')
print(fruits[2:])    # ('cherry', 'orange', 'kiwi')
print(fruits[::2])   # ('apple', 'cherry', 'kiwi') (步长为2)
print(fruits[::-1])  # 反转元组
```

## 元组是不可变的

```python
fruits = ("apple", "banana", "cherry")

# 尝试修改会引发 TypeError
# fruits[1] = "blueberry"  # 错误

# 但可以重新赋值
fruits = ("apple", "blueberry", "cherry")  # 这是创建新元组

## 元组的解包

元组解包允许将元组元素分配给多个变量。

```python
point = (10, 20)
x, y = point
print(x, y)  # 10 20

# 解包时忽略某些元素
_, y = point
print(y)  # 20

# 扩展解包 (Python 3+)
numbers = (1, 2, 3, 4, 5)
first, *middle, last = numbers
print(first)   # 1
print(middle)  # [2, 3, 4]
print(last)    # 5
```

- **解释**：解包适用于函数返回多个值和交换变量。
- **适用场景**：适用于需要处理多个返回值的场景。

## 元组的性能

元组比列表更轻量，性能更高：

| 操作       | 元组 | 列表 |
|------------|------|------|
| 创建速度   | 更快 | 更慢 |
| 内存占用   | 更小 | 更大 |
| 迭代速度   | 更快 | 更慢 |

- **解释**：元组的不可变性带来了性能优势。
- **适用场景**：适用于需要高效处理不可变数据的场景。

## 命名元组

`collections.namedtuple` 为元组字段命名，提高可读性。

```python
from collections import namedtuple

Point = namedtuple("Point", ["x", "y"])
p = Point(10, 20)
print(p.x, p.y)  # 10 20
```

- **解释**：命名元组兼具元组的性能和类的可读性。
- **适用场景**：适用于需要轻量级数据结构的场景。

## 元组操作

```python
# 长度
numbers = (1, 2, 3)
print(len(numbers))  # 3

# 成员测试
print(2 in numbers)  # True
print(5 not in numbers)  # True

# 计数
numbers = (1, 2, 2, 3, 2, 4)
print(numbers.count(2))  # 3

# 查找索引
print(numbers.index(3))  # 3 (第一次出现的索引)

# 连接元组
t1 = (1, 2, 3)
t2 = (4, 5, 6)
combined = t1 + t2
print(combined)  # (1, 2, 3, 4, 5, 6)

# 重复元组
repeated = t1 * 3
print(repeated)  # (1, 2, 3, 1, 2, 3, 1, 2, 3)
```

## 元组解包

```python
# 基本解包
point = (3, 4)
x, y = point
print(f"x={x}, y={y}")  # x=3, y=4

# 交换变量
a, b = 10, 20
a, b = b, a
print(f"a={a}, b={b}")  # a=20, b=10

# 扩展解包
numbers = (1, 2, 3, 4, 5)
first, *middle, last = numbers
print(first)    # 1
print(middle)   # [2, 3, 4]
print(last)     # 5

# 忽略某些值
person = ("Alice", 25, "Engineer", "New York")
name, age, *_ = person
print(f"{name}, {age}岁")  # Alice, 25岁
```

## 元组与列表的比较

```python
# 创建速度
%timeit [1, 2, 3]  # 列表
%timeit (1, 2, 3)   # 元组 (通常更快)

# 内存占用
import sys
print(sys.getsizeof([1, 2, 3]))  # 列表
print(sys.getsizeof((1, 2, 3)))  # 元组 (通常更小)

# 使用场景
# 列表：需要修改的序列
# 元组：不可变的序列，作为字典键，函数返回值等
```

## 元组与函数

```python
# 作为函数参数
def process_coordinates(point):
    x, y, z = point
    return x**2 + y**2 + z**2

print(process_coordinates((1, 2, 3)))  # 14

# 返回多个值
def min_max(numbers):
    return min(numbers), max(numbers)

minimum, maximum = min_max([3, 1, 4, 1, 5, 9, 2])
print(f"最小值: {minimum}, 最大值: {maximum}")  # 最小值: 1, 最大值: 9
```

## 命名元组

```python
from collections import namedtuple

# 创建命名元组类型
Point = namedtuple("Point", ["x", "y"])
Person = namedtuple("Person", "name age city")

# 实例化
p = Point(3, 4)
print(p.x, p.y)  # 3 4

person = Person("Alice", 25, "New York")
print(person.name, person.age)  # Alice 25

# 转换为字典
print(person._asdict())  # {'name': 'Alice', 'age': 25, 'city': 'New York'}
```

## 实践练习

### 练习1：坐标距离

```python
def distance(p1, p2):
    """计算两点之间的欧几里得距离"""
    x1, y1 = p1
    x2, y2 = p2
    return ((x2 - x1)**2 + (y2 - y1)**2)**0.5

# print(distance((1, 2), (4, 6)))  # 5.0
```

### 练习2：RGB 颜色转换

```python
def rgb_to_hex(rgb):
    """将RGB元组转换为十六进制颜色"""
    r, g, b = rgb
    return f"#{r:02x}{g:02x}{b:02x}"

# print(rgb_to_hex((255, 0, 128)))  # #ff0080
```

### 练习3：学生成绩统计

```python
def analyze_grades(grades):
    """分析学生成绩，返回统计信息"""
    count = len(grades)
    total = sum(grades)
    average = total / count
    return count, total, average

# count, total, avg = analyze_grades((85, 90, 78, 92, 88))
# print(f"人数: {count}, 总分: {total}, 平均分: {avg:.1f}")
```

## 小结

本章介绍了 Python 元组的核心知识：

- **创建和访问**：索引、切片操作
- **不可变性**：元组创建后不能修改
- **元组操作**：连接、重复、查找等
- **元组解包**：方便的多变量赋值
- **命名元组**：创建具有字段名的元组

元组是 Python 中重要的不可变序列，适用于需要保证数据不被修改的场景。