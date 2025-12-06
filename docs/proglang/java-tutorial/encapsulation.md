# 封装

封装（Encapsulation）是面向对象编程的三大特性之一，它通过隐藏对象的内部状态和实现细节，仅对外暴露必要的接口来实现数据的安全性和模块化。

## 1. 封装的基本概念

封装的主要目的是：
- **保护数据**：防止外部直接访问对象的内部数据。
- **简化接口**：对外提供统一的访问方式。
- **提高可维护性**：内部实现可以独立变化而不影响外部调用。

## 2. 实现封装

### 使用私有字段
```java
public class Person {
    private String name;
    private int age;
}
```

### 提供公共方法（Getter/Setter）
```java
public class Person {
    private String name;
    private int age;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        if (age > 0) {
            this.age = age;
        }
    }
}
```

## 3. 封装的优点

- **数据验证**：可以在 Setter 方法中添加验证逻辑。
- **灵活性**：可以随时修改内部实现而不影响外部代码。
- **安全性**：防止外部直接修改敏感数据。

## 4. 示例

```java
public class BankAccount {
    private String accountNumber;
    private double balance;

    public BankAccount(String accountNumber, double initialBalance) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
    }

    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
        }
    }

    public void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
        }
    }

    public double getBalance() {
        return balance;
    }
}
```

## 5. 封装的扩展

### 包访问权限
```java
class PackagePrivateClass {
    // 仅限同一包内访问
}
```

### 不可变对象
```java
public final class ImmutablePerson {
    private final String name;
    private final int age;

    public ImmutablePerson(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }
}
```

## 总结

封装是 Java 面向对象编程的核心特性之一，合理使用封装可以提高代码的安全性、可维护性和灵活性。