# 运算符

运算符是用于执行特定数学或逻辑操作的符号。Java提供了丰富的运算符，可以分为算术运算符、关系运算符、逻辑运算符、位运算符、赋值运算符等。

## 算术运算符

算术运算符用于执行基本的数学运算。

### 基本算术运算符

| 运算符 | 名称 | 描述 | 示例 |
|--------|------|------|------|
| + | 加法 | 两个操作数相加 | a + b |
| - | 减法 | 左操作数减去右操作数 | a - b |
| * | 乘法 | 两个操作数相乘 | a * b |
| / | 除法 | 左操作数除以右操作数 | a / b |
| % | 取模 | 左操作数除以右操作数的余数 | a % b |

```java
public class ArithmeticOperators {
    public static void main(String[] args) {
        int a = 10;
        int b = 3;
        
        System.out.println("a + b = " + (a + b)); // 13
        System.out.println("a - b = " + (a - b)); // 7
        System.out.println("a * b = " + (a * b)); // 30
        System.out.println("a / b = " + (a / b)); // 3 (整数除法)
        System.out.println("a % b = " + (a % b)); // 1
        
        // 浮点数运算
        double x = 10.0;
        double y = 3.0;
        System.out.println("x / y = " + (x / y)); // 3.3333333333333335
    }
}
```

### 一元运算符

| 运算符 | 名称 | 描述 | 示例 |
|--------|------|------|------|
| + | 一元加 | 表示正数 | +a |
| - | 一元减 | 表示负数 | -a |
| ++ | 自增 | 变量值加1 | ++a 或 a++ |
| -- | 自减 | 变量值减1 | --a 或 a-- |

```java
public class UnaryOperators {
    public static void main(String[] args) {
        int a = 5;
        int b = -a;  // b = -5
        int c = +a;  // c = 5
        
        // 前缀自增/自减
        int x = 10;
        int y = ++x;  // x先自增为11，然后赋值给y，所以y=11
        System.out.println("x = " + x + ", y = " + y); // x = 11, y = 11
        
        // 后缀自增/自减
        int m = 10;
        int n = m++;  // m的值10先赋值给n，然后m自增为11
        System.out.println("m = " + m + ", n = " + n); // m = 11, n = 10
        
        // 自减示例
        int p = 5;
        System.out.println("p-- = " + (p--)); // 输出5，p变为4
        System.out.println("--p = " + (--p)); // p先减为3，然后输出3
    }
}
```

### 字符串连接运算符

`+` 运算符也可以用于字符串连接。

```java
public class StringConcatenation {
    public static void main(String[] args) {
        String firstName = "张";
        String lastName = "三";
        String fullName = firstName + lastName; // "张三"
        
        // 字符串与数字连接
        int age = 25;
        String message = "我今年" + age + "岁"; // "我今年25岁"
        
        // 注意运算顺序
        System.out.println("结果: " + 10 + 20);     // "结果: 1020"
        System.out.println("结果: " + (10 + 20));   // "结果: 30"
        System.out.println(10 + 20 + " 结果");      // "30 结果"
    }
}
```

## 关系运算符

关系运算符用于比较两个值，返回布尔值（true或false）。

| 运算符 | 名称 | 描述 | 示例 |
|--------|------|------|------|
| == | 等于 | 检查两个操作数是否相等 | a == b |
| != | 不等于 | 检查两个操作数是否不相等 | a != b |
| > | 大于 | 检查左操作数是否大于右操作数 | a > b |
| < | 小于 | 检查左操作数是否小于右操作数 | a < b |
| >= | 大于等于 | 检查左操作数是否大于等于右操作数 | a >= b |
| <= | 小于等于 | 检查左操作数是否小于等于右操作数 | a <= b |

```java
public class RelationalOperators {
    public static void main(String[] args) {
        int a = 10;
        int b = 20;
        
        System.out.println("a == b: " + (a == b)); // false
        System.out.println("a != b: " + (a != b)); // true
        System.out.println("a > b: " + (a > b));   // false
        System.out.println("a < b: " + (a < b));   // true
        System.out.println("a >= b: " + (a >= b)); // false
        System.out.println("a <= b: " + (a <= b)); // true
        
        // 字符串比较（注意：应该使用equals方法）
        String str1 = "Hello";
        String str2 = "Hello";
        String str3 = new String("Hello");
        
        System.out.println("str1 == str2: " + (str1 == str2));     // true（字符串池）
        System.out.println("str1 == str3: " + (str1 == str3));     // false（不同对象）
        System.out.println("str1.equals(str3): " + str1.equals(str3)); // true（内容相同）
    }
}
```

## 逻辑运算符

逻辑运算符用于组合多个布尔表达式。

