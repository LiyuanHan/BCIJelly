---
sidebar_position: 1
---

# 教程简介

让我们在 5 分钟内探索 **Docusaurus**。

## 入门

首先**创建一个新网站**。

或者使用 **[docusaurus.new](https://docusaurus.new)** **立即试用 Docusaurus**。

### 所需软件

- [Node.js](https://nodejs.org/en/download/) 18.0 或更高版本：
- 安装 Node.js 时，建议勾选所有与依赖项相关的复选框。

## 生成新网站

使用 **经典模板** 生成新的 Docusaurus 网站。

运行以下命令后，经典模板将自动添加到您的项目中：

```bash
npm init docusaurus@latest my-website classic
```

您可以在命令提示符、Powershell、终端或代码编辑器的任何其他集成终端中输入此命令。

该命令还会安装运行 Docusaurus 所需的所有依赖项。

## 启动您的网站

运行开发服务器：

```bash
cd my-website
npm run start
```

`cd` 命令会更改您正在使用的目录。为了使用新创建的 Docusaurus 网站，您需要将终端导航到该目录。

`npm run start` 命令会在本地构建您的网站，并通过开发服务器提供服务，您可以在 http://localhost:3000/ 上查看。

打开“docs/intro.md”（此页面）并编辑一些行：网站**自动重新加载**并显示您的更改。