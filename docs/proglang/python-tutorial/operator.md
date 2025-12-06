# 运算符

运算符是用来对变量和值进行操作的符号。Python 提供了丰富的运算符，包括算术运算符、比较运算符、逻辑运算符等。

## 算术运算符

算术运算符用于执行数学运算。

### 基本算术运算符

```python
a = 10
b = 3

print(f"a = {a}, b = {b}")
print(f"a + b = {a + b}")    # 加法: 13
print(f"a - b = {a - b}")    # 减法: 7
print(f"a * b = {a * b}")    # 乘法: 30
print(f"a / b = {a / b}")    # 除法: 3.3333...
print(f"a // b = {a // b}")  # 整除: 3
print(f"a % b = {a % b}")    # 取余: 1
print(f"a ** b = {a ** b}")  # 幂运算: 1000
```

### 除法运算详解

```python
# 真除法 (/)：总是返回浮点数
print(10 / 3)    # 3.3333333333333335
print(10 / 2)    # 5.0 (仍然是浮点数)

# 整除 (//)：返回整数部分
print(10 // 3)   # 3
print(10 // 4)   # 2
print(-10 // 3)  # -4 (向下取整)

# 取余 (%)：返回除法的余数
print(10 % 3)    # 1
print(17 % 5)    # 2
print(-10 % 3)   # 2

# divmod() 函数：同时获得商和余数
quotient, remainder = divmod(17, 5)
print(f"17 ÷ 5 = {quotient} 余 {remainder}")  # 17 ÷ 5 = 3 余 2
```

### 幂运算

```python
# 基本幂运算

## 运算符重载

通过魔术方法可以重载运算符，实现自定义行为。

```python
class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    
    def __add__(self, other):
        return Vector(self.x + other.x, self.y + other.y)
    
    def __str__(self):
        return f"Vector({self.x}, {self.y})"

v1 = Vector(1, 2)
v2 = Vector(3, 4)
print(v1 + v2)  # Vector(4, 6)
```

- **解释**：`__add__` 方法重载了 `+` 运算符。
- **适用场景**：适用于需要自定义对象运算的场景。

## 位运算符

位运算符用于直接操作二进制位。

```python
a = 0b1010  # 10
b = 0b1100  # 12

print(bin(a & b))  # 0b1000 (AND)
print(bin(a | b))  # 0b1110 (OR)
print(bin(a ^ b))  # 0b0110 (XOR)
print(bin(~a))     # -0b1011 (NOT)
print(bin(a << 2)) # 0b101000 (左移)
print(bin(a >> 1)) # 0b0101 (右移)
```

- **解释**：位运算符适用于底层编程或性能优化。
- **适用场景**：适用于需要高效处理二进制数据的场景。

## 运算符优先级

以下是常见运算符的优先级（从高到低）：

| 运算符                     | 描述               |
|----------------------------|--------------------|
| `()`                       | 括号               |
| `**`                       | 幂运算             |
| `~` `+` `-`                | 位非、正负号       |
| `*` `/` `//` `%`           | 乘除、整除、取余   |
| `+` `-`                    | 加减               |
| `<<` `>>`                  | 位移               |
| `&`                        | 位与               |
| `^` `|`                    | 位异或、位或       |
| `==` `!=` `>` `<` `>=` `<=`| 比较运算符         |
| `not`                      | 逻辑非             |
| `and`                      | 逻辑与             |
| `or`                       | 逻辑或             |

- **解释**：了解优先级可以避免表达式歧义。
- **适用场景**：适用于需要编写复杂表达式的场景。
print(2 ** 3)    # 8
print(4 ** 0.5)  # 2.0 (平方根)
print(8 ** (1/3)) # 2.0 (立方根)

# 使用 math 模块

```python
import math
print(math.pow(2, 3))    # 8.0
print(math.sqrt(16))     # 4.0 (平方根)
print(math.pow(27, 1/3)) # 3.0 (立方根)
```

## 比较运算符

