# Lambda 表达式

Lambda 表达式用于创建匿名函数，适用于需要简单函数但不想显式定义函数的场景。

## 基本语法

```python
square = lambda x: x ** 2
print(square(5))  # 25
```

- **解释**：`lambda x: x ** 2` 定义了一个匿名函数，接受参数 `x` 并返回 `x` 的平方。
- **适用场景**：适合用于简单的数学运算或作为其他函数的参数。

## 常见用途

### 1. 排序

```python
names = ["Alice", "Bob", "Charlie"]
names.sort(key=lambda x: len(x))
print(names)  # ['Bob', 'Alice', 'Charlie']
```

- **解释**：`key=lambda x: len(x)` 指定了排序的依据是字符串的长度。
- **适用场景**：适用于需要自定义排序规则的场景。

### 2. 过滤

```python
numbers = [1, 2, 3, 4, 5]
even = list(filter(lambda x: x % 2 == 0, numbers))
print(even)  # [2, 4]
```

- **解释**：`filter(lambda x: x % 2 == 0, numbers)` 过滤出偶数。
- **适用场景**：适用于需要从序列中筛选符合条件的元素。

### 3. 映射

```python
squares = list(map(lambda x: x**2, numbers))
print(squares)  # [1, 4, 9, 16, 25]
```

- **解释**：`map(lambda x: x**2, numbers)` 对每个元素进行平方操作。
- **适用场景**：适用于需要对序列中的每个元素进行转换的场景。

## 限制

Lambda 表达式有以下限制：

1. **只能包含单个表达式**：不能包含语句（如 `if`、`for`、`while` 等）。
2. **不能包含复杂逻辑**：适合简单的操作，复杂逻辑应使用普通函数。
3. **可读性较差**：过度使用 Lambda 表达式可能降低代码可读性。

```python
# 错误示例：Lambda 中不能包含语句
# invalid = lambda x: if x > 0: return x else: return -x
```

- **解释**：Lambda 表达式适合简单的功能，复杂逻辑应使用 `def` 定义函数。
- **适用场景**：适用于需要快速定义简单函数的场景。

## 与普通函数的对比

| 特性               | Lambda 表达式                     | 普通函数 (`def`)              |
|--------------------|-----------------------------------|-------------------------------|
| 语法              | `lambda x: x**2`                  | `def square(x): return x**2`  |
| 可读性            | 较低                              | 较高                          |
| 适用场景          | 简单操作、临时函数               | 复杂逻辑、复用代码           |

- **解释**：Lambda 表达式适合一次性使用的简单功能，普通函数适合复杂逻辑和复用。
- **适用场景**：根据需求选择合适的方式。

## 高阶函数中的 Lambda

`reduce` 是 Python 中的一个高阶函数，常用于累积计算。

```python
from functools import reduce

numbers = [1, 2, 3, 4]
product = reduce(lambda x, y: x * y, numbers)
print(product)  # 24
```

- **解释**：`reduce(lambda x, y: x * y, numbers)` 计算列表中所有元素的乘积。
- **适用场景**：适用于需要累积计算的场景。
- **只能包含一个表达式**：Lambda 表达式不能包含复杂的逻辑或多行代码。
- **不能包含语句**：例如 `if` 语句或循环语句不能直接写在 Lambda 中。
- **没有 return 关键字**：Lambda 表达式的返回值是隐式的。

## 实践练习

### 练习1：计算器

```python
operations = {
    "add": lambda a, b: a + b,
    "sub": lambda a, b: a - b,
    "mul": lambda a, b: a * b
}

# print(operations["add"](3, 5))  # 8
```

### 练习2：二次函数

```python
def quadratic(a, b, c):
    return lambda x: a*x**2 + b*x + c

f = quadratic(1, -2, 1)
# print(f(3))  # 4
```

## 小结

Lambda 表达式适合简单的函数逻辑，常用于高阶函数中。