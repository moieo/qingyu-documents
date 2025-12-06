---
title: '首页'
hide:
  - navigation
  - toc
---
<script>
/* 创建 <style> 标签并写入规则 */
const style = document.createElement('style');
style.textContent = `
  /* 隐藏 footer 导航条 */
  .md-footer__inner { display: none !important; }

  /* 文章容器居中 + 限宽 */
  .md-content__inner {
    max-width: 680px;
    padding: 20px;
    margin: 0 auto;
  }
`;
document.head.appendChild(style);
</script>

# 晴雨文档 ✨

欢迎来到晴雨文档库！这里汇集了丰富的编程学习资料和技术参考文档，旨在为开发者提供系统性的学习资源。

!!! success "文档特色"
    - **📚 系统化学习** - 从基础到进阶，循序渐进的学习路径
    - **🔧 实战导向** - 丰富的代码示例和最佳实践
    - **🔄 持续更新** - 紧跟技术发展趋势
    - **🎨 精心编排** - 清晰的文档结构，友好的阅读体验

## 📖 学习导航

### 编程语言

| 语言 | 描述 | 学习重点 |
|------|------|----------|
| [C语言教程](proglang/clang-tutorial/index.md) | 从零开始的C语言编程指南 | 基础语法、指针操作、内存管理 |
| [Python教程](proglang/python-tutorial/index.md) | Python编程语言完整学习路径 | 语法基础、面向对象、数据分析 |
| [Java教程](proglang/java-tutorial/index.md) | Java企业级开发技术栈 | 核心语法、并发编程、框架使用 |
| [TypeScript教程](proglang/typescript-tutorial/index.md) | TypeScript类型安全的JavaScript | 类型系统、接口泛型、工程实践 |

### 开发工具

| 工具 | 描述 | 学习重点 |
|------|------|----------|
| [Git版本控制](developtools/git.md) | Git工作流和最佳实践 | 基础操作、分支管理、团队协作 |
| [IntelliJ IDEA](developtools/idea.md) | Java开发IDE使用指南 | 环境配置、调试技巧、插件使用 |
| [PyCharm](developtools/pycharm.md) | Python开发环境配置 | 项目管理、调试测试、数据科学 |
| [VS Code](developtools/vscode.md) | 现代化代码编辑器使用 | 扩展配置、快捷键、多语言支持 |

### 协议文档

| 协议 | 描述 | 学习重点 |
|------|------|----------|
| [Modbus协议](protodocs/modbus/index.md) | 工业通信协议详解 | RTU/TCP协议、功能码、应用实例 |
| [MQTT协议](protodocs/mqtt.md) | 物联网消息协议 | 协议架构、QoS等级、物联网应用 |
| [REST API](protodocs/rest-api/index.md) | Web API设计规范 | HTTP方法、状态码、认证授权 |
| [GraphQL](protodocs/graphql/index.md) | 现代API查询语言 | 查询语法、类型系统、实时订阅 |

## 🚀 快速开始

### 新手入门路径

!!! tip "推荐学习顺序"
    对于编程新手，强烈建议从C语言开始学习，因为它能帮助你建立扎实的编程基础：

1. **第一步**：学习 [C语言基础](proglang/clang-tutorial/index.md) - 建立编程思维和基础概念
2. **第二步**：掌握 [Git版本控制](developtools/git.md) - 学习代码管理和团队协作
3. **第三步**：熟悉 [VS Code编辑器](developtools/vscode.md) - 掌握现代化开发工具

**为什么从C语言开始？**

- 理解计算机底层原理
- 建立扎实的编程思维
- 为学习其他语言打下坚实基础
- 掌握内存管理和指针概念

### Web开发路径

如果您想学习Web开发：

1. **第一步**：学习 [C语言基础](proglang/clang-tutorial/index.md) - 建立编程基础
2. **第二步**：学习 [TypeScript](proglang/typescript-tutorial/index.md) - 现代前端开发
3. **第三步**：掌握 [REST API设计](protodocs/rest-api/index.md) - 后端接口设计
4. **第四步**：了解 [GraphQL](protodocs/graphql/index.md) - 现代API查询语言

### 物联网开发路径

如果您对物联网开发感兴趣：

1. **第一步**：学习 [C语言](proglang/clang-tutorial/index.md) - 嵌入式开发基础
2. **第二步**：掌握 [MQTT协议](protodocs/mqtt.md) - 物联网通信协议
3. **第三步**：了解 [Modbus协议](protodocs/modbus/index.md) - 工业通信标准

### 全栈开发路径

如果您想成为全栈开发者：

1. **第一步**：学习 [C语言基础](proglang/clang-tutorial/index.md) - 建立编程思维
2. **第二步**：掌握 [Python](proglang/python-tutorial/index.md) - 后端开发语言
3. **第三步**：学习 [TypeScript](proglang/typescript-tutorial/index.md) - 前端开发语言
4. **第四步**：了解 [REST API](protodocs/rest-api/index.md) 和 [GraphQL](protodocs/graphql/index.md) - API设计

## 🆕 最新更新

### ✨ 新增 GraphQL 文档

我们刚刚添加了完整的 GraphQL 协议文档，包含：

- **📋 基础概念** - Schema、Query、Mutation、Subscription
- **🔍 查询语法** - 完整的查询操作语法和示例
- **🏗️ 类型系统** - GraphQL 强大的类型系统详解
- **💡 最佳实践** - 生产环境中的最佳实践指南
- **🛠️ 实现库** - 多语言框架和客户端实现示例

**特色内容：**
- Python Flask/Django/FastAPI 实现示例
- Node.js Apollo Server/Express 实现
- Java Spring Boot 集成
- Go gqlgen 高性能实现
- 客户端库使用指南

## 📊 文档统计

| 类别 | 数量 | 说明 |
|------|------|------|
| 编程语言 | 4 | 完整的编程语言教程 |
| 开发工具 | 4 | 主流开发工具指南 |
| 通信协议 | 4 | 常用通信协议文档 |
| 技术文档 | 150+ | 详细的技术学习资料 |

## 💡 关于我们

晴雨文档是由热爱技术的开发团队维护的开源文档项目。我们致力于：

- 提供高质量、系统化的技术学习资料
- 分享实用的开发经验和最佳实践
- 构建友好的技术学习社区
- 持续更新和完善文档内容

!!! info "项目信息"
    - **📅 最后更新**：2025年10月24日
    - **🔔 项目状态**：内容持续完善中
    - **📧 反馈渠道**：欢迎通过[邮箱](mailto:moe@moieo.net)反馈建议
    - **🎯 最新特性**：新增 GraphQL 完整文档

---

**感谢您的使用，祝您学习愉快！ 🎉**

*晴雨文档 - 让技术学习变得更简单*