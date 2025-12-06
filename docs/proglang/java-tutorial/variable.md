# 变量与作用域

变量是程序中用来存储数据的基本单元。在Java中，所有变量都必须先声明后使用，并且具有明确的类型和作用域。

## 变量声明与初始化

### 变量声明语法

```java
数据类型 变量名;
数据类型 变量名 = 初始值;
数据类型 变量名1, 变量名2, 变量名3;
```

### 基本示例

```java
// 声明变量
int age;
String name;
boolean isStudent;

// 声明并初始化
int score = 85;
String city = "北京";
double price = 99.99;

// 同时声明多个变量
int x, y, z;
int a = 10, b = 20, c = 30;
```

### 变量命名规则

1. **必须遵循的规则**：
   - 只能包含字母、数字、下划线(_)和美元符号($)
   - 不能以数字开头
   - 不能使用Java关键字
   - 区分大小写

2. **推荐的命名约定**：
   - 使用驼峰命名法（camelCase）
   - 变量名应该有意义，能够表达其用途
   - 布尔变量通常以is、has、can等开头

```java
// 好的变量名
int studentAge;
String firstName;
boolean isValid;
double totalPrice;
boolean hasPermission;
boolean canEdit;

// 不好的变量名
int a;          // 没有意义
String s1;      // 不够描述性
boolean flag;   // 不明确
```

## 变量的分类

### 按存储位置分类

#### 1. 局部变量（Local Variables）

定义在方法、构造方法或代码块内部的变量。

```java
public class Example {
    public void method() {
        int localVar = 10;        // 局部变量
        String message = "Hello"; // 局部变量
        
        if (localVar > 5) {
            boolean flag = true;  // 代码块内的局部变量
            System.out.println(flag);
        }
        // flag在这里不可访问
    }
}
```

**特点**：
- 必须显式初始化才能使用
- 作用域仅限于声明它的方法或代码块
- 存储在栈内存中
- 方法执行完毕后自动销毁

#### 2. 实例变量（Instance Variables）

定义在类中但在方法外的变量，属于类的实例。

```java
public class Student {
    // 实例变量
    private String name;
    private int age;
    private double score;
    
    public void displayInfo() {
        // 可以直接访问实例变量
        System.out.println("姓名: " + name);
        System.out.println("年龄: " + age);
        System.out.println("分数: " + score);
    }
}
```

**特点**：
- 有默认初始值
- 每个对象实例都有自己的一份拷贝
- 存储在堆内存中
- 对象被垃圾回收时销毁

#### 3. 类变量（Class Variables/Static Variables）

使用static关键字修饰的变量，属于类本身。

```java
public class Counter {
    // 类变量
    private static int count = 0;
    public static final String COMPANY_NAME = "ABC公司";
    
    // 实例变量
    private String name;
    
    public Counter(String name) {
        this.name = name;
        count++;  // 每创建一个实例，计数器加1
    }
    
    public static int getCount() {
        return count;
    }
}
```

**特点**：
- 被所有实例共享
- 可以通过类名直接访问
- 在类第一次加载时初始化
- 程序结束时销毁

### 默认初始值

| 数据类型 | 默认值 |
|----------|--------|
| byte | 0 |
| short | 0 |
| int | 0 |
| long | 0L |
| float | 0.0f |
| double | 0.0d |
| char | '\u0000' |
| boolean | false |
| 引用类型 | null |

```java
public class DefaultValues {
    // 实例变量有默认值
    private int number;        // 0
    private String text;       // null
    private boolean flag;      // false
    
    public void testLocalVariables() {
        int localNumber;       // 没有默认值，必须初始化
        // System.out.println(localNumber); // 编译错误！
        
        localNumber = 10;      // 初始化后才能使用
        System.out.println(localNumber);
    }
}
```

## 变量作用域

作用域决定了变量在程序中的可见性和生命周期。

### 1. 方法作用域

