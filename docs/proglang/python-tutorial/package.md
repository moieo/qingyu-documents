# 包

包是模块的集合，用于组织更大型的项目，便于代码的分层管理和复用。

## 创建包

```
my_package/
    __init__.py
    module1.py
    module2.py
    subpackage/
        __init__.py
        module3.py
```

- **适用场景**：适用于需要将功能模块化并分层的项目，例如大型应用程序或库。

## __init__.py

```python
# __init__.py
"""包初始化文件"""
from .module1 import func1
from .module2 import func2

__all__ = ['func1', 'func2']  # 控制 from package import * 的行为
```

- **解释**：`__init__.py` 文件用于初始化包，`__all__` 定义了通过 `from package import *` 导入的内容。

## 导入包

```python
# 导入包中的模块
import my_package.module1
from my_package import module2

# 导入子包
from my_package.subpackage import module3
```

- **适用场景**：适用于需要复用包中模块功能的场景。

## 相对导入

```python
# module3.py
from ..module1 import func1  # 上一级包的模块
from . import module4        # 同级模块

## 包的命名空间

包的命名空间通过 `__init__.py` 文件定义，可以包含变量、函数和子模块。

```python
# __init__.py
VERSION = "1.0.0"

def greet():
    return "Hello from my_package!"
```

- **解释**：包级别的变量和函数可以在导入时直接使用。
- **适用场景**：适用于需要提供包级别功能的场景。

## 包的发布

将包发布到 PyPI 的步骤：

1. **创建 `setup.py`**：

```python
from setuptools import setup, find_packages

setup(
    name="my_package",
    version="1.0.0",
    packages=find_packages(),
    install_requires=["requests"],
)
```

2. **构建包**：

```bash
python setup.py sdist bdist_wheel
```

3. **上传到 PyPI**：

```bash
twine upload dist/*
```

- **解释**：`setup.py` 定义了包的元数据和依赖。
- **适用场景**：适用于需要共享包给其他开发者的场景。

## 包的依赖管理

### 1. `requirements.txt`

```
requests==2.25.1
numpy>=1.20.0
```

- **解释**：`requirements.txt` 列出了项目依赖的精确版本。
- **适用场景**：适用于需要固定依赖版本的场景。

### 2. `setup.py`

```python
install_requires=["requests>=2.25.0", "numpy"],
```

- **解释**：`setup.py` 中的 `install_requires` 定义了包的运行时依赖。
- **适用场景**：适用于需要动态解析依赖的场景。

## 可执行包

```python
# __main__.py
"""包的入口文件"""
from my_package import module1

if __name__ == "__main__":
    module1.func1()
```

- **适用场景**：适用于需要将包作为独立程序运行的场景。

## 实践练习

### 练习1：数学工具包

```python
# math_tools/
#     __init__.py
#     stats.py
#     geometry.py

# stats.py
def mean(numbers):
    return sum(numbers) / len(numbers)

# geometry.py
def area_of_circle(radius):
    return 3.14 * radius ** 2

# __init__.py
from .stats import mean
from .geometry import area_of_circle

# main.py
from math_tools import mean, area_of_circle
print(mean([1, 2, 3]))  # 2.0
```

### 练习2：插件系统

```python
# plugins/
#     __init__.py
#     plugin1.py
#     plugin2.py

# __init__.py
import importlib
import pkgutil

PLUGINS = {}

for _, name, _ in pkgutil.iter_modules(__path__):
    module = importlib.import_module(f".{name}", __package__)
    PLUGINS[name] = module
```

## 小结

包提供了更高级的代码组织方式，适合大型项目开发。