比较运算符用于比较两个值，返回布尔值。

### 基本比较运算符

```python
a = 10
b = 5
c = 10

print(f"a = {a}, b = {b}, c = {c}")
print(f"a == b: {a == b}")  # 等于: False
print(f"a == c: {a == c}")  # 等于: True
print(f"a != b: {a != b}")  # 不等于: True
print(f"a > b: {a > b}")    # 大于: True
print(f"a < b: {a < b}")    # 小于: False
print(f"a >= c: {a >= c}")  # 大于等于: True
print(f"a <= b: {a <= b}")  # 小于等于: False
```

### 链式比较

```python
# Python 支持链式比较
x = 5
print(1 < x < 10)        # True，等同于 (1 < x) and (x < 10)
print(10 <= x <= 20)     # False
print(1 < x < 10 < 20)   # True

# 字符串比较（按字典序）
print("apple" < "banana")  # True
print("Apple" < "apple")   # True (大写字母 ASCII 值小)
```

### 对象比较

```python
# 列表比较
list1 = [1, 2, 3]
list2 = [1, 2, 3]
list3 = list1

print(list1 == list2)  # True (值相等)
print(list1 is list2)  # False (不是同一个对象)
print(list1 is list3)  # True (是同一个对象)

# None 比较
value = None
print(value is None)     # True (推荐)
print(value == None)     # True (不推荐)
```

## 逻辑运算符

逻辑运算符用于组合布尔表达式。

### 基本逻辑运算符

```python
a = True
b = False

print(f"a = {a}, b = {b}")
print(f"a and b: {a and b}")  # 与: False
print(f"a or b: {a or b}")    # 或: True
print(f"not a: {not a}")      # 非: False
print(f"not b: {not b}")      # 非: True
```

### 短路求值

```python
# and 运算符：如果第一个操作数为 False，不会计算第二个
def func1():
    print("func1 被调用")
    return False

def func2():
    print("func2 被调用")
    return True

print("测试 and 短路:")
result = func1() and func2()  # func2 不会被调用
print(f"结果: {result}")

print("\n测试 or 短路:")
result = func2() or func1()   # func1 不会被调用
print(f"结果: {result}")
```

### 逻辑运算符的返回值

```python
# 逻辑运算符返回的是操作数，而不是布尔值
print(5 and 3)      # 3 (第二个真值)
print(0 and 3)      # 0 (第一个假值)
print(5 or 3)       # 5 (第一个真值)
print(0 or 3)       # 3 (第二个值)

# 实际应用：设置默认值
name = ""
display_name = name or "匿名用户"
print(display_name)  # 匿名用户

name = "Alice"
display_name = name or "匿名用户"
print(display_name)  # Alice
```

## 赋值运算符

赋值运算符用于给变量赋值。

### 基本赋值运算符

```python
# 简单赋值
x = 10
print(x)  # 10

# 复合赋值运算符
x += 5   # 等同于 x = x + 5
print(x)  # 15

x -= 3   # 等同于 x = x - 3
print(x)  # 12

x *= 2   # 等同于 x = x * 2
print(x)  # 24

x /= 4   # 等同于 x = x / 4
print(x)  # 6.0

x //= 2  # 等同于 x = x // 2
print(x)  # 3.0

x %= 2   # 等同于 x = x % 2
print(x)  # 1.0

x **= 3  # 等同于 x = x ** 3
print(x)  # 1.0
```

### 海象运算符 (Python 3.8+)

```python
# 海象运算符 := 可以在表达式中赋值
numbers = [1, 2, 3, 4, 5]

# 传统写法
length = len(numbers)
if length > 3:
    print(f"列表长度 {length} 大于 3")

# 使用海象运算符
if (length := len(numbers)) > 3:
    print(f"列表长度 {length} 大于 3")

# 在循环中使用
data = ["apple", "banana", "cherry", ""]
while (item := data.pop()) != "":
    print(f"处理: {item}")
```

## 位运算符

位运算符对整数的二进制位进行操作。

