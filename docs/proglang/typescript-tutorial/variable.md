# 变量与常量

## 变量声明

TypeScript 支持三种变量声明方式：

1. **`var`**：传统的变量声明方式，作用域为函数级。
2. **`let`**：块级作用域变量声明，推荐使用。
3. **`const`**：块级作用域常量声明，不可重新赋值。

```typescript
var globalVar: string = "I am global"; // 函数作用域
let blockVar: string = "I am block-scoped"; // 块级作用域
const constantVar: string = "I am constant"; // 常量
```

## 作用域

- **`var`**：作用域为函数或全局，容易引起变量提升问题。
- **`let` 和 `const`**：作用域为块级（如 `if`、`for` 等），更安全。

```typescript
function scopeExample() {
  if (true) {
    var varScoped: string = "I am var"; // 函数作用域
    let letScoped: string = "I am let"; // 块级作用域
  }
  console.log(varScoped); // 可以访问
  console.log(letScoped); // 报错：letScoped 未定义
}
```

## 类型推断

TypeScript 可以自动推断变量的类型，无需显式注解。

```typescript
let inferredString = "Hello"; // 推断为 string
let inferredNumber = 42; // 推断为 number
```

## 解构赋值

TypeScript 支持从数组或对象中解构赋值。

```typescript
// 数组解构
let [first, second] = [1, 2];

// 对象解构
let { name, age } = { name: "Alice", age: 25 };
```

## 常量与只读属性

- **`const`**：用于声明不可变的常量。
- **`readonly`**：用于对象的属性，确保属性不可修改。

```typescript
const PI: number = 3.14159;

interface Person {
  readonly name: string;
  age: number;
}

let person: Person = { name: "Alice", age: 25 };
person.age = 26; // 允许
person.name = "Bob"; // 报错：name 是只读属性
```

## 总结

TypeScript 的变量与常量机制提供了灵活性和安全性，推荐优先使用 `let` 和 `const`。接下来，我们将学习函数的定义与使用哦～