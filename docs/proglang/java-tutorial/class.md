# 类与对象

类和对象是面向对象编程的核心概念。类是对象的模板或蓝图，对象是类的实例。理解类和对象的关系是掌握Java面向对象编程的基础。

## 类的概念

类（Class）是一种用户定义的数据类型，它描述了一组对象的共同特征和行为。类定义了对象的属性（字段）和方法。

### 类的基本结构

```java
public class ClassName {
    // 字段（属性）
    private dataType fieldName;
    
    // 构造方法
    public ClassName() {
        // 初始化代码
    }
    
    // 方法
    public returnType methodName() {
        // 方法体
        return value;
    }
}
```

### 简单的类定义示例

```java
public class Student {
    // 字段（实例变量）
    private String name;
    private int age;
    private String studentId;
    private double score;
    
    // 构造方法
    public Student() {
        // 默认构造方法
    }
    
    public Student(String name, int age, String studentId) {
        this.name = name;
        this.age = age;
        this.studentId = studentId;
        this.score = 0.0;
    }
    
    // 方法
    public void study() {
        System.out.println(name + " 正在学习");
    }
    
    public void takeExam(double score) {
        this.score = score;
        System.out.println(name + " 考试得分: " + score);
    }
    
    public void displayInfo() {
        System.out.println("姓名: " + name);
        System.out.println("年龄: " + age);
        System.out.println("学号: " + studentId);
        System.out.println("分数: " + score);
    }
    
    // Getter和Setter方法
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
        if (age > 0 && age < 150) {
            this.age = age;
        }
    }
}
```

## 对象的创建和使用

对象是类的实例，通过 `new` 关键字创建。

### 创建对象

```java
public class StudentTest {
    public static void main(String[] args) {
        // 使用默认构造方法创建对象
        Student student1 = new Student();
        
        // 使用带参数的构造方法创建对象
        Student student2 = new Student("张三", 20, "2023001");
        
        // 设置student1的属性
        student1.setName("李四");
        student1.setAge(19);
        
        // 调用对象的方法
        student1.study();
        student1.takeExam(85.5);
        student1.displayInfo();
        
        System.out.println("---");
        
        student2.study();
        student2.takeExam(92.0);
        student2.displayInfo();
    }
}
```

### 对象的内存分配

```java
public class ObjectMemory {
    public static void main(String[] args) {
        // 创建对象时的内存分配
        Student s1 = new Student("王五", 21, "2023002");
        Student s2 = new Student("赵六", 22, "2023003");
        Student s3 = s1; // s3和s1指向同一个对象
        
        System.out.println("s1的姓名: " + s1.getName());
        System.out.println("s3的姓名: " + s3.getName());
        
        // 通过s3修改对象
        s3.setName("王五五");
        
        System.out.println("修改后:");
        System.out.println("s1的姓名: " + s1.getName()); // 也会改变
        System.out.println("s3的姓名: " + s3.getName());
        
        // 对象比较
        System.out.println("s1 == s2: " + (s1 == s2)); // false，不同对象
        System.out.println("s1 == s3: " + (s1 == s3)); // true，同一对象
    }
}
```

## 字段（属性）

字段是类中定义的变量，用于存储对象的状态信息。

### 实例字段

每个对象都有自己的实例字段副本。

```java
public class Car {
    // 实例字段
    private String brand;      // 品牌
    private String model;      // 型号
    private int year;          // 年份
    private double price;      // 价格
    private boolean isRunning; // 是否在运行
    
    public Car(String brand, String model, int year, double price) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.price = price;
        this.isRunning = false; // 默认不在运行
    }
    
    public void start() {
        if (!isRunning) {
            isRunning = true;
            System.out.println(brand + " " + model + " 启动了");
        } else {
            System.out.println("车辆已经在运行中");
        }
    }
    
    public void stop() {
        if (isRunning) {
            isRunning = false;
            System.out.println(brand + " " + model + " 停止了");
        } else {
            System.out.println("车辆已经停止");
        }
    }
    
    // Getter方法
    public String getBrand() { return brand; }
    public String getModel() { return model; }
    public int getYear() { return year; }
    public double getPrice() { return price; }
    public boolean isRunning() { return isRunning; }
}
```

