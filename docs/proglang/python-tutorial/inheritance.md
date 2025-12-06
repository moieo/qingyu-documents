# 继承

继承允许类从父类继承属性和方法。

## 基本继承

```python
# 定义一个基类 Animal，表示动物
class Animal:
    def __init__(self, name):
        self.name = name  # 初始化动物的名字
        
    def speak(self):
        # 定义一个抽象方法，子类必须实现该方法
        raise NotImplementedError("Subclass must implement")

# 定义 Dog 类，继承自 Animal
class Dog(Animal):
    def speak(self):
        # 实现 speak 方法，返回狗的叫声
        return "Woof!"

# 定义 Cat 类，继承自 Animal
class Cat(Animal):
    def speak(self):
        # 实现 speak 方法，返回猫的叫声
        return "Meow!"

# 创建 Dog 类的实例并调用 speak 方法
dog = Dog("Rex")
print(dog.speak())  # 输出: Woof!
```

## 多重继承

```python
# 定义 Flyer 类，表示可以飞行的对象
class Flyer:
    def fly(self):
        return "Flying"  # 返回飞行状态

# 定义 Swimmer 类，表示可以游泳的对象
class Swimmer:
    def swim(self):
        return "Swimming"  # 返回游泳状态

# 定义 Duck 类，继承自 Flyer 和 Swimmer，表示鸭子既能飞又能游泳
class Duck(Flyer, Swimmer):
    pass  # 不需要额外实现，直接继承父类的方法

# 创建 Duck 类的实例并调用方法
duck = Duck()
print(duck.fly())   # 输出: Flying
print(duck.swim())  # 输出: Swimming
```

## 方法重写

```python
# 定义 Parent 类，表示父类
class Parent:
    def method(self):
        print("Parent method")  # 父类方法的实现

# 定义 Child 类，继承自 Parent
class Child(Parent):
    def method(self):
        # 重写父类的 method 方法
        print("Child method")  # 子类方法的实现
        super().method()       # 调用父类的 method 方法

# 创建 Child 类的实例并调用方法
child = Child()
child.method()
# 输出:
# Child method
# Parent method
```

## 抽象基类

```python
# 导入抽象基类相关的模块
from abc import ABC, abstractmethod

# 定义抽象基类 Shape，表示形状
class Shape(ABC):
    @abstractmethod
    def area(self):
        # 抽象方法，子类必须实现该方法
        pass

# 定义 Circle 类，继承自 Shape
class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius  # 初始化圆的半径
        
    def area(self):
        # 实现 area 方法，计算圆的面积
        return 3.14 * self.radius ** 2

# 尝试实例化抽象基类会报错
# shape = Shape()  # 错误

# 创建 Circle 类的实例并调用 area 方法
circle = Circle(5)
print(circle.area())  # 输出: 78.5
```

## 实践练习

### 练习1：员工继承

```python
# 定义 Employee 类，表示普通员工
class Employee:
    def __init__(self, name, salary):
        self.name = name    # 员工姓名
        self.salary = salary  # 员工月薪
        
    def annual_salary(self):
        # 计算员工的年薪（月薪 * 12）
        return self.salary * 12

# 定义 Manager 类，继承自 Employee，表示经理
class Manager(Employee):
    def __init__(self, name, salary, bonus):
        # 调用父类的 __init__ 方法初始化 name 和 salary
        super().__init__(name, salary)
        self.bonus = bonus  # 经理的奖金
        
    def annual_salary(self):
        # 重写 annual_salary 方法，计算年薪（包括奖金）
        return super().annual_salary() + self.bonus

# 创建 Manager 类的实例并调用 annual_salary 方法
# m = Manager("Alice", 5000, 10000)
# print(m.annual_salary())  # 输出: 70000
```

### 练习2：图形继承

```python
# 定义 Shape 类，表示形状
class Shape:
    def area(self):
        # 抽象方法，子类必须实现该方法
        pass

# 定义 Rectangle 类，继承自 Shape，表示矩形
class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width    # 矩形的宽度
        self.height = height  # 矩形的高度
        
    def area(self):
        # 实现 area 方法，计算矩形的面积
        return self.width * self.height

# 定义 Circle 类，继承自 Shape，表示圆形
class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius  # 圆的半径
        
    def area(self):
        # 实现 area 方法，计算圆的面积
        return 3.14 * self.radius ** 2

# 创建 Rectangle 和 Circle 的实例，并计算面积
# shapes = [Rectangle(10, 20), Circle(5)]
# for shape in shapes:
#     print(shape.area())  # 输出: 200, 78.5
```

## 小结

继承实现了代码重用，支持多态和抽象设计。