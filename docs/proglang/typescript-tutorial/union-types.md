# 联合类型

联合类型允许一个变量可以是多种类型中的一种，使用 `|` 分隔每种类型。

## 基本用法

```typescript
let value: string | number;
value = "Hello"; // 正确
value = 42;       // 正确
value = true;     // 错误：布尔类型不在联合类型中
```

## 类型守卫

通过类型守卫可以缩小联合类型的范围。

```typescript
function printValue(value: string | number) {
  if (typeof value === "string") {
    console.log(`String: ${value}`);
  } else {
    console.log(`Number: ${value}`);
  }
}

printValue("Hello"); // String: Hello
printValue(42);      // Number: 42
```

## 联合类型与数组

联合类型可以用于数组，表示数组中的元素可以是多种类型。

```typescript
let mixedArray: (string | number)[] = ["Hello", 42, "World", 100];
```

## 总结

联合类型提供了灵活性，允许变量或参数接受多种类型。结合类型守卫，可以安全地操作这些值。