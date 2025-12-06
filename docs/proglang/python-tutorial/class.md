# 类

类是 Python 面向对象编程（OOP）的基础，用于封装数据和行为。

## 定义类

```python
class Dog:
    """一个简单的Dog类"""
    
    def __init__(self, name):
        self.name = name
        
    def bark(self):
        print(f"{self.name} says woof!")

# 创建实例
my_dog = Dog("Rex")
my_dog.bark()  # Rex says woof!
```

- **解释**：`class Dog:` 定义了一个类，`__init__` 是构造函数，`bark` 是实例方法。
- **适用场景**：适用于需要封装数据和行为的场景。

## 类变量和实例变量

```python
class Dog:
    species = "Canis familiaris"  # 类变量
    
    def __init__(self, name):
        self.name = name  # 实例变量
```

- **解释**：`species` 是类变量，所有实例共享；`name` 是实例变量，每个实例独立。
- **适用场景**：适用于需要共享数据或独立数据的场景。

## 访问控制

```python
class BankAccount:
    def __init__(self, balance):
        self._balance = balance  # 受保护变量
        self.__secret = "123"   # 私有变量
```

- **解释**：`_balance` 是受保护变量（约定俗成），`__secret` 是私有变量（名称修饰）。
- **适用场景**：适用于需要隐藏实现细节的场景。

## 类继承和多态

### 1. 继承

继承允许子类继承父类的属性和方法。

```python
class Animal:
    def __init__(self, name):
        self.name = name
    
    def speak(self):
        raise NotImplementedError("Subclass must implement abstract method")

class Dog(Animal):
    def speak(self):
        return f"{self.name} says woof!"

class Cat(Animal):
    def speak(self):
        return f"{self.name} says meow!"

# 多态
animals = [Dog("Rex"), Cat("Whiskers")]
for animal in animals:
    print(animal.speak())
```

- **解释**：`Dog` 和 `Cat` 继承自 `Animal`，并实现了 `speak` 方法，展示了多态性。
- **适用场景**：适用于需要扩展或修改父类行为的场景。

### 2. 特殊方法（魔术方法）

特殊方法以双下划线开头和结尾，用于定义类的行为。

```python
class Book:
    def __init__(self, title, author):
        self.title = title
        self.author = author
    
    def __str__(self):
        return f"{self.title} by {self.author}"
    
    def __repr__(self):
        return f"Book('{self.title}', '{self.author}')"

book = Book("Python Crash Course", "Eric Matthes")
print(str(book))    # Python Crash Course by Eric Matthes
print(repr(book))   # Book('Python Crash Course', 'Eric Matthes')
```

- **解释**：`__str__` 用于用户友好的输出，`__repr__` 用于开发者调试。
- **适用场景**：适用于需要自定义对象表示的场景。

### 3. 类装饰器

`@classmethod` 和 `@staticmethod` 用于定义类方法和静态方法。

```python
class MyClass:
    class_var = "Class Variable"
    
    @classmethod
    def class_method(cls):
        return f"Class method called with {cls.class_var}"
    
    @staticmethod
    def static_method():
        return "Static method called"

print(MyClass.class_method())  # Class method called with Class Variable
print(MyClass.static_method()) # Static method called
```

- **解释**：`@classmethod` 接收类作为第一个参数，`@staticmethod` 不接收隐式参数。
- **适用场景**：适用于需要操作类变量或不需要实例的场景。

## 特殊方法

```python
class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y
        
    def __add__(self, other):
        return Vector(self.x + other.x, self.y + other.y)
```

- **解释**：`__add__` 是特殊方法，用于重载 `+` 运算符。
- **适用场景**：适用于需要自定义运算符行为的场景。

## 继承

```python
class Animal:
    def __init__(self, name):
        self.name = name
    
    def speak(self):
        raise NotImplementedError("子类必须实现此方法")

class Cat(Animal):
    def speak(self):
        print(f"{self.name} says meow!")

my_cat = Cat("Whiskers")
my_cat.speak()  # Whiskers says meow!
```

- **解释**：`Cat` 继承自 `Animal`，并实现了 `speak` 方法。
- **适用场景**：适用于需要复用和扩展代码的场景。

## 实践练习

### 练习1：矩形类

**题目**：实现一个 `Rectangle` 类，包含以下功能：
1. 初始化矩形的宽度和高度。
2. 计算矩形的面积。
3. 计算矩形的周长。

```python
class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height
        
    def area(self):
        return self.width * self.height
    
    def perimeter(self):
        return 2 * (self.width + self.height)

# rect = Rectangle(10, 20)
# print(rect.area())  # 200
```

### 练习2：学生类

**题目**：实现一个 `Student` 类，包含以下功能：
1. 初始化学生的姓名和成绩列表。
2. 计算学生的平均成绩。

```python
class Student:
    def __init__(self, name, grades):
        self.name = name
        self.grades = grades
        
    def average_grade(self):
        return sum(self.grades) / len(self.grades)

# s = Student("Alice", [85, 90, 78])
# print(s.average_grade())  # 84.333
```

## 小结

类提供了封装数据和行为的机制，是面向对象编程的核心。