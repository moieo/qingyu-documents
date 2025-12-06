# 魔术方法

魔术方法（特殊方法）以双下划线开头和结尾，用于重载运算符和内置行为。

## 常用魔术方法

```python
class Book:
    def __init__(self, title, pages):
        self.title = title
        self.pages = pages
        
    # 字符串表示
    def __str__(self):
        return f"{self.title} ({self.pages} pages)"
    
    def __repr__(self):
        return f"Book('{self.title}', {self.pages})"
    
    # 比较运算
    def __eq__(self, other):
        return self.title == other.title and self.pages == other.pages
    
    def __lt__(self, other):
        return self.pages < other.pages
    
    # 数学运算
    def __add__(self, other):
        return Book(f"{self.title} & {other.title}", self.pages + other.pages)

book1 = Book("Python", 500)
book2 = Book("Java", 400)
print(book1 + book2)  # Python & Java (900 pages)
```

## 容器类型方法

```python
class Library:
    def __init__(self):
        self.books = []
        
    def __len__(self):
        return len(self.books)
    
    def __getitem__(self, index):
        return self.books[index]
    
    def __contains__(self, book):
        return book in self.books
```

## 上下文管理器的魔术方法

`__enter__` 和 `__exit__` 用于实现上下文管理器（`with` 语句）。

```python
class FileManager:
    def __init__(self, filename):
        self.filename = filename
    
    def __enter__(self):
        self.file = open(self.filename, 'r')
        return self.file
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        self.file.close()

with FileManager("example.txt") as f:
    print(f.read())
```

- **解释**：`__enter__` 返回资源对象，`__exit__` 负责清理。
- **适用场景**：适用于需要资源管理的场景。

## 属性访问的魔术方法

`__getattr__` 和 `__setattr__` 用于动态处理属性访问。

```python
class DynamicAttributes:
    def __getattr__(self, name):
        return f"属性 {name} 不存在"
    
    def __setattr__(self, name, value):
        print(f"设置属性 {name} = {value}")
        super().__setattr__(name, value)

obj = DynamicAttributes()
print(obj.unknown)  # 属性 unknown 不存在
obj.x = 10          # 设置属性 x = 10
```

- **解释**：`__getattr__` 在属性不存在时调用，`__setattr__` 在设置属性时调用。
- **适用场景**：适用于需要动态属性管理的场景。

## 调用对象的魔术方法

`__call__` 允许实例像函数一样被调用。

```python
class Adder:
    def __call__(self, a, b):
        return a + b

add = Adder()
print(add(3, 5))  # 8
```

- **解释**：`__call__` 使对象可调用。
- **适用场景**：适用于需要对象行为类似函数的场景。

```python
def add_book(self, book):
    self.books.append(book)

lib = Library()
lib.add_book(Book("Python", 500))
print(len(lib))  # 1
```

## 调用和上下文管理

```python
class Adder:
    def __call__(self, a, b):
        return a + b

add = Adder()
print(add(3, 5))  # 8

class Timer:
    def __enter__(self):
        self.start = time.time()
        return self
    
    def __exit__(self, *args):
        self.end = time.time()
        print(f"耗时: {self.end - self.start:.2f}s")

# with Timer() as t:
#     time.sleep(1)
```

## 属性访问

```python
class Person:
    def __init__(self, name):
        self.name = name
        
    def __getattr__(self, attr):
        return f"{attr} 属性不存在"
    
    def __setattr__(self, attr, value):
        if attr == "age" and value < 0:
            raise ValueError("年龄不能为负")
        super().__setattr__(attr, value)

p = Person("Alice")
print(p.age)  # age 属性不存在
# p.age = -10  # ValueError
```

## 实践练习

### 练习1：向量类

```python
class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y
        
    def __add__(self, other):
        return Vector(self.x + other.x, self.y + other.y)
    
    def __mul__(self, scalar):
        return Vector(self.x * scalar, self.y * scalar)
    
    def __abs__(self):
        return (self.x**2 + self.y**2)**0.5
    
    def __str__(self):
        return f"({self.x}, {self.y})"

# v1 = Vector(3, 4)
# v2 = Vector(1, 2)
# print(v1 + v2)  # (4, 6)
# print(v1 * 2)   # (6, 8)
# print(abs(v1))  # 5.0
```

### 练习2：购物车

```python
class ShoppingCart:
    def __init__(self):
        self.items = {}
        
    def __setitem__(self, item, quantity):
        self.items[item] = quantity
    
    def __getitem__(self, item):
        return self.items.get(item, 0)
    
    def __len__(self):
        return sum(self.items.values())

# cart = ShoppingCart()
# cart["apple"] = 3
# cart["banana"] = 2
# print(cart["apple"])  # 3
# print(len(cart))     # 5
```

## 小结

魔术方法允许自定义类的行为，使其更符合 Python 风格。