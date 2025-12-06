# Lambda 表达式

Lambda 表达式是 Java 8 引入的一种简洁的匿名函数表示方式，用于简化函数式接口的实现。本章将介绍 Lambda 表达式的基本语法、使用场景以及常见应用。

## 1. Lambda 表达式的基本语法

Lambda 表达式的语法如下：
```java
(parameters) -> expression
```
或
```java
(parameters) -> { statements; }
```

### 示例
```java
// 无参数
Runnable runnable = () -> System.out.println("Hello, Lambda!");

// 单参数
Consumer<String> consumer = (s) -> System.out.println(s);

// 多参数
BinaryOperator<Integer> adder = (a, b) -> a + b;
```

## 2. 函数式接口

Lambda 表达式需要与函数式接口（只有一个抽象方法的接口）配合使用。

### 常见函数式接口
- `Runnable`：无参数，无返回值。
- `Consumer<T>`：接受一个参数，无返回值。
- `Supplier<T>`：无参数，返回一个值。
- `Function<T, R>`：接受一个参数，返回一个值。
- `Predicate<T>`：接受一个参数，返回布尔值。

### 示例
```java
List<String> names = Arrays.asList("Alice", "Bob", "Charlie");
names.forEach(name -> System.out.println(name));
```

## 3. 方法引用

方法引用是 Lambda 表达式的简化形式，用于直接引用已有方法。

### 示例
```java
// 静态方法引用
Function<String, Integer> parser = Integer::parseInt;

// 实例方法引用
Consumer<String> printer = System.out::println;

// 构造方法引用
Supplier<List<String>> listSupplier = ArrayList::new;
```

## 4. Lambda 表达式的应用

### 集合操作
```java
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
numbers.stream()
       .filter(n -> n % 2 == 0)
       .forEach(System.out::println);
```

### 线程
```java
new Thread(() -> System.out.println("Running in a thread")).start();
```

### 事件处理
```java
button.addActionListener(e -> System.out.println("Button clicked!"));
```

## 5. 变量作用域

Lambda 表达式可以访问外部的局部变量，但这些变量必须是 `final` 或事实上的 `final`。

### 示例
```java
int multiplier = 2;
Function<Integer, Integer> timesTwo = n -> n * multiplier;
```

## 6. 总结

Lambda 表达式极大地简化了 Java 中函数式编程的实现，提高了代码的可读性和简洁性。