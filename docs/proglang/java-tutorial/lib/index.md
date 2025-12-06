# Java 标准库参考

Java 标准库（Java Standard Library）提供了丰富的类和接口，涵盖了日常开发中的大部分需求。本章将介绍最常用的核心类库。

## 核心包概览

### java.lang 包

`java.lang` 包是Java的核心包，自动导入，包含最基本的类。

| 类名 | 用途 | 重要方法 |
|------|------|----------|
| Object | 所有类的根类 | equals(), hashCode(), toString() |
| String | 字符串处理 | length(), charAt(), substring() |
| StringBuilder | 可变字符串 | append(), insert(), delete() |
| Integer, Double等 | 包装类 | valueOf(), parseInt(), toString() |
| Math | 数学运算 | abs(), max(), min(), sqrt() |
| System | 系统相关 | out, in, currentTimeMillis() |
| Thread | 线程 | start(), run(), sleep() |

### java.util 包

`java.util` 包提供了集合框架、日期时间、随机数等实用工具。

| 类名 | 用途 | 重要方法 |
|------|------|----------|
| ArrayList | 动态数组 | add(), get(), remove(), size() |
| HashMap | 哈希映射 | put(), get(), containsKey() |
| HashSet | 哈希集合 | add(), contains(), remove() |
| Date | 日期时间 | getTime(), toString() |
| Calendar | 日历 | get(), set(), add() |
| Random | 随机数 | nextInt(), nextDouble() |
| Scanner | 输入扫描 | next(), nextInt(), nextLine() |

### java.io 包

`java.io` 包提供了输入输出流相关的类。

| 类名 | 用途 | 重要方法 |
|------|------|----------|
| File | 文件操作 | exists(), mkdir(), delete() |
| FileInputStream | 文件输入流 | read(), close() |
| FileOutputStream | 文件输出流 | write(), close() |
| BufferedReader | 缓冲读取 | readLine(), close() |
| PrintWriter | 格式化输出 | print(), println(), close() |

## String 类详解

String 是Java中最常用的类之一，用于处理字符串。

### 创建字符串

```java
// 字面量方式（推荐）
String str1 = "Hello World";

// 构造方法方式
String str2 = new String("Hello World");
String str3 = new String(new char[]{'H', 'e', 'l', 'l', 'o'});

// 从字节数组创建
byte[] bytes = {72, 101, 108, 108, 111};
String str4 = new String(bytes);
```

### 常用方法

```java
String str = "Hello World";

// 长度和字符访问
int length = str.length();              // 11
char ch = str.charAt(0);                // 'H'
int index = str.indexOf('o');           // 4
int lastIndex = str.lastIndexOf('o');   // 7

// 子字符串
String sub1 = str.substring(6);         // "World"
String sub2 = str.substring(0, 5);      // "Hello"

// 大小写转换
String upper = str.toUpperCase();       // "HELLO WORLD"
String lower = str.toLowerCase();       // "hello world"

// 去除空白
String trimmed = "  Hello  ".trim();    // "Hello"

// 替换
String replaced = str.replace('l', 'L'); // "HeLLo WorLd"
String replacedAll = str.replaceAll("o", "0"); // "Hell0 W0rld"

// 分割
String[] parts = str.split(" ");        // ["Hello", "World"]

// 判断
boolean starts = str.startsWith("Hello"); // true
boolean ends = str.endsWith("World");     // true
boolean contains = str.contains("llo");   // true
boolean empty = str.isEmpty();            // false
```

### 字符串比较

```java
String str1 = "Hello";
String str2 = "Hello";
String str3 = new String("Hello");

// 引用比较（不推荐用于内容比较）
System.out.println(str1 == str2);        // true（字符串池）
System.out.println(str1 == str3);        // false

// 内容比较（推荐）
System.out.println(str1.equals(str2));   // true
System.out.println(str1.equals(str3));   // true
System.out.println(str1.equalsIgnoreCase("HELLO")); // true

// 字典序比较
int result = str1.compareTo("World");     // 负数
```

### 字符串格式化

```java
// String.format()
String formatted = String.format("姓名：%s，年龄：%d，分数：%.2f", 
                                 "张三", 20, 85.678);

// printf风格格式化
System.out.printf("姓名：%s，年龄：%d%n", "李四", 25);

// 常用格式说明符
// %s - 字符串
// %d - 整数
// %f - 浮点数
// %c - 字符
// %b - 布尔值
// %n - 换行符
```

## StringBuilder 类

StringBuilder 用于高效地构建字符串，避免String的不可变性带来的性能问题。

```java
StringBuilder sb = new StringBuilder();

// 追加内容
sb.append("Hello");
sb.append(" ");
sb.append("World");
sb.append(123);

// 插入内容
sb.insert(5, " Java");

// 删除内容
sb.delete(5, 10);

// 替换内容
sb.replace(0, 5, "Hi");

// 反转
sb.reverse();

// 转换为String
String result = sb.toString();

// 链式调用
String result2 = new StringBuilder()
    .append("Hello")
    .append(" ")
    .append("World")
    .toString();
```

## Math 类

Math 类提供了常用的数学运算方法。

```java
// 常量
double pi = Math.PI;        // 3.141592653589793
double e = Math.E;          // 2.718281828459045

// 基本运算
int abs = Math.abs(-10);           // 10
double max = Math.max(3.5, 2.8);   // 3.5
double min = Math.min(3.5, 2.8);   // 2.8

// 幂运算
double pow = Math.pow(2, 3);       // 8.0
double sqrt = Math.sqrt(16);       // 4.0
double cbrt = Math.cbrt(27);       // 3.0

// 三角函数
double sin = Math.sin(Math.PI / 2); // 1.0
double cos = Math.cos(0);           // 1.0
double tan = Math.tan(Math.PI / 4); // 1.0

// 对数函数
double log = Math.log(Math.E);      // 1.0
double log10 = Math.log10(100);     // 2.0

// 取整函数
double ceil = Math.ceil(3.2);       // 4.0
double floor = Math.floor(3.8);     // 3.0
long round = Math.round(3.6);       // 4

// 随机数
double random = Math.random();      // [0.0, 1.0)
```

