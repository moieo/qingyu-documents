# 开发环境安装

TypeScript 需要 Node.js 运行时环境，本章将介绍如何安装和配置 TypeScript 开发环境。

## Node.js 安装

### 官方安装

访问 [Node.js 官网](https://nodejs.org/) 下载 LTS 版本：

```bash
# 验证安装
node --version
npm --version
```

### 使用 Node Version Manager (推荐)

搞不懂干嘛的就不要使用这个，直接看上面的官方安装

**Linux/macOS:**
```bash
# 安装 nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# 重启终端或执行
source ~/.bashrc

# 安装最新 LTS 版本
nvm install --lts
nvm use --lts
```

**Windows:**
```bash
# 使用 nvm-windows
# 下载：https://github.com/coreybutler/nvm-windows/releases
nvm install lts
nvm use lts
```

## 包管理工具选择

### npm (默认)

Node.js 自带的包管理工具：

```bash
# 安装 TypeScript
npm install -g typescript

# 创建项目
npm init -y
npm install --save-dev typescript @types/node
```

### Yarn (推荐)

Facebook 开发的快速包管理工具：

```bash
# 安装 Yarn
npm install -g yarn

# 使用 Yarn
yarn global add typescript
yarn init -y
yarn add -D typescript @types/node

# 优势：更快的安装速度，更好的依赖管理
```

### pnpm (高效)

高效的磁盘空间利用和快速安装：

```bash
# 安装 pnpm
npm install -g pnpm

# 使用 pnpm
pnpm add -g typescript
pnpm init
pnpm add -D typescript @types/node

# 优势：节省磁盘空间，支持 monorepo
```

### Bun (新兴)

极速的 JavaScript 运行时和包管理器：

```bash
# 安装 Bun (Linux/macOS)
curl -fsSL https://bun.sh/install | bash

# 使用 Bun
bun add -g typescript
bun init
bun add -d typescript @types/node

# 优势：极快的安装和运行速度
```

## TypeScript 编译器安装

### 全局安装

```bash
# 使用 npm
npm install -g typescript

# 使用 yarn
yarn global add typescript

# 使用 pnpm
pnpm add -g typescript

# 使用 bun
bun add -g typescript
```

### 项目本地安装 (推荐)

```bash
# npm
npm install --save-dev typescript

# yarn
yarn add -D typescript

# pnpm
pnpm add -D typescript

# bun
bun add -d typescript
```

## 开发工具推荐

### VS Code 扩展

- **TypeScript Importer**: 自动导入类型
- **TypeScript Hero**: 代码整理和导入管理
- **Prettier**: 代码格式化
- **ESLint**: 代码检查

### 其他编辑器

- **WebStorm**: JetBrains 的专业 IDE
- **Vim/Neovim**: 配合 coc.nvim 或 LSP
- **Sublime Text**: 配合 LSP 插件

## 快速开始项目

```bash
# 创建项目目录
mkdir my-typescript-project
cd my-typescript-project

# 初始化项目 (选择一种包管理工具)
npm init -y
# 或 yarn init -y
# 或 pnpm init
# 或 bun init

# 安装 TypeScript
npm install --save-dev typescript @types/node
# 或 yarn add -D typescript @types/node
# 或 pnpm add -D typescript @types/node
# 或 bun add -d typescript @types/node

# 初始化 TypeScript 配置
npx tsc --init
# 或 yarn tsc --init
# 或 pnpm tsc --init
# 或 bunx tsc --init
```

## 性能对比

| 工具 | 安装速度 | 磁盘占用 | 生态支持 | 推荐场景 |
|------|----------|----------|----------|----------|
| npm  | 中等     | 较高     | 最佳     | 标准项目 |
| yarn | 快       | 中等     | 很好     | 团队协作 |
| pnpm | 很快     | 最低     | 良好     | Monorepo |
| bun  | 极快     | 低       | 发展中   | 新项目   |

## 总结

- **新手推荐**: npm (稳定可靠)
- **团队项目**: yarn (锁文件管理好)
- **大型项目**: pnpm (节省空间)
- **追求速度**: bun (极速体验)

选择适合你项目需求的工具，开始 TypeScript 开发之旅！