| 运算符 | 名称 | 描述 | 示例 |
|--------|------|------|------|
| && | 逻辑与 | 两个操作数都为true时返回true | a && b |
| \|\| | 逻辑或 | 至少一个操作数为true时返回true | a \|\| b |
| ! | 逻辑非 | 操作数为true时返回false，反之亦然 | !a |

```java
public class LogicalOperators {
    public static void main(String[] args) {
        boolean a = true;
        boolean b = false;
        
        // 逻辑与（&&）
        System.out.println("a && b: " + (a && b)); // false
        System.out.println("a && true: " + (a && true)); // true
        
        // 逻辑或（||）
        System.out.println("a || b: " + (a || b)); // true
        System.out.println("b || false: " + (b || false)); // false
        
        // 逻辑非（!）
        System.out.println("!a: " + (!a)); // false
        System.out.println("!b: " + (!b)); // true
        
        // 复合逻辑表达式
        int x = 10;
        int y = 20;
        int z = 30;
        
        boolean result = (x < y) && (y < z); // true && true = true
        System.out.println("(x < y) && (y < z): " + result);
        
        boolean result2 = (x > y) || (y < z); // false || true = true
        System.out.println("(x > y) || (y < z): " + result2);
    }
}
```

### 短路求值

Java的逻辑运算符支持短路求值（Short-circuit evaluation）。

```java
public class ShortCircuitEvaluation {
    public static void main(String[] args) {
        int a = 5;
        int b = 0;
        
        // 短路与（&&）：如果第一个条件为false，不会执行第二个条件
        if (b != 0 && a / b > 2) {
            System.out.println("条件成立");
        } else {
            System.out.println("条件不成立"); // 输出这个，避免了除零错误
        }
        
        // 短路或（||）：如果第一个条件为true，不会执行第二个条件
        if (a > 0 || a / b > 2) {
            System.out.println("条件成立"); // 输出这个，避免了除零错误
        }
        
        // 演示短路求值的效果
        System.out.println("短路与测试:");
        if (false && printAndReturnTrue()) {
            // printAndReturnTrue()不会被调用
        }
        
        System.out.println("短路或测试:");
        if (true || printAndReturnTrue()) {
            // printAndReturnTrue()不会被调用
        }
    }
    
    public static boolean printAndReturnTrue() {
        System.out.println("方法被调用了");
        return true;
    }
}
```

## 位运算符

位运算符对整数的二进制位进行操作。

| 运算符 | 名称 | 描述 | 示例 |
|--------|------|------|------|
| & | 按位与 | 对应位都为1时结果为1 | a & b |
| \| | 按位或 | 对应位至少一个为1时结果为1 | a \| b |
| ^ | 按位异或 | 对应位不同时结果为1 | a ^ b |
| ~ | 按位取反 | 将每一位取反 | ~a |
| << | 左移 | 向左移动指定位数 | a << 2 |
| >> | 右移 | 向右移动指定位数（算术右移） | a >> 2 |
| >>> | 无符号右移 | 向右移动指定位数（逻辑右移） | a >>> 2 |

```java
public class BitwiseOperators {
    public static void main(String[] args) {
        int a = 60;  // 二进制: 0011 1100
        int b = 13;  // 二进制: 0000 1101
        
        System.out.println("a = " + a + " (二进制: " + Integer.toBinaryString(a) + ")");
        System.out.println("b = " + b + " (二进制: " + Integer.toBinaryString(b) + ")");
        
        // 按位与
        int and = a & b;  // 0000 1100 = 12
        System.out.println("a & b = " + and + " (二进制: " + Integer.toBinaryString(and) + ")");
        
        // 按位或
        int or = a | b;   // 0011 1101 = 61
        System.out.println("a | b = " + or + " (二进制: " + Integer.toBinaryString(or) + ")");
        
        // 按位异或
        int xor = a ^ b;  // 0011 0001 = 49
        System.out.println("a ^ b = " + xor + " (二进制: " + Integer.toBinaryString(xor) + ")");
        
        // 按位取反
        int not = ~a;     // 1100 0011 = -61
        System.out.println("~a = " + not + " (二进制: " + Integer.toBinaryString(not) + ")");
        
        // 左移
        int leftShift = a << 2;  // 1111 0000 = 240
        System.out.println("a << 2 = " + leftShift);
        
        // 右移
        int rightShift = a >> 2; // 0000 1111 = 15
        System.out.println("a >> 2 = " + rightShift);
        
        // 无符号右移
        int unsignedRightShift = a >>> 2; // 0000 1111 = 15
        System.out.println("a >>> 2 = " + unsignedRightShift);
    }
}
```

### 位运算的实际应用