```java
public class MethodScope {
    public void method1() {
        int x = 10;
        System.out.println(x); // 可以访问
    }
    
    public void method2() {
        // System.out.println(x); // 编译错误！x不在作用域内
    }
}
```

### 2. 代码块作用域

```java
public class BlockScope {
    public void testBlockScope() {
        int x = 10;
        
        if (x > 5) {
            int y = 20;        // y只在if块内可见
            System.out.println(x); // 可以访问外层的x
            System.out.println(y); // 可以访问y
        }
        
        System.out.println(x);     // 可以访问x
        // System.out.println(y);  // 编译错误！y不在作用域内
        
        for (int i = 0; i < 5; i++) {
            int z = i * 2;         // z只在for循环内可见
            System.out.println(z);
        }
        // System.out.println(i);  // 编译错误！i不在作用域内
        // System.out.println(z);  // 编译错误！z不在作用域内
    }
}
```

### 3. 类作用域

```java
public class ClassScope {
    private int instanceVar = 10;     // 实例变量
    private static int classVar = 20; // 类变量
    
    public void method() {
        int localVar = 30;            // 局部变量
        
        // 都可以访问
        System.out.println(instanceVar);
        System.out.println(classVar);
        System.out.println(localVar);
    }
    
    public static void staticMethod() {
        // System.out.println(instanceVar); // 编译错误！静态方法不能访问实例变量
        System.out.println(classVar);       // 可以访问类变量
        
        int localVar = 40;
        System.out.println(localVar);       // 可以访问局部变量
    }
}
```

## 变量的生命周期

### 局部变量的生命周期

```java
public class LocalVariableLifecycle {
    public void demonstrateLifecycle() {
        System.out.println("方法开始");
        
        {
            int blockVar = 100;
            System.out.println("代码块内: " + blockVar);
        } // blockVar在这里销毁
        
        for (int i = 0; i < 3; i++) {
            int loopVar = i * 10;
            System.out.println("循环内: " + loopVar);
        } // i和loopVar在这里销毁
        
        System.out.println("方法结束");
    } // 所有局部变量在这里销毁
}
```

### 实例变量的生命周期

```java
public class InstanceVariableLifecycle {
    private String name;
    private int value;
    
    public InstanceVariableLifecycle(String name, int value) {
        this.name = name;
        this.value = value;
        System.out.println("对象创建: " + name);
    }
    
    @Override
    protected void finalize() throws Throwable {
        System.out.println("对象销毁: " + name);
        super.finalize();
    }
}

// 使用示例
public class Test {
    public static void main(String[] args) {
        InstanceVariableLifecycle obj1 = new InstanceVariableLifecycle("对象1", 100);
        InstanceVariableLifecycle obj2 = new InstanceVariableLifecycle("对象2", 200);
        
        obj1 = null; // 对象1变为可回收状态
        obj2 = null; // 对象2变为可回收状态
        
        System.gc(); // 建议进行垃圾回收
    }
}
```

## 变量的初始化

### 显式初始化

```java
public class ExplicitInitialization {
    // 实例变量的显式初始化
    private int count = 0;
    private String name = "默认名称";
    private List<String> items = new ArrayList<>();
    
    // 静态变量的显式初始化
    private static final double PI = 3.14159;
    private static int instanceCount = 0;
    
    public void method() {
        // 局部变量必须显式初始化
        int localVar = 10;
        String message = "Hello";
    }
}
```

### 构造方法初始化

```java
public class ConstructorInitialization {
    private final String name;     // final变量必须初始化
    private final int id;
    private String description;
    
    public ConstructorInitialization(String name, int id) {
        this.name = name;          // 初始化final变量
        this.id = id;              // 初始化final变量
        this.description = "默认描述";
    }
    
    public ConstructorInitialization(String name, int id, String description) {
        this.name = name;
        this.id = id;
        this.description = description;
    }
}
```

### 初始化块

