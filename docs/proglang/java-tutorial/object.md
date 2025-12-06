# 对象与引用

在 Java 中，对象是类的实例，而变量则是对象的引用。本章将介绍对象的基本概念、创建方式以及引用的使用。

## 1. 对象的创建

使用 `new` 关键字可以创建类的实例。

### 示例：创建对象
```java
public class Person {
    String name;
    int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public void introduce() {
        System.out.println("Hello, my name is " + name + " and I am " + age + " years old.");
    }
}

public class Main {
    public static void main(String[] args) {
        Person person = new Person("Alice", 30);
        person.introduce();
    }
}
```

## 2. 对象引用

Java 中的变量存储的是对象的引用，而非对象本身。

### 示例：引用赋值
```java
Person person1 = new Person("Bob", 25);
Person person2 = person1; // person2 和 person1 引用同一个对象
person2.name = "Charlie";
System.out.println(person1.name); // 输出 "Charlie"
```

## 3. 对象的生命周期

对象的生命周期包括创建、使用和销毁。Java 的垃圾回收机制会自动回收不再使用的对象。

### 示例：对象销毁
```java
Person person = new Person("David", 40);
person = null; // 对象不再被引用，等待垃圾回收
```

## 总结

对象是 Java 编程的核心概念之一，理解对象与引用的关系是掌握 Java 的关键。