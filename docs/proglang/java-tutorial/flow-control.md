# 流程控制

流程控制语句决定了程序的执行顺序。Java提供了多种流程控制结构，包括条件语句、循环语句和跳转语句。

## 条件语句

条件语句根据条件的真假来决定程序的执行路径。

### if 语句

`if` 语句是最基本的条件语句，当条件为真时执行代码块。

```java
public class IfStatement {
    public static void main(String[] args) {
        int score = 85;
        
        // 基本if语句
        if (score >= 60) {
            System.out.println("及格了！");
        }
        
        // 单行语句可以省略大括号（不推荐）
        if (score >= 90)
            System.out.println("优秀！");
        
        // 推荐始终使用大括号
        if (score >= 80) {
            System.out.println("良好！");
        }
    }
}
```

### if-else 语句

`if-else` 语句提供了两个执行路径。

```java
public class IfElseStatement {
    public static void main(String[] args) {
        int age = 18;
        
        if (age >= 18) {
            System.out.println("已成年");
        } else {
            System.out.println("未成年");
        }
        
        // 复杂条件
        String weather = "sunny";
        if (weather.equals("sunny")) {
            System.out.println("今天天气很好，适合出门");
        } else {
            System.out.println("今天天气不太好");
        }
    }
}
```

### if-else if-else 语句

多重条件判断使用 `if-else if-else` 结构。

```java
public class MultipleConditions {
    public static void main(String[] args) {
        int score = 85;
        
        if (score >= 90) {
            System.out.println("优秀");
        } else if (score >= 80) {
            System.out.println("良好");
        } else if (score >= 70) {
            System.out.println("中等");
        } else if (score >= 60) {
            System.out.println("及格");
        } else {
            System.out.println("不及格");
        }
        
        // 判断季节
        int month = 6;
        String season;
        
        if (month >= 3 && month <= 5) {
            season = "春季";
        } else if (month >= 6 && month <= 8) {
            season = "夏季";
        } else if (month >= 9 && month <= 11) {
            season = "秋季";
        } else {
            season = "冬季";
        }
        
        System.out.println(month + "月是" + season);
    }
}
```

### 嵌套 if 语句

if 语句可以嵌套使用。

```java
public class NestedIf {
    public static void main(String[] args) {
        int age = 25;
        boolean hasLicense = true;
        boolean hasInsurance = true;
        
        if (age >= 18) {
            System.out.println("年龄符合要求");
            
            if (hasLicense) {
                System.out.println("有驾照");
                
                if (hasInsurance) {
                    System.out.println("可以开车");
                } else {
                    System.out.println("需要购买保险");
                }
            } else {
                System.out.println("需要考取驾照");
            }
        } else {
            System.out.println("年龄不够，不能开车");
        }
    }
}
```

## switch 语句

`switch` 语句用于多分支选择，比多重 if-else 更简洁。

### 基本 switch 语句

```java
public class SwitchStatement {
    public static void main(String[] args) {
        int dayOfWeek = 3;
        String dayName;
        
        switch (dayOfWeek) {
            case 1:
                dayName = "星期一";
                break;
            case 2:
                dayName = "星期二";
                break;
            case 3:
                dayName = "星期三";
                break;
            case 4:
                dayName = "星期四";
                break;
            case 5:
                dayName = "星期五";
                break;
            case 6:
                dayName = "星期六";
                break;
            case 7:
                dayName = "星期日";
                break;
            default:
                dayName = "无效的日期";
                break;
        }
        
        System.out.println("今天是" + dayName);
    }
}
```

### switch 语句的穿透特性

如果不使用 `break`，程序会继续执行下一个 case。

```java
public class SwitchFallthrough {
    public static void main(String[] args) {
        char grade = 'B';
        
        switch (grade) {
            case 'A':
                System.out.println("优秀！");
                break;
            case 'B':
            case 'C':
                System.out.println("良好");
                break;
            case 'D':
                System.out.println("及格");
                break;
            case 'F':
                System.out.println("不及格");
                break;
            default:
                System.out.println("无效的等级");
        }
        
        // 演示穿透效果
        int number = 2;
        System.out.println("数字 " + number + " 对应的输出:");
        
        switch (number) {
            case 1:
                System.out.println("一");
            case 2:
                System.out.println("二");
            case 3:
                System.out.println("三");
                break;
            default:
                System.out.println("其他");
        }
        // 输出：二、三
    }
}
```

### 字符串 switch（Java 7+）

```java
public class StringSwitch {
    public static void main(String[] args) {
        String command = "start";
        
        switch (command) {
            case "start":
                System.out.println("启动程序");
                break;
            case "stop":
                System.out.println("停止程序");
                break;
            case "pause":
                System.out.println("暂停程序");
                break;
            case "reset":
                System.out.println("重置程序");
                break;
            default:
                System.out.println("未知命令: " + command);
        }
    }
}
```

