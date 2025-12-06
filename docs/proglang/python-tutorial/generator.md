# 生成器

生成器是 Python 中一种高效的数据生成机制，可以按需生成值，显著节省内存。

## 生成器函数

```python
def count_up_to(max):
    count = 1
    while count <= max:
        yield count
        count += 1

counter = count_up_to(5)
print(next(counter))  # 1
print(next(counter))  # 2

# 遍历
for num in count_up_to(3):
    print(num)  # 1, 2, 3
```

- **解释**：`yield` 关键字用于定义生成器函数，每次调用 `next()` 时执行到下一个 `yield` 语句。
- **适用场景**：适用于需要按需生成大量数据的场景，例如读取大文件或处理无限序列。

## 生成器表达式

```python
squares = (x**2 for x in range(5))
print(list(squares))  # [0, 1, 4, 9, 16]
```

- **解释**：生成器表达式与列表推导式类似，但以惰性方式生成数据，节省内存。
- **适用场景**：适用于需要快速生成临时数据的场景。

## 无限生成器

```python
def infinite_sequence():
    num = 0
    while True:
        yield num
        num += 1

# for i in infinite_sequence():
#     if i > 10: break
#     print(i)
```

- **解释**：无限生成器可以持续生成数据，需通过 `break` 或其他条件终止循环。
- **适用场景**：适用于需要无限序列的场景，比如计数器或模拟数据流。

## 生成器的状态

生成器有以下四种状态：

1. **GEN_CREATED**：生成器已创建但未启动。
2. **GEN_RUNNING**：生成器正在执行。
3. **GEN_SUSPENDED**：生成器在 `yield` 处暂停。
4. **GEN_CLOSED**：生成器已关闭。

```python
import inspect

def simple_generator():
    yield 1
    yield 2

gen = simple_generator()
print(inspect.getgeneratorstate(gen))  # GEN_CREATED
next(gen)
print(inspect.getgeneratorstate(gen))  # GEN_SUSPENDED
gen.close()
print(inspect.getgeneratorstate(gen))  # GEN_CLOSED
```

- **解释**：`inspect.getgeneratorstate` 用于检查生成器的状态。
- **适用场景**：适用于需要调试或监控生成器状态的场景。

## send 方法

`send` 方法用于向生成器发送数据，并恢复执行。

```python
def counter():
    count = 0
    while True:
        received = yield count
        if received is not None:
            count = received
        else:
            count += 1

c = counter()
next(c)  # 启动生成器
print(c.send(5))  # 5
print(next(c))    # 6
```

- **解释**：`send` 方法将数据传递给生成器，并返回下一个 `yield` 的值。
- **适用场景**：适用于需要动态控制生成器的场景。

## yield from 语法

`yield from` 用于简化生成器的嵌套。

```python
def sub_generator():
    yield from range(3)

for num in sub_generator():
    print(num)  # 0, 1, 2
```

- **解释**：`yield from` 可以委托给另一个生成器或可迭代对象。
- **适用场景**：适用于需要组合多个生成器的场景。

## 生成器管道

```python
def fibonacci_numbers(nums):
    x, y = 0, 1
    for _ in range(nums):
        x, y = y, x + y
        yield x

def square(nums):
    for num in nums:
        yield num**2

# 使用管道
fib = fibonacci_numbers(10)
for num in fib:
    print(num)  # 1, 1, 2, 3, 5, 8, 13, 21, 34, 55

print(sum(square(fibonacci_numbers(10))))  # 平方斐波那契数列和
```

## 实践练习

### 练习1：读取大文件

```python
def read_large_file(file_path):
    """逐行读取大文件"""
    with open(file_path) as f:
        for line in f:
            yield line.strip()

# for line in read_large_file("huge_file.txt"):
#     process(line)
```

### 练习2：素数生成器

```python
def primes():
    """生成素数序列"""
    yield 2
    primes_so_far = [2]
    candidate = 3
    while True:
        if all(candidate % p != 0 for p in primes_so_far):
            primes_so_far.append(candidate)
            yield candidate
        candidate += 2

# p = primes()
# print(next(p))  # 2
# print(next(p))  # 3
```

## 小结

生成器节省内存，适合处理大数据流或无限序列。