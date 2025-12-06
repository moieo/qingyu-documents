# 数组

数组是 Java 中用于存储固定大小同类型元素的数据结构。本章将介绍数组的基本概念、创建方式以及常用操作。

## 1. 数组的声明与初始化

### 示例：声明与初始化
```java
public class ArrayExample {
    public static void main(String[] args) {
        // 声明并初始化数组
        int[] numbers = {1, 2, 3, 4, 5};

        // 声明数组后初始化
        String[] names = new String[3];
        names[0] = "Alice";
        names[1] = "Bob";
        names[2] = "Charlie";

        // 遍历数组
        for (int num : numbers) {
            System.out.println(num);
        }
    }
}
```

## 2. 多维数组

Java 支持多维数组，如二维数组。

### 示例：二维数组
```java
public class MultiDimensionalArray {
    public static void main(String[] args) {
        int[][] matrix = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };

        // 遍历二维数组
        for (int[] row : matrix) {
            for (int num : row) {
                System.out.print(num + " ");
            }
            System.out.println();
        }
    }
}
```

## 3. 数组工具类

Java 的 `java.util.Arrays` 类提供了丰富的数组操作方法。

### 示例：数组工具类
```java
import java.util.Arrays;

public class ArraysClassExample {
    public static void main(String[] args) {
        int[] numbers = {5, 3, 1, 4, 2};

        // 排序
        Arrays.sort(numbers);
        System.out.println("Sorted array: " + Arrays.toString(numbers));

        // 二分查找
        int index = Arrays.binarySearch(numbers, 3);
        System.out.println("Index of 3: " + index);
    }
}
```

## 4. 数组的常见问题

- **数组越界**：访问超出数组范围的索引会抛出 `ArrayIndexOutOfBoundsException`。
- **空指针异常**：未初始化的数组引用会导致 `NullPointerException`。

### 示例：数组越界
```java
public class ArrayBoundsExample {
    public static void main(String[] args) {
        int[] numbers = {1, 2, 3};
        try {
            System.out.println(numbers[3]); // 越界访问
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}
```

## 总结

数组是 Java 中最基本的数据结构之一，掌握数组的使用是学习 Java 的重要基础。