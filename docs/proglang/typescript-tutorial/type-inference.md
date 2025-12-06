# 类型推断

TypeScript 的类型推断机制可以自动推断变量的类型，无需显式注解。

## 基本推断

```typescript
let message = "Hello"; // 推断为 string
let count = 42;         // 推断为 number
let isDone = false;     // 推断为 boolean
```

## 函数返回值推断

TypeScript 可以自动推断函数的返回值类型。

```typescript
function add(a: number, b: number) {
  return a + b; // 推断返回值为 number
}
```

## 上下文推断

TypeScript 会根据上下文推断类型，例如事件处理函数中的参数类型。

```typescript
document.addEventListener("click", (event) => {
  console.log(event.target); // event 类型推断为 MouseEvent
});
```

## 最佳通用类型

当多个类型可能时，TypeScript 会推断出最佳通用类型。

```typescript
let values = [1, "two", true]; // 推断为 (number | string | boolean)[]
```

## 总结

类型推断简化了代码编写，同时保持了类型安全。