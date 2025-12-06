# PyCharm 完整指南

PyCharm 是 JetBrains 公司专为 Python 开发打造的集成开发环境，提供了强大的代码分析、调试和测试功能。

## 📋 版本介绍

### Professional 版 vs Community 版

| 特性 | Community 版 | Professional 版 |
|------|---------------|-----------------|
| **价格** | 免费 | 付费 |
| **Python 开发** | ✅ | ✅ |
| **Web 开发** | ❌ | ✅ (Django, Flask) |
| **数据科学** | ❌ | ✅ (Jupyter, NumPy) |
| **数据库工具** | ❌ | ✅ |
| **远程开发** | ❌ | ✅ |
| **Docker 支持** | ❌ | ✅ |

!!! tip "版本选择建议"
    - **Python 学习**：Community 版完全够用
    - **Web 开发**：推荐 Professional 版
    - **数据科学**：必须使用 Professional 版
    - **学生福利**：可申请免费的 Professional 版教育许可

## 🔽 下载安装

### 1. 官方下载

访问 [PyCharm 官网](https://www.jetbrains.com/pycharm/download/) 下载：

- **Windows**: `.exe` 安装包
- **macOS**: `.dmg` 安装包
- **Linux**: `.tar.gz` 压缩包

### 2. 系统要求

| 项目 | 最低要求 | 推荐配置 |
|------|----------|----------|
| **内存** | 2 GB | 8 GB+ |
| **硬盘** | 3.5 GB | SSD 推荐 |
| **Python** | Python 2.7+ 或 3.6+ | Python 3.8+ |

### 3. 安装步骤

**Windows 安装**

1. 双击 `.exe` 安装文件
2. 选择安装路径
3. 勾选选项：
    - [x] Create Desktop Shortcut
    - [x] Add launchers dir to the PATH
    - [x] Add "Open Folder as Project"
    - [x] .py 文件关联
4. 完成安装

**macOS 安装**

1. 打开 `.dmg` 文件
2. 拖拽 PyCharm 到 Applications
3. 从 Launchpad 启动

**Linux 安装**

```bash
# 解压文件
tar -xzf pycharm-community-*.tar.gz
  
# 移动到 /opt
sudo mv pycharm-community-* /opt/pycharm
  
# 创建启动脚本
sudo ln -s /opt/pycharm/bin/pycharm.sh /usr/local/bin/pycharm
    
# 启动 PyCharm
pycharm
```

## ⚙️ 初始配置

### 1. 首次启动

1. **导入设置**：选择 "Do not import settings"
2. **接受协议**：阅读并接受许可协议
3. **选择主题**：
   - Darcula (深色)
   - Light (浅色)
4. **创建启动脚本**：勾选创建命令行启动器

### 2. Python 解释器配置

```python
# 检查 Python 版本
python --version
python3 --version

# 查看 Python 路径
which python
which python3
```

**配置步骤**：
1. `File` → `Settings` → `Project` → `Python Interpreter`
2. 点击齿轮图标 → `Add`
3. 选择解释器类型：
   - System Interpreter
   - Virtualenv Environment
   - Conda Environment

### 3. 必备插件推荐

🐍 **Python 开发**
- Python Docstring Generator - 自动生成文档字符串
- Python Security - 安全检查
- Requirements - 依赖管理

📊 **数据科学** (Professional 版)
- Jupyter - Jupyter Notebook 支持
- Matplotlib Support - 图表显示
- R Language Support - R 语言支持

🎨 **界面美化**
- Material Theme UI - 主题美化
- Rainbow Brackets - 彩虹括号
- Atom Material Icons - 图标主题

🛠️ **开发工具**
- GitToolBox - Git 增强工具
- .ignore - 忽略文件管理
- String Manipulation - 字符串处理

## 🚀 基础使用

### 创建 Python 项目

1. **新建项目**：`File` → `New Project`
2. **选择项目类型**：
   - Pure Python
   - Django
   - Flask
   - FastAPI
3. **配置项目**：
   - Location: 项目路径
   - Interpreter: Python 解释器
   - Create main.py: 创建主文件

### 项目结构

```
MyPythonProject/
├── .idea/              # PyCharm 配置
├── venv/              # 虚拟环境
├── src/               # 源代码
│   ├── __init__.py
│   └── main.py
├── tests/             # 测试代码
├── requirements.txt   # 依赖列表
└── README.md         # 项目说明
```

### 虚拟环境管理

```bash
# 创建虚拟环境
python -m venv myproject_env

# 激活虚拟环境 (Windows)
myproject_env\Scripts\activate

# 激活虚拟环境 (macOS/Linux)
source myproject_env/bin/activate

# 安装依赖
pip install requests numpy pandas

# 生成依赖文件
pip freeze > requirements.txt

# 安装依赖文件
pip install -r requirements.txt
```

## 🔧 核心功能

### 1. 智能代码补全

```python
# 示例：智能补全演示
import requests

# 输入 req. 会自动提示 requests 模块的方法
response = requests.get('https://api.github.com')

# 类型提示支持
def greet(name: str) -> str:
    return f"Hello, {name}!"

# 自动导入
from typing import List, Dict
```

### 2. 代码检查和重构

| 功能 | 快捷键 | 说明 |
|------|--------|------|
| 重命名 | `Shift + F6` | 重命名变量/函数/类 |
| 提取方法 | `Ctrl + Alt + M` | 将代码提取为方法 |
| 提取变量 | `Ctrl + Alt + V` | 提取表达式为变量 |
| 内联变量 | `Ctrl + Alt + N` | 内联变量到使用处 |

### 3. 调试功能

```python
# 示例：调试 Python 程序
def calculate_fibonacci(n):
    if n <= 1:
        return n
    else:
        return calculate_fibonacci(n-1) + calculate_fibonacci(n-2)

def main():
    number = 10  # 在此设置断点
    result = calculate_fibonacci(number)
    print(f"Fibonacci({number}) = {result}")

if __name__ == "__main__":
    main()
```

**调试快捷键**：
- `F8` - 单步跳过
- `F7` - 单步进入
- `Shift + F8` - 单步跳出
- `F9` - 继续执行
- `Ctrl + F8` - 切换断点

### 4. 单元测试

```python
# test_calculator.py
import unittest

class TestCalculator(unittest.TestCase):
    
    def test_addition(self):
        self.assertEqual(2 + 2, 4)
    
    def test_subtraction(self):
        self.assertEqual(5 - 3, 2)
    
    def test_multiplication(self):
        self.assertEqual(3 * 4, 12)

if __name__ == '__main__':
    unittest.main()
```

**运行测试**：
- 右键测试文件 → `Run 'Unittests in test_calculator.py'`
- 使用 `Ctrl + Shift + F10` 运行当前文件

## 🎯 高级功能

### 1. 代码模板 (Live Templates)

创建自定义代码模板：

```python
# 输入 "main" + Tab
if __name__ == "__main__":
    $END$

# 输入 "def" + Tab  
def $NAME$($PARAMETERS$):
    """$DOCSTRING$"""
    $END$

# 输入 "class" + Tab
class $NAME$($BASES$):
    """$DOCSTRING$"""
    
    def __init__(self$PARAMETERS$):
        $END$
```

### 2. 数据科学功能 (Professional 版)

```python
# Jupyter Notebook 集成
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

# 数据分析示例
data = pd.read_csv('data.csv')
data.head()

# 可视化
plt.figure(figsize=(10, 6))
plt.plot(data['x'], data['y'])
plt.show()
```

### 3. Web 开发支持 (Professional 版)

```python
# Django 项目创建
# File → New Project → Django

# Flask 应用示例
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
```

### 4. 数据库工具 (Professional 版)

1. **连接数据库**：`View` → `Tool Windows` → `Database`
2. **支持的数据库**：
   - MySQL
   - PostgreSQL
   - SQLite
   - MongoDB
   - Redis

## 🔍 实用技巧

### 1. 快捷键大全

| 分类 | 快捷键 | 功能 |
|------|--------|------|
| **导航** | `Ctrl + N` | 查找类 |
| | `Ctrl + Shift + N` | 查找文件 |
| | `Ctrl + Alt + Shift + N` | 查找符号 |
| **编辑** | `Ctrl + D` | 复制当前行 |
| | `Ctrl + Y` | 删除当前行 |
| | `Ctrl + /` | 注释/取消注释 |
| **运行** | `Shift + F10` | 运行程序 |
| | `Shift + F9` | 调试程序 |
| | `Ctrl + F2` | 停止程序 |

### 2. 代码格式化

```python
# 使用 Black 格式化工具
# 安装：pip install black

# 配置 PyCharm 使用 Black
# File → Settings → Tools → External Tools
# 添加 Black 工具配置

# 格式化快捷键：Ctrl + Alt + L
def long_function_name(
    var_one, var_two, var_three,
    var_four):
    print(var_one)
```

### 3. 版本控制集成

```bash
# Git 集成使用
git init
git add .
git commit -m "Initial commit"

# PyCharm 中的 Git 操作
# VCS → Enable Version Control Integration
# 使用 Ctrl + K 提交代码
# 使用 Ctrl + T 更新代码
```

## 🔍 常见问题

### Q: PyCharm 启动慢怎么办？

**A: 优化启动速度**
```bash
# 编辑 pycharm64.exe.vmoptions
-Xms1024m
-Xmx2048m
-XX:ReservedCodeCacheSize=512m
-XX:+UseConcMarkSweepGC
```

### Q: 如何配置代码风格？

**A: 代码风格配置**
1. `File` → `Settings` → `Editor` → `Code Style` → `Python`
2. 选择预设风格：PEP 8
3. 自定义缩进、换行等规则

### Q: 虚拟环境无法识别？

**A: 重新配置解释器**
1. `File` → `Settings` → `Project` → `Python Interpreter`
2. 点击齿轮 → `Add` → `Existing environment`
3. 选择虚拟环境中的 python 可执行文件

## 📚 学习资源

- [PyCharm 官方文档](https://www.jetbrains.com/help/pycharm/)
- [Python 官方文档](https://docs.python.org/)
- [PEP 8 代码风格指南](https://www.python.org/dev/peps/pep-0008/)
- [PyCharm 快捷键](https://www.jetbrains.com/help/pycharm/mastering-keyboard-shortcuts.html)

---

!!! success "开始 Python 开发！"
    现在你已经掌握了 PyCharm 的使用方法，可以开始高效的 Python 开发了！