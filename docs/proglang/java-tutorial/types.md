# 数据类型

Java 是一种强类型语言，所有变量都必须先声明类型才能使用。Java的数据类型分为两大类：基本数据类型（Primitive Types）和引用数据类型（Reference Types）。

## 基本数据类型

Java 提供了8种基本数据类型，它们是语言内置的，不是对象。

### 整数类型

#### byte 类型

- **大小**：8位（1字节）
- **范围**：-128 到 127
- **默认值**：0
- **用途**：节省内存空间，处理二进制数据

```java
byte b1 = 100;
byte b2 = -50;
byte b3 = 0b1010;    // 二进制表示
byte b4 = 0x7F;      // 十六进制表示

System.out.println("byte最大值: " + Byte.MAX_VALUE);  // 127
System.out.println("byte最小值: " + Byte.MIN_VALUE);  // -128
```

#### short 类型

- **大小**：16位（2字节）
- **范围**：-32,768 到 32,767
- **默认值**：0
- **用途**：节省内存，比int占用更少空间

```java
short s1 = 1000;
short s2 = -2000;
short s3 = 0x7FFF;   // 十六进制最大值

System.out.println("short最大值: " + Short.MAX_VALUE);  // 32767
System.out.println("short最小值: " + Short.MIN_VALUE);  // -32768
```

#### int 类型

- **大小**：32位（4字节）
- **范围**：-2,147,483,648 到 2,147,483,647
- **默认值**：0
- **用途**：最常用的整数类型

```java
int i1 = 100000;
int i2 = -50000;
int i3 = 0b11111111;     // 二进制
int i4 = 0xFF;           // 十六进制
int i5 = 1_000_000;      // 使用下划线分隔（Java 7+）

System.out.println("int最大值: " + Integer.MAX_VALUE);
System.out.println("int最小值: " + Integer.MIN_VALUE);
```

#### long 类型

- **大小**：64位（8字节）
- **范围**：-9,223,372,036,854,775,808 到 9,223,372,036,854,775,807
- **默认值**：0L
- **用途**：需要大整数时使用

```java
long l1 = 100000L;           // 必须加L后缀
long l2 = 9223372036854775807L;
long l3 = 0x7FFFFFFFFFFFFFFFL;
long l4 = 1_000_000_000_000L;

System.out.println("long最大值: " + Long.MAX_VALUE);
System.out.println("long最小值: " + Long.MIN_VALUE);
```

### 浮点类型

#### float 类型

- **大小**：32位（4字节）
- **精度**：约6-7位有效数字
- **默认值**：0.0f
- **用途**：单精度浮点运算

```java
float f1 = 3.14f;        // 必须加f后缀
float f2 = 1.23e-4f;     // 科学计数法
float f3 = 0x1.0p-126f;  // 十六进制浮点

System.out.println("float最大值: " + Float.MAX_VALUE);
System.out.println("float最小值: " + Float.MIN_VALUE);
System.out.println("float精度: " + Float.MIN_NORMAL);
```

#### double 类型

- **大小**：64位（8字节）
- **精度**：约15-17位有效数字
- **默认值**：0.0d
- **用途**：双精度浮点运算，默认的浮点类型

```java
double d1 = 3.14159265359;
double d2 = 1.23e-10;        // 科学计数法
double d3 = 0x1.0p-1022;     // 十六进制浮点
double d4 = Double.POSITIVE_INFINITY;  // 正无穷
double d5 = Double.NEGATIVE_INFINITY;  // 负无穷
double d6 = Double.NaN;                // 非数字

System.out.println("double最大值: " + Double.MAX_VALUE);
System.out.println("double最小值: " + Double.MIN_VALUE);
```

### 字符类型

#### char 类型

- **大小**：16位（2字节）
- **范围**：0 到 65,535（Unicode字符）
- **默认值**：'\u0000'
- **用途**：存储单个字符

