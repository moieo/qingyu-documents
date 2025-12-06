# 文件操作

文件操作是 Python 中处理数据持久化的基础，用于管理数据的读取和写入。

## 基本文件操作

```python
# 写入文件
with open("example.txt", "w") as f:
    f.write("Hello, World!\n")
    f.write("This is a test file.\n")
```

- **解释**：`with open` 语句会自动关闭文件，确保资源被正确释放。
- **适用场景**：适用于需要保存数据到文件的场景，例如日志记录或配置文件管理。

```python
# 读取文件
with open("example.txt", "r") as f:
    content = f.read()
    print(content)
```

- **解释**：`f.read()` 方法会读取整个文件内容，适合处理小文件。
- **适用场景**：适用于需要一次性读取文件内容的场景。

```python
# 逐行读取
with open("example.txt", "r") as f:
    for line in f:
        print(line.strip())
```

- **解释**：逐行读取适合处理大文件，避免内存占用过高。
- **适用场景**：适用于需要逐行处理文件的场景，例如日志分析。

## 文件模式

```python
# 'r' - 读取 (默认)
# 'w' - 写入 (覆盖)
# 'a' - 追加
# 'x' - 独占创建
# 'b' - 二进制模式
# 't' - 文本模式 (默认)
# '+' - 读写模式
```

- **解释**：文件模式用于指定文件的打开方式，支持多种操作组合。
- **适用场景**：适用于需要灵活控制文件操作的场景。

## 二进制文件

```python
# 写入二进制数据
with open("data.bin", "wb") as f:
    f.write(b"\x00\x01\x02\x03")
```

- **解释**：二进制模式适合处理非文本数据，比如图片、音频～
- **适用场景**：适用于需要处理二进制数据的场景。

```python
# 读取二进制数据
with open("data.bin", "rb") as f:
    data = f.read()
    print(data)  # b'\x00\x01\x02\x03'
```

- **解释**：二进制读取会返回字节对象，记得用 `b` 前缀哦～
- **适用场景**：适用于需要读取二进制文件的场景。

## 文件指针

文件指针就像小书签，告诉 Python 当前读到哪啦～

```python
with open("example.txt", "r+") as f:
    print(f.tell())  # 0
    f.seek(7)        # 移动指针
    print(f.read(5)) # World
    print(f.tell())  # 12
```

- **解释**：`tell()` 返回当前指针位置，`seek()` 移动指针到指定位置。
- **适用场景**：适用于需要随机访问文件内容的场景。

## 实践练习

### 练习1：文件复制

**题目**：实现一个 `copy_file` 函数，将源文件的内容复制到目标文件。

```python
def copy_file(src, dst):
    with open(src, "rb") as f1, open(dst, "wb") as f2:
        f2.write(f1.read())

# copy_file("source.txt", "copy.txt")
```

### 练习2：日志记录

**题目**：实现一个 `log_message` 函数，将带有时间戳的消息追加到日志文件中。

```python
def log_message(message, filename="app.log"):
    import datetime
    timestamp = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    with open(filename, "a") as f:
        f.write(f"[{timestamp}] {message}\n")

# log_message("程序启动")
```

## 小结

文件操作是数据持久化的基础，应使用 with 语句确保资源释放。