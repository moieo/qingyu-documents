# 模块系统

Java 模块系统（JPMS，Java Platform Module System）是 Java 9 引入的一项特性，用于实现更强的封装性和更好的依赖管理。本章将介绍模块的基本概念、使用方法以及常见场景。

## 1. 模块的基本概念

模块是一个包含代码和资源的自描述单元，通过 `module-info.java` 文件定义。

### 示例：模块定义
```java
module com.example.myapp {
    requires java.base; // 隐式依赖
    requires java.sql;
    exports com.example.myapp.api;
}
```

## 2. 模块的关键字

- `requires`：声明模块依赖。
- `exports`：导出包供其他模块使用。
- `opens`：开放包供反射访问。
- `provides` 和 `uses`：用于服务加载。

## 3. 模块的打包与运行

### 编译模块
```bash
javac -d out --module-source-path src $(find src -name "*.java")
```

### 打包模块
```bash
jar --create --file myapp.jar --main-class com.example.myapp.Main -C out/com.example.myapp .
```

### 运行模块
```bash
java --module-path myapp.jar --module com.example.myapp
```

## 4. 模块的依赖管理

### 示例：依赖传递
```java
module com.example.myapp {
    requires transitive com.example.utils;
}
```

## 5. 模块与反射

默认情况下，模块内的包对其他模块不可通过反射访问。可以使用 `opens` 开放包。

### 示例
```java
module com.example.myapp {
    opens com.example.internal;
}
```

## 6. 服务加载

模块系统支持通过 `provides` 和 `uses` 实现服务加载机制。

### 示例
```java
module com.example.provider {
    provides com.example.spi.MyService with com.example.provider.MyServiceImpl;
}

module com.example.consumer {
    uses com.example.spi.MyService;
}
```

## 7. 常见问题

- **未命名模块**：传统类路径下的代码会被视为未命名模块。
- **自动模块**：非模块化的 JAR 文件可以作为自动模块使用。

## 8. 总结

Java 模块系统提供了更强的封装性和依赖管理能力，适合大型项目的开发和维护。