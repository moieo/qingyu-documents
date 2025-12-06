# 接口（Interface）

接口是 Java 中一种完全抽象的类，用于定义一组方法规范，供其他类实现。接口可以包含抽象方法、默认方法和静态方法。

## 定义接口

```java
public interface Vehicle {
    void start();
    void stop();

    default void honk() {
        System.out.println("嘟嘟嘟");
    }

    static void printInfo() {
        System.out.println("这是一个交通工具接口");
    }
}
```

## 实现接口

类可以实现一个或多个接口，并必须实现接口中的所有抽象方法。

```java
public class Car implements Vehicle {
    @Override
    public void start() {
        System.out.println("汽车启动");
    }

    @Override
    public void stop() {
        System.out.println("汽车停止");
    }
}
```

## 接口的特点

- 可以包含抽象方法、默认方法和静态方法。
- 支持多继承（一个类可以实现多个接口）。
- 不能包含实例字段。