# Visual Studio Code 完整指南

Visual Studio Code (VS Code) 是微软开发的免费、开源的轻量级代码编辑器，支持多种编程语言，拥有丰富的插件生态系统。

## 📋 产品特点

### 核心优势

| 特性 | 说明 |
|------|------|
| **免费开源** | 完全免费，源代码开放 |
| **跨平台** | 支持 Windows、macOS、Linux |
| **轻量级** | 启动快速，资源占用少 |
| **插件丰富** | 庞大的扩展市场 |
| **智能提示** | IntelliSense 代码补全 |
| **集成终端** | 内置终端支持 |
| **Git 集成** | 原生版本控制支持 |

### 适用场景

- **Web 开发** (HTML/CSS/JavaScript/TypeScript)
- **Python 开发**
- **Node.js 开发**
- **Go、Rust、C++ 等多语言开发**
- **Markdown 文档编写**
- **配置文件编辑**

## 🔽 下载安装

### 1. 官方下载

访问 [VS Code 官网](https://code.visualstudio.com/) 下载：

- **Windows**: `.exe` 安装包或 `.zip` 便携版
- **macOS**: `.dmg` 安装包
- **Linux**: `.deb`、`.rpm` 包或 `.tar.gz` 压缩包

### 2. 系统要求

| 项目 | 最低要求 | 推荐配置 |
|------|----------|----------|
| **内存** | 1 GB | 4 GB+ |
| **硬盘** | 200 MB | 1 GB+ |
| **处理器** | 1.6 GHz | 多核处理器 |

### 3. 安装步骤

**Windows 安装**

1. 下载 `.exe` 安装包
2. 双击运行安装程序
3. 完成安装

**macOS 安装**

1. 下载 `.dmg` 文件
2. 双击打开，拖拽到 Applications 文件夹
3. 从 Launchpad 或 Applications 启动
4. 添加到 PATH（可选）：
    ```bash
    # 打开命令面板 (Cmd+Shift+P)
    # 输入 "Shell Command: Install 'code' command in PATH"
    ```

**Linux (Ubuntu/Debian) 安装**

```bash
# 方法1：使用 .deb 包
wget -qO- https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > packages.microsoft.gpg
sudo install -o root -g root -m 644 packages.microsoft.gpg /etc/apt/trusted.gpg.d/
sudo sh -c 'echo "deb [arch=amd64,arm64,armhf signed-by=/etc/apt/trusted.gpg.d/packages.microsoft.gpg] https://packages.microsoft.com/repos/code stable main" > /etc/apt/sources.list.d/vscode.list'

sudo apt update
sudo apt install code

# 方法2：使用 Snap
sudo snap install --classic code
```

## ⚙️ 初始配置

### 1. 首次启动设置

**选择主题**  
VS Code 提供多种主题选择，包括深色主题 Dark+、浅色主题 Light+，也可以从扩展市场安装其他主题。

**设置同步**  
可以使用 Microsoft 或 GitHub 账号登录，同步你的设置、扩展和快捷键配置，在不同设备间保持一致的开发环境。

**语言设置**  
如果需要中文界面，可以安装 `Chinese (Simplified) Language Pack` 扩展，安装后重启即可切换到中文界面。

### 2. 必备扩展推荐

🌐 **Web 开发**
- Live Server - 实时预览网页
- Auto Rename Tag - 自动重命名标签
- Prettier - 代码格式化
- ESLint - JavaScript 代码检查
- Bracket Pair Colorizer - 括号配对着色

🐍 **Python 开发**
- Python - 官方 Python 扩展
- Pylance - Python 语言服务器
- Python Docstring Generator - 文档字符串生成
- autoDocstring - 自动文档生成

🎨 **主题美化**
- Material Theme - Material Design 主题
- One Dark Pro - Atom 风格主题
- Dracula Official - 吸血鬼主题
- vscode-icons - 文件图标主题

🛠️ **开发工具**
- GitLens - Git 增强工具
- Docker - Docker 容器支持
- REST Client - API 测试工具
- Thunder Client - API 客户端
- Code Runner - 代码运行器

### 3. 基本设置

打开设置：`Ctrl + ,` 或 `File` → `Preferences` → `Settings`

常用设置项：
- 字体大小：搜索 "font size" 调整
- 主题：搜索 "color theme" 选择喜欢的主题
- 自动保存：搜索 "auto save" 启用自动保存

## 🚀 基础使用

### 1. 界面简介

VS Code 界面主要包含：
- **菜单栏**：文件操作和设置
- **侧边栏**：文件浏览器、搜索、扩展等
- **编辑器区域**：代码编辑的主要区域
- **终端面板**：集成的命令行终端

### 2. 文件和文件夹操作

| 操作 | 快捷键 | 说明 |
|------|--------|------|
| 打开文件 | `Ctrl + O` | 打开单个文件 |
| 打开文件夹 | `Ctrl + K, Ctrl + O` | 打开整个项目文件夹 |
| 新建文件 | `Ctrl + N` | 创建新文件 |
| 保存文件 | `Ctrl + S` | 保存当前文件 |
| 另存为 | `Ctrl + Shift + S` | 文件另存为 |
| 关闭文件 | `Ctrl + W` | 关闭当前标签页 |

### 3. 工作区概念

工作区是 VS Code 中的项目概念：
- 打开文件夹即创建工作区
- 工作区设置保存在 `.vscode` 文件夹中
- 可以为不同项目配置不同的设置

## 🔧 核心功能

### 1. 智能代码编辑

```javascript
// 示例：JavaScript 代码补全
function calculateSum(numbers) {
    // 输入 num. 会显示数组方法提示
    return numbers.reduce((sum, num) => sum + num, 0);
}

// 自动导入
import { useState } from 'react'; // 自动补全导入

// 代码片段
// 输入 "log" + Tab 自动生成
console.log();
```

### 2. 多光标编辑

| 操作 | 快捷键 | 说明 |
|------|--------|------|
| 添加光标 | `Alt + Click` | 在点击位置添加光标 |
| 选择所有匹配 | `Ctrl + Shift + L` | 选择所有相同内容 |
| 选择下一个匹配 | `Ctrl + D` | 逐个选择相同内容 |
| 列选择 | `Shift + Alt + 拖拽` | 列模式选择 |

### 3. 搜索和替换

| 功能 | 快捷键 | 说明 |
|------|--------|------|
| 查找 | `Ctrl + F` | 当前文件查找 |
| 替换 | `Ctrl + H` | 当前文件替换 |
| 全局查找 | `Ctrl + Shift + F` | 整个项目查找 |
| 全局替换 | `Ctrl + Shift + H` | 整个项目替换 |

### 4. 集成终端

```bash
# 打开终端：Ctrl + `
# 新建终端：Ctrl + Shift + `

# 在终端中运行命令
npm install
python app.py
git status

# 多个终端实例
# 可以同时打开多个终端，支持不同的 shell
```

## 🎯 高级功能

### 1. 代码片段

VS Code 支持代码片段功能：
- 输入简短的前缀，按 Tab 键展开完整代码
- 可以通过 `File` → `Preferences` → `Configure User Snippets` 创建自定义片段
- 许多扩展也提供了丰富的代码片段

### 2. 任务运行

VS Code 可以配置和运行各种任务：
- 使用 `Ctrl + Shift + P` 打开命令面板
- 输入 "Tasks: Run Task" 运行预定义任务
- 可以配置构建、测试等常用任务

### 3. 调试功能

```python
# Python 调试示例
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

def main():
    number = 10  # 设置断点
    result = fibonacci(number)
    print(f"Result: {result}")

if __name__ == "__main__":
    main()
```

**调试快捷键**：
- `F5` - 开始调试
- `F9` - 切换断点
- `F10` - 单步跳过
- `F11` - 单步进入
- `Shift + F11` - 单步跳出

### 4. Git 集成

```bash
# VS Code 内置 Git 功能
# 源代码管理面板：Ctrl + Shift + G

# 常用 Git 操作
git init
git add .
git commit -m "Initial commit"
git push origin main

# VS Code 中的 Git 操作
# - 查看更改：侧边栏源代码管理
# - 暂存更改：点击 + 号
# - 提交更改：输入消息并 Ctrl + Enter
# - 推送更改：点击同步按钮
```

## 🔍 实用技巧

### 1. 快捷键大全

| 分类 | 快捷键 | 功能 |
|------|--------|------|
| **文件操作** | `Ctrl + N` | 新建文件 |
| | `Ctrl + O` | 打开文件 |
| | `Ctrl + S` | 保存文件 |
| | `Ctrl + Shift + S` | 另存为 |
| **编辑** | `Ctrl + Z` | 撤销 |
| | `Ctrl + Y` | 重做 |
| | `Ctrl + X` | 剪切 |
| | `Ctrl + C` | 复制 |
| | `Ctrl + V` | 粘贴 |
| **导航** | `Ctrl + P` | 快速打开文件 |
| | `Ctrl + Shift + P` | 命令面板 |
| | `Ctrl + G` | 跳转到行 |
| | `F12` | 跳转到定义 |
| **视图** | `Ctrl + B` | 切换侧边栏 |
| | `Ctrl + J` | 切换面板 |
| | `Ctrl + \`` | 切换终端 |

### 2. 命令面板使用

按 `Ctrl + Shift + P` 打开命令面板：

```
> File: New File                    # 新建文件
> View: Toggle Terminal             # 切换终端
> Preferences: Open Settings        # 打开设置
> Extensions: Install Extensions    # 安装扩展
> Git: Clone                        # 克隆仓库
> Python: Select Interpreter        # 选择 Python 解释器
```

### 3. 多项目管理

VS Code 支持多项目工作区：
- 可以同时打开多个文件夹
- 使用 `File` → `Add Folder to Workspace` 添加项目
- 保存工作区配置以便下次快速打开

## 🔍 常见问题

### Q: VS Code 启动慢怎么办？

**A: 优化启动速度**
1. 禁用不必要的扩展
2. 减少启动时打开的文件数量
3. 清理工作区缓存：
   ```bash
   # 清理用户数据
   code --user-data-dir /tmp/vscode-temp
   ```

### Q: 如何配置代码格式化？

**A: 安装格式化扩展**
1. 安装 Prettier 或其他格式化扩展
2. 在设置中搜索 "format on save" 并启用
3. 使用 `Shift + Alt + F` 手动格式化代码

### Q: 如何设置代理？

**A: 在设置中配置代理**
1. 打开设置 (`Ctrl + ,`)
2. 搜索 "proxy"
3. 填入代理服务器地址

## 📚 学习资源

- [VS Code 官方文档](https://code.visualstudio.com/docs)
- [扩展市场](https://marketplace.visualstudio.com/)
- [快捷键参考](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf)
- [VS Code Tips and Tricks](https://code.visualstudio.com/docs/getstarted/tips-and-tricks)

---

!!! success "开始高效编程！"
    VS Code 是一个功能强大且灵活的编辑器，掌握这些技巧将大大提升你的开发效率！