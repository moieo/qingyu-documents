# 常量与修饰符

在Java中，常量和修饰符是控制程序行为和访问权限的重要机制。理解它们的使用方法对编写高质量的Java代码至关重要。

## 常量

常量是在程序执行过程中值不会改变的量。Java中使用 `final` 关键字来声明常量。

### final 关键字

`final` 关键字可以用于修饰变量、方法和类，表示"最终的"、"不可改变的"。

#### final 变量（常量）

```java
public class FinalVariables {
    // 类常量（静态常量）
    public static final double PI = 3.14159265359;
    public static final String COMPANY_NAME = "ABC科技有限公司";
    public static final int MAX_USERS = 1000;
    
    // 实例常量
    private final String id;
    private final long createdTime;
    
    // 局部常量示例
    public void demonstrateFinalVariables() {
        // 局部常量
        final int MAX_ATTEMPTS = 3;
        final String ERROR_MESSAGE = "操作失败";
        
        // MAX_ATTEMPTS = 5; // 编译错误！不能修改final变量
        
        System.out.println("最大尝试次数: " + MAX_ATTEMPTS);
        System.out.println("错误信息: " + ERROR_MESSAGE);
    }
    
    public FinalVariables(String id) {
        this.id = id;  // final字段必须在构造方法中初始化
        this.createdTime = System.currentTimeMillis();
    }
    
    public String getId() {
        return id;
    }
    
    public long getCreatedTime() {
        return createdTime;
    }
}
```

#### final 引用类型

对于引用类型的final变量，引用本身不能改变，但对象的内容可以改变。

```java
import java.util.ArrayList;
import java.util.List;

public class FinalReference {
    public static void main(String[] args) {
        // final引用
        final List<String> names = new ArrayList<>();
        
        // 可以修改对象内容
        names.add("张三");
        names.add("李四");
        names.remove("张三");
        
        System.out.println("名单: " + names);
        
        // names = new ArrayList<>(); // 编译错误！不能重新赋值
        
        // final数组
        final int[] numbers = {1, 2, 3, 4, 5};
        numbers[0] = 10; // 可以修改数组元素
        System.out.println("第一个元素: " + numbers[0]);
        
        // numbers = new int[10]; // 编译错误！不能重新赋值
    }
}
```

### 常量的命名约定

```java
public class Constants {
    // 常量命名：全大写，单词间用下划线分隔
    public static final int DEFAULT_TIMEOUT = 30000;
    public static final String DATABASE_URL = "jdbc:mysql://localhost:3306/mydb";
    public static final double TAX_RATE = 0.08;
    public static final boolean DEBUG_MODE = true;
    
    // 枚举常量（更好的选择）
    public enum Status {
        PENDING, PROCESSING, COMPLETED, FAILED
    }
    
    // 接口中的常量（隐式为public static final）
    public interface DatabaseConfig {
        String DRIVER_CLASS = "com.mysql.cj.jdbc.Driver";
        int CONNECTION_POOL_SIZE = 20;
        int QUERY_TIMEOUT = 5000;
    }
}
```

### 常量类的设计

```java
public final class AppConstants {
    // 私有构造方法，防止实例化
    private AppConstants() {
        throw new AssertionError("不能实例化常量类");
    }
    
    // 应用配置常量
    public static final class Config {
        public static final String APP_NAME = "MyApplication";
        public static final String VERSION = "1.0.0";
        public static final int DEFAULT_PORT = 8080;
    }
    
    // 错误码常量
    public static final class ErrorCode {
        public static final int SUCCESS = 0;
        public static final int INVALID_PARAMETER = 1001;
        public static final int UNAUTHORIZED = 1002;
        public static final int NOT_FOUND = 1003;
        public static final int INTERNAL_ERROR = 1004;
    }
    
    // 消息常量
    public static final class Messages {
        public static final String WELCOME = "欢迎使用系统";
        public static final String LOGIN_SUCCESS = "登录成功";
        public static final String LOGIN_FAILED = "登录失败";
        public static final String ACCESS_DENIED = "访问被拒绝";
    }
}

// 使用示例
public class ConstantUsage {
    public static void main(String[] args) {
        System.out.println("应用名称: " + AppConstants.Config.APP_NAME);
        System.out.println("版本: " + AppConstants.Config.VERSION);
        System.out.println("默认端口: " + AppConstants.Config.DEFAULT_PORT);
        
        int errorCode = AppConstants.ErrorCode.SUCCESS;
        String message = AppConstants.Messages.LOGIN_SUCCESS;
        
        System.out.println("错误码: " + errorCode);
        System.out.println("消息: " + message);
    }
}
```