## Random 类

Random 类提供了更多的随机数生成功能。

```java
Random random = new Random();

// 基本随机数
int randomInt = random.nextInt();           // 随机整数
int boundedInt = random.nextInt(100);       // [0, 100)
double randomDouble = random.nextDouble();   // [0.0, 1.0)
boolean randomBoolean = random.nextBoolean();

// 指定种子（可重现的随机序列）
Random seededRandom = new Random(12345);

// 生成指定范围的随机数
int min = 10, max = 50;
int rangeRandom = random.nextInt(max - min + 1) + min; // [10, 50]
```

## System 类

System 类提供了系统相关的功能。

```java
// 标准输入输出
System.out.println("输出到控制台");
System.err.println("错误输出");

// 系统属性
String javaVersion = System.getProperty("java.version");
String osName = System.getProperty("os.name");
String userHome = System.getProperty("user.home");

// 环境变量
String path = System.getenv("PATH");

// 时间
long currentTime = System.currentTimeMillis();  // 毫秒时间戳
long nanoTime = System.nanoTime();              // 纳秒时间

// 数组复制
int[] source = {1, 2, 3, 4, 5};
int[] dest = new int[5];
System.arraycopy(source, 0, dest, 0, source.length);

// 垃圾回收
System.gc();  // 建议JVM进行垃圾回收

// 程序退出
// System.exit(0);  // 正常退出
// System.exit(1);  // 异常退出
```

## Arrays 类

Arrays 类提供了数组操作的实用方法。

```java
import java.util.Arrays;

int[] arr = {3, 1, 4, 1, 5, 9, 2, 6};

// 排序
Arrays.sort(arr);
System.out.println(Arrays.toString(arr)); // [1, 1, 2, 3, 4, 5, 6, 9]

// 二分查找（数组必须已排序）
int index = Arrays.binarySearch(arr, 4);  // 4

// 填充数组
int[] filled = new int[5];
Arrays.fill(filled, 10);  // [10, 10, 10, 10, 10]

// 数组比较
int[] arr1 = {1, 2, 3};
int[] arr2 = {1, 2, 3};
boolean equal = Arrays.equals(arr1, arr2);  // true

// 数组复制
int[] copied = Arrays.copyOf(arr, arr.length);
int[] partial = Arrays.copyOfRange(arr, 2, 5);

// 转换为字符串
String str = Arrays.toString(arr);
```

## Objects 类

Objects 类提供了对象操作的实用方法（Java 7+）。

```java
import java.util.Objects;

String str1 = "Hello";
String str2 = null;

// 安全的equals比较
boolean equal = Objects.equals(str1, str2);  // false
boolean equal2 = Objects.equals(null, null); // true

// 安全的hashCode
int hash1 = Objects.hashCode(str1);  // 不会抛出NPE
int hash2 = Objects.hashCode(str2);  // 0

// 非空检查
String nonNull = Objects.requireNonNull(str1);  // 返回str1
// String willThrow = Objects.requireNonNull(str2);  // 抛出NPE

// 带消息的非空检查
String nonNull2 = Objects.requireNonNull(str1, "字符串不能为空");

// toString
String toString1 = Objects.toString(str1);        // "Hello"
String toString2 = Objects.toString(str2, "默认值"); // "默认值"
```

## 常用工具方法示例

### 字符串工具类

```java
public class StringUtils {
    
    // 判断字符串是否为空或null
    public static boolean isEmpty(String str) {
        return str == null || str.length() == 0;
    }
    
    // 判断字符串是否为空白
    public static boolean isBlank(String str) {
        return str == null || str.trim().length() == 0;
    }
    
    // 安全的字符串连接
    public static String join(String delimiter, String... strings) {
        if (strings == null || strings.length == 0) {
            return "";
        }
        
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < strings.length; i++) {
            if (i > 0) {
                sb.append(delimiter);
            }
            sb.append(strings[i] != null ? strings[i] : "");
        }
        return sb.toString();
    }
    
    // 重复字符串
    public static String repeat(String str, int count) {
        if (str == null || count <= 0) {
            return "";
        }
        
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < count; i++) {
            sb.append(str);
        }
        return sb.toString();
    }
}
```

### 数学工具类

```java
public class MathUtils {
    
    // 判断是否为质数
    public static boolean isPrime(int n) {
        if (n <= 1) return false;
        if (n <= 3) return true;
        if (n % 2 == 0 || n % 3 == 0) return false;
        
        for (int i = 5; i * i <= n; i += 6) {
            if (n % i == 0 || n % (i + 2) == 0) {
                return false;
            }
        }
        return true;
    }
    
    // 计算最大公约数
    public static int gcd(int a, int b) {
        while (b != 0) {
            int temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
    
    // 计算最小公倍数
    public static int lcm(int a, int b) {
        return (a * b) / gcd(a, b);
    }
    
    // 生成指定范围的随机整数
    public static int randomInt(int min, int max) {
        return (int) (Math.random() * (max - min + 1)) + min;
    }
}
```

---

Java标准库功能强大，熟练掌握这些常用类和方法能大大提高开发效率。建议在实际开发中多查阅官方文档，了解更多细节和最佳实践。