```java
public class InitializationBlocks {
    private int value;
    private String name;
    private static int staticValue;
    
    // 静态初始化块（类加载时执行一次）
    static {
        staticValue = 100;
        System.out.println("静态初始化块执行");
    }
    
    // 实例初始化块（每次创建对象时执行）
    {
        value = 50;
        name = "默认名称";
        System.out.println("实例初始化块执行");
    }
    
    public InitializationBlocks() {
        System.out.println("构造方法执行");
    }
    
    public InitializationBlocks(String name) {
        this.name = name;
        System.out.println("带参构造方法执行");
    }
}
```

## final 变量

final关键字用于声明常量，一旦初始化就不能修改。

### final 局部变量

```java
public void testFinalLocalVariable() {
    final int CONSTANT = 100;
    // CONSTANT = 200; // 编译错误！不能修改final变量
    
    final List<String> list = new ArrayList<>();
    list.add("item1");     // 可以修改对象内容
    list.add("item2");
    // list = new ArrayList<>(); // 编译错误！不能重新赋值
}
```

### final 实例变量

```java
public class FinalInstanceVariable {
    private final String name;           // 必须在构造方法中初始化
    private final int id = 1001;         // 声明时初始化
    private final List<String> items;    // 必须在构造方法中初始化
    
    public FinalInstanceVariable(String name) {
        this.name = name;
        this.items = new ArrayList<>();
    }
}
```

### final 静态变量（常量）

```java
public class Constants {
    public static final String COMPANY_NAME = "ABC公司";
    public static final int MAX_SIZE = 1000;
    public static final double PI = 3.14159265359;
    
    // 静态final变量也可以在静态初始化块中初始化
    public static final String VERSION;
    
    static {
        VERSION = "1.0.0";
    }
}
```

## 变量的最佳实践

### 1. 命名约定

```java
// 好的命名
int studentCount;
String firstName;
boolean isActive;
double totalAmount;

// 常量使用全大写
public static final int MAX_RETRY_COUNT = 3;
public static final String DEFAULT_ENCODING = "UTF-8";
```

### 2. 作用域最小化

```java
public class ScopeMinimization {
    public void processData() {
        // 不好：作用域过大
        int result;
        String message;
        boolean success;
        
        if (someCondition()) {
            result = calculateResult();
            message = "计算成功";
            success = true;
        } else {
            result = 0;
            message = "计算失败";
            success = false;
        }
        
        // 更好：在需要时声明
        if (someCondition()) {
            int result = calculateResult();
            String message = "计算成功";
            boolean success = true;
            handleSuccess(result, message);
        } else {
            String message = "计算失败";
            handleFailure(message);
        }
    }
}
```

### 3. 初始化最佳实践

```java
public class InitializationBestPractices {
    // 在声明时初始化简单值
    private int count = 0;
    private String status = "INACTIVE";
    
    // 复杂对象在构造方法中初始化
    private List<String> items;
    private Map<String, Object> properties;
    
    public InitializationBestPractices() {
        this.items = new ArrayList<>();
        this.properties = new HashMap<>();
    }
    
    public void processItems() {
        // 局部变量在使用前初始化
        List<String> processedItems = new ArrayList<>();
        
        for (String item : items) {
            String processed = processItem(item);
            processedItems.add(processed);
        }
    }
}
```

### 4. 使用final提高代码质量

```java
public class FinalBestPractices {
    // 不会改变的字段声明为final
    private final String id;
    private final long createdTime;
    
    public FinalBestPractices(String id) {
        this.id = id;
        this.createdTime = System.currentTimeMillis();
    }
    
    public void processData(final List<String> data) {
        // 参数声明为final，防止意外修改引用
        final int size = data.size();
        
        for (final String item : data) {
            // 循环变量声明为final
            processItem(item);
        }
    }
}
```

---

理解变量的声明、初始化、作用域和生命周期是Java编程的基础。正确使用变量不仅能让代码更清晰，还能避免许多潜在的错误。记住要遵循命名约定，最小化作用域，合理使用final关键字。