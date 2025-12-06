# 模块

模块是 Python 代码的组织单元，每个 `.py` 文件都是一个模块。模块化设计有助于代码复用和维护。

## 导入模块

```python
# 导入整个模块
import math
print(math.sqrt(16))  # 4.0

# 导入特定内容
from math import sqrt, pi
print(sqrt(9))  # 3.0

# 别名
import numpy as np
from datetime import datetime as dt
```

- **适用场景**：`import` 适用于需要复用其他模块功能的场景，`from ... import` 适用于仅需部分功能的情况，别名适用于简化模块名称。

## 创建模块

```python
# mymodule.py
"""这是一个示例模块"""

def greet(name):
    return f"Hello, {name}!"

PI = 3.14159

# main.py
import mymodule
print(mymodule.greet("Alice"))  # Hello, Alice!
```

- **适用场景**：模块化设计适用于需要将功能拆分为独立单元的场景，例如工具库或功能模块。

## __name__ 属性

```python
# mymodule.py
if __name__ == "__main__":
    print("模块直接运行")
else:
    print("模块被导入")
```

- **解释**：`__name__` 属性用于区分模块是直接运行还是被导入，适用于模块测试和功能隔离。

## 模块的搜索路径

Python 按以下顺序查找模块：

1. **当前目录**：优先查找当前脚本所在目录。
2. **环境变量 `PYTHONPATH`**：查找 `PYTHONPATH` 指定的目录。
3. **标准库路径**：查找 Python 安装目录下的标准库。
4. **第三方库路径**：查找 `site-packages` 目录。

```python
import sys
print(sys.path)  # 查看模块搜索路径
```

- **解释**：了解模块搜索路径有助于解决导入问题。
- **适用场景**：适用于需要自定义模块路径的场景。

## 模块的缓存机制

Python 使用 `sys.modules` 缓存已导入的模块，避免重复导入。

```python
import sys
import math

print("math" in sys.modules)  # True
```

- **解释**：模块缓存提高了导入效率，但也可能导致问题（如动态修改模块）。
- **适用场景**：适用于需要调试模块导入的场景。

## 模块的重新加载

`importlib.reload` 用于重新加载模块，适用于开发调试。

```python
import importlib
import mymodule

# 修改 mymodule.py 后
importlib.reload(mymodule)
```

- **解释**：`reload` 可以强制重新加载模块，但需谨慎使用。
- **适用场景**：适用于需要动态更新模块的场景。

## 模块搜索路径

```python
import sys
print(sys.path)  # 查看模块搜索路径

# 添加自定义路径
sys.path.append("/path/to/modules")
```

- **解释**：Python 在导入模块时会搜索 `sys.path` 中的路径，可以通过修改路径扩展模块搜索范围。

## 实践练习

### 练习1：配置模块

```python
# config.py
DEBUG = True
API_KEY = "12345"

# app.py
from config import DEBUG, API_KEY

if DEBUG:
    print(f"使用测试API: {API_KEY}")
```

### 练习2：工具模块

```python
# utils.py
def add(a, b):
    return a + b

def multiply(a, b):
    return a * b

# main.py
from utils import add, multiply
print(add(3, 5))  # 8
```

## 小结

模块化设计提高了代码的可维护性和重用性。