### 类字段（静态字段）

类字段属于类本身，被所有实例共享。

```java
public class Counter {
    // 类字段（静态字段）
    private static int totalCount = 0;
    public static final String COMPANY_NAME = "ABC公司";
    
    // 实例字段
    private int instanceId;
    private String name;
    
    public Counter(String name) {
        this.name = name;
        totalCount++;           // 每创建一个实例，总数加1
        this.instanceId = totalCount;
    }
    
    // 静态方法
    public static int getTotalCount() {
        return totalCount;
    }
    
    // 实例方法
    public void displayInfo() {
        System.out.println("实例ID: " + instanceId);
        System.out.println("名称: " + name);
        System.out.println("总实例数: " + totalCount);
        System.out.println("公司名称: " + COMPANY_NAME);
    }
}

// 使用示例
public class CounterTest {
    public static void main(String[] args) {
        System.out.println("初始总数: " + Counter.getTotalCount());
        
        Counter c1 = new Counter("计数器1");
        Counter c2 = new Counter("计数器2");
        Counter c3 = new Counter("计数器3");
        
        c1.displayInfo();
        System.out.println("---");
        c2.displayInfo();
        System.out.println("---");
        c3.displayInfo();
        
        System.out.println("最终总数: " + Counter.getTotalCount());
    }
}
```

## 方法

方法定义了对象的行为，是类中的函数。

### 实例方法

实例方法属于对象实例，可以访问实例字段和静态字段。

```java
public class Calculator {
    private double result;
    
    public Calculator() {
        this.result = 0.0;
    }
    
    // 实例方法
    public void add(double value) {
        result += value;
    }
    
    public void subtract(double value) {
        result -= value;
    }
    
    public void multiply(double value) {
        result *= value;
    }
    
    public void divide(double value) {
        if (value != 0) {
            result /= value;
        } else {
            System.out.println("错误：除数不能为零");
        }
    }
    
    public void clear() {
        result = 0.0;
    }
    
    public double getResult() {
        return result;
    }
    
    public void displayResult() {
        System.out.println("当前结果: " + result);
    }
}
```

### 静态方法

静态方法属于类本身，不能访问实例字段，只能访问静态字段。

```java
public class MathUtils {
    // 静态常量
    public static final double PI = 3.14159265359;
    
    // 静态方法
    public static int add(int a, int b) {
        return a + b;
    }
    
    public static double add(double a, double b) {
        return a + b;
    }
    
    public static int max(int a, int b) {
        return (a > b) ? a : b;
    }
    
    public static int max(int a, int b, int c) {
        return max(max(a, b), c);
    }
    
    public static double circleArea(double radius) {
        return PI * radius * radius;
    }
    
    public static boolean isPrime(int number) {
        if (number <= 1) return false;
        if (number <= 3) return true;
        if (number % 2 == 0 || number % 3 == 0) return false;
        
        for (int i = 5; i * i <= number; i += 6) {
            if (number % i == 0 || number % (i + 2) == 0) {
                return false;
            }
        }
        return true;
    }
}

// 使用示例
public class MathUtilsTest {
    public static void main(String[] args) {
        // 调用静态方法，不需要创建对象
        int sum = MathUtils.add(10, 20);
        System.out.println("10 + 20 = " + sum);
        
        double area = MathUtils.circleArea(5.0);
        System.out.println("半径为5的圆面积: " + area);
        
        int maximum = MathUtils.max(15, 25, 35);
        System.out.println("15, 25, 35的最大值: " + maximum);
        
        boolean isPrime = MathUtils.isPrime(17);
        System.out.println("17是质数吗? " + isPrime);
    }
}
```

## 构造方法

构造方法是特殊的方法，用于初始化对象。

### 默认构造方法

