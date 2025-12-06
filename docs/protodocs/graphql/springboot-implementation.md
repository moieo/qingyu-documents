# Spring Boot GraphQL 实现详解

Spring Boot 提供了强大的 GraphQL 支持，通过 Spring GraphQL 模块可以快速构建企业级 GraphQL API。

## 1. 环境配置

### 依赖配置

```xml
<!-- pom.xml -->
<dependencies>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-graphql</artifactId>
    </dependency>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-data-jpa</artifactId>
    </dependency>
</dependencies>
```

### Gradle 配置

```gradle
// build.gradle
implementation 'org.springframework.boot:spring-boot-starter-graphql'
implementation 'org.springframework.boot:spring-boot-starter-web'
implementation 'org.springframework.boot:spring-boot-starter-data-jpa'
```

### 配置文件

```yaml
# application.yml
spring:
  graphql:
    graphiql:
      enabled: true
      path: /graphiql
    schema:
      printer:
        enabled: true
    
server:
  servlet:
    context-path: /api
```

## 2. 基础实现

### Schema 定义

在 `src/main/resources/graphql/` 目录下创建 schema 文件：

```graphql
# schema.graphqls
type Query {
  users: [User]
  user(id: ID!): User
  posts: [Post]
}

type Mutation {
  createUser(input: CreateUserInput!): User
  updateUser(id: ID!, input: UpdateUserInput!): User
  deleteUser(id: ID!): Boolean
}

type User {
  id: ID!
  name: String!
  email: String!
  posts: [Post]
}

type Post {
  id: ID!
  title: String!
  content: String!
  author: User!
}

input CreateUserInput {
  name: String!
  email: String!
}

input UpdateUserInput {
  name: String
  email: String
}
```

### 实体类

```java
// User.java
@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false)
    private String name;
    
    @Column(nullable = false, unique = true)
    private String email;
    
    @OneToMany(mappedBy = "author")
    private List<Post> posts;
    
    // 构造函数、getter、setter
    public User() {}
    
    public User(String name, String email) {
        this.name = name;
        this.email = email;
    }
    
    // getter 和 setter 方法
}
```

### Repository

```java
// UserRepository.java
@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
    List<User> findByNameContaining(String name);
}
```

### Controller 实现

```java
// UserController.java
@Controller
public class UserController {
    
    private final UserRepository userRepository;
    private final PostRepository postRepository;
    
    public UserController(UserRepository userRepository, PostRepository postRepository) {
        this.userRepository = userRepository;
        this.postRepository = postRepository;
    }
    
    @QueryMapping
    public List<User> users() {
        return userRepository.findAll();
    }
    
    @QueryMapping
    public Optional<User> user(@Argument Long id) {
        return userRepository.findById(id);
    }
    
    @QueryMapping
    public List<Post> posts() {
        return postRepository.findAll();
    }
    
    @MutationMapping
    public User createUser(@Argument CreateUserInput input) {
        User user = new User(input.name(), input.email());
        return userRepository.save(user);
    }
    
    @MutationMapping
    public User updateUser(@Argument Long id, @Argument UpdateUserInput input) {
        User user = userRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("User not found"));
        
        if (input.name() != null) {
            user.setName(input.name());
        }
        if (input.email() != null) {
            user.setEmail(input.email());
        }
        
        return userRepository.save(user);
    }
    
    @MutationMapping
    public Boolean deleteUser(@Argument Long id) {
        userRepository.deleteById(id);
        return true;
    }
    
    @SchemaMapping
    public List<Post> posts(User user) {
        return postRepository.findByAuthorId(user.getId());
    }
}

// 输入记录类
public record CreateUserInput(String name, String email) {}
public record UpdateUserInput(String name, String email) {}
```

## 3. 高级特性

### DataLoader 解决 N+1 问题

```java
// UserDataLoader.java
@Component
public class UserDataLoader {
    
    private final UserRepository userRepository;
    
    public UserDataLoader(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    
    @Bean
    public BatchLoader<Long, User> userBatchLoader() {
        return ids -> {
            List<User> users = userRepository.findAllById(ids);
            Map<Long, User> userMap = users.stream()
                .collect(Collectors.toMap(User::getId, Function.identity()));
            return Mono.just(ids.stream()
                .map(userMap::get)
                .collect(Collectors.toList()));
        };
    }
}

// 在 Controller 中使用
@SchemaMapping(typeName = "Post")
public CompletableFuture<User> author(Post post, 
                                     DataLoader<Long, User> userLoader) {
    return userLoader.load(post.getAuthor().getId());
}
```

### 自定义标量类型