## 访问修饰符

访问修饰符控制类、字段、方法和构造方法的可见性。

### 四种访问级别

| 修饰符 | 同一类 | 同一包 | 子类 | 不同包 |
|--------|--------|--------|------|--------|
| private | ✓ | ✗ | ✗ | ✗ |
| 默认(package-private) | ✓ | ✓ | ✗ | ✗ |
| protected | ✓ | ✓ | ✓ | ✗ |
| public | ✓ | ✓ | ✓ | ✓ |

### private 修饰符

```java
public class PrivateExample {
    private String secretData = "机密信息";
    private int internalCounter = 0;
    
    // 私有方法
    private void internalProcess() {
        System.out.println("执行内部处理");
        internalCounter++;
    }
    
    // 私有构造方法（单例模式）
    private PrivateExample() {
        // 防止外部实例化
    }
    
    // 公共方法访问私有成员
    public void publicMethod() {
        System.out.println("访问私有数据: " + secretData);
        internalProcess();
    }
    
    public int getCounter() {
        return internalCounter;
    }
    
    // 静态工厂方法
    public static PrivateExample createInstance() {
        return new PrivateExample();
    }
}
```

### protected 修饰符

```java
// 父类
public class Animal {
    protected String name;
    protected int age;
    
    protected Animal(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    protected void eat() {
        System.out.println(name + " 正在吃东西");
    }
    
    protected void sleep() {
        System.out.println(name + " 正在睡觉");
    }
    
    // 受保护的方法，子类可以重写
    protected void makeSound() {
        System.out.println(name + " 发出声音");
    }
}

// 子类
public class Dog extends Animal {
    public Dog(String name, int age) {
        super(name, age); // 调用父类的protected构造方法
    }
    
    @Override
    protected void makeSound() {
        System.out.println(name + " 汪汪叫");
    }
    
    public void playWithOwner() {
        // 可以访问父类的protected成员
        System.out.println(name + " 和主人玩耍");
        eat(); // 调用父类的protected方法
    }
}
```

### 包访问权限（默认）

```java
// 文件1: PackageClass.java
package com.example.demo;

class PackageClass {
    String packageField = "包字段";
    
    void packageMethod() {
        System.out.println("包方法");
    }
}

// 文件2: SamePackageClass.java
package com.example.demo;

public class SamePackageClass {
    public void testAccess() {
        PackageClass obj = new PackageClass(); // 同一包，可以访问
        System.out.println(obj.packageField);  // 可以访问包字段
        obj.packageMethod();                   // 可以调用包方法
    }
}

// 文件3: DifferentPackageClass.java
package com.example.other;

import com.example.demo.PackageClass; // 编译错误！不能导入包私有类

public class DifferentPackageClass {
    public void testAccess() {
        // PackageClass obj = new PackageClass(); // 编译错误！
    }
}
```

### public 修饰符

```java
public class PublicExample {
    public String publicField = "公共字段";
    public static final String PUBLIC_CONSTANT = "公共常量";
    
    public PublicExample() {
        // 公共构造方法
    }
    
    public void publicMethod() {
        System.out.println("公共方法");
    }
    
    public static void staticPublicMethod() {
        System.out.println("静态公共方法");
    }
}

// 任何地方都可以访问
public class AnywhereAccess {
    public void testAccess() {
        PublicExample obj = new PublicExample();
        System.out.println(obj.publicField);
        obj.publicMethod();
        PublicExample.staticPublicMethod();
        System.out.println(PublicExample.PUBLIC_CONSTANT);
    }
}
```

