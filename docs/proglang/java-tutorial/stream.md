# Stream API

Java Stream API 是 Java 8 引入的一种函数式编程工具，用于高效处理集合数据。本章将介绍 Stream 的基本操作、中间操作和终端操作，以及常见应用场景。

## 1. Stream 的基本概念

Stream 是对集合数据的抽象，支持链式操作和惰性求值。

### 创建 Stream
```java
// 从集合创建
List<String> list = Arrays.asList("a", "b", "c");
Stream<String> stream = list.stream();

// 从数组创建
String[] array = {"a", "b", "c"};
Stream<String> stream = Arrays.stream(array);

// 直接创建
Stream<String> stream = Stream.of("a", "b", "c");
```

## 2. 中间操作

中间操作返回一个新的 Stream，支持链式调用。

### 过滤
```java
stream.filter(s -> s.startsWith("a"));
```

### 映射
```java
stream.map(String::toUpperCase);
```

### 排序
```java
stream.sorted();
```

### 去重
```java
stream.distinct();
```

## 3. 终端操作

终端操作触发 Stream 的处理并返回结果。

### 遍历
```java
stream.forEach(System.out::println);
```

### 收集
```java
List<String> result = stream.collect(Collectors.toList());
```

### 匹配
```java
boolean anyMatch = stream.anyMatch(s -> s.startsWith("a"));
```

### 聚合
```java
Optional<String> first = stream.findFirst();
```

## 4. 并行流

Stream 支持并行处理以提高性能。

```java
list.parallelStream().forEach(System.out::println);
```

## 5. 数值流

Java 提供了专门的数值流（如 `IntStream`、`LongStream`）用于处理原始类型。

```java
IntStream.range(1, 10).forEach(System.out::println);
```

## 6. 常见应用场景

- **数据过滤**：从集合中筛选符合条件的元素。
- **数据转换**：将集合中的元素转换为另一种形式。
- **数据统计**：计算集合中的最大值、最小值、平均值等。

## 7. 总结

Stream API 提供了一种高效、简洁的方式来处理集合数据，特别适合函数式编程场景。