```java
char c1 = 'A';           // 字符字面量
char c2 = 65;            // ASCII码
char c3 = '\u0041';      // Unicode编码
char c4 = '中';          // 中文字符
char c5 = '\n';          // 转义字符
char c6 = '\'';          // 单引号转义

System.out.println("char最大值: " + (int)Character.MAX_VALUE);  // 65535
System.out.println("char最小值: " + (int)Character.MIN_VALUE);  // 0
```

#### 常用转义字符

| 转义字符 | 含义 | Unicode |
|----------|------|---------|
| \n | 换行符 | \u000A |
| \r | 回车符 | \u000D |
| \t | 制表符 | \u0009 |
| \b | 退格符 | \u0008 |
| \f | 换页符 | \u000C |
| \" | 双引号 | \u0022 |
| \' | 单引号 | \u0027 |
| \\ | 反斜杠 | \u005C |

### 布尔类型

#### boolean 类型

- **大小**：理论上1位，实际实现可能不同
- **取值**：true 或 false
- **默认值**：false
- **用途**：逻辑判断

```java
boolean b1 = true;
boolean b2 = false;
boolean b3 = (10 > 5);   // 表达式结果
boolean b4 = !b1;        // 逻辑非

// 布尔运算
boolean and = true && false;   // false
boolean or = true || false;    // true
boolean xor = true ^ false;    // true
```

## 基本数据类型总结表

| 类型 | 大小 | 范围 | 默认值 | 包装类 |
|------|------|------|--------|--------|
| byte | 8位 | -128 ~ 127 | 0 | Byte |
| short | 16位 | -32,768 ~ 32,767 | 0 | Short |
| int | 32位 | -2³¹ ~ 2³¹-1 | 0 | Integer |
| long | 64位 | -2⁶³ ~ 2⁶³-1 | 0L | Long |
| float | 32位 | ±3.4E±38 | 0.0f | Float |
| double | 64位 | ±1.7E±308 | 0.0d | Double |
| char | 16位 | 0 ~ 65,535 | '\u0000' | Character |
| boolean | 1位 | true/false | false | Boolean |

## 引用数据类型

引用数据类型包括类、接口、数组等，它们存储的是对象的引用（内存地址），而不是对象本身。

### 类类型

```java
String str = "Hello World";      // 字符串类
Integer num = 100;               // 包装类
Date date = new Date();          // 日期类
ArrayList<String> list = new ArrayList<>();  // 集合类
```

### 接口类型

```java
List<String> list = new ArrayList<>();  // List接口
Map<String, Integer> map = new HashMap<>();  // Map接口
```

### 数组类型

```java
int[] numbers = {1, 2, 3, 4, 5};        // 一维数组
String[] names = new String[10];         // 字符串数组
int[][] matrix = new int[3][4];          // 二维数组
```

## 包装类

每个基本数据类型都有对应的包装类，提供了丰富的方法和常量。

### 自动装箱和拆箱

Java 5引入了自动装箱（Autoboxing）和自动拆箱（Unboxing）机制。

```java
// 自动装箱：基本类型 → 包装类
Integer num1 = 100;        // 等价于 Integer.valueOf(100)
Double d1 = 3.14;          // 等价于 Double.valueOf(3.14)

// 自动拆箱：包装类 → 基本类型
int num2 = num1;           // 等价于 num1.intValue()
double d2 = d1;            // 等价于 d1.doubleValue()

// 运算中的自动装箱拆箱
Integer a = 100;
Integer b = 200;
Integer c = a + b;         // 自动拆箱进行运算，然后装箱
```

### 包装类的常用方法

```java
// Integer类的常用方法
Integer num = 123;
System.out.println(num.toString());        // "123"
System.out.println(Integer.parseInt("456")); // 456
System.out.println(Integer.valueOf("789")); // 789
System.out.println(Integer.toBinaryString(10)); // "1010"
System.out.println(Integer.toHexString(255));   // "ff"

// Double类的常用方法
Double d = 3.14159;
System.out.println(d.intValue());          // 3
System.out.println(Double.parseDouble("2.718")); // 2.718
System.out.println(Double.isNaN(d));       // false
System.out.println(Double.isInfinite(d));  // false

// Character类的常用方法
Character ch = 'A';
System.out.println(Character.isLetter(ch));     // true
System.out.println(Character.isDigit(ch));      // false
System.out.println(Character.toLowerCase(ch));  // 'a'
System.out.println(Character.toUpperCase('b')); // 'B'
```

