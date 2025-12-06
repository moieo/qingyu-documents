# 泛型

泛型允许在定义函数、接口或类时不预先指定具体类型，而是在使用时动态指定。

## 基本用法

```typescript
function identity<T>(arg: T): T {
  return arg;
}

let output = identity<string>("Hello"); // 显式指定类型
let output2 = identity(42);              // 类型推断
```

## 泛型约束

通过 `extends` 关键字约束泛型的范围。

```typescript
interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

loggingIdentity("Hello"); // 5
loggingIdentity([1, 2, 3]); // 3
loggingIdentity(42);      // 错误：数字没有 length 属性
```

## 泛型与类

泛型可以用于类的定义。

```typescript
class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

let myNumber = new GenericNumber<number>();
myNumber.zeroValue = 0;
myNumber.add = (x, y) => x + y;
```

## 总结

泛型提供了代码的灵活性和重用性，适用于多种场景。