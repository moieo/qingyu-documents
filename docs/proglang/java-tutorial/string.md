# 字符串

字符串是 Java 中最常用的数据类型之一。本章将介绍字符串的基本操作、常用方法以及相关的最佳实践。

## 1. 字符串的创建

Java 中的字符串可以通过以下方式创建：

```java
String str1 = "Hello, World!"; // 使用字符串字面量
String str2 = new String("Hello, World!"); // 使用构造方法
```

## 2. 字符串的不可变性

Java 字符串是不可变的（Immutable），任何对字符串的修改操作都会返回一个新的字符串对象。

```java
String original = "Hello";
String modified = original.concat(", World!");
System.out.println(original); // 输出 "Hello"
System.out.println(modified); // 输出 "Hello, World!"
```

## 3. 常用字符串方法

### 获取字符串长度
```java
String str = "Hello";
int length = str.length(); // 5
```

### 字符串连接
```java
String s1 = "Hello";
String s2 = "World";
String combined = s1 + " " + s2; // "Hello World"
```

### 字符串比较
```java
String s1 = "Hello";
String s2 = "Hello";
boolean isEqual = s1.equals(s2); // true
```

### 字符串分割
```java
String str = "apple,banana,orange";
String[] fruits = str.split(","); // ["apple", "banana", "orange"]
```

## 4. StringBuilder 和 StringBuffer

对于频繁的字符串操作，建议使用 `StringBuilder`（非线程安全）或 `StringBuffer`（线程安全）。

```java
StringBuilder sb = new StringBuilder();
sb.append("Hello");
sb.append(", ");
sb.append("World!");
String result = sb.toString(); // "Hello, World!"
```

## 5. 字符串格式化

Java 提供了 `String.format()` 方法用于格式化字符串。

```java
String name = "Alice";
int age = 30;
String formatted = String.format("Name: %s, Age: %d", name, age);
System.out.println(formatted); // "Name: Alice, Age: 30"
```

## 总结

字符串是 Java 编程中的核心内容，理解其不可变性和常用方法可以显著提高代码效率。