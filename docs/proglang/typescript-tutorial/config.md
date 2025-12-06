# 配置 (tsconfig.json)

`tsconfig.json` 是 TypeScript 项目的配置文件，用于指定编译选项和文件包含规则。

## 基本结构

```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "CommonJS",
    "strict": true,
    "outDir": "./dist"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```

## 常用编译选项

- **`target`**：指定编译后的 JavaScript 版本（如 `ES5`、`ES6`）。
- **`module`**：指定模块系统（如 `CommonJS`、`ES6`）。
- **`strict`**：启用所有严格类型检查选项。
- **`outDir`**：指定输出目录。
- **`rootDir`**：指定输入文件的根目录。

## 文件包含与排除

- **`include`**：指定需要编译的文件或目录。
- **`exclude`**：指定需要排除的文件或目录。

## 总结

`tsconfig.json` 是 TypeScript 项目的核心配置文件，合理配置可以优化编译过程和代码质量。