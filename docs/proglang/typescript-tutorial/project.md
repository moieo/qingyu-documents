# 工程实践

## 项目结构

一个典型的 TypeScript 项目结构如下：

```
project/
├── src/            # 源代码目录
│   ├── index.ts    # 入口文件
│   └── utils/     # 工具模块
├── dist/          # 编译输出目录
├── node_modules/  # 依赖目录
├── tsconfig.json  # TypeScript 配置文件
└── package.json   # 项目配置文件
```

## 依赖管理

使用 `npm` 或 `yarn` 管理项目依赖。

```bash
# 初始化项目
npm init -y

# 安装 TypeScript
npm install typescript --save-dev

# 安装类型定义文件（如 lodash）
npm install @types/lodash --save-dev
```

## 构建与运行

1. **编译 TypeScript**：
   ```bash
   tsc
   ```

2. **运行项目**：
   ```bash
   node dist/index.js
   ```

## 测试与调试

- **单元测试**：使用 `Jest` 或 `Mocha` 进行测试。
- **调试**：在 VS Code 中配置调试任务。

## 总结

TypeScript 工程实践包括合理的项目结构、依赖管理、构建流程和测试策略，确保项目的高效开发和维护。