```java
public class BitwiseApplications {
    public static void main(String[] args) {
        // 1. 判断奇偶数
        int num = 15;
        if ((num & 1) == 0) {
            System.out.println(num + " 是偶数");
        } else {
            System.out.println(num + " 是奇数");
        }
        
        // 2. 快速乘除2的幂
        int value = 16;
        System.out.println(value + " * 4 = " + (value << 2)); // 左移2位相当于乘以4
        System.out.println(value + " / 4 = " + (value >> 2)); // 右移2位相当于除以4
        
        // 3. 交换两个数（不使用临时变量）
        int x = 10, y = 20;
        System.out.println("交换前: x = " + x + ", y = " + y);
        x = x ^ y;
        y = x ^ y;
        x = x ^ y;
        System.out.println("交换后: x = " + x + ", y = " + y);
        
        // 4. 设置、清除、检查特定位
        int flags = 0;
        
        // 设置第3位为1
        flags |= (1 << 3);
        System.out.println("设置第3位后: " + Integer.toBinaryString(flags));
        
        // 检查第3位是否为1
        boolean isSet = (flags & (1 << 3)) != 0;
        System.out.println("第3位是否为1: " + isSet);
        
        // 清除第3位
        flags &= ~(1 << 3);
        System.out.println("清除第3位后: " + Integer.toBinaryString(flags));
    }
}
```

## 赋值运算符

赋值运算符用于给变量赋值。

| 运算符 | 名称 | 描述 | 示例 | 等价于 |
|--------|------|------|------|--------|
| = | 简单赋值 | 将右边的值赋给左边的变量 | a = b | |
| += | 加法赋值 | 加法后赋值 | a += b | a = a + b |
| -= | 减法赋值 | 减法后赋值 | a -= b | a = a - b |
| *= | 乘法赋值 | 乘法后赋值 | a *= b | a = a * b |
| /= | 除法赋值 | 除法后赋值 | a /= b | a = a / b |
| %= | 取模赋值 | 取模后赋值 | a %= b | a = a % b |
| &= | 按位与赋值 | 按位与后赋值 | a &= b | a = a & b |
| \|= | 按位或赋值 | 按位或后赋值 | a \|= b | a = a \| b |
| ^= | 按位异或赋值 | 按位异或后赋值 | a ^= b | a = a ^ b |
| <<= | 左移赋值 | 左移后赋值 | a <<= b | a = a << b |
| >>= | 右移赋值 | 右移后赋值 | a >>= b | a = a >> b |
| >>>= | 无符号右移赋值 | 无符号右移后赋值 | a >>>= b | a = a >>> b |

```java
public class AssignmentOperators {
    public static void main(String[] args) {
        int a = 10;
        
        // 复合赋值运算符
        a += 5;   // a = a + 5 = 15
        System.out.println("a += 5: " + a);
        
        a -= 3;   // a = a - 3 = 12
        System.out.println("a -= 3: " + a);
        
        a *= 2;   // a = a * 2 = 24
        System.out.println("a *= 2: " + a);
        
        a /= 4;   // a = a / 4 = 6
        System.out.println("a /= 4: " + a);
        
        a %= 4;   // a = a % 4 = 2
        System.out.println("a %= 4: " + a);
        
        // 位运算赋值
        int b = 12;  // 1100
        b &= 10;     // 1100 & 1010 = 1000 = 8
        System.out.println("b &= 10: " + b);
        
        b |= 5;      // 1000 | 0101 = 1101 = 13
        System.out.println("b |= 5: " + b);
        
        b ^= 7;      // 1101 ^ 0111 = 1010 = 10
        System.out.println("b ^= 7: " + b);
        
        b <<= 1;     // 1010 << 1 = 10100 = 20
        System.out.println("b <<= 1: " + b);
        
        b >>= 2;     // 10100 >> 2 = 101 = 5
        System.out.println("b >>= 2: " + b);
    }
}
```

## 三元运算符

三元运算符（条件运算符）是Java中唯一的三元运算符，语法为：`条件 ? 值1 : 值2`

```java
public class TernaryOperator {
    public static void main(String[] args) {
        int a = 10;
        int b = 20;
        
        // 基本用法
        int max = (a > b) ? a : b;
        System.out.println("最大值: " + max); // 20
        
        // 等价的if-else语句
        int max2;
        if (a > b) {
            max2 = a;
        } else {
            max2 = b;
        }
        
        // 嵌套三元运算符
        int x = 5, y = 10, z = 15;
        int maxOfThree = (x > y) ? ((x > z) ? x : z) : ((y > z) ? y : z);
        System.out.println("三个数的最大值: " + maxOfThree); // 15
        
        // 字符串操作
        String status = (a > 0) ? "正数" : "非正数";
        System.out.println("状态: " + status);
        
        // 方法调用
        String result = (a % 2 == 0) ? getEvenMessage() : getOddMessage();
        System.out.println(result);
    }
    
    public static String getEvenMessage() {
        return "这是偶数";
    }
    
    public static String getOddMessage() {
        return "这是奇数";
    }
}
```

