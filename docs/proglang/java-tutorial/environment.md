# 开发环境搭建

## JDK 安装

Java Development Kit (JDK) 是Java开发的核心工具包，包含了编译器、运行时环境和各种开发工具。

### 选择JDK版本

目前主流的JDK版本：

| 版本 | 发布时间 | 类型 | 推荐用途 |
|------|----------|------|----------|
| Java 8 | 2014年 | LTS | 维护老项目 |
| Java 11 | 2018年 | LTS | 企业级应用 |
| Java 17 | 2021年 | LTS | 新项目推荐 |
| Java 21 | 2023年 | LTS | 最新特性 |

**推荐选择**：Java 17 或 Java 21（LTS版本）

### Windows 系统安装

#### 方法一：Oracle官网下载

1. 访问 [Oracle JDK下载页面](https://www.oracle.com/java/technologies/downloads/)
2. 选择对应版本的Windows安装包
3. 下载并运行安装程序
4. 按照向导完成安装

#### 方法二：使用OpenJDK （推荐）

1. 访问 [OpenJDK官网](https://openjdk.java.net/) 或 [Amazon Corretto](https://aws.amazon.com/corretto/) (推荐)
2. 下载对应版本
3. 解压到指定目录（如 `C:\Program Files\Java\jdk-21`）

#### 配置环境变量

1. 右键"此电脑" → "属性" → "高级系统设置"
2. 点击"环境变量"
3. 在"系统变量"中新建：
   - 变量名：`JAVA_HOME`
   - 变量值：JDK安装路径（如 `C:\Program Files\Java\jdk-21`）
4. 编辑`Path`变量，添加：`%JAVA_HOME%\bin`

#### 验证安装

打开命令提示符，输入：

```cmd
java -version
javac -version
```

### macOS 系统安装


#### 官网下载

1. 下载macOS版本的JDK
2. 双击.dmg文件安装
3. 安装完成后自动配置环境变量

#### 配置环境变量（如需要）

编辑 `~/.zshrc` 或 `~/.bash_profile`：

```bash
export JAVA_HOME=/Library/Java/JavaVirtualMachines/openjdk-17.jdk/Contents/Home
export PATH=$JAVA_HOME/bin:$PATH
```

### Linux 系统安装

#### Ubuntu/Debian

```bash
# 更新包列表
sudo apt update

# 安装OpenJDK 17
sudo apt install openjdk-21-jdk

# 验证安装
java -version
javac -version
```

#### CentOS/RHEL/Fedora

```bash
# CentOS/RHEL
sudo yum install java-21-openjdk-devel

# Fedora
sudo dnf install java-21-openjdk-devel
```

#### 手动安装

```bash
# 下载JDK
wget https://corretto.aws/downloads/latest/amazon-corretto-21-x64-linux-jdk.tar.gz

# 解压
tar -xzf amazon-corretto-21-x64-linux-jdk.tar.gz

# 移动到系统目录
sudo mv amazon-corretto-2 /opt/

# 配置环境变量
echo 'export JAVA_HOME=/opt/amazon-corretto-21' >> ~/.bashrc
echo 'export PATH=$JAVA_HOME/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
```

## IDE 选择与配置

### IntelliJ IDEA（推荐）

IntelliJ IDEA 是目前最受欢迎的Java IDE，功能强大，智能提示优秀。

#### 下载安装

1. 访问 [JetBrains官网](https://www.jetbrains.com/idea/)
2. 下载Community版本（免费）或Ultimate版本（付费）
3. 安装并启动

#### 基本配置

1. **设置JDK**：
   - File → Project Structure → Project Settings → Project
   - 设置Project SDK为已安装的JDK

2. **配置代码风格**：
   - File → Settings → Editor → Code Style → Java
   - 设置缩进、换行等规则

3. **安装插件**：
   - File → Settings → Plugins
   - 推荐插件：Lombok、Maven Helper、GitToolBox

#### 创建第一个项目

1. File → New → Project
2. 选择Java项目类型
3. 设置项目名称和位置
4. 创建Main类并编写Hello World程序

```java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

### Eclipse

Eclipse 是老牌的开源Java IDE，插件生态丰富。

#### 下载安装

1. 访问 [Eclipse官网](https://www.eclipse.org/downloads/)
2. 下载Eclipse IDE for Java Developers
3. 解压并运行

#### 基本配置

1. **设置工作空间**：启动时选择workspace目录
2. **配置JDK**：Window → Preferences → Java → Installed JREs
3. **设置编码**：Window → Preferences → General → Workspace → Text file encoding

### Visual Studio Code

VS Code 是轻量级编辑器，通过扩展支持Java开发。

#### 安装Java扩展

1. 安装VS Code
2. 安装Extension Pack for Java扩展包
3. 配置Java路径

#### 推荐扩展

- Language Support for Java by Red Hat
- Debugger for Java
- Test Runner for Java
- Maven for Java
- Spring Boot Extension Pack

### NetBeans

NetBeans 是Oracle官方支持的IDE，对Java支持很好。

#### 特点

- 免费开源
- 内置Maven和Gradle支持
- 优秀的GUI设计器
- 良好的调试功能

## 构建工具

### Maven

Maven 是Java项目的标准构建工具，用于管理依赖和构建项目。

#### 安装Maven

**Windows**：
1. 下载Maven二进制包
2. 解压到指定目录
3. 配置环境变量`MAVEN_HOME`和`PATH`

**macOS**：
```bash
brew install maven
```

**Linux**：
```bash
sudo apt install maven  # Ubuntu/Debian
sudo yum install maven  # CentOS/RHEL
```

#### 验证安装

```bash
mvn -version
```

#### 创建Maven项目

```bash
mvn archetype:generate -DgroupId=com.example -DartifactId=my-app -DarchetypeArtifactId=maven-archetype-quickstart -DinteractiveMode=false
```

#### Maven项目结构

```
my-app/
├── pom.xml
└── src/
    ├── main/
    │   └── java/
    │       └── com/
    │           └── example/
    │               └── App.java
    └── test/
        └── java/
            └── com/
                └── example/
                    └── AppTest.java
```

#### 基本命令

```bash
mvn compile    # 编译
mvn test       # 运行测试
mvn package    # 打包
mvn install    # 安装到本地仓库
mvn clean      # 清理
```

### Gradle

Gradle 是现代化的构建工具，使用Groovy或Kotlin DSL。

#### 安装Gradle

**使用SDKMAN**：
```bash
curl -s "https://get.sdkman.io" | bash
sdk install gradle
```

**手动安装**：
1. 下载Gradle二进制包
2. 解压并配置环境变量

#### 创建Gradle项目

```bash
gradle init --type java-application
```

#### 基本命令

```bash
./gradlew build      # 构建项目
./gradlew test       # 运行测试
./gradlew run        # 运行应用
./gradlew clean      # 清理
```

## 版本控制

### Git 配置

```bash
# 安装Git后配置用户信息
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# 配置默认编辑器
git config --global core.editor "code --wait"  # VS Code
git config --global core.editor "idea --wait"  # IntelliJ IDEA
```

### .gitignore 文件

为Java项目创建合适的.gitignore文件：

```gitignore
# Compiled class files
*.class

# Log files
*.log

# BlueJ files
*.ctxt

# Mobile Tools for Java (J2ME)
.mtj.tmp/

# Package Files
*.jar
*.war
*.nar
*.ear
*.zip
*.tar.gz
*.rar

# Virtual machine crash logs
hs_err_pid*

# IDE files
.idea/
*.iml
.vscode/
.eclipse/
.metadata/

# Build directories
target/
build/
out/

# OS generated files
.DS_Store
.DS_Store?
._*
.Spotlight-V100
.Trashes
ehthumbs.db
Thumbs.db
```

## 开发环境验证

创建一个完整的测试项目来验证环境配置：

### 1. 创建项目目录

```bash
mkdir java-test
cd java-test
```

### 2. 创建Java文件

创建 `HelloWorld.java`：

```java
package com.example;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("=== Java环境测试 ===");
        
        // 显示Java版本信息
        System.out.println("Java版本: " + System.getProperty("java.version"));
        System.out.println("Java供应商: " + System.getProperty("java.vendor"));
        System.out.println("操作系统: " + System.getProperty("os.name"));
        
        // 显示当前时间
        LocalDateTime now = LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        System.out.println("当前时间: " + now.format(formatter));
        
        System.out.println("环境配置成功！");
    }
}
```

### 3. 编译和运行

```bash
# 编译
javac -d . HelloWorld.java

# 运行
java com.example.HelloWorld
```

### 4. 预期输出

```
=== Java环境测试 ===
Java版本: 17.0.2
Java供应商: Eclipse Adoptium
操作系统: Windows 10
当前时间: 2024-01-15 14:30:25
环境配置成功！
```

## 常见问题解决

### 1. 找不到javac命令

**问题**：`'javac' 不是内部或外部命令`

**解决方案**：
- 检查JDK是否正确安装
- 检查环境变量PATH是否包含JDK的bin目录
- 重启命令行工具

### 2. 类路径问题

**问题**：`找不到或无法加载主类`

**解决方案**：
- 确保类名与文件名一致
- 检查包声明是否正确
- 使用正确的类路径运行程序

### 3. 编码问题

**问题**：中文字符显示乱码

**解决方案**：
```bash
# 编译时指定编码
javac -encoding UTF-8 HelloWorld.java

# 运行时指定编码
java -Dfile.encoding=UTF-8 HelloWorld
```

### 4. IDE无法识别JDK

**解决方案**：
- 在IDE中重新配置JDK路径
- 刷新项目配置
- 重启IDE

---

完成开发环境搭建后，你就可以开始Java编程之旅了。一个良好的开发环境是高效编程的基础，建议花时间熟悉你选择的IDE和工具，这将大大提高你的开发效率。