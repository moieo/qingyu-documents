# 流程控制

流程控制语句决定了程序的执行顺序。Python 提供了条件语句、循环语句等控制结构，让程序能够根据不同条件执行不同的代码块。

## 条件语句

条件语句根据条件的真假来决定执行哪个代码块。

### if 语句

```python
# 基本 if 语句
age = 18
if age >= 18:
    print("你已经成年了")

# if-else 语句
score = 85
if score >= 60:
    print("及格了")
else:
    print("不及格")

# if-elif-else 语句
score = 92
if score >= 90:
    print("优秀")
elif score >= 80:
    print("良好")
elif score >= 70:
    print("中等")
elif score >= 60:
    print("及格")
else:
    print("不及格")
```

### 嵌套条件语句

```python
age = 20
has_license = True

if age >= 18:
    if has_license:
        print("可以开车")
    else:
        print("需要先考驾照")
else:
    print("年龄不够，不能开车")
```

## 三元运算符

三元运算符用于简化简单的条件表达式。

```python
age = 20
status = "成年" if age >= 18 else "未成年"
print(status)  # 成年
```

- **解释**：`x if condition else y` 是三元运算符的基本语法。
- **适用场景**：适用于需要简化单行条件表达式的场景。

## match-case 语句

`match-case` 是 Python 3.10 引入的模式匹配语法。

```python
def handle_status(status):
    match status:
        case "success":
            return "操作成功"
        case "error":
            return "操作失败"
        case "pending":
            return "操作进行中"
        case _:
            return "未知状态"

print(handle_status("success"))  # 操作成功
```

- **解释**：`match-case` 类似于其他语言中的 `switch-case`，但更强大。
- **适用场景**：适用于需要多条件分支的场景。

## 循环控制

### 1. break 和 continue

`break` 用于提前退出循环，`continue` 用于跳过当前迭代。

```python
for i in range(10):
    if i == 5:
        break  # 退出循环
    print(i)   # 0 1 2 3 4

for i in range(10):
    if i % 2 == 0:
        continue  # 跳过偶数
    print(i)      # 1 3 5 7 9
```

- **解释**：`break` 和 `continue` 用于控制循环的执行流程。
- **适用场景**：适用于需要提前退出或跳过迭代的场景。

### 2. else 子句

循环的 `else` 子句在循环正常结束时执行（即未触发 `break`）。

```python
for i in range(5):
    print(i)
else:
    print("循环正常结束")  # 0 1 2 3 4 循环正常结束

for i in range(5):
    if i == 3:
        break
    print(i)
else:
    print("循环正常结束")  # 0 1 2
```

- **解释**：`else` 子句用于检测循环是否正常结束。
- **适用场景**：适用于需要检测循环是否被中断的场景。

### 条件表达式（三元运算符）

```python
# 条件表达式的语法：value_if_true if condition else value_if_false
age = 20
status = "成年人" if age >= 18 else "未成年人"
print(status)

# 更复杂的例子
score = 85
grade = "A" if score >= 90 else "B" if score >= 80 else "C" if score >= 70 else "D"
print(grade)

# 用于函数参数
def greet(name, formal=False):
    greeting = "尊敬的" + name if formal else "你好，" + name
    print(greeting)

greet("张三")          # 你好，张三
greet("李四", True)    # 尊敬的李四
```

## 循环语句

循环语句用于重复执行代码块。

### while 循环

```python
# 基本 while 循环
count = 0
while count < 5:
    print(f"计数: {count}")
    count += 1

# 带 else 的 while 循环
num = 5
while num > 0:
    print(num)
    num -= 1
else:
    print("循环结束")
```

### for 循环

```python
# 遍历列表
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)

# 遍历字符串
for char in "Python":
    print(char)

# 使用 range()
for i in range(5):      # 0 到 4
    print(i)

for i in range(1, 6):   # 1 到 5
    print(i)

for i in range(0, 10, 2):  # 0 到 8，步长为 2
    print(i)
```

### 循环控制语句

```python
# break 语句 - 终止循环
for i in range(10):
    if i == 5:
        break
    print(i)  # 0 1 2 3 4

# continue 语句 - 跳过当前迭代
for i in range(10):
    if i % 2 == 0:
        continue
    print(i)  # 1 3 5 7 9

# pass 语句 - 空操作
for i in range(5):
    pass  # 什么也不做
```

## 模式匹配 (Python 3.10+)

Python 3.10 引入了 match-case 语句，类似于其他语言中的 switch-case。

```python
# 基本模式匹配
def http_status(status):
    match status:
        case 200:
            return "OK"
        case 404:
            return "Not Found"
        case 500:
            return "Server Error"
        case _:
            return "Unknown Status"

print(http_status(200))  # OK
print(http_status(404))  # Not Found
print(http_status(999))  # Unknown Status

# 复杂模式匹配
def describe_point(point):
    match point:
        case (0, 0):
            return "原点"
        case (0, y):
            return f"Y轴上，y={y}"
        case (x, 0):
            return f"X轴上，x={x}"
        case (x, y):
            return f"X={x}, Y={y}"
        case _:
            return "不是二维点"

print(describe_point((0, 0)))  # 原点
print(describe_point((0, 5)))  # Y轴上，y=5
print(describe_point((3, 0)))  # X轴上，x=3
print(describe_point((2, 3)))  # X=2, Y=3
```

## 实践练习

### 练习1：猜数字游戏

```python
import random

def guess_number():
    number = random.randint(1, 100)
    attempts = 0
    max_attempts = 7
    
    print("欢迎来到猜数字游戏！")
    print(f"我想了一个1-100之间的数字，你有{max_attempts}次机会猜中它。")
    
    while attempts < max_attempts:
        try:
            guess = int(input(f"第{attempts+1}次尝试，请输入你的猜测："))
            
            if guess < number:
                print("太小了！")
            elif guess > number:
                print("太大了！")
            else:
                print(f"恭喜！你猜对了，数字就是{number}！")
                return
            
            attempts += 1
        except ValueError:
            print("请输入有效的数字！")
    
    print(f"很遗憾，你没有猜中。正确答案是{number}。")

# guess_number()  # 取消注释运行
```

### 练习2：打印乘法表

```python
def multiplication_table(size=9):
    for i in range(1, size+1):
        for j in range(1, i+1):
            print(f"{j}×{i}={i*j}", end="\t")
        print()

# multiplication_table()  # 取消注释运行
```

### 练习3：计算阶乘

```python
def factorial(n):
    result = 1
    for i in range(1, n+1):
        result *= i
    return result

# 测试
for i in range(6):
    print(f"{i}! = {factorial(i)}")
```

## 小结

本章介绍了 Python 的流程控制语句：

- **条件语句**：if, elif, else 和条件表达式
- **循环语句**：while 和 for 循环
- **循环控制**：break, continue 和 pass
- **模式匹配**：match-case (Python 3.10+)

掌握这些控制结构是编写 Python 程序的基础，它们可以让你根据不同的条件执行不同的代码块，或者重复执行特定的代码块。