# 语法基础

## Hello World 示例

以下是一个简单的 Java "Hello World" 程序示例：

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

### 代码解析

1. `public class HelloWorld`：定义一个公共类，类名必须与文件名一致。
2. `public static void main(String[] args)`：程序的入口方法。
3. `System.out.println("Hello, World!")`：输出语句，用于打印内容到控制台。

## 基本语法规则

Java 语言有一套严格的语法规则，掌握这些规则是编写正确Java程序的基础。

### 大小写敏感

Java 是大小写敏感的语言，这意味着 `Hello` 和 `hello` 是两个不同的标识符。

```java
int number = 10;
int Number = 20;  // 这是两个不同的变量
```

### 类名规范

- 类名应该以大写字母开头
- 如果类名由多个单词组成，每个单词的首字母都应该大写（帕斯卡命名法）
- 类名应该是名词

```java
public class HelloWorld { }      // 正确
public class StudentManager { }  // 正确
public class XMLParser { }       // 正确
```

### 方法名规范

- 方法名应该以小写字母开头
- 如果方法名由多个单词组成，从第二个单词开始每个单词的首字母大写（驼峰命名法）
- 方法名应该是动词

```java
public void printMessage() { }        // 正确
public void calculateTotalPrice() { } // 正确
public int getUserAge() { }           // 正确
```

### 变量名规范

- 变量名应该以小写字母开头
- 采用驼峰命名法
- 变量名应该有意义

```java
int age;                    // 正确
String firstName;           // 正确
double totalPrice;          // 正确
boolean isValid;            // 正确
```

### 常量名规范

- 常量名应该全部大写
- 多个单词之间用下划线分隔

```java
public static final int MAX_SIZE = 100;
public static final String DEFAULT_NAME = "Unknown";
public static final double PI = 3.14159;
```

## 标识符

标识符是用来命名变量、方法、类等程序元素的名称。

### 标识符规则

1. 标识符可以由字母、数字、下划线（_）和美元符号（$）组成
2. 标识符必须以字母、下划线或美元符号开头，不能以数字开头
3. 标识符不能是Java关键字
4. 标识符长度没有限制

```java
// 合法的标识符
int age;
String _name;
double $price;
boolean isValid2;
String userName;

// 非法的标识符
int 2age;        // 不能以数字开头
String class;    // 不能使用关键字
double my-price; // 不能包含连字符
```

## 关键字

Java 有一系列保留的关键字，这些关键字有特殊的含义，不能用作标识符。

### Java 关键字列表

| 关键字 | 用途 | 关键字 | 用途 |
|--------|------|--------|------|
| abstract | 抽象类/方法 | continue | 继续循环 |
| boolean | 布尔类型 | default | 默认 |
| break | 跳出循环 | do | do-while循环 |
| byte | 字节类型 | double | 双精度浮点 |
| case | switch分支 | else | 条件语句 |
| catch | 异常捕获 | extends | 继承 |
| char | 字符类型 | final | 最终的 |
| class | 类 | finally | 最终执行 |
| const | 常量（未使用） | float | 单精度浮点 |
| for | for循环 | goto | 跳转（未使用） |
| if | 条件语句 | implements | 实现接口 |
| import | 导入包 | instanceof | 类型判断 |
| int | 整数类型 | interface | 接口 |
| long | 长整型 | native | 本地方法 |
| new | 创建对象 | package | 包 |
| private | 私有 | protected | 受保护 |
| public | 公共 | return | 返回 |
| short | 短整型 | static | 静态 |
| strictfp | 严格浮点 | super | 父类 |
| switch | 多分支 | synchronized | 同步 |
| this | 当前对象 | throw | 抛出异常 |
| throws | 声明异常 | transient | 瞬态 |
| try | 异常处理 | void | 无返回值 |
| volatile | 易变的 | while | while循环 |

## 注释

注释是对代码的说明，不会被编译器执行。Java支持三种注释方式：

### 单行注释

使用 `//` 开始，注释内容到行末结束。

```java
// 这是单行注释
int age = 25; // 这也是单行注释
```

### 多行注释

使用 `/*` 开始，`*/` 结束，可以跨越多行。

```java
/*
 * 这是多行注释
 * 可以写多行内容
 * 用于详细说明
 */
int count = 0;
```

### 文档注释

使用 `/**` 开始，`*/` 结束，用于生成API文档。

```java
/**
 * 计算两个数的和
 * @param a 第一个数
 * @param b 第二个数
 * @return 两数之和
 */
public int add(int a, int b) {
    return a + b;
}
```

## 语句和表达式

### 语句（Statement）

