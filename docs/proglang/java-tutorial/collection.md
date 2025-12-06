# 集合框架

Java 集合框架（Java Collections Framework）提供了一套用于存储和操作数据的接口和类。本章将介绍常用的集合类型及其使用方法。

## 1. 集合框架概述

Java 集合框架主要包括以下接口和类：
- **List**：有序集合，允许重复元素（如 `ArrayList`、`LinkedList`）。
- **Set**：无序集合，不允许重复元素（如 `HashSet`、`TreeSet`）。
- **Map**：键值对集合（如 `HashMap`、`TreeMap`）。

## 2. List 接口

### ArrayList
```java
List<String> list = new ArrayList<>();
list.add("Apple");
list.add("Banana");
list.add("Orange");
System.out.println(list); // [Apple, Banana, Orange]
```

### LinkedList
```java
List<String> linkedList = new LinkedList<>();
linkedList.add("Apple");
linkedList.add("Banana");
System.out.println(linkedList.get(1)); // Banana
```

## 3. Set 接口

### HashSet
```java
Set<String> set = new HashSet<>();
set.add("Apple");
set.add("Banana");
set.add("Apple"); // 重复元素不会被添加
System.out.println(set); // [Apple, Banana]
```

### TreeSet
```java
Set<String> treeSet = new TreeSet<>();
treeSet.add("Banana");
treeSet.add("Apple");
System.out.println(treeSet); // [Apple, Banana]（自动排序）
```

## 4. Map 接口

### HashMap
```java
Map<String, Integer> map = new HashMap<>();
map.put("Apple", 10);
map.put("Banana", 20);
System.out.println(map.get("Apple")); // 10
```

### TreeMap
```java
Map<String, Integer> treeMap = new TreeMap<>();
treeMap.put("Banana", 20);
treeMap.put("Apple", 10);
System.out.println(treeMap); // {Apple=10, Banana=20}（按键排序）
```

## 5. 集合的遍历

### 使用迭代器
```java
List<String> fruits = Arrays.asList("Apple", "Banana", "Orange");
Iterator<String> iterator = fruits.iterator();
while (iterator.hasNext()) {
    System.out.println(iterator.next());
}
```

### 使用增强 for 循环
```java
for (String fruit : fruits) {
    System.out.println(fruit);
}
```

## 6. 集合工具类

`java.util.Collections` 提供了许多静态方法用于操作集合。

```java
List<Integer> numbers = Arrays.asList(3, 1, 4, 1, 5, 9);
Collections.sort(numbers); // [1, 1, 3, 4, 5, 9]
Collections.reverse(numbers); // [9, 5, 4, 3, 1, 1]
```

## 总结

Java 集合框架提供了丰富的数据结构和算法，合理使用可以显著提高代码的可读性和性能。