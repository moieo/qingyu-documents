# 类与对象

## 类的基本定义

TypeScript 支持面向对象编程，类的定义包括属性、构造函数和方法。

```typescript
class Animal {
  private name: string; // 私有属性

  constructor(name: string) {
    this.name = name;
  }

  public speak(): string {
    return `${this.name} makes a noise.`;
  }
}

const animal = new Animal("Buddy");
console.log(animal.speak()); // Buddy makes a noise.
```

## 继承

类可以通过 `extends` 关键字继承父类的属性和方法。

```typescript
class Dog extends Animal {
  public speak(): string {
    return `${super.speak()} Woof!`;
  }
}

const dog = new Dog("Rex");
console.log(dog.speak()); // Rex makes a noise. Woof!
```

## 访问修饰符

TypeScript 提供了三种访问修饰符：

1. **`public`**：默认值，可以在任何地方访问。
2. **`private`**：只能在类内部访问。
3. **`protected`**：可以在类及其子类中访问。

```typescript
class Person {
  public name: string;
  private age: number;
  protected gender: string;

  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}
```

## 静态属性

静态属性属于类本身，而不是类的实例。

```typescript
class MathHelper {
  static PI: number = 3.14159;

  static calculateArea(radius: number): number {
    return this.PI * radius * radius;
  }
}

console.log(MathHelper.calculateArea(5)); // 78.53975
```

## 抽象类

抽象类不能被实例化，只能被继承。抽象方法必须在子类中实现。

```typescript
abstract class Shape {
  abstract getArea(): number;
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }

  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

const circle = new Circle(5);
console.log(circle.getArea()); // 78.53981633974483
```

## 总结

TypeScript 的类与对象机制提供了强大的面向对象编程能力，支持继承、访问控制和抽象类等特性。接下来，我们将学习接口的使用哦～