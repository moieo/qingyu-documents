# 函数

## 函数定义

TypeScript 中的函数可以指定参数和返回值的类型。

```typescript
function greet(name: string): string {
  return `Hello, ${name}!`;
}

// 箭头函数
const greetArrow = (name: string): string => `Hello, ${name}!`;
```

## 可选参数与默认值

- **可选参数**：使用 `?` 标记。
- **默认值**：直接为参数赋值。

```typescript
function greetOptional(name: string, greeting?: string): string {
  return `${greeting || "Hello"}, ${name}!`;
}

function greetDefault(name: string, greeting: string = "Hello"): string {
  return `${greeting}, ${name}!`;
}
```

## 剩余参数

剩余参数允许函数接受任意数量的参数，类型为数组。

```typescript
function sum(...numbers: number[]): number {
  return numbers.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2, 3)); // 6
```

## 函数重载

TypeScript 支持函数重载，允许为同一函数提供多个类型定义。

```typescript
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
  return a + b;
}

console.log(add(1, 2)); // 3
console.log(add("Hello, ", "TypeScript!")); // Hello, TypeScript!
```

## 回调函数

回调函数可以作为参数传递给其他函数。

```typescript
function fetchData(callback: (data: string) => void): void {
  setTimeout(() => callback("Data fetched!"), 1000);
}

fetchData((data) => console.log(data)); // Data fetched!
```

## 总结

TypeScript 的函数机制非常灵活，支持多种参数类型和返回值定义。接下来，我们将学习类与对象的使用哦～