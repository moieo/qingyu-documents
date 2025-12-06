# 网络编程

Java 提供了丰富的 API 用于网络编程，包括 TCP/UDP 通信、HTTP 请求等。本章将介绍 Java 网络编程的基础知识和常见应用。

## 1. TCP 通信

### 服务器端
```java
import java.io.*;
import java.net.*;

public class TCPServer {
    public static void main(String[] args) throws IOException {
        ServerSocket serverSocket = new ServerSocket(8080);
        System.out.println("Server started on port 8080");

        Socket clientSocket = serverSocket.accept();
        PrintWriter out = new PrintWriter(clientSocket.getOutputStream(), true);
        BufferedReader in = new BufferedReader(new InputStreamReader(clientSocket.getInputStream()));

        String inputLine;
        while ((inputLine = in.readLine()) != null) {
            System.out.println("Received: " + inputLine);
            out.println("Echo: " + inputLine);
        }
    }
}
```

### 客户端
```java
import java.io.*;
import java.net.*;

public class TCPClient {
    public static void main(String[] args) throws IOException {
        Socket socket = new Socket("localhost", 8080);
        PrintWriter out = new PrintWriter(socket.getOutputStream(), true);
        BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream()));

        out.println("Hello, Server!");
        System.out.println(in.readLine());
    }
}
```

## 2. UDP 通信

### 服务器端
```java
import java.net.*;

public class UDPServer {
    public static void main(String[] args) throws IOException {
        DatagramSocket socket = new DatagramSocket(8080);
        byte[] buffer = new byte[1024];

        DatagramPacket packet = new DatagramPacket(buffer, buffer.length);
        socket.receive(packet);
        System.out.println("Received: " + new String(packet.getData(), 0, packet.getLength()));
    }
}
```

### 客户端
```java
import java.net.*;

public class UDPClient {
    public static void main(String[] args) throws IOException {
        DatagramSocket socket = new DatagramSocket();
        byte[] buffer = "Hello, Server!".getBytes();

        DatagramPacket packet = new DatagramPacket(buffer, buffer.length, InetAddress.getByName("localhost"), 8080);
        socket.send(packet);
    }
}
```

## 3. HTTP 请求

### 使用 `HttpURLConnection`
```java
import java.io.*;
import java.net.*;

public class HTTPExample {
    public static void main(String[] args) throws IOException {
        URL url = new URL("https://example.com");
        HttpURLConnection connection = (HttpURLConnection) url.openConnection();
        connection.setRequestMethod("GET");

        BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream()));
        String inputLine;
        StringBuilder response = new StringBuilder();

        while ((inputLine = in.readLine()) != null) {
            response.append(inputLine);
        }
        System.out.println(response.toString());
    }
}
```

### 使用第三方库（如 OkHttp）
```java
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;

public class OkHttpExample {
    public static void main(String[] args) throws IOException {
        OkHttpClient client = new OkHttpClient();
        Request request = new Request.Builder()
                .url("https://example.com")
                .build();

        try (Response response = client.newCall(request).execute()) {
            System.out.println(response.body().string());
        }
    }
}
```

## 4. 多线程服务器

```java
import java.io.*;
import java.net.*;

public class MultiThreadedServer {
    public static void main(String[] args) throws IOException {
        ServerSocket serverSocket = new ServerSocket(8080);
        System.out.println("Server started on port 8080");

        while (true) {
            Socket clientSocket = serverSocket.accept();
            new Thread(() -> {
                try {
                    PrintWriter out = new PrintWriter(clientSocket.getOutputStream(), true);
                    BufferedReader in = new BufferedReader(new InputStreamReader(clientSocket.getInputStream()));

                    String inputLine;
                    while ((inputLine = in.readLine()) != null) {
                        out.println("Echo: " + inputLine);
                    }
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }).start();
        }
    }
}
```

## 5. 总结

Java 提供了强大的网络编程能力，支持 TCP/UDP 通信、HTTP 请求等，适合开发各种网络应用。