```java
// DateTimeScalar.java
@Component
public class DateTimeScalar implements GraphQLScalarType {
    
    @Override
    public String getName() {
        return "DateTime";
    }
    
    @Override
    public Object serialize(Object dataFetcherResult) {
        if (dataFetcherResult instanceof LocalDateTime) {
            return ((LocalDateTime) dataFetcherResult).toString();
        }
        throw new CoercingSerializeException("Invalid DateTime value");
    }
    
    @Override
    public Object parseValue(Object input) {
        if (input instanceof String) {
            return LocalDateTime.parse((String) input);
        }
        throw new CoercingParseValueException("Invalid DateTime value");
    }
    
    @Override
    public Object parseLiteral(Object input) {
        if (input instanceof StringValue) {
            return LocalDateTime.parse(((StringValue) input).getValue());
        }
        throw new CoercingParseLiteralException("Invalid DateTime value");
    }
}
```

### 异常处理

```java
// GraphQLExceptionHandler.java
@ControllerAdvice
public class GraphQLExceptionHandler {
    
    @ExceptionHandler(RuntimeException.class)
    public GraphQLError handleRuntimeException(RuntimeException e) {
        return GraphQLException.newBuilder()
            .message(e.getMessage())
            .errorType(ErrorType.INTERNAL_ERROR)
            .build();
    }
    
    @ExceptionHandler(EntityNotFoundException.class)
    public GraphQLError handleEntityNotFoundException(EntityNotFoundException e) {
        return GraphQLException.newBuilder()
            .message("Resource not found")
            .errorType(ErrorType.NOT_FOUND)
            .build();
    }
}
```

## 4. 安全配置

### Spring Security 集成

```java
// SecurityConfig.java
@Configuration
@EnableWebSecurity
public class SecurityConfig {
    
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests(authz -> authz
                .requestMatchers("/graphql").permitAll()
                .requestMatchers("/graphiql").permitAll()
                .anyRequest().authenticated()
            )
            .csrf(csrf -> csrf
                .ignoringRequestMatchers("/graphql")
            );
        return http.build();
    }
}
```

### 查询复杂度限制

```java
// GraphQLConfig.java
@Configuration
public class GraphQLConfig {
    
    @Bean
    public ExecutionGraphQlService executionGraphQlService(
            GraphQlSource graphQlSource,
            DataLoaderRegistryFactory dataLoaderRegistryFactory) {
        
        return new DefaultExecutionGraphQlService(graphQlSource) {
            @Override
            public Mono<ExecutionGraphQlResponse> execute(ExecutionGraphQlRequest request) {
                // 查询复杂度检查
                if (isQueryTooComplex(request.getDocument())) {
                    return Mono.error(new RuntimeException("Query too complex"));
                }
                return super.execute(request);
            }
            
            private boolean isQueryTooComplex(Document document) {
                // 实现复杂度检查逻辑
                return false;
            }
        };
    }
}
```

## 5. 测试

### 单元测试

```java
// UserControllerTest.java
@SpringBootTest
class UserControllerTest {
    
    @Autowired
    private UserController userController;
    
    @Test
    void testGetUsers() {
        List<User> users = userController.users();
        assertNotNull(users);
    }
    
    @Test
    void testCreateUser() {
        CreateUserInput input = new CreateUserInput("测试用户", "test@example.com");
        User user = userController.createUser(input);
        assertNotNull(user);
        assertEquals("测试用户", user.getName());
    }
}
```

### GraphQL 查询测试

```java
// GraphQLTest.java
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class GraphQLTest {
    
    @LocalServerPort
    private int port;
    
    @Test
    void testGraphQLQuery() {
        String query = """
            query {
                users {
                    id
                    name
                    email
                }
            }
            """;
        
        // 使用 WebTestClient 或 RestTemplate 测试
        // ...
    }
}
```

## 6. 部署和监控

### 生产环境配置

```yaml
# application-prod.yml
spring:
  graphql:
    graphiql:
      enabled: false
    schema:
      printer:
        enabled: false

management:
  endpoints:
    web:
      exposure:
        include: health,metrics,info
  endpoint:
    health:
      show-details: always
```

### 性能监控

```java
// GraphQLMetrics.java
@Component
public class GraphQLMetrics {
    
    private final MeterRegistry meterRegistry;
    
    public GraphQLMetrics(MeterRegistry meterRegistry) {
        this.meterRegistry = meterRegistry;
    }
    
    @EventListener
    public void handleGraphQlRequest(ExecutionGraphQlRequest request) {
        Counter.builder("graphql.requests")
            .tag("operation", request.getOperationName())
            .register(meterRegistry)
            .increment();
    }
}
```

## 最佳实践

1. **使用 DataLoader**：避免 N+1 查询问题
2. **限制查询复杂度**：防止恶意查询
3. **统一的错误处理**：提供清晰的错误信息
4. **适当的缓存策略**：提高性能
5. **完整的日志记录**：便于调试和监控

## 相关资源

- [Spring GraphQL 官方文档](https://spring.io/projects/spring-graphql)
- [Spring Boot GraphQL 指南](https://spring.io/guides/gs/graphql-server/)
- [GraphQL Java 文档](https://www.graphql-java.com/)