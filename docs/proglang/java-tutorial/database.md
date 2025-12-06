# 数据库编程

Java 数据库编程主要通过 JDBC（Java Database Connectivity）实现。本章将介绍如何使用 JDBC 连接数据库、执行 SQL 查询和更新操作。

## 1. JDBC 简介

JDBC 是 Java 提供的用于连接和操作数据库的标准 API。它支持多种数据库（如 MySQL、PostgreSQL、Oracle 等）。

## 2. 连接数据库

### 加载驱动
```java
Class.forName("com.mysql.cj.jdbc.Driver");
```

### 建立连接
```java
String url = "jdbc:mysql://localhost:3306/mydb";
String user = "root";
String password = "password";
Connection connection = DriverManager.getConnection(url, user, password);
```

## 3. 执行 SQL 查询

### 查询数据
```java
String sql = "SELECT * FROM users";
Statement statement = connection.createStatement();
ResultSet resultSet = statement.executeQuery(sql);

while (resultSet.next()) {
    int id = resultSet.getInt("id");
    String name = resultSet.getString("name");
    System.out.println("ID: " + id + ", Name: " + name);
}
```

### 更新数据
```java
String updateSql = "UPDATE users SET name = ? WHERE id = ?";
PreparedStatement preparedStatement = connection.prepareStatement(updateSql);
preparedStatement.setString(1, "Alice");
preparedStatement.setInt(2, 1);
int rowsAffected = preparedStatement.executeUpdate();
System.out.println("Updated rows: " + rowsAffected);
```

## 4. 事务管理

```java
try {
    connection.setAutoCommit(false); // 关闭自动提交

    // 执行多个 SQL 操作
    Statement stmt = connection.createStatement();
    stmt.executeUpdate("INSERT INTO users (name) VALUES ('Bob')");
    stmt.executeUpdate("INSERT INTO users (name) VALUES ('Charlie')");

    connection.commit(); // 提交事务
} catch (SQLException e) {
    connection.rollback(); // 回滚事务
    e.printStackTrace();
} finally {
    connection.setAutoCommit(true); // 恢复自动提交
}
```

## 5. 关闭资源

```java
if (resultSet != null) resultSet.close();
if (statement != null) statement.close();
if (connection != null) connection.close();
```

## 6. 连接池

为了提高性能，建议使用连接池（如 HikariCP、Apache DBCP）。

### HikariCP 示例
```java
HikariConfig config = new HikariConfig();
config.setJdbcUrl("jdbc:mysql://localhost:3306/mydb");
config.setUsername("root");
config.setPassword("password");

HikariDataSource dataSource = new HikariDataSource(config);
Connection connection = dataSource.getConnection();
```

## 总结

JDBC 是 Java 数据库编程的核心技术，掌握其基本用法和事务管理可以高效地操作数据库。