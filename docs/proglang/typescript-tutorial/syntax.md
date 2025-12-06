# 语法基础

## 变量声明

TypeScript 支持三种变量声明方式：

1. **`var`**：传统的变量声明方式，作用域为函数级。
2. **`let`**：块级作用域变量声明，推荐使用。
3. **`const`**：块级作用域常量声明，不可重新赋值。

```typescript
let message: string = "Hello, TypeScript!";
const PI: number = 3.14159;
```

## 类型注解

TypeScript 允许为变量、函数参数和返回值添加类型注解，确保类型安全。

```typescript
function add(a: number, b: number): number {
  return a + b;
}

let result: number = add(1, 2); // 正确
let error: string = add(1, 2);  // 错误：类型不匹配
```

## 基本语法规则

1. **分号可选**：TypeScript 不强制要求分号，但建议保持一致。
2. **代码块**：使用 `{}` 包裹代码块。
3. **注释**：支持单行 (`//`) 和多行 (`/* */`) 注释。

```typescript
// 单行注释

/*
 * 多行注释
 */

if (true) {
  console.log("Hello!");
}
```

## 函数定义

TypeScript 中的函数可以指定参数和返回值的类型。

```typescript
function greet(name: string): string {
  return `Hello, ${name}!`;
}

// 箭头函数
const greetArrow = (name: string): string => `Hello, ${name}!`;
```

## 类与对象

TypeScript 支持面向对象编程，包括类、继承和访问修饰符。

```typescript
class Animal {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public speak(): string {
    return `${this.name} makes a noise.`;
  }
}

class Dog extends Animal {
  public speak(): string {
    return `${super.speak()} Woof!`;
  }
}

const dog = new Dog("Buddy");
console.log(dog.speak()); // Buddy makes a noise. Woof!
```

## 总结

TypeScript 的语法与 JavaScript 类似，但增加了类型系统和面向对象特性。掌握这些基础语法是学习 TypeScript 的第一步哦～