# IntelliJ IDEA 完整指南

IntelliJ IDEA 是 JetBrains 公司开发的 Java 集成开发环境，被广泛认为是最优秀的 Java IDE 之一。

## 📋 版本介绍

### Ultimate 版 vs Community 版

| 特性 | Community 版 | Ultimate 版 |
|------|---------------|-------------|
| **价格** | 免费 | 付费 |
| **Java 开发** | ✅ | ✅ |
| **Kotlin 支持** | ✅ | ✅ |
| **Spring 框架** | ❌ | ✅ |
| **数据库工具** | ❌ | ✅ |
| **Web 开发** | ❌ | ✅ |
| **企业框架** | ❌ | ✅ |

!!! tip "版本选择建议"
    - **学生/个人学习**：Community 版足够使用
    - **企业开发**：推荐 Ultimate 版
    - **学生福利**：可申请免费的 Ultimate 版教育许可

## 🔽 下载安装

### 1. 官方下载

访问 [JetBrains 官网](https://www.jetbrains.com/idea/download/) 下载对应版本：

- **Windows**: `.exe` 安装包
- **macOS**: `.dmg` 安装包  
- **Linux**: `.tar.gz` 压缩包

### 2. 系统要求

| 项目 | 最低要求 | 推荐配置 |
|------|----------|----------|
| **内存** | 2 GB | 8 GB+ |
| **硬盘** | 3.5 GB | SSD 推荐 |
| **JDK** | JDK 8+ | JDK 11+ |

### 3. 安装步骤

**Windows 安装**

1. 双击下载的 `.exe` 文件
2. 选择安装路径
3. 勾选以下选项：
    - [x] Create Desktop Shortcut
    - [x] Add "bin" folder to the PATH
    - [x] Add "Open Folder as Project"
4. 点击 Install 完成安装

**macOS 安装**

1. 打开下载的 `.dmg` 文件
2. 将 IntelliJ IDEA 拖拽到 Applications 文件夹
3. 从 Launchpad 启动应用

**Linux 安装**

```bash
# 解压下载的文件
tar -xzf ideaIC-*.tar.gz
    
# 移动到 /opt 目录
sudo mv idea-IC-* /opt/idea
    
# 创建桌面快捷方式
sudo ln -s /opt/idea/bin/idea.sh /usr/local/bin/idea
    
# 启动 IDEA
idea
```

## ⚙️ 初始配置

### 1. 首次启动设置

1. **导入设置**：选择 "Do not import settings"
2. **选择主题**：
   - Darcula (深色主题)
   - IntelliJ Light (浅色主题)
3. **安装插件**：根据需要安装插件

### 2. 必备插件推荐

🔌 **开发效率类**
- Lombok Plugin - 简化 Java 代码
- Maven Helper - Maven 依赖管理
- Gradle - Gradle 构建工具支持

🎨 **界面美化类**  
- Material Theme UI - 美化界面主题
- Rainbow Brackets - 彩虹括号
- Atom Material Icons - 图标主题

🛠️ **代码质量类**
- SonarLint - 代码质量检查
- CheckStyle-IDEA - 代码规范检查
- SpotBugs - Bug 检测工具

### 3. JDK 配置

1. 打开 `File` → `Project Structure`
2. 选择 `SDKs`
3. 点击 `+` 添加 JDK
4. 选择 JDK 安装路径

## 🚀 基础使用

### 创建新项目

1. **启动界面**：点击 "New Project"
2. **选择项目类型**：
   - Java
   - Maven
   - Gradle
   - Spring Boot
3. **配置项目信息**：
   - Project name
   - Project location
   - Language level
4. **完成创建**

### 项目结构

```
MyProject/
├── .idea/          # IDEA 配置文件
├── src/
│   ├── main/
│   │   ├── java/   # Java 源码
│   │   └── resources/ # 资源文件
│   └── test/       # 测试代码
├── target/         # 编译输出
└── pom.xml         # Maven 配置
```

## 🔧 实用功能

### 1. 智能代码补全

| 快捷键 | 功能 |
|--------|------|
| `Ctrl + Space` | 基础代码补全 |
| `Ctrl + Shift + Space` | 智能类型补全 |
| `Ctrl + Alt + Space` | 第二次智能补全 |

### 2. 代码生成

| 快捷键 | 功能 |
|--------|------|
| `Alt + Insert` | 生成代码菜单 |
| `Ctrl + O` | 重写方法 |
| `Ctrl + I` | 实现接口方法 |

### 3. 重构功能

| 快捷键 | 功能 |
|--------|------|
| `Shift + F6` | 重命名 |
| `Ctrl + Alt + M` | 提取方法 |
| `Ctrl + Alt + V` | 提取变量 |
| `Ctrl + Alt + C` | 提取常量 |

### 4. 调试功能

```java
// 示例：调试 Java 程序
public class HelloWorld {
    public static void main(String[] args) {
        String message = "Hello, World!";  // 在此行设置断点
        System.out.println(message);
        
        for (int i = 0; i < 5; i++) {
            System.out.println("Count: " + i);  // 条件断点
        }
    }
}
```

**调试快捷键**：
- `F8` - 单步跳过
- `F7` - 单步进入  
- `Shift + F8` - 单步跳出
- `F9` - 继续执行

## 🎯 高级技巧

### 1. Live Templates

创建自定义代码模板：

```java
// 输入 "psvm" + Tab 自动生成
public static void main(String[] args) {
    $END$
}

// 输入 "sout" + Tab 自动生成  
System.out.println($END$);
```

### 2. 多光标编辑

- `Alt + J` - 选择下一个相同单词
- `Alt + Shift + J` - 取消选择
- `Ctrl + Alt + Shift + J` - 选择所有相同单词

### 3. 版本控制集成

IDEA 内置 Git 支持：

1. `VCS` → `Enable Version Control Integration`
2. 选择 Git
3. 使用 `Ctrl + K` 提交代码
4. 使用 `Ctrl + T` 更新代码

## 🔍 常见问题

### Q: IDEA 启动很慢怎么办？

**A: 优化启动速度**
```bash
# 编辑 idea64.exe.vmoptions 文件
-Xms2048m
-Xmx4096m
-XX:ReservedCodeCacheSize=1024m
-XX:+UseConcMarkSweepGC
-XX:SoftRefLRUPolicyMSPerMB=50
```

### Q: 如何导入 Eclipse 项目？

**A: 导入步骤**
1. `File` → `New` → `Project from Existing Sources`
2. 选择项目根目录
3. 选择 "Eclipse" 选项
4. 按向导完成导入

### Q: 内存不足怎么办？

**A: 增加内存分配**
1. `Help` → `Edit Custom VM Options`
2. 修改 `-Xmx` 参数：`-Xmx4096m`
3. 重启 IDEA

## 📚 学习资源

- [官方文档](https://www.jetbrains.com/help/idea/)
- [快捷键大全](https://www.jetbrains.com/help/idea/mastering-keyboard-shortcuts.html)
- [插件市场](https://plugins.jetbrains.com/)

---

!!! success "恭喜！"
    你已经掌握了 IntelliJ IDEA 的基础使用。现在可以开始你的 Java 开发之旅了！