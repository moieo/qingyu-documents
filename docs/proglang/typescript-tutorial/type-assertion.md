# 类型断言

类型断言允许开发者手动指定变量的类型，覆盖 TypeScript 的默认推断。

## 基本语法

```typescript
let value: any = "Hello";
let length1: number = (value as string).length; // as 语法
let length2: number = (<string>value).length;  // 尖括号语法
```

## 非空断言

使用 `!` 断言变量不为 `null` 或 `undefined`。

```typescript
function greet(name?: string) {
  console.log(`Hello, ${name!.toUpperCase()}!`); // 断言 name 不为空
}
```

## 类型断言与泛型

类型断言常用于泛型场景，例如从 API 返回的数据。

```typescript
interface User {
  name: string;
  age: number;
}

let data = JSON.parse('{"name":"Alice","age":25}') as User;
console.log(data.name); // Alice
```

## 注意事项

- 类型断言不会改变运行时的值，仅用于编译时类型检查。
- 滥用类型断言可能导致运行时错误。

## 总结

类型断言是 TypeScript 中强大的工具，但需谨慎使用以确保类型安全。