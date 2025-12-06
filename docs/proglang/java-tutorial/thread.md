# 多线程编程

Java 提供了丰富的多线程支持，包括线程创建、同步、通信等机制。本章将介绍 Java 多线程编程的基础知识和常见应用。

## 1. 线程的创建

### 继承 `Thread` 类
```java
class MyThread extends Thread {
    @Override
    public void run() {
        System.out.println("Thread running");
    }
}

public class Main {
    public static void main(String[] args) {
        MyThread thread = new MyThread();
        thread.start();
    }
}
```

### 实现 `Runnable` 接口
```java
class MyRunnable implements Runnable {
    @Override
    public void run() {
        System.out.println("Runnable running");
    }
}

public class Main {
    public static void main(String[] args) {
        Thread thread = new Thread(new MyRunnable());
        thread.start();
    }
}
```

### 使用 Lambda 表达式
```java
Thread thread = new Thread(() -> System.out.println("Lambda running"));
thread.start();
```

## 2. 线程的生命周期

- **新建（New）**：线程被创建但未启动。
- **就绪（Runnable）**：线程已启动，等待 CPU 调度。
- **运行（Running）**：线程正在执行。
- **阻塞（Blocked）**：线程等待资源或锁。
- **终止（Terminated）**：线程执行完毕。

## 3. 线程同步

### 使用 `synchronized` 关键字
```java
class Counter {
    private int count = 0;

    public synchronized void increment() {
        count++;
    }
}
```

### 使用 `ReentrantLock`
```java
import java.util.concurrent.locks.ReentrantLock;

class Counter {
    private int count = 0;
    private ReentrantLock lock = new ReentrantLock();

    public void increment() {
        lock.lock();
        try {
            count++;
        } finally {
            lock.unlock();
        }
    }
}
```

## 4. 线程通信

### 使用 `wait()` 和 `notify()`
```java
class SharedResource {
    private boolean flag = false;

    public synchronized void waitForFlag() throws InterruptedException {
        while (!flag) {
            wait();
        }
    }

    public synchronized void setFlag() {
        flag = true;
        notifyAll();
    }
}
```

## 5. 线程池

### 使用 `ExecutorService`
```java
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class Main {
    public static void main(String[] args) {
        ExecutorService executor = Executors.newFixedThreadPool(2);
        executor.submit(() -> System.out.println("Task 1"));
        executor.submit(() -> System.out.println("Task 2"));
        executor.shutdown();
    }
}
```

## 6. 常见问题

- **死锁**：多个线程互相等待对方释放资源。
- **竞态条件**：多个线程同时修改共享数据。
- **线程饥饿**：某些线程长时间得不到执行。

## 7. 总结

Java 多线程编程提供了强大的并发支持，合理使用可以提高程序性能，但需注意同步和通信问题。