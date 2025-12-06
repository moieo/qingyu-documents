# 继承

继承是面向对象编程的重要特性之一，允许一个类（子类）继承另一个类（父类）的属性和方法。本章将介绍 Java 中继承的基本概念和使用方法。

## 1. 继承的基本语法

使用 `extends` 关键字实现继承。

### 示例：继承父类
```java
class Animal {
    String name;

    public Animal(String name) {
        this.name = name;
    }

    public void eat() {
        System.out.println(name + " is eating.");
    }
}

class Dog extends Animal {
    public Dog(String name) {
        super(name); // 调用父类的构造方法
    }

    public void bark() {
        System.out.println(name + " is barking.");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog dog = new Dog("Buddy");
        dog.eat(); // 继承自 Animal 类
        dog.bark(); // Dog 类特有的方法
    }
}
```

## 2. 方法重写

子类可以重写父类的方法，以实现不同的行为。

### 示例：方法重写
```java
class Bird extends Animal {
    public Bird(String name) {
        super(name);
    }

    @Override
    public void eat() {
        System.out.println(name + " is pecking.");
    }
}

public class Main {
    public static void main(String[] args) {
        Bird bird = new Bird("Tweety");
        bird.eat(); // 输出 "Tweety is pecking."
    }
}
```

## 3. `super` 关键字

`super` 关键字用于访问父类的成员（属性或方法）。

### 示例：使用 `super`
```java
class Cat extends Animal {
    public Cat(String name) {
        super(name);
    }

    @Override
    public void eat() {
        super.eat(); // 调用父类的 eat 方法
        System.out.println(name + " is also purring.");
    }
}
```

## 4. 继承的限制

- Java 不支持多继承（一个类只能继承一个父类）。
- 子类不能继承父类的私有成员（`private` 修饰的属性和方法）。

## 总结

继承是代码复用的重要手段，通过继承可以减少重复代码，提高代码的可维护性。