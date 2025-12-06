# 多态

多态是面向对象编程的核心特性之一，允许同一操作作用于不同的对象时产生不同的行为。本章将介绍 Java 中多态的基本概念和使用方法。

## 1. 多态的基本概念

多态分为编译时多态（方法重载）和运行时多态（方法重写）。

### 示例：方法重载（编译时多态）
```java
class Calculator {
    int add(int a, int b) {
        return a + b;
    }

    double add(double a, double b) {
        return a + b;
    }
}

public class Main {
    public static void main(String[] args) {
        Calculator calc = new Calculator();
        System.out.println(calc.add(1, 2)); // 调用 int 版本的 add
        System.out.println(calc.add(1.5, 2.5)); // 调用 double 版本的 add
    }
}
```

### 示例：方法重写（运行时多态）
```java
class Animal {
    void makeSound() {
        System.out.println("Some sound");
    }
}

class Dog extends Animal {
    @Override
    void makeSound() {
        System.out.println("Bark");
    }
}

class Cat extends Animal {
    @Override
    void makeSound() {
        System.out.println("Meow");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal myDog = new Dog();
        Animal myCat = new Cat();
        myDog.makeSound(); // 输出 "Bark"
        myCat.makeSound(); // 输出 "Meow"
    }
}
```

## 2. 向上转型与向下转型

- **向上转型**：将子类对象赋值给父类引用（自动完成）。
- **向下转型**：将父类引用强制转换为子类引用（需要显式转换）。

### 示例：向上转型与向下转型
```java
Animal animal = new Dog(); // 向上转型
Dog dog = (Dog) animal; // 向下转型
dog.makeSound(); // 输出 "Bark"
```

## 3. `instanceof` 关键字

`instanceof` 用于检查对象是否为某个类的实例。

### 示例：使用 `instanceof`
```java
if (animal instanceof Dog) {
    Dog dog = (Dog) animal;
    dog.makeSound();
}
```

## 4. 多态的应用场景

- 方法参数的多态：方法的参数可以是父类类型，实际传入子类对象。
- 集合的多态：集合中可以存储不同类型的子类对象。

### 示例：方法参数的多态
```java
public static void animalSound(Animal animal) {
    animal.makeSound();
}

public static void main(String[] args) {
    animalSound(new Dog()); // 输出 "Bark"
    animalSound(new Cat()); // 输出 "Meow"
}
```

## 总结

多态提高了代码的灵活性和可扩展性，是面向对象编程的重要特性之一。