# 输入输出 (I/O)

Java 提供了丰富的 I/O 类库，用于处理文件、网络、控制台等输入输出操作。本章将介绍 Java 中常用的 I/O 操作。

## 1. 文件读写

Java 的 `java.io` 包提供了 `File`、`FileInputStream`、`FileOutputStream` 等类，用于文件操作。

### 示例：读取文件内容
```java
import java.io.File;
import java.io.FileReader;
import java.io.BufferedReader;
import java.io.IOException;

public class ReadFileExample {
    public static void main(String[] args) {
        File file = new File("example.txt");
        try (BufferedReader reader = new BufferedReader(new FileReader(file))) {
            String line;
            while ((line = reader.readLine()) != null) {
                System.out.println(line);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

### 示例：写入文件内容
```java
import java.io.File;
import java.io.FileWriter;
import java.io.BufferedWriter;
import java.io.IOException;

public class WriteFileExample {
    public static void main(String[] args) {
        File file = new File("output.txt");
        try (BufferedWriter writer = new BufferedWriter(new FileWriter(file))) {
            writer.write("Hello, Java I/O!");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

## 2. 标准输入输出

Java 的 `System.in` 和 `System.out` 分别用于标准输入和输出。

### 示例：从控制台读取输入
```java
import java.util.Scanner;

public class ConsoleInputExample {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter your name: ");
        String name = scanner.nextLine();
        System.out.println("Hello, " + name + "!");
    }
}
```

## 3. 序列化与反序列化

Java 的 `ObjectInputStream` 和 `ObjectOutputStream` 类支持对象的序列化和反序列化。

### 示例：对象序列化
```java
import java.io.*;

public class SerializationExample {
    public static void main(String[] args) {
        try (ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream("object.dat"))) {
            oos.writeObject(new Person("Alice", 30));
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}

class Person implements Serializable {
    private String name;
    private int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    @Override
    public String toString() {
        return "Person{name='" + name + "', age=" + age + "}";
    }
}
```

## 4. NIO 包

Java 的 `java.nio` 包提供了更高效的 I/O 操作，如 `Files`、`Paths` 等工具类。

### 示例：使用 NIO 读取文件
```java
import java.nio.file.Files;
import java.nio.file.Paths;
import java.io.IOException;

public class NIOExample {
    public static void main(String[] args) {
        try {
            String content = new String(Files.readAllBytes(Paths.get("example.txt")));
            System.out.println(content);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

## 总结

Java 的 I/O 操作非常灵活，支持多种输入输出场景。通过 `java.io` 和 `java.nio` 包，可以高效地完成文件读写、网络通信等任务。