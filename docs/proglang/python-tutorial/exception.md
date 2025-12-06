# 异常处理

异常处理用于管理程序中的错误和异常情况，确保程序的健壮性。

## 基本语法

```python
try:
    result = 10 / 0
except ZeroDivisionError:
    print("不能除以零")
except (TypeError, ValueError) as e:
    print(f"类型或值错误: {e}")
except Exception as e:
    print(f"未知错误: {e}")
else:
    print("没有异常发生")
finally:
    print("总是执行")
```

- **解释**：`try` 块包含可能引发异常的代码，`except` 捕获特定异常，`else` 在没有异常时执行，`finally` 总是执行。
- **适用场景**：适用于需要处理潜在错误的场景。

## 常见异常类型

```python
# ValueError - 无效值
# TypeError - 类型错误
# IndexError - 索引越界
# KeyError - 字典键不存在
# FileNotFoundError - 文件不存在
# ZeroDivisionError - 除以零
```

- **解释**：Python 提供了多种内置异常类型，用于处理常见错误。
- **适用场景**：适用于需要区分不同错误类型的场景。

## 抛出异常

```python
def validate_age(age):
    if age < 0:
        raise ValueError("年龄不能为负")
    elif age < 18:
        raise ValueError("未成年")
    return True

# try:
#     validate_age(-5)
# except ValueError as e:
#     print(e)
```

- **解释**：`raise` 用于主动抛出异常，通常用于参数校验或业务逻辑检查。
- **适用场景**：适用于需要强制校验输入或业务规则的场景。

## 自定义异常

自定义异常用于表示特定的错误情况。

```python
class NegativeAgeError(Exception):
    """年龄为负数的异常"""
    pass

class UnderAgeError(Exception):
    """未成年的异常"""
    pass

def validate_age(age):
    if age < 0:
        raise NegativeAgeError("年龄不能为负")
    elif age < 18:
        raise UnderAgeError("未成年")
    return True

try:
    validate_age(-5)
except NegativeAgeError as e:
    print(f"自定义异常捕获: {e}")
```

- **解释**：`NegativeAgeError` 和 `UnderAgeError` 是自定义异常类，用于特定场景。
- **适用场景**：适用于需要区分业务逻辑错误的场景。

## 异常链

`raise from` 用于保留原始异常的上下文。

```python
def process_data(data):
    try:
        return int(data)
    except ValueError as e:
        raise RuntimeError("数据处理失败") from e

try:
    process_data("abc")
except RuntimeError as e:
    print(f"捕获到运行时错误: {e}")
    print(f"原始异常: {e.__cause__}")
```

- **解释**：`raise from` 保留了 `ValueError` 的上下文，便于调试。
- **适用场景**：适用于需要保留异常链的场景。

## 日志记录

在异常处理中使用日志记录可以更好地追踪问题。

```python
import logging

logging.basicConfig(level=logging.ERROR)

def risky_operation():
    try:
        result = 10 / 0
    except ZeroDivisionError as e:
        logging.error("发生除以零错误", exc_info=True)
        raise

try:
    risky_operation()
except Exception:
    pass
```

- **解释**：`logging.error` 记录错误信息，`exc_info=True` 包含堆栈跟踪。
- **适用场景**：适用于需要长期追踪错误的场景。

## 最佳实践

1. **精确捕获异常**：避免使用过于宽泛的 `except Exception`，优先捕获特定异常。
2. **记录异常信息**：使用日志记录异常信息，便于调试和排查问题。
3. **资源清理**：在 `finally` 块中释放资源（如文件句柄、数据库连接）。
4. **避免空异常处理**：不要忽略异常，至少记录日志或打印警告。

## 断言

```python
def divide(a, b):
    assert b != 0, "除数不能为零"
    return a / b

# print(divide(10, 0))  # AssertionError
```

## 实践练习

### 练习1：文件处理

**题目**：实现一个 `read_file_safely` 函数，安全地读取文件内容并处理可能的异常（如文件不存在或读取错误）。

```python
def read_file_safely(filename):
    try:
        with open(filename) as f:
            return f.read()
    except FileNotFoundError:
        print(f"文件 {filename} 不存在")
        return ""
    except IOError:
        print("读取文件错误")
        return ""

# content = read_file_safely("nonexistent.txt")
```

### 练习2：计算器

**题目**：实现一个 `calculate` 函数，安全地计算数学表达式并处理可能的异常（如语法错误或除以零）。

```python
def calculate(expr):
    try:
        return eval(expr)
    except (SyntaxError, NameError):
        print("表达式语法错误")
    except ZeroDivisionError:
        print("不能除以零")
    except Exception as e:
        print(f"计算错误: {e}")

# calculate("10 / 0")
```

## 小结

异常处理是编写健壮程序的关键，应合理使用 try-except 块。