## 其他修饰符

### static 修饰符

`static` 修饰符表示静态的，属于类而不是实例。

```java
public class StaticExample {
    // 静态字段
    private static int instanceCount = 0;
    public static final String CLASS_NAME = "StaticExample";
    
    // 实例字段
    private String name;
    private int id;
    
    // 静态初始化块
    static {
        System.out.println("静态初始化块执行");
        instanceCount = 0;
    }
    
    // 实例初始化块
    {
        instanceCount++;
        System.out.println("实例初始化块执行，当前实例数: " + instanceCount);
    }
    
    public StaticExample(String name) {
        this.name = name;
        this.id = instanceCount;
    }
    
    // 静态方法
    public static int getInstanceCount() {
        return instanceCount;
    }
    
    public static void printClassInfo() {
        System.out.println("类名: " + CLASS_NAME);
        System.out.println("实例数量: " + instanceCount);
        // System.out.println(name); // 编译错误！静态方法不能访问实例字段
    }
    
    // 实例方法
    public void printInstanceInfo() {
        System.out.println("实例名称: " + name);
        System.out.println("实例ID: " + id);
        System.out.println("总实例数: " + instanceCount); // 可以访问静态字段
    }
}
```

### abstract 修饰符

`abstract` 修饰符用于声明抽象类和抽象方法。

```java
// 抽象类
public abstract class Shape {
    protected String color;
    
    public Shape(String color) {
        this.color = color;
    }
    
    // 具体方法
    public void setColor(String color) {
        this.color = color;
    }
    
    public String getColor() {
        return color;
    }
    
    // 抽象方法
    public abstract double getArea();
    public abstract double getPerimeter();
    
    // 具体方法可以调用抽象方法
    public void printInfo() {
        System.out.println("颜色: " + color);
        System.out.println("面积: " + getArea());
        System.out.println("周长: " + getPerimeter());
    }
}

// 具体子类必须实现所有抽象方法
public class Circle extends Shape {
    private double radius;
    
    public Circle(String color, double radius) {
        super(color);
        this.radius = radius;
    }
    
    @Override
    public double getArea() {
        return Math.PI * radius * radius;
    }
    
    @Override
    public double getPerimeter() {
        return 2 * Math.PI * radius;
    }
}

public class Rectangle extends Shape {
    private double width;
    private double height;
    
    public Rectangle(String color, double width, double height) {
        super(color);
        this.width = width;
        this.height = height;
    }
    
    @Override
    public double getArea() {
        return width * height;
    }
    
    @Override
    public double getPerimeter() {
        return 2 * (width + height);
    }
}
```

### synchronized 修饰符

`synchronized` 修饰符用于线程同步。

```java
public class SynchronizedExample {
    private int count = 0;
    private final Object lock = new Object();
    
    // 同步方法
    public synchronized void incrementSync() {
        count++;
        System.out.println("同步方法 - 当前计数: " + count);
    }
    
    // 同步代码块
    public void incrementBlock() {
        synchronized (this) {
            count++;
            System.out.println("同步代码块 - 当前计数: " + count);
        }
    }
    
    // 使用自定义锁对象
    public void incrementWithLock() {
        synchronized (lock) {
            count++;
            System.out.println("自定义锁 - 当前计数: " + count);
        }
    }
    
    // 静态同步方法
    public static synchronized void staticSyncMethod() {
        System.out.println("静态同步方法");
    }
    
    public int getCount() {
        return count;
    }
}
```

### volatile 修饰符

`volatile` 修饰符确保变量的可见性。

```java
public class VolatileExample {
    private volatile boolean running = true;
    private volatile int counter = 0;
    
    public void start() {
        new Thread(() -> {
            while (running) {
                counter++;
                try {
                    Thread.sleep(100);
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                    break;
                }
            }
            System.out.println("工作线程结束，计数器值: " + counter);
        }).start();
    }
    
    public void stop() {
        running = false; // volatile确保这个改变对其他线程可见
        System.out.println("停止信号已发送");
    }
    
    public int getCounter() {
        return counter;
    }
}
```

## 修饰符组合使用

### 常见的修饰符组合

```java
public class ModifierCombinations {
    // public static final - 公共静态常量
    public static final String VERSION = "1.0.0";
    
    // private static final - 私有静态常量
    private static final int MAX_SIZE = 100;
    
    // private final - 私有实例常量
    private final String id;
    
    // public static - 公共静态方法
    public static void utilityMethod() {
        System.out.println("工具方法");
    }
    
    // private static - 私有静态方法
    private static void internalUtility() {
        System.out.println("内部工具方法");
    }
    
    // protected final - 受保护的最终方法
    protected final void templateMethod() {
        System.out.println("模板方法，不能被重写");
    }
    
    // public synchronized - 公共同步方法
    public synchronized void threadSafeMethod() {
        System.out.println("线程安全方法");
    }
    
    public ModifierCombinations(String id) {
        this.id = id;
    }
}
```

### 修饰符的使用原则

```java
public class BestPractices {
    // 1. 字段应该是私有的，通过方法访问
    private String name;
    private int age;
    
    // 2. 常量应该是public static final
    public static final int DEFAULT_AGE = 18;
    
    // 3. 工具方法应该是static
    public static String formatName(String firstName, String lastName) {
        return firstName + " " + lastName;
    }
    
    // 4. 构造方法的访问级别要合适
    public BestPractices(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    // 5. getter/setter方法通常是public
    public String getName() {
        return name;
    }
    
    public void setName(String name) {
        if (name != null && !name.trim().isEmpty()) {
            this.name = name;
        }
    }
    
    public int getAge() {
        return age;
    }
    
    public void setAge(int age) {
        if (age >= 0 && age <= 150) {
            this.age = age;
        }
    }
    
    // 6. 内部使用的方法应该是private
    private boolean isValidAge(int age) {
        return age >= 0 && age <= 150;
    }
    
    // 7. 可能被子类重写的方法使用protected
    protected void displayInfo() {
        System.out.println("姓名: " + name + ", 年龄: " + age);
    }
}
```

## 最佳实践总结

### 1. 常量定义

```java
// 好的做法
public static final String DATABASE_URL = "jdbc:mysql://localhost:3306/db";
public static final int MAX_RETRY_ATTEMPTS = 3;

// 更好的做法：使用枚举
public enum DatabaseType {
    MYSQL("com.mysql.cj.jdbc.Driver"),
    POSTGRESQL("org.postgresql.Driver"),
    ORACLE("oracle.jdbc.driver.OracleDriver");
    
    private final String driverClass;
    
    DatabaseType(String driverClass) {
        this.driverClass = driverClass;
    }
    
    public String getDriverClass() {
        return driverClass;
    }
}
```

### 2. 访问控制

```java
public class AccessControlBestPractice {
    // 字段私有化
    private String data;
    
    // 构造方法公开
    public AccessControlBestPractice(String data) {
        this.data = data;
    }
    
    // 提供必要的公共接口
    public String getData() {
        return data;
    }
    
    // 内部方法私有化
    private void validateData(String data) {
        if (data == null || data.isEmpty()) {
            throw new IllegalArgumentException("数据不能为空");
        }
    }
    
    // 子类可能需要的方法使用protected
    protected void processData() {
        validateData(data);
        // 处理逻辑
    }
}
```

### 3. 不可变对象设计

```java
public final class ImmutablePerson {
    private final String name;
    private final int age;
    private final List<String> hobbies;
    
    public ImmutablePerson(String name, int age, List<String> hobbies) {
        this.name = name;
        this.age = age;
        // 防御性复制
        this.hobbies = new ArrayList<>(hobbies);
    }
    
    public String getName() { return name; }
    public int getAge() { return age; }
    
    public List<String> getHobbies() {
        // 返回不可修改的视图
        return Collections.unmodifiableList(hobbies);
    }
}
```

---

理解和正确使用常量与修饰符是编写高质量Java代码的基础。合理的访问控制能够提高代码的安全性和可维护性，而恰当的常量定义能够让代码更加清晰和易于管理。记住要遵循最小权限原则，只暴露必要的接口。