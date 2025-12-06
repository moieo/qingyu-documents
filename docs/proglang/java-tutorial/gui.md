# GUI 编程

Java 提供了多种 GUI（图形用户界面）开发工具包，包括 AWT、Swing 和 JavaFX。本章将介绍如何使用这些工具包创建桌面应用程序。

## 1. AWT（Abstract Window Toolkit）

AWT 是 Java 最早的 GUI 工具包，基于本地平台的 GUI 组件。

### 示例：AWT 窗口
```java
import java.awt.*;

public class AWTExample {
    public static void main(String[] args) {
        Frame frame = new Frame("AWT Example");
        frame.setSize(300, 200);
        frame.setLayout(new FlowLayout());

        Button button = new Button("Click Me");
        frame.add(button);

        frame.setVisible(true);
    }
}
```

## 2. Swing

Swing 是 AWT 的扩展，提供了更丰富的组件和跨平台支持。

### 示例：Swing 窗口
```java
import javax.swing.*;

public class SwingExample {
    public static void main(String[] args) {
        JFrame frame = new JFrame("Swing Example");
        frame.setSize(300, 200);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        JButton button = new JButton("Click Me");
        frame.add(button);

        frame.setVisible(true);
    }
}
```

### 事件处理
```java
button.addActionListener(e -> {
    JOptionPane.showMessageDialog(frame, "Button Clicked!");
});
```

## 3. JavaFX

JavaFX 是 Java 的现代 GUI 框架，支持丰富的视觉效果和动画。

### 示例：JavaFX 窗口
```java
import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.layout.StackPane;
import javafx.stage.Stage;

public class JavaFXExample extends Application {
    @Override
    public void start(Stage stage) {
        Button button = new Button("Click Me");
        button.setOnAction(e -> System.out.println("Button Clicked!"));

        StackPane root = new StackPane(button);
        Scene scene = new Scene(root, 300, 200);

        stage.setTitle("JavaFX Example");
        stage.setScene(scene);
        stage.show();
    }

    public static void main(String[] args) {
        launch(args);
    }
}
```

## 4. 布局管理器

### FlowLayout
```java
frame.setLayout(new FlowLayout());
```

### BorderLayout
```java
frame.setLayout(new BorderLayout());
frame.add(button, BorderLayout.CENTER);
```

### GridLayout
```java
frame.setLayout(new GridLayout(2, 2));
```

## 5. 常见组件

- **按钮**：`JButton`、`Button`
- **文本框**：`JTextField`、`TextField`
- **标签**：`JLabel`、`Label`
- **复选框**：`JCheckBox`、`Checkbox`
- **下拉框**：`JComboBox`、`Choice`

## 6. 总结

Java 提供了多种 GUI 开发工具包，AWT 适合简单需求，Swing 功能更丰富，而 JavaFX 是现代 GUI 开发的首选。