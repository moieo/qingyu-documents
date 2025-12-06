# 反射

反射（Reflection）是 Java 提供的一种机制，允许程序在运行时检查和操作类、方法、字段等元数据。本章将介绍反射的基本用法和常见应用场景。

## 1. 反射的基本概念

反射的核心类是 `java.lang.Class`，它表示一个类或接口的运行时信息。

### 获取 Class 对象
```java
// 通过类名获取
Class<?> clazz = Class.forName("java.lang.String");

// 通过对象获取
String str = "Hello";
Class<?> clazz = str.getClass();

// 通过字面量获取
Class<?> clazz = String.class;
```

## 2. 获取类的信息

### 获取类名
```java
String className = clazz.getName();
System.out.println(className); // java.lang.String
```

### 获取父类
```java
Class<?> superClass = clazz.getSuperclass();
System.out.println(superClass.getName()); // java.lang.Object
```

### 获取接口
```java
Class<?>[] interfaces = clazz.getInterfaces();
for (Class<?> iface : interfaces) {
    System.out.println(iface.getName());
}
```

## 3. 操作字段

### 获取字段
```java
Field[] fields = clazz.getDeclaredFields();
for (Field field : fields) {
    System.out.println(field.getName());
}
```

### 设置字段值
```java
Object obj = clazz.getDeclaredConstructor().newInstance();
Field field = clazz.getDeclaredField("value");
field.setAccessible(true);
field.set(obj, "Hello".getBytes());
```

## 4. 操作方法

### 获取方法
```java
Method[] methods = clazz.getDeclaredMethods();
for (Method method : methods) {
    System.out.println(method.getName());
}
```

### 调用方法
```java
Method method = clazz.getMethod("substring", int.class, int.class);
String result = (String) method.invoke("Hello, World!", 0, 5);
System.out.println(result); // Hello
```

## 5. 构造对象

### 调用构造方法
```java
Constructor<?> constructor = clazz.getConstructor(String.class);
Object obj = constructor.newInstance("Hello");
System.out.println(obj); // Hello
```

## 6. 反射的应用场景

- **动态代理**：实现 AOP（面向切面编程）。
- **框架开发**：如 Spring 的依赖注入。
- **测试工具**：如 JUnit 的测试用例加载。

## 7. 反射的局限性

- **性能开销**：反射操作比直接调用慢。
- **安全限制**：可能绕过访问控制（如私有字段）。

## 8. 总结

反射是 Java 强大的元编程工具，合理使用可以实现灵活的运行时行为，但需注意性能和安全性。