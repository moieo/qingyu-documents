# 抽象类（Abstract Class）

抽象类是一种不能被实例化的类，通常用于定义一些通用的行为或结构，供子类继承和实现。

## 定义抽象类

```java
public abstract class Animal {
    private String name;

    public Animal(String name) {
        this.name = name;
    }

    public abstract void makeSound();

    public String getName() {
        return name;
    }
}
```

## 继承抽象类

子类必须实现抽象类中的所有抽象方法。

```java
public class Dog extends Animal {
    public Dog(String name) {
        super(name);
    }

    @Override
    public void makeSound() {
        System.out.println("汪汪汪");
    }
}
```

## 抽象类的特点

- 可以包含抽象方法和非抽象方法。
- 不能被实例化。
- 子类必须实现所有抽象方法。