# 文件操作

Java 提供了丰富的 API 用于文件和目录的操作，主要包括 `java.io` 和 `java.nio` 包。本章将介绍文件的基本读写、目录操作以及文件属性的管理。

## 1. 文件读写

### 使用 `java.io`
```java
import java.io.*;

public class FileExample {
    public static void main(String[] args) {
        // 写入文件
        try (FileWriter writer = new FileWriter("example.txt")) {
            writer.write("Hello, World!");
        } catch (IOException e) {
            e.printStackTrace();
        }

        // 读取文件
        try (BufferedReader reader = new BufferedReader(new FileReader("example.txt"))) {
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

### 使用 `java.nio`
```java
import java.nio.file.*;
import java.util.List;

public class NioExample {
    public static void main(String[] args) {
        // 写入文件
        Path path = Paths.get("example.txt");
        try {
            Files.write(path, "Hello, NIO!".getBytes());
        } catch (IOException e) {
            e.printStackTrace();
        }

        // 读取文件
        try {
            List<String> lines = Files.readAllLines(path);
            lines.forEach(System.out::println);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

## 2. 目录操作

### 创建目录
```java
Path dir = Paths.get("myDir");
try {
    Files.createDirectory(dir);
} catch (IOException e) {
    e.printStackTrace();
}
```

### 遍历目录
```java
try (DirectoryStream<Path> stream = Files.newDirectoryStream(Paths.get("."))) {
    for (Path file : stream) {
        System.out.println(file.getFileName());
    }
} catch (IOException e) {
    e.printStackTrace();
}
```

## 3. 文件属性

### 检查文件是否存在
```java
Path path = Paths.get("example.txt");
boolean exists = Files.exists(path);
System.out.println("File exists: " + exists);
```

### 获取文件大小
```java
try {
    long size = Files.size(path);
    System.out.println("File size: " + size + " bytes");
} catch (IOException e) {
    e.printStackTrace();
}
```

## 4. 临时文件

```java
try {
    Path tempFile = Files.createTempFile("temp", ".txt");
    System.out.println("Temp file: " + tempFile);
} catch (IOException e) {
    e.printStackTrace();
}
```

## 5. 文件锁

```java
try (RandomAccessFile file = new RandomAccessFile("example.txt", "rw");
     FileChannel channel = file.getChannel();
     FileLock lock = channel.lock()) {
    // 操作文件
} catch (IOException e) {
    e.printStackTrace();
}
```

## 总结

Java 提供了多种文件操作方式，`java.io` 适合简单场景，而 `java.nio` 提供了更高效和灵活的功能。