## instanceof 运算符

`instanceof` 运算符用于检查对象是否是特定类的实例。

```java
public class InstanceofOperator {
    public static void main(String[] args) {
        String str = "Hello";
        Object obj = str;
        
        // 检查对象类型
        System.out.println("str instanceof String: " + (str instanceof String));     // true
        System.out.println("str instanceof Object: " + (str instanceof Object));     // true
        System.out.println("obj instanceof String: " + (obj instanceof String));     // true
        
        // 数组类型检查
        int[] numbers = {1, 2, 3};
        System.out.println("numbers instanceof int[]: " + (numbers instanceof int[])); // true
        System.out.println("numbers instanceof Object: " + (numbers instanceof Object)); // true
        
        // null检查
        String nullStr = null;
        System.out.println("null instanceof String: " + (nullStr instanceof String)); // false
        
        // 继承关系检查
        Animal animal = new Dog();
        System.out.println("animal instanceof Animal: " + (animal instanceof Animal)); // true
        System.out.println("animal instanceof Dog: " + (animal instanceof Dog));       // true
    }
}

class Animal {}
class Dog extends Animal {}
```

## 运算符优先级

运算符优先级决定了表达式中运算符的执行顺序。

| 优先级 | 运算符 | 结合性 |
|--------|--------|--------|
| 1 | () [] . | 左到右 |
| 2 | ++ -- ! ~ + - | 右到左 |
| 3 | * / % | 左到右 |
| 4 | + - | 左到右 |
| 5 | << >> >>> | 左到右 |
| 6 | < <= > >= instanceof | 左到右 |
| 7 | == != | 左到右 |
| 8 | & | 左到右 |
| 9 | ^ | 左到右 |
| 10 | \| | 左到右 |
| 11 | && | 左到右 |
| 12 | \|\| | 左到右 |
| 13 | ?: | 右到左 |
| 14 | = += -= *= /= %= &= ^= \|= <<= >>= >>>= | 右到左 |

```java
public class OperatorPrecedence {
    public static void main(String[] args) {
        // 演示运算符优先级
        int result1 = 2 + 3 * 4;        // 14，不是20
        int result2 = (2 + 3) * 4;      // 20
        
        boolean result3 = true || false && false;  // true，因为&&优先级高于||
        boolean result4 = (true || false) && false; // false
        
        int a = 5;
        int result5 = ++a * 2;          // 12，++a先执行，a变为6，然后6*2=12
        
        // 复杂表达式
        int x = 10, y = 20, z = 30;
        boolean complex = x < y && y < z || x > z;  // true
        // 等价于: ((x < y) && (y < z)) || (x > z)
        // 即: (true && true) || false = true
        
        System.out.println("2 + 3 * 4 = " + result1);
        System.out.println("(2 + 3) * 4 = " + result2);
        System.out.println("true || false && false = " + result3);
        System.out.println("(true || false) && false = " + result4);
        System.out.println("++a * 2 = " + result5 + ", a = " + a);
        System.out.println("复杂表达式结果: " + complex);
    }
}
```

## 运算符使用最佳实践

### 1. 使用括号提高可读性

```java
// 不清晰
boolean result = a > b && c < d || e == f;

// 清晰
boolean result = ((a > b) && (c < d)) || (e == f);
```

### 2. 避免复杂的嵌套三元运算符

```java
// 不推荐：难以理解
String result = (a > b) ? ((c > d) ? "case1" : "case2") : ((e > f) ? "case3" : "case4");

// 推荐：使用if-else
String result;
if (a > b) {
    if (c > d) {
        result = "case1";
    } else {
        result = "case2";
    }
} else {
    if (e > f) {
        result = "case3";
    } else {
        result = "case4";
    }
}
```

### 3. 注意浮点数比较

```java
// 不推荐：直接比较浮点数
double a = 0.1 + 0.2;
double b = 0.3;
if (a == b) {  // 可能为false
    System.out.println("相等");
}

// 推荐：使用精度比较
double epsilon = 1e-10;
if (Math.abs(a - b) < epsilon) {
    System.out.println("相等");
}
```

### 4. 合理使用短路求值

```java
// 利用短路求值避免空指针异常
String str = getString();
if (str != null && str.length() > 0) {
    // 安全的字符串操作
}

// 利用短路求值提高性能
if (cheapOperation() && expensiveOperation()) {
    // 只有cheapOperation()返回true时才执行expensiveOperation()
}
```

---

掌握Java运算符是编程的基础技能。理解运算符的优先级、结合性和特殊行为（如短路求值）能帮助你编写更高效、更安全的代码。在实际开发中，要注意代码的可读性，适当使用括号来明确运算顺序。