### 基本位运算符

```python
a = 60  # 二进制: 111100
b = 13  # 二进制: 001101

print(f"a = {a} (二进制: {bin(a)})")
print(f"b = {b} (二进制: {bin(b)})")

print(f"a & b = {a & b}")   # 按位与: 12 (001100)
print(f"a | b = {a | b}")   # 按位或: 61 (111101)
print(f"a ^ b = {a ^ b}")   # 按位异或: 49 (110001)
print(f"~a = {~a}")         # 按位取反: -61
print(f"a << 2 = {a << 2}") # 左移: 240 (11110000)
print(f"a >> 2 = {a >> 2}") # 右移: 15 (1111)
```

### 位运算的应用

```python
# 检查奇偶性
def is_even(n):
    return (n & 1) == 0

print(is_even(4))   # True
print(is_even(5))   # False

# 交换两个数（不使用临时变量）
a = 10
b = 20
print(f"交换前: a={a}, b={b}")
a = a ^ b
b = a ^ b
a = a ^ b
print(f"交换后: a={a}, b={b}")

# 计算 2 的幂
def power_of_2(n):
    return 1 << n

print(power_of_2(3))  # 8 (2^3)
print(power_of_2(5))  # 32 (2^5)
```

## 成员运算符

成员运算符用于测试值是否在序列中。

### in 和 not in

```python
# 列表中的成员测试
fruits = ["apple", "banana", "cherry"]
print("apple" in fruits)        # True
print("orange" in fruits)       # False
print("grape" not in fruits)    # True

# 字符串中的成员测试
text = "Hello, World!"
print("Hello" in text)        # True
print("hello" in text)        # False (区分大小写)
print("xyz" not in text)      # True

# 字典中的成员测试（测试键）
person = {"name": "Alice", "age": 25}
print("name" in person)       # True
print("height" in person)     # False
print("age" not in person)    # False

# 集合中的成员测试
numbers = {1, 2, 3, 4, 5}
print(3 in numbers)           # True
print(6 in numbers)           # False
```

## 身份运算符

身份运算符用于比较对象的身份（内存地址）。

### is 和 is not

```python
# 基本用法
a = [1, 2, 3]
b = [1, 2, 3]
c = a

print(a == b)    # True (值相等)
print(a is b)    # False (不是同一个对象)
print(a is c)    # True (是同一个对象)
print(a is not b)  # True

# None 的比较
value = None
print(value is None)      # True (推荐)
print(value is not None)  # False

# 小整数和字符串的特殊情况
x = 100
y = 100
print(x is y)    # True (小整数被缓存)

x = 1000
y = 1000
print(x is y)    # False (大整数不缓存)

s1 = "hello"
s2 = "hello"
print(s1 is s2)  # True (字符串可能被驻留)
```

## 运算符优先级

运算符有不同的优先级，决定了表达式的计算顺序。

### 优先级示例

```python
# 算术运算符优先级
result = 2 + 3 * 4    # 14，不是 20
print(result)

result = (2 + 3) * 4  # 20
print(result)

# 幂运算的右结合性
result = 2 ** 3 ** 2  # 512，不是 (2^3)^2
print(result)

result = (2 ** 3) ** 2  # 64
print(result)

# 复杂表达式
result = 10 + 5 * 2 - 3 / 2 > 15 and True
print(result)  # False
# 计算过程: 10 + 10 - 1.5 > 15 and True
#          18.5 > 15 and True
#          True and True
#          True
```

### 优先级表

| 优先级 | 运算符 | 描述 |
|--------|--------|------|
| 1 | `()` | 括号 |
| 2 | `**` | 幂运算 |
| 3 | `+x`, `-x`, `~x` | 正号、负号、按位取反 |
| 4 | `*`, `/`, `//`, `%` | 乘、除、整除、取余 |
| 5 | `+`, `-` | 加、减 |
| 6 | `<<`, `>>` | 位移 |
| 7 | `&` | 按位与 |
| 8 | `^` | 按位异或 |
| 9 | `|` | 按位或 |
| 10 | `==`, `!=`, `<`, `<=`, `>`, `>=`, `is`, `is not`, `in`, `not in` | 比较运算符 |
| 11 | `not` | 逻辑非 |
| 12 | `and` | 逻辑与 |
| 13 | `or` | 逻辑或 |