## 类型转换

### 自动类型转换（隐式转换）

当目标类型能够容纳源类型的所有值时，会发生自动类型转换。

```java
// 转换顺序：byte → short → int → long → float → double
//                  char → int

byte b = 10;
short s = b;        // byte → short
int i = s;          // short → int
long l = i;         // int → long
float f = l;        // long → float
double d = f;       // float → double

char c = 'A';
int ascii = c;      // char → int，结果为65
```

### 强制类型转换（显式转换）

当目标类型不能容纳源类型的值时，需要强制类型转换，可能会丢失精度。

```java
double d = 3.14159;
int i = (int) d;           // 3，小数部分丢失

long l = 123456789L;
int i2 = (int) l;          // 可能溢出

float f = 3.14f;
int i3 = (int) f;          // 3

// 字符与数字的转换
int ascii = 65;
char c = (char) ascii;     // 'A'
```

### 表达式中的类型提升

在表达式计算中，Java会自动进行类型提升：

```java
byte b1 = 10;
byte b2 = 20;
// byte b3 = b1 + b2;      // 编译错误！byte运算结果提升为int
int result = b1 + b2;      // 正确

short s1 = 100;
short s2 = 200;
int result2 = s1 * s2;     // short运算结果提升为int

float f1 = 3.14f;
double d1 = 2.718;
double result3 = f1 + d1;  // float提升为double
```

## 字面量

### 整数字面量

```java
int decimal = 123;         // 十进制
int binary = 0b1111011;    // 二进制（Java 7+）
int octal = 0173;          // 八进制
int hex = 0x7B;            // 十六进制

long longValue = 123L;     // long类型必须加L后缀
```

### 浮点字面量

```java
double d1 = 3.14;          // 默认double类型
float f1 = 3.14f;          // float类型必须加f后缀
double d2 = 1.23e-4;       // 科学计数法
float f2 = 1.23e-4f;
```

### 字符和字符串字面量

```java
char c1 = 'A';             // 字符字面量
String s1 = "Hello";       // 字符串字面量
String s2 = "Hello\nWorld"; // 包含转义字符
```

### 布尔字面量

```java
boolean b1 = true;
boolean b2 = false;
```

## 常见问题和注意事项

### 1. 浮点数精度问题

```java
double d1 = 0.1;
double d2 = 0.2;
double sum = d1 + d2;
System.out.println(sum);           // 0.30000000000000004

// 解决方案：使用BigDecimal
BigDecimal bd1 = new BigDecimal("0.1");
BigDecimal bd2 = new BigDecimal("0.2");
BigDecimal sum2 = bd1.add(bd2);
System.out.println(sum2);          // 0.3
```

### 2. 整数溢出

```java
int max = Integer.MAX_VALUE;
int overflow = max + 1;
System.out.println(overflow);      // -2147483648（溢出）

// 检查溢出
try {
    int result = Math.addExact(max, 1);
} catch (ArithmeticException e) {
    System.out.println("整数溢出！");
}
```

### 3. 包装类的比较

```java
Integer a = 100;
Integer b = 100;
System.out.println(a == b);        // true（缓存范围内）

Integer c = 200;
Integer d = 200;
System.out.println(c == d);        // false（超出缓存范围）
System.out.println(c.equals(d));   // true（正确的比较方式）
```

### 4. 字符编码

```java
char c1 = '中';
System.out.println((int) c1);      // 20013（Unicode码点）
System.out.println(Character.toString(c1)); // "中"
```

---

理解Java的数据类型系统是编程的基础。选择合适的数据类型不仅能提高程序效率，还能避免许多潜在的错误。在实际开发中，要根据数据的特点和使用场景选择最合适的类型。