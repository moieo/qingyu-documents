# 接口

## 接口的基本定义

接口用于定义对象的形状，确保对象具有特定的属性和方法。

```typescript
interface Person {
  name: string;
  age: number;
  greet(): string;
}

const alice: Person = {
  name: "Alice",
  age: 25,
  greet() {
    return `Hello, my name is ${this.name}!`;
  },
};

console.log(alice.greet()); // Hello, my name is Alice!
```

## 可选属性

接口中的属性可以标记为可选，使用 `?` 符号。

```typescript
interface Config {
  width: number;
  height?: number; // 可选属性
}

const config1: Config = { width: 100 };
const config2: Config = { width: 100, height: 200 };
```

## 只读属性

接口中的属性可以标记为只读，确保初始化后不可修改。

```typescript
interface Point {
  readonly x: number;
  readonly y: number;
}

const point: Point = { x: 10, y: 20 };
point.x = 5; // 报错：x 是只读属性
```

## 函数类型

接口可以定义函数类型，描述函数的参数和返回值。

```typescript
interface SearchFunc {
  (source: string, subString: string): boolean;
}

const mySearch: SearchFunc = (src, sub) => src.includes(sub);
console.log(mySearch("Hello, TypeScript!", "Type")); // true
```

## 类实现接口

类可以通过 `implements` 关键字实现接口，确保类满足接口的要求。

```typescript
interface ClockInterface {
  currentTime: Date;
  setTime(d: Date): void;
}

class Clock implements ClockInterface {
  currentTime: Date = new Date();

  setTime(d: Date): void {
    this.currentTime = d;
  }
}
```

## 接口继承

接口可以通过 `extends` 关键字继承其他接口。

```typescript
interface Shape {
  color: string;
}

interface Square extends Shape {
  sideLength: number;
}

const square: Square = { color: "blue", sideLength: 10 };
```

## 总结

TypeScript 的接口机制提供了强大的类型检查能力，帮助开发者定义和约束对象的结构。接下来，我们将学习高级类型的使用哦～