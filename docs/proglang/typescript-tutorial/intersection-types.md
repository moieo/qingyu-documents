# 交叉类型

## 概述

交叉类型（Intersection Types）是 TypeScript 中一种强大的类型组合方式，它使用 `&` 操作符将多个类型合并为一个类型。交叉类型的结果类型包含了所有参与类型的属性和方法，相当于类型的"与"操作。

## 📝 基本语法

### 1. 对象类型的交叉
```typescript
interface Person {
  name: string;
  age: number;
}

interface Employee {
  employeeId: number;
  department: string;
}

// 交叉类型合并两个接口
type EmployeePerson = Person & Employee;

const employee: EmployeePerson = {
  name: "Alice",
  age: 30,
  employeeId: 12345,
  department: "Engineering"
};

// 缺少任何属性都会报错
// const invalidEmployee: EmployeePerson = {
//   name: "Bob",
//   age: 25,
//   employeeId: 12346
//   // 缺少 department
// };
```

### 2. 多个类型的交叉
```typescript
interface Identifiable {
  id: number;
}

interface Timestamped {
  createdAt: Date;
  updatedAt: Date;
}

interface SoftDeletable {
  deletedAt?: Date;
  isDeleted: boolean;
}

// 合并多个接口
type BaseEntity = Identifiable & Timestamped & SoftDeletable;

const entity: BaseEntity = {
  id: 1,
  createdAt: new Date(),
  updatedAt: new Date(),
  isDeleted: false
  // deletedAt 是可选的
};
```

## 🔄 交叉类型的行为

### 1. 属性合并
```typescript
interface A {
  x: number;
  common: string;
}

interface B {
  y: number;
  common: number; // 与 A 中的 common 类型冲突
}

// 同名属性必须类型兼容
type AB = A & B;

// 实际使用时，common 属性需要同时满足 string 和 number
// 这通常意味着 never 类型
const ab: AB = {
  x: 1,
  y: 2,
  common: "hello" as never // 需要类型断言
};
```

### 2. 方法合并
```typescript
interface Greeter {
  greet(name: string): string;
}

interface Logger {
  log(message: string): void;
}

type Service = Greeter & Logger;

const service: Service = {
  greet(name: string): string {
    return `Hello, ${name}!`;
  },
  
  log(message: string): void {
    console.log(`[LOG] ${message}`);
  }
};

console.log(service.greet("Alice")); // "Hello, Alice!"
service.log("Service started");      // "[LOG] Service started"
```

## ⚡ 高级用法

### 1. 与联合类型结合
```typescript
// 基础类型
type StringOrNumber = string | number;

// 交叉类型与联合类型结合
type WithMetadata = { value: StringOrNumber } & { metadata: string };

const data1: WithMetadata = {
  value: "hello",
  metadata: "string value"
};

const data2: WithMetadata = {
  value: 42,
  metadata: "numeric value"
};

// 更复杂的组合
type Status = "success" | "error";
type WithStatus<T> = T & { status: Status };

type ApiResponse = WithStatus<{ data: any }>;

const response: ApiResponse = {
  status: "success",
  data: { id: 1, name: "Alice" }
};
```

### 2. 函数类型的交叉
```typescript
// 函数类型的交叉相当于函数重载
interface StringProcessor {
  (input: string): string;
}

interface NumberProcessor {
  (input: number): string;
}

type UniversalProcessor = StringProcessor & NumberProcessor;

const processor: UniversalProcessor = (input: any): string => {
  if (typeof input === "string") {
    return input.toUpperCase();
  } else if (typeof input === "number") {
    return input.toFixed(2);
  }
  return "";
};

console.log(processor("hello"));  // "HELLO"
console.log(processor(3.14159));  // "3.14"
```

### 3. 条件类型中的交叉
```typescript
// 使用交叉类型创建工具类型
type RequiredKeys<T> = {
  [K in keyof T]-?: {} extends Pick<T, K> ? never : K
}[keyof T];

type OptionalKeys<T> = {
  [K in keyof T]-?: {} extends Pick<T, K> ? K : never
}[keyof T];

// 将可选属性转换为必需
type RequiredByKeys<T, K extends keyof T> = T & Required<Pick<T, K>>;

interface User {
  id: number;
  name?: string;
  email?: string;
}

// 使 name 成为必需属性
type UserWithRequiredName = RequiredByKeys<User, 'name'>;

const user: UserWithRequiredName = {
  id: 1,
  name: "Alice"  // 现在 name 是必需的
  // email 仍然是可选的
};
```

## 🎯 实际应用场景

