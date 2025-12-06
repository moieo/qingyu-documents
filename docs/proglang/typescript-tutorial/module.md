# 模块

模块是 TypeScript 中组织代码的重要方式，支持导入和导出功能。

## 导出

使用 `export` 关键字导出变量、函数、类或接口。

```typescript
// 导出变量
export const PI = 3.14159;

// 导出函数
export function greet(name: string): string {
  return `Hello, ${name}!`;
}

// 导出类
export class Animal {
  constructor(private name: string) {}
  speak() {
    return `${this.name} makes a noise.`;
  }
}
```

## 导入

使用 `import` 关键字导入其他模块的内容。

```typescript
import { PI, greet, Animal } from "./module";

console.log(PI); // 3.14159
console.log(greet("Alice")); // Hello, Alice!
const dog = new Animal("Buddy");
console.log(dog.speak()); // Buddy makes a noise.
```

## 默认导出

每个模块可以有一个默认导出。

```typescript
// 默认导出
export default class Dog {
  constructor(private name: string) {}
  bark() {
    return `${this.name} barks!`;
  }
}

// 导入默认导出
import Dog from "./module";
const dog = new Dog("Rex");
console.log(dog.bark()); // Rex barks!
```

## 总结

模块化是 TypeScript 中组织代码的核心机制，支持灵活的导入和导出方式。