语句是Java程序的基本执行单位，每个语句以分号结尾。

```java
int x = 10;                    // 声明语句
System.out.println("Hello");   // 方法调用语句
x++;                          // 表达式语句
return x;                     // 返回语句
```

### 表达式（Expression）

表达式是由操作数和操作符组成的，会产生一个值。

```java
int a = 5;
int b = 3;
int sum = a + b;        // a + b 是表达式
boolean result = a > b; // a > b 是表达式
```

### 代码块

代码块是用大括号 `{}` 包围的一组语句。

```java
{
    int x = 10;
    int y = 20;
    System.out.println(x + y);
} // x 和 y 的作用域仅在此代码块内
```

## 程序结构

一个完整的Java程序通常包含以下部分：

### 基本结构

```java
// 1. 包声明（可选）
package com.example.demo;

// 2. 导入语句（可选）
import java.util.Scanner;
import java.util.List;

// 3. 类声明
public class MyProgram {
    
    // 4. 类变量（字段）
    private static final String TITLE = "My Program";
    private int count;
    
    // 5. 构造方法
    public MyProgram() {
        this.count = 0;
    }
    
    // 6. 方法
    public void doSomething() {
        System.out.println("Doing something...");
    }
    
    // 7. 主方法（程序入口）
    public static void main(String[] args) {
        MyProgram program = new MyProgram();
        program.doSomething();
    }
}
```

### 包声明

包声明必须是文件的第一行非注释代码，用于指定类所属的包。

```java
package com.company.project.module;
```

### 导入语句

导入语句用于引入其他包中的类，位于包声明之后，类声明之前。

```java
import java.util.ArrayList;     // 导入特定类
import java.util.*;             // 导入包中所有类（不推荐）
import static java.lang.Math.*; // 静态导入
```

## 代码风格规范

### 缩进和空格

- 使用4个空格进行缩进（不要使用Tab）
- 操作符前后加空格
- 逗号后面加空格

```java
// 好的风格
public int calculate(int a, int b, int c) {
    int result = a + b * c;
    return result;
}

// 不好的风格
public int calculate(int a,int b,int c){
int result=a+b*c;
return result;
}
```

### 大括号位置

推荐使用"Egyptian brackets"风格：

```java
// 推荐风格
public class MyClass {
    public void myMethod() {
        if (condition) {
            doSomething();
        } else {
            doSomethingElse();
        }
    }
}
```

### 行长度

- 每行代码不超过80-120个字符
- 长语句应该适当换行

```java
// 长参数列表换行
public void longMethodName(String parameter1, 
                          String parameter2,
                          String parameter3) {
    // 方法体
}

// 长表达式换行
boolean result = (condition1 && condition2) 
                || (condition3 && condition4);
```

### 空行使用

- 类和接口之间用空行分隔
- 方法之间用空行分隔
- 逻辑相关的代码块之间用空行分隔

```java
public class Example {
    private int field1;
    private String field2;
    
    public Example() {
        // 构造方法
    }
    
    public void method1() {
        // 第一个方法
    }
    
    public void method2() {
        // 第二个方法
    }
}
```

## 编译和运行

### 编译过程

Java程序需要先编译成字节码，然后在JVM上运行。

```bash
# 编译Java源文件
javac HelloWorld.java

# 这会生成 HelloWorld.class 文件
```

### 运行程序

```bash
# 运行编译后的程序
java HelloWorld
```

### 带包的程序

```bash
# 编译带包的程序
javac -d . com/example/HelloWorld.java

# 运行带包的程序
java com.example.HelloWorld
```

## 常见语法错误

### 1. 缺少分号

```java
// 错误
int x = 10
System.out.println(x);

// 正确
int x = 10;
System.out.println(x);
```

### 2. 大括号不匹配

```java
// 错误
public class Test {
    public static void main(String[] args) {
        System.out.println("Hello");
    // 缺少一个右大括号
```

### 3. 类名与文件名不匹配

```java
// 文件名：HelloWorld.java
// 错误：类名与文件名不匹配
public class Hello {
    // ...
}

// 正确：类名与文件名匹配
public class HelloWorld {
    // ...
}
```

### 4. 主方法签名错误

```java
// 错误的主方法签名
public void main(String[] args) { }        // 缺少static
public static void Main(String[] args) { } // 大小写错误
public static void main(String args) { }   // 参数类型错误

// 正确的主方法签名
public static void main(String[] args) { }
```

---

掌握这些基本语法规则是编写高质量Java代码的基础。良好的代码风格不仅让代码更易读，也体现了程序员的专业素养。在后续的学习中，我们将基于这些语法基础，深入学习Java的各种特性。