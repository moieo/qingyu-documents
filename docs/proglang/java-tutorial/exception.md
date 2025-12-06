# 异常处理

异常是程序运行时可能发生的错误或意外情况。Java 提供了强大的异常处理机制，帮助开发者优雅地处理错误。本章将介绍 Java 中异常的基本概念和使用方法。

## 1. 异常的分类

Java 中的异常分为两类：
- **受检异常（Checked Exception）**：必须显式处理（如 `IOException`）。
- **非受检异常（Unchecked Exception）**：运行时异常（如 `NullPointerException`）。

## 2. 异常处理的基本语法

使用 `try-catch-finally` 块捕获和处理异常。

### 示例：捕获异常
```java
public class ExceptionExample {
    public static void main(String[] args) {
        try {
            int result = 10 / 0; // 抛出 ArithmeticException
        } catch (ArithmeticException e) {
            System.out.println("Error: " + e.getMessage());
        } finally {
            System.out.println("Finally block executed.");
        }
    }
}
```

## 3. 抛出异常

使用 `throw` 关键字抛出异常。

### 示例：抛出异常
```java
public class ThrowExample {
    public static void validateAge(int age) {
        if (age < 18) {
            throw new IllegalArgumentException("Age must be at least 18.");
        }
    }

    public static void main(String[] args) {
        try {
            validateAge(15);
        } catch (IllegalArgumentException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}
```

## 4. 自定义异常

通过继承 `Exception` 或 `RuntimeException` 类创建自定义异常。

### 示例：自定义异常
```java
class CustomException extends Exception {
    public CustomException(String message) {
        super(message);
    }
}

public class CustomExceptionExample {
    public static void main(String[] args) {
        try {
            throw new CustomException("This is a custom exception.");
        } catch (CustomException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}
```

## 5. 异常链

通过 `initCause` 方法或构造方法传递异常链。

### 示例：异常链
```java
public class ExceptionChainExample {
    public static void main(String[] args) {
        try {
            try {
                int result = 10 / 0;
            } catch (ArithmeticException e) {
                throw new RuntimeException("Calculation failed", e);
            }
        } catch (RuntimeException e) {
            System.out.println("Root cause: " + e.getCause().getMessage());
        }
    }
}
```

## 总结

异常处理是 Java 编程中的重要部分，通过合理的异常处理可以提高程序的健壮性和可维护性。