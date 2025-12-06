# 基本类型

TypeScript 提供了丰富的基本类型，帮助你更好地定义变量和函数的行为。以下是常用的基本类型：

## 1. 数字 (`number`)

TypeScript 中的所有数字都是浮点数，支持十进制、十六进制、二进制和八进制字面量。

```typescript
let decimal: number = 6;
let hex: number = 0xf00d; // 十六进制
let binary: number = 0b1010; // 二进制
let octal: number = 0o744; // 八进制
```

## 2. 字符串 (`string`)

字符串可以用单引号 (`'`)、双引号 (`"`) 或模板字符串 (`` ` ``) 表示。

```typescript
let name: string = "Alice";
let greeting: string = `Hello, ${name}!`; // 模板字符串
```

## 3. 布尔 (`boolean`)

布尔类型只有两个值：`true` 和 `false`。

```typescript
let isDone: boolean = false;
```

## 4. 数组 (`Array`)

TypeScript 中的数组可以通过两种方式定义：

```typescript
let list1: number[] = [1, 2, 3]; // 元素类型 + 方括号
let list2: Array<number> = [1, 2, 3]; // 泛型语法
```

## 5. 元组 (`Tuple`)

元组允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。

```typescript
let tuple: [string, number] = ["Alice", 25];
```

## 6. 枚举 (`enum`)

枚举类型用于定义一组命名的常量。

```typescript
enum Color {
  Red,
  Green,
  Blue,
}

let c: Color = Color.Green;
```

## 7. 任意 (`any`)

`any` 类型允许赋值为任意类型，通常用于动态内容或迁移旧代码。

```typescript
let notSure: any = 4;
notSure = "maybe a string";
notSure = false;
```

## 8. 空 (`void`)

`void` 表示没有任何类型，通常用于函数返回值。

```typescript
function warnUser(): void {
  console.log("This is a warning!");
}
```

## 9. `null` 和 `undefined`

`null` 和 `undefined` 是所有类型的子类型，可以赋值给任意类型（除非启用 `strictNullChecks`）。

```typescript
let u: undefined = undefined;
let n: null = null;
```

## 10. `never`

`never` 表示永远不会发生的类型，通常用于抛出异常或无限循环的函数。

```typescript
function error(message: string): never {
  throw new Error(message);
}
```

## 总结

TypeScript 的基本类型提供了强大的类型检查能力，帮助你编写更安全、更易维护的代码。接下来，我们将深入学习变量与常量的使用哦～