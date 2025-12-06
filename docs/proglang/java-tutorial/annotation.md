# 注解

注解（Annotation）是 Java 提供的一种元数据形式，用于为代码添加额外的信息，这些信息可以被编译器、开发工具或运行时环境使用。

## 1. 内置注解

Java 提供了一些内置注解：
- `@Override`：标记方法覆盖父类方法。
- `@Deprecated`：标记方法或类已过时。
- `@SuppressWarnings`：抑制编译器警告。

### 示例
```java
class Parent {
    void display() {
        System.out.println("Parent");
    }
}

class Child extends Parent {
    @Override
    void display() {
        System.out.println("Child");
    }

    @Deprecated
    void oldMethod() {
        System.out.println("Deprecated method");
    }
}
```

## 2. 自定义注解

通过 `@interface` 关键字可以定义自定义注解。

### 示例
```java
import java.lang.annotation.*;

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
public @interface MyAnnotation {
    String value() default "default";
    int priority() default 0;
}
```

## 3. 元注解

元注解用于注解其他注解：
- `@Retention`：指定注解的保留策略（SOURCE/CLASS/RUNTIME）。
- `@Target`：指定注解可以应用的目标（类/方法/字段等）。
- `@Documented`：标记注解包含在 Javadoc 中。
- `@Inherited`：标记注解可以被子类继承。

## 4. 注解处理

通过反射可以在运行时读取注解信息。

### 示例
```java
import java.lang.reflect.Method;

public class AnnotationProcessor {
    public static void processAnnotations(Object obj) {
        Class<?> clazz = obj.getClass();
        for (Method method : clazz.getMethods()) {
            if (method.isAnnotationPresent(MyAnnotation.class)) {
                MyAnnotation annotation = method.getAnnotation(MyAnnotation.class);
                System.out.println("Method: " + method.getName() + ", Value: " + annotation.value());
            }
        }
    }
}
```

## 5. 常见应用场景

- 框架配置（如 Spring 的 `@Autowired`）。
- 代码生成（如 Lombok）。
- 测试框架（如 JUnit 的 `@Test`）。

## 总结

注解是 Java 强大的元编程工具，合理使用可以简化代码并提高可维护性。