### switch 表达式（Java 14+）

Java 14引入了switch表达式，使代码更简洁。

```java
public class SwitchExpression {
    public static void main(String[] args) {
        int dayOfWeek = 3;
        
        // 传统switch语句
        String dayName1;
        switch (dayOfWeek) {
            case 1 -> dayName1 = "星期一";
            case 2 -> dayName1 = "星期二";
            case 3 -> dayName1 = "星期三";
            case 4 -> dayName1 = "星期四";
            case 5 -> dayName1 = "星期五";
            case 6, 7 -> dayName1 = "周末";
            default -> dayName1 = "无效";
        }
        
        // switch表达式
        String dayName2 = switch (dayOfWeek) {
            case 1 -> "星期一";
            case 2 -> "星期二";
            case 3 -> "星期三";
            case 4 -> "星期四";
            case 5 -> "星期五";
            case 6, 7 -> "周末";
            default -> "无效";
        };
        
        System.out.println(dayName1);
        System.out.println(dayName2);
        
        // 带代码块的switch表达式
        String result = switch (dayOfWeek) {
            case 1, 2, 3, 4, 5 -> {
                System.out.println("工作日");
                yield "需要工作";
            }
            case 6, 7 -> {
                System.out.println("周末");
                yield "可以休息";
            }
            default -> "无效日期";
        };
        
        System.out.println(result);
    }
}
```

## 循环语句

循环语句用于重复执行代码块。

### while 循环

`while` 循环在条件为真时重复执行代码块。

```java
public class WhileLoop {
    public static void main(String[] args) {
        // 基本while循环
        int count = 1;
        while (count <= 5) {
            System.out.println("计数: " + count);
            count++;
        }
        
        // 计算1到100的和
        int sum = 0;
        int i = 1;
        while (i <= 100) {
            sum += i;
            i++;
        }
        System.out.println("1到100的和: " + sum);
        
        // 用户输入处理（模拟）
        String input = "continue";
        while (!input.equals("quit")) {
            System.out.println("处理输入: " + input);
            // 模拟获取新输入
            if (input.equals("continue")) {
                input = "quit"; // 模拟用户输入quit
            }
        }
        System.out.println("程序结束");
    }
}
```

### do-while 循环

`do-while` 循环至少执行一次代码块，然后检查条件。

```java
public class DoWhileLoop {
    public static void main(String[] args) {
        // 基本do-while循环
        int count = 1;
        do {
            System.out.println("计数: " + count);
            count++;
        } while (count <= 5);
        
        // 即使条件为假，也会执行一次
        int x = 10;
        do {
            System.out.println("x的值: " + x);
            x++;
        } while (x < 10); // 条件为假，但仍执行了一次
        
        // 菜单驱动程序示例
        int choice;
        do {
            System.out.println("\n=== 菜单 ===");
            System.out.println("1. 选项一");
            System.out.println("2. 选项二");
            System.out.println("3. 选项三");
            System.out.println("0. 退出");
            
            // 模拟用户选择
            choice = 1; // 实际应用中从用户输入获取
            
            switch (choice) {
                case 1:
                    System.out.println("执行选项一");
                    break;
                case 2:
                    System.out.println("执行选项二");
                    break;
                case 3:
                    System.out.println("执行选项三");
                    break;
                case 0:
                    System.out.println("退出程序");
                    break;
                default:
                    System.out.println("无效选择");
            }
            
            // 为了避免无限循环，这里设置退出条件
            if (choice == 1) choice = 0;
            
        } while (choice != 0);
    }
}
```

### for 循环

`for` 循环是最常用的循环结构，特别适合已知循环次数的情况。

```java
public class ForLoop {
    public static void main(String[] args) {
        // 基本for循环
        for (int i = 1; i <= 5; i++) {
            System.out.println("循环次数: " + i);
        }
        
        // 倒序循环
        for (int i = 10; i >= 1; i--) {
            System.out.print(i + " ");
        }
        System.out.println();
        
        // 步长不为1的循环
        for (int i = 0; i <= 20; i += 2) {
            System.out.print(i + " ");
        }
        System.out.println();
        
        // 多个变量的for循环
        for (int i = 0, j = 10; i < j; i++, j--) {
            System.out.println("i = " + i + ", j = " + j);
        }
        
        // 无限循环（需要break跳出）
        for (int i = 0; ; i++) {
            if (i > 3) break;
            System.out.println("无限循环: " + i);
        }
        
        // 省略初始化和更新的for循环
        int k = 0;
        for (; k < 3; ) {
            System.out.println("k = " + k);
            k++;
        }
    }
}
```

### 增强型 for 循环（for-each）

