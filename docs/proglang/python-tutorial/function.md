# 函数

函数是 Python 中组织和重用代码的基本单元。

## 定义函数

```python
def greet(name):
    """打印问候语"""
    print(f"Hello, {name}!")

greet("Alice")  # Hello, Alice!
```

- **解释**：`def greet(name):` 定义了一个函数，接受参数 `name` 并打印问候语。
- **适用场景**：适用于需要重复执行的代码块。

## 参数和返回值

### 1. 默认参数

```python
def add(a, b=0):  # 默认参数
    return a + b

print(add(3, 5))  # 8
print(add(3))     # 3
```

- **解释**：`b=0` 是默认参数，如果调用时未提供 `b` 的值，则使用默认值 `0`。
- **适用场景**：适用于参数有默认值的场景。

### 2. 可变参数

```python
def sum_all(*args):
    return sum(args)

print(sum_all(1, 2, 3))  # 6
```

- **解释**：`*args` 允许函数接受任意数量的位置参数。
- **适用场景**：适用于参数数量不确定的场景。

## 作用域

```python
x = 10  # 全局变量

def foo():
    global x  # 声明 x 为全局变量
    x = 20    # 修改全局变量的值

foo()
print(x)  # 20

```

- **解释**：`global x` 声明 `x` 是全局变量，函数内部可以修改它。
- **适用场景**：适用于需要在函数内部修改全局变量的场景。

## 高阶函数

```python
def apply(func, value):
    return func(value)

print(apply(str.upper, "hello"))  # HELLO
```

- **解释**：`apply` 函数接受一个函数 `func` 和一个值 `value`，并返回 `func(value)`。
- **适用场景**：适用于需要将函数作为参数传递的场景。

## 高级用法

### 1. 递归调用

```python
def factorial(n):
    if n == 1:
        return 1
    return n * factorial(n - 1)

print(factorial(5))  # 120
```

- **解释**：递归函数调用自身来解决问题。
- **适用场景**：适用于分治算法或数学中的递归问题。

### 2. 闭包

```python
def outer(x):
    def inner(y):
        return x + y
    return inner

closure = outer(10)
print(closure(5))  # 15
```

- **解释**：闭包是嵌套函数，可以访问外部函数的变量。
- **适用场景**：适用于需要保存状态的场景。

### 3. 装饰器

```python
def decorator(func):
    def wrapper(*args, **kwargs):
        print("Before function call")
        result = func(*args, **kwargs)
        print("After function call")
        return result
    return wrapper

@decorator
def greet(name):
    print(f"Hello, {name}!")

greet("Alice")
```

- **解释**：装饰器用于在不修改原函数代码的情况下扩展功能。
- **适用场景**：适用于日志记录、性能测试等横切关注点。

## 闭包

```python
def make_multiplier(n):
    def multiplier(x):
        return x * n
    return multiplier

double = make_multiplier(2)
print(double(5))  # 10
```

## 实践练习

### 练习1：斐波那契数列

**题目**：实现一个 `fibonacci` 函数，生成斐波那契数列的前 `n` 项。

```python
def fibonacci(n):
    """返回斐波那契数列的前n项"""
    a, b = 0, 1
    result = []
    for _ in range(n):
        result.append(a)
        a, b = b, a + b
    return result

# print(fibonacci(10))  # [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
```

### 练习2：汉诺塔

**题目**：实现一个 `hanoi` 函数，解决汉诺塔问题，并打印移动步骤。

```python
def hanoi(n, source, target, auxiliary):
    """解决汉诺塔问题"""
    if n > 0:
        hanoi(n-1, source, auxiliary, target)
        print(f"Move disk {n} from {source} to {target}")
        hanoi(n-1, auxiliary, target, source)

# hanoi(3, 'A', 'C', 'B')
```

## 小结

本章介绍了 Python 函数的核心概念，包括定义、参数传递、作用域和高阶函数。