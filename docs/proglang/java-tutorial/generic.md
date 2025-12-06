# 泛型

泛型（Generics）是 Java 提供的一种类型安全机制，允许在编译时检查类型，避免运行时类型转换错误。本章将介绍泛型的基本概念、使用场景以及高级特性。

## 1. 泛型的基本概念

泛型通过类型参数化，使代码可以适用于多种类型，同时保证类型安全。

### 示例：泛型类
```java
public class Box<T> {
    private T content;

    public void setContent(T content) {
        this.content = content;
    }

    public T getContent() {
        return content;
    }
}

// 使用
Box<String> stringBox = new Box<>();
stringBox.setContent("Hello");
System.out.println(stringBox.getContent());
```

## 2. 泛型方法

泛型方法可以在方法级别定义类型参数。

### 示例
```java
public <T> void printArray(T[] array) {
    for (T item : array) {
        System.out.println(item);
    }
}

// 使用
Integer[] intArray = {1, 2, 3};
printArray(intArray);
```

## 3. 类型通配符

泛型支持通配符 `?`，用于表示未知类型。

### 示例
```java
public void printList(List<?> list) {
    for (Object item : list) {
        System.out.println(item);
    }
}
```

### 上限通配符
```java
public void processNumbers(List<? extends Number> numbers) {
    for (Number num : numbers) {
        System.out.println(num.doubleValue());
    }
}
```

### 下限通配符
```java
public void addNumbers(List<? super Integer> list) {
    list.add(1);
    list.add(2);
}
```

## 4. 泛型与继承

泛型类可以继承或实现泛型接口。

### 示例
```java
public interface List<T> {
    void add(T item);
}

public class ArrayList<T> implements List<T> {
    @Override
    public void add(T item) {
        // 实现
    }
}
```

## 5. 类型擦除

Java 泛型在编译时会进行类型擦除，转换为原始类型。

### 示例
```java
Box<String> stringBox = new Box<>();
Box<Integer> intBox = new Box<>();
// 运行时，两者都是 Box 类型
```

## 6. 泛型的限制

- 不能创建泛型数组。
- 不能直接实例化类型参数（如 `new T()`）。
- 不能用于静态上下文的类型参数。

## 7. 常见应用场景

- 集合框架（如 `List<T>`、`Map<K, V>`）。
- 工具类（如 `Comparator<T>`）。
- 自定义数据结构（如 `Stack<T>`）。

## 总结

泛型是 Java 类型安全的重要机制，合理使用可以提高代码的复用性和安全性。