增强型for循环用于遍历数组和集合。

```java
import java.util.ArrayList;
import java.util.List;

public class EnhancedForLoop {
    public static void main(String[] args) {
        // 遍历数组
        int[] numbers = {1, 2, 3, 4, 5};
        
        // 传统for循环
        for (int i = 0; i < numbers.length; i++) {
            System.out.println("传统循环: " + numbers[i]);
        }
        
        // 增强型for循环
        for (int number : numbers) {
            System.out.println("增强循环: " + number);
        }
        
        // 遍历字符串数组
        String[] names = {"张三", "李四", "王五"};
        for (String name : names) {
            System.out.println("姓名: " + name);
        }
        
        // 遍历集合
        List<String> cities = new ArrayList<>();
        cities.add("北京");
        cities.add("上海");
        cities.add("广州");
        cities.add("深圳");
        
        for (String city : cities) {
            System.out.println("城市: " + city);
        }
        
        // 二维数组遍历
        int[][] matrix = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
        for (int[] row : matrix) {
            for (int element : row) {
                System.out.print(element + " ");
            }
            System.out.println();
        }
    }
}
```

## 嵌套循环

循环可以嵌套使用，形成多层循环结构。

```java
public class NestedLoops {
    public static void main(String[] args) {
        // 打印乘法表
        System.out.println("九九乘法表:");
        for (int i = 1; i <= 9; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print(j + "×" + i + "=" + (i * j) + "\t");
            }
            System.out.println();
        }
        
        // 打印星号图案
        System.out.println("\n星号三角形:");
        for (int i = 1; i <= 5; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print("* ");
            }
            System.out.println();
        }
        
        // 打印数字矩阵
        System.out.println("\n数字矩阵:");
        for (int i = 1; i <= 4; i++) {
            for (int j = 1; j <= 4; j++) {
                System.out.printf("%3d", i * j);
            }
            System.out.println();
        }
        
        // 查找数组中的元素
        int[][] array = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
        int target = 5;
        boolean found = false;
        
        for (int i = 0; i < array.length && !found; i++) {
            for (int j = 0; j < array[i].length; j++) {
                if (array[i][j] == target) {
                    System.out.println("找到目标值 " + target + " 在位置 [" + i + "][" + j + "]");
                    found = true;
                    break;
                }
            }
        }
    }
}
```

## 跳转语句

跳转语句用于改变程序的正常执行流程。

### break 语句

`break` 语句用于跳出循环或switch语句。

```java
public class BreakStatement {
    public static void main(String[] args) {
        // 在for循环中使用break
        for (int i = 1; i <= 10; i++) {
            if (i == 5) {
                System.out.println("遇到5，跳出循环");
                break;
            }
            System.out.println("i = " + i);
        }
        
        // 在while循环中使用break
        int count = 0;
        while (true) { // 无限循环
            count++;
            System.out.println("计数: " + count);
            if (count >= 3) {
                System.out.println("达到3次，跳出循环");
                break;
            }
        }
        
        // 在嵌套循环中使用break（只跳出内层循环）
        System.out.println("嵌套循环中的break:");
        for (int i = 1; i <= 3; i++) {
            System.out.println("外层循环: " + i);
            for (int j = 1; j <= 5; j++) {
                if (j == 3) {
                    System.out.println("内层循环遇到3，跳出内层循环");
                    break;
                }
                System.out.println("  内层循环: " + j);
            }
        }
    }
}
```

### continue 语句

`continue` 语句用于跳过当前循环的剩余部分，继续下一次循环。

```java
public class ContinueStatement {
    public static void main(String[] args) {
        // 在for循环中使用continue
        System.out.println("打印1到10中的奇数:");
        for (int i = 1; i <= 10; i++) {
            if (i % 2 == 0) {
                continue; // 跳过偶数
            }
            System.out.println(i);
        }
        
        // 在while循环中使用continue
        System.out.println("处理数组，跳过负数:");
        int[] numbers = {1, -2, 3, -4, 5, -6, 7};
        int index = 0;
        
        while (index < numbers.length) {
            if (numbers[index] < 0) {
                index++;
                continue; // 跳过负数
            }
            System.out.println("正数: " + numbers[index]);
            index++;
        }
        
        // 在嵌套循环中使用continue
        System.out.println("嵌套循环中的continue:");
        for (int i = 1; i <= 3; i++) {
            System.out.println("外层循环: " + i);
            for (int j = 1; j <= 5; j++) {
                if (j == 3) {
                    System.out.println("  跳过内层循环的3");
                    continue;
                }
                System.out.println("  内层循环: " + j);
            }
        }
    }
}
```

### 标签（Label）

标签可以与break和continue一起使用，用于跳出多层循环。