## 实践练习

### 练习 1：计算器

```python
def calculator():
    """简单计算器"""
    while True:
        try:
            expression = input("请输入表达式 (或输入 'quit' 退出): ")
            if expression.lower() == 'quit':
                break
            
            result = eval(expression)
            print(f"结果: {result}")
            
        except Exception as e:
            print(f"错误: {e}")

# calculator()  # 取消注释运行
```

### 练习 2：逻辑运算

```python
def check_conditions(age, has_license, has_car):
    """检查驾驶条件"""
    can_drive = age >= 18 and has_license
    can_drive_alone = can_drive and has_car
    
    print(f"年龄: {age}")
    print(f"有驾照: {has_license}")
    print(f"有车: {has_car}")
    print(f"可以驾驶: {can_drive}")
    print(f"可以独自驾驶: {can_drive_alone}")

# 测试不同情况
check_conditions(20, True, True)   # 全部满足
print()
check_conditions(16, False, True)  # 年龄不够
print()
check_conditions(25, True, False)  # 没有车
```

### 练习 3：位运算应用

```python
def bit_operations():
    """位运算应用示例"""
    # 权限系统
    READ = 1    # 001
    WRITE = 2   # 010
    EXECUTE = 4 # 100
    
    # 设置权限
    permissions = READ | WRITE  # 011
    print(f"初始权限: {bin(permissions)}")
    
    # 添加权限
    permissions |= EXECUTE      # 111
    print(f"添加执行权限: {bin(permissions)}")
    
    # 检查权限
    has_read = bool(permissions & READ)
    has_write = bool(permissions & WRITE)
    has_execute = bool(permissions & EXECUTE)
    
    print(f"读权限: {has_read}")
    print(f"写权限: {has_write}")
    print(f"执行权限: {has_execute}")
    
    # 移除权限
    permissions &= ~WRITE       # 101
    print(f"移除写权限: {bin(permissions)}")

bit_operations()
```

### 练习 4：运算符优先级

```python
def precedence_examples():
    """运算符优先级示例"""
    # 示例 1
    result1 = 2 + 3 * 4 ** 2
    result2 = ((2 + 3) * 4) ** 2
    print(f"2 + 3 * 4 ** 2 = {result1}")        # 50
    print(f"((2 + 3) * 4) ** 2 = {result2}")    # 400
    
    # 示例 2
    x, y, z = 1, 2, 3
    result3 = x < y and y < z or z < x
    result4 = (x < y and y < z) or z < x
    print(f"1 < 2 and 2 < 3 or 3 < 1 = {result3}")  # True
    print(f"(1 < 2 and 2 < 3) or 3 < 1 = {result4}")  # True
    
    # 示例 3
    a = 5
    result5 = not a == 0 and a > 0
    result6 = (not a) == 0 and a > 0
    print(f"not 5 == 0 and 5 > 0 = {result5}")      # True
    print(f"(not 5) == 0 and 5 > 0 = {result6}")    # False

precedence_examples()
```

## 小结

本章详细介绍了 Python 的各种运算符：

- **算术运算符**：用于数学计算，包括基本运算和幂运算
- **比较运算符**：用于比较值，支持链式比较
- **逻辑运算符**：用于布尔运算，支持短路求值
- **赋值运算符**：用于赋值，包括复合赋值和海象运算符
- **位运算符**：用于二进制位操作
- **成员运算符**：用于测试成员关系
- **身份运算符**：用于比较对象身份
- **运算符优先级**：决定表达式的计算顺序

理解和掌握这些运算符是编写 Python 程序的基础，它们在各种计算和逻辑判断中都有重要应用。