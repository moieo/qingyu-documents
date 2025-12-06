# 上下文管理器

上下文管理器是 Python 中用于管理资源的机制，确保资源在使用后被正确释放，例如自动关闭文件或释放锁。

## with 语句

```python
with open("file.txt", "w") as f:
    f.write("Hello")
# 文件自动关闭
```

- **适用场景**：适用于需要管理资源（如文件、数据库连接、锁）的场景，确保资源不会泄漏。

## 实现上下文管理器

### 基于类

```python
class Timer:
    def __enter__(self):
        import time
        self.start = time.time()
        return self
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        self.end = time.time()
        print(f"耗时: {self.end - self.start:.2f}s")

with Timer() as t:
    import time
    time.sleep(1)
```

- **解释**：`__enter__` 是进入上下文时调用的方法，`__exit__` 是退出时调用的方法。
- **适用场景**：适用于需要测量代码执行时间的场景。

### 基于生成器

```python
from contextlib import contextmanager

@contextmanager
def tag(name):
    print(f"<{name}>", end="")
    yield
    print(f"</{name}>")

with tag("h1"):
    print("标题", end="")
# 输出: <h1>标题</h1>
```

- **解释**：`@contextmanager` 是一个装饰器，可以把生成器函数变成上下文管理器，超级方便！
- **适用场景**：适用于需要临时设置和清理资源的场景，比如 HTML 标签的生成～

## 内置上下文管理器

Python 还自带了一些超好用的内置上下文管理器，比如 `open` 和 `threading.Lock`，它们都会帮你自动管理资源，再也不用担心忘记释放啦！

```python
# 临时重定向标准输出
from contextlib import redirect_stdout
with redirect_stdout(open("output.txt", "w")):
    print("Hello")

# 临时修改目录
from contextlib import chdir
with chdir("/tmp"):
    import os
    print(os.getcwd())
```

## 实践练习

### 练习1：数据库连接

```python
class DatabaseConnection:
    def __enter__(self):
        print("连接数据库")
        return self
    
    def __exit__(self, *args):
        print("关闭数据库")
    
    def query(self, sql):
        print(f"执行: {sql}")

# with DatabaseConnection() as db:
#     db.query("SELECT * FROM users")
```

### 练习2：锁机制

```python
import threading

class LockContext:
    def __enter__(self):
        self.lock = threading.Lock()
        self.lock.acquire()
        print("获取锁")
        return self
    
    def __exit__(self, *args):
        self.lock.release()
        print("释放锁")

# with LockContext():
#     print("临界区代码")
```

## 小结

上下文管理器简化了资源管理，确保资源正确释放。