```java
public class Person {
    private String name;
    private int age;
    
    // 默认构造方法
    public Person() {
        this.name = "未知";
        this.age = 0;
        System.out.println("调用默认构造方法");
    }
    
    public void displayInfo() {
        System.out.println("姓名: " + name + ", 年龄: " + age);
    }
    
    // Setter方法
    public void setName(String name) { this.name = name; }
    public void setAge(int age) { this.age = age; }
}
```

### 带参数的构造方法

```java
public class Book {
    private String title;
    private String author;
    private double price;
    private int pages;
    
    // 带参数的构造方法
    public Book(String title, String author, double price, int pages) {
        this.title = title;
        this.author = author;
        this.price = price;
        this.pages = pages;
        System.out.println("创建书籍: " + title);
    }
    
    // 重载构造方法
    public Book(String title, String author) {
        this(title, author, 0.0, 0); // 调用其他构造方法
        System.out.println("使用简化构造方法");
    }
    
    public Book(String title) {
        this(title, "未知作者"); // 调用其他构造方法
    }
    
    public void displayInfo() {
        System.out.println("书名: " + title);
        System.out.println("作者: " + author);
        System.out.println("价格: " + price);
        System.out.println("页数: " + pages);
    }
    
    // Getter方法
    public String getTitle() { return title; }
    public String getAuthor() { return author; }
    public double getPrice() { return price; }
    public int getPages() { return pages; }
}

// 使用示例
public class BookTest {
    public static void main(String[] args) {
        Book book1 = new Book("Java编程思想", "Bruce Eckel", 89.0, 880);
        Book book2 = new Book("设计模式", "GoF");
        Book book3 = new Book("算法导论");
        
        book1.displayInfo();
        System.out.println("---");
        book2.displayInfo();
        System.out.println("---");
        book3.displayInfo();
    }
}
```

## this 关键字

`this` 关键字引用当前对象实例。

### this 的用法

```java
public class Employee {
    private String name;
    private int id;
    private double salary;
    private String department;
    
    public Employee(String name, int id, double salary, String department) {
        // 使用this区分参数和字段
        this.name = name;
        this.id = id;
        this.salary = salary;
        this.department = department;
    }
    
    // 使用this调用其他构造方法
    public Employee(String name, int id) {
        this(name, id, 0.0, "未分配"); // 必须是第一行
    }
    
    public Employee(String name) {
        this(name, 0);
    }
    
    // 使用this返回当前对象（方法链）
    public Employee setName(String name) {
        this.name = name;
        return this;
    }
    
    public Employee setSalary(double salary) {
        this.salary = salary;
        return this;
    }
    
    public Employee setDepartment(String department) {
        this.department = department;
        return this;
    }
    
    // 将当前对象作为参数传递
    public void compareWith(Employee other) {
        if (this.salary > other.salary) {
            System.out.println(this.name + " 的薪水比 " + other.name + " 高");
        } else if (this.salary < other.salary) {
            System.out.println(this.name + " 的薪水比 " + other.name + " 低");
        } else {
            System.out.println(this.name + " 和 " + other.name + " 的薪水相同");
        }
    }
    
    public void displayInfo() {
        System.out.println("员工信息:");
        System.out.println("姓名: " + this.name);
        System.out.println("ID: " + this.id);
        System.out.println("薪水: " + this.salary);
        System.out.println("部门: " + this.department);
    }
    
    // Getter方法
    public String getName() { return this.name; }
    public int getId() { return this.id; }
    public double getSalary() { return this.salary; }
    public String getDepartment() { return this.department; }
}

// 使用示例
public class EmployeeTest {
    public static void main(String[] args) {
        Employee emp1 = new Employee("张三", 1001, 8000, "开发部");
        Employee emp2 = new Employee("李四", 1002);
        
        // 方法链调用
        emp2.setName("李四四")
            .setSalary(7500)
            .setDepartment("测试部");
        
        emp1.displayInfo();
        System.out.println("---");
        emp2.displayInfo();
        System.out.println("---");
        
        emp1.compareWith(emp2);
    }
}
```

## 访问修饰符