```java
public class LabelStatement {
    public static void main(String[] args) {
        // 使用标签跳出多层循环
        outer: for (int i = 1; i <= 3; i++) {
            System.out.println("外层循环: " + i);
            
            inner: for (int j = 1; j <= 5; j++) {
                if (i == 2 && j == 3) {
                    System.out.println("跳出外层循环");
                    break outer; // 跳出外层循环
                }
                System.out.println("  内层循环: " + j);
            }
        }
        System.out.println("循环结束");
        
        // 使用标签continue到外层循环
        System.out.println("\n使用标签continue:");
        outer2: for (int i = 1; i <= 3; i++) {
            System.out.println("外层循环: " + i);
            
            for (int j = 1; j <= 5; j++) {
                if (j == 3) {
                    System.out.println("  跳过外层循环的剩余部分");
                    continue outer2; // 继续外层循环的下一次迭代
                }
                System.out.println("  内层循环: " + j);
            }
            System.out.println("外层循环结束"); // 这行不会执行
        }
    }
}
```

### return 语句

`return` 语句用于从方法中返回值并结束方法的执行。

```java
public class ReturnStatement {
    public static void main(String[] args) {
        int result1 = add(5, 3);
        System.out.println("5 + 3 = " + result1);
        
        int result2 = findMax(new int[]{3, 7, 2, 9, 1});
        System.out.println("数组最大值: " + result2);
        
        printNumbers(10);
        
        String grade = getGrade(85);
        System.out.println("85分对应等级: " + grade);
    }
    
    // 返回两个数的和
    public static int add(int a, int b) {
        return a + b; // 返回计算结果
    }
    
    // 查找数组中的最大值
    public static int findMax(int[] array) {
        if (array == null || array.length == 0) {
            return -1; // 提前返回
        }
        
        int max = array[0];
        for (int i = 1; i < array.length; i++) {
            if (array[i] > max) {
                max = array[i];
            }
        }
        return max;
    }
    
    // void方法中的return
    public static void printNumbers(int limit) {
        for (int i = 1; i <= limit; i++) {
            if (i > 5) {
                System.out.println("达到限制，停止打印");
                return; // 结束方法执行
            }
            System.out.println(i);
        }
        System.out.println("所有数字打印完成"); // 如果i>5，这行不会执行
    }
    
    // 多个返回点的方法
    public static String getGrade(int score) {
        if (score >= 90) {
            return "A";
        } else if (score >= 80) {
            return "B";
        } else if (score >= 70) {
            return "C";
        } else if (score >= 60) {
            return "D";
        } else {
            return "F";
        }
    }
}
```

## 流程控制最佳实践

### 1. 避免深层嵌套

```java
// 不好的写法：深层嵌套
public void processUser(User user) {
    if (user != null) {
        if (user.isActive()) {
            if (user.hasPermission()) {
                if (user.getAge() >= 18) {
                    // 处理逻辑
                    processAdultUser(user);
                }
            }
        }
    }
}

// 好的写法：早期返回
public void processUser(User user) {
    if (user == null) return;
    if (!user.isActive()) return;
    if (!user.hasPermission()) return;
    if (user.getAge() < 18) return;
    
    // 处理逻辑
    processAdultUser(user);
}
```

### 2. 合理使用switch

```java
// 适合使用switch的情况
public String getDayType(int dayOfWeek) {
    return switch (dayOfWeek) {
        case 1, 2, 3, 4, 5 -> "工作日";
        case 6, 7 -> "周末";
        default -> "无效日期";
    };
}

// 不适合使用switch的情况（条件复杂）
public String getAgeGroup(int age) {
    if (age < 0) {
        return "无效年龄";
    } else if (age <= 12) {
        return "儿童";
    } else if (age <= 17) {
        return "青少年";
    } else if (age <= 59) {
        return "成年人";
    } else {
        return "老年人";
    }
}
```

### 3. 循环优化

```java
// 避免在循环中进行重复计算
// 不好的写法
for (int i = 0; i < list.size(); i++) {
    // list.size()在每次循环中都会被调用
}

// 好的写法
int size = list.size();
for (int i = 0; i < size; i++) {
    // 只计算一次size
}

// 或者使用增强for循环
for (String item : list) {
    // 更简洁，性能也好
}
```

### 4. 合理使用break和continue

```java
// 使用continue简化逻辑
public void processItems(List<Item> items) {
    for (Item item : items) {
        if (item == null) continue;
        if (!item.isValid()) continue;
        if (item.isProcessed()) continue;
        
        // 处理有效的未处理项目
        processItem(item);
    }
}
```

---

掌握流程控制是编程的核心技能。合理使用条件语句和循环语句能让程序逻辑清晰、执行高效。在实际开发中，要注意代码的可读性和维护性，避免过度复杂的嵌套结构。