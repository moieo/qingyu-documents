# 枚举（Enum）

枚举是 Java 中一种特殊的类，用于定义一组固定的常量。枚举类型提供了一种类型安全的方式来表示一组相关的常量。

## 定义枚举

```java
public enum Day {
    MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY
}
```

## 使用枚举

枚举可以像普通类一样使用，并且可以包含字段、方法和构造函数。

```java
public enum Day {
    MONDAY("星期一"),
    TUESDAY("星期二"),
    WEDNESDAY("星期三"),
    THURSDAY("星期四"),
    FRIDAY("星期五"),
    SATURDAY("星期六"),
    SUNDAY("星期日");

    private final String chineseName;

    Day(String chineseName) {
        this.chineseName = chineseName;
    }

    public String getChineseName() {
        return chineseName;
    }
}
```

## 常见场景

- 表示一组固定的常量（如星期、月份）。
- 在 `switch` 语句中使用枚举。
- 实现单例模式。