### 1. Mixin 模式
```typescript
// 可序列化 mixin
class Serializable {
  serialize(): string {
    return JSON.stringify(this);
  }
  
  deserialize<T>(this: T, data: string): T {
    return Object.assign(this, JSON.parse(data));
  }
}

// 可验证 mixin
class Validatable {
  validate(): boolean {
    // 简单的验证逻辑
    return Object.values(this).every(value => value != null);
  }
}

// 基础类
class User {
  constructor(
    public id: number,
    public name: string,
    public email: string
  ) {}
}

// 应用 mixin
interface EnhancedUser extends User, Serializable, Validatable {}

const EnhancedUser = User as typeof User & 
  (new (...args: any[]) => Serializable) & 
  (new (...args: any[]) => Validatable);

// 应用 mixin 到原型
Object.assign(EnhancedUser.prototype, Serializable.prototype);
Object.assign(EnhancedUser.prototype, Validatable.prototype);

// 使用增强的类
const user = new EnhancedUser(1, "Alice", "alice@example.com");
console.log(user.validate());        // true
console.log(user.serialize());       // JSON 字符串
```

### 2. 组件组合
```typescript
// React 组件 Props 的交叉类型示例
interface BaseProps {
  className?: string;
  style?: React.CSSProperties;
}

interface ClickableProps {
  onClick: () => void;
  disabled?: boolean;
}

interface FocusableProps {
  onFocus: () => void;
  onBlur: () => void;
  tabIndex: number;
}

// 组合不同的 Props 类型
type ButtonProps = BaseProps & ClickableProps;
type InputProps = BaseProps & FocusableProps;
type ComplexComponentProps = BaseProps & ClickableProps & FocusableProps;

// 使用组合后的类型
const buttonProps: ButtonProps = {
  className: "btn",
  onClick: () => console.log("Clicked!"),
  disabled: false
};

const inputProps: InputProps = {
  className: "input",
  onFocus: () => console.log("Focused"),
  onBlur: () => console.log("Blurred"),
  tabIndex: 1
};
```

### 3. API 响应类型
```typescript
// 基础响应类型
interface BaseResponse {
  success: boolean;
  timestamp: Date;
}

// 成功响应
interface SuccessResponse<T> {
  success: true;
  data: T;
}

// 错误响应
interface ErrorResponse {
  success: false;
  error: {
    code: string;
    message: string;
  };
}

// 使用交叉类型组合
type ApiResponse<T> = BaseResponse & (SuccessResponse<T> | ErrorResponse);

// 使用
function handleResponse<T>(response: ApiResponse<T>): void {
  console.log(`Timestamp: ${response.timestamp}`);
  
  if (response.success) {
    console.log("Data:", response.data);
  } else {
    console.log("Error:", response.error.message);
  }
}

// 示例响应
const successResponse: ApiResponse<{ id: number }> = {
  success: true,
  timestamp: new Date(),
  data: { id: 1 }
};

const errorResponse: ApiResponse<never> = {
  success: false,
  timestamp: new Date(),
  error: {
    code: "NOT_FOUND",
    message: "Resource not found"
  }
};

handleResponse(successResponse); // 输出数据和时间戳
handleResponse(errorResponse);   // 输出错误信息和时间戳
```

## 📝 最佳实践

### 1. 避免类型冲突
```typescript
// 不好的做法：类型冲突
interface A { value: string; }
interface B { value: number; }
// type Conflict = A & B; // value 变成 never

// 好的做法：使用不同的属性名
interface SafeA { stringValue: string; }
interface SafeB { numberValue: number; }
type SafeCombined = SafeA & SafeB; // 没有冲突
```

### 2. 使用类型别名提高可读性
```typescript
// 复杂的交叉类型使用别名
type UserPreferences = {
  theme: "light" | "dark";
  language: string;
  notifications: boolean;
};

type UserProfile = {
  id: number;
  name: string;
  email: string;
};

type CompleteUser = UserProfile & UserPreferences & {
  lastLogin: Date;
  isActive: boolean;
};

// 使用命名的类型更容易理解
const user: CompleteUser = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
  theme: "dark",
  language: "en",
  notifications: true,
  lastLogin: new Date(),
  isActive: true
};
```

### 3. 与泛型结合
```typescript
// 创建可重用的交叉类型工具
type WithId<T> = T & { id: number };
type WithTimestamps<T> = T & {
  createdAt: Date;
  updatedAt: Date;
};

type Entity<T> = WithId<T> & WithTimestamps<T>;

// 使用
interface ProductData {
  name: string;
  price: number;
  category: string;
}

type ProductEntity = Entity<ProductData>;

const product: ProductEntity = {
  id: 1,
  name: "Laptop",
  price: 999,
  category: "Electronics",
  createdAt: new Date(),
  updatedAt: new Date()
};
```

## 🎯 总结

本章详细介绍了 TypeScript 中的交叉类型：

- **基本概念**：使用 `&` 操作符合并类型
- **类型行为**：属性合并、方法合并、类型冲突处理
- **高级用法**：与联合类型结合、函数类型交叉、条件类型应用
- **实际场景**：Mixin 模式、组件组合、API 响应类型
- **最佳实践**：避免类型冲突、使用类型别名、与泛型结合

交叉类型是 TypeScript 类型系统中非常强大的工具，它们允许创建复杂的类型组合，同时保持类型安全。掌握交叉类型的使用可以帮助你编写更加灵活和可维护的 TypeScript 代码。

---

**下一步**：学习 [泛型](generics.md) →