访问修饰符控制类、字段和方法的可见性。

| 修饰符 | 同一类 | 同一包 | 子类 | 不同包 |
|--------|--------|--------|------|--------|
| public | ✓ | ✓ | ✓ | ✓ |
| protected | ✓ | ✓ | ✓ | ✗ |
| 默认(package) | ✓ | ✓ | ✗ | ✗ |
| private | ✓ | ✗ | ✗ | ✗ |

```java
public class AccessModifierExample {
    public String publicField = "公共字段";
    protected String protectedField = "受保护字段";
    String packageField = "包字段";
    private String privateField = "私有字段";
    
    public void publicMethod() {
        System.out.println("公共方法");
        // 在同一类中可以访问所有字段
        System.out.println(publicField);
        System.out.println(protectedField);
        System.out.println(packageField);
        System.out.println(privateField);
    }
    
    protected void protectedMethod() {
        System.out.println("受保护方法");
    }
    
    void packageMethod() {
        System.out.println("包方法");
    }
    
    private void privateMethod() {
        System.out.println("私有方法");
    }
    
    public void testAccess() {
        // 在同一类中可以调用所有方法
        publicMethod();
        protectedMethod();
        packageMethod();
        privateMethod();
    }
}
```

## 类的最佳实践

### 1. 封装原则

```java
public class BankAccount {
    private String accountNumber;
    private double balance;
    private String ownerName;
    
    public BankAccount(String accountNumber, String ownerName) {
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = 0.0;
    }
    
    // 提供安全的访问方法
    public boolean deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("存款成功，当前余额: " + balance);
            return true;
        } else {
            System.out.println("存款金额必须大于0");
            return false;
        }
    }
    
    public boolean withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            System.out.println("取款成功，当前余额: " + balance);
            return true;
        } else {
            System.out.println("取款失败：金额无效或余额不足");
            return false;
        }
    }
    
    // 只提供必要的getter方法
    public double getBalance() {
        return balance;
    }
    
    public String getAccountNumber() {
        return accountNumber;
    }
    
    public String getOwnerName() {
        return ownerName;
    }
}
```

### 2. 单一职责原则

```java
// 好的设计：每个类只负责一个职责
public class Student {
    private String name;
    private String studentId;
    private int age;
    
    // 构造方法和基本的getter/setter
    public Student(String name, String studentId, int age) {
        this.name = name;
        this.studentId = studentId;
        this.age = age;
    }
    
    // 基本信息相关方法
    public String getName() { return name; }
    public String getStudentId() { return studentId; }
    public int getAge() { return age; }
}

public class Grade {
    private String studentId;
    private String subject;
    private double score;
    
    public Grade(String studentId, String subject, double score) {
        this.studentId = studentId;
        this.subject = subject;
        this.score = score;
    }
    
    // 成绩相关方法
    public String getStudentId() { return studentId; }
    public String getSubject() { return subject; }
    public double getScore() { return score; }
    
    public String getGradeLevel() {
        if (score >= 90) return "A";
        else if (score >= 80) return "B";
        else if (score >= 70) return "C";
        else if (score >= 60) return "D";
        else return "F";
    }
}
```

### 3. 不可变对象

```java
public final class Point {
    private final int x;
    private final int y;
    
    public Point(int x, int y) {
        this.x = x;
        this.y = y;
    }
    
    public int getX() { return x; }
    public int getY() { return y; }
    
    // 返回新对象而不是修改当前对象
    public Point move(int deltaX, int deltaY) {
        return new Point(x + deltaX, y + deltaY);
    }
    
    @Override
    public String toString() {
        return "Point(" + x + ", " + y + ")";
    }
    
    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        Point point = (Point) obj;
        return x == point.x && y == point.y;
    }
    
    @Override
    public int hashCode() {
        return 31 * x + y;
    }
}
```

---

类和对象是Java面向对象编程的基础。通过合理设计类的结构、正确使用访问修饰符、遵循封装原则，可以创建出高质量、易维护的代码。记住要让类的职责单一、接口简洁、实现细节隐藏。