# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

```
├── .docusaurus/            # 构建缓存和临时文件（自动生成）
├── blog/                   # 博客文章（Markdown格式）
├── docs/                   # 核心文档目录
│   ├── current/            # 当前版本文档内容
│   ├── version-1.1.0/      # 1.1.0版本文档
│   ├── version-1.2.0/      # 1.2.0版本文档
│   └── i18n/               # 多语言支持
│       └── zh/             # 中文翻译
│           ├── current.json
│           └── version-1.1.0.json
├── node_modules/           # 项目依赖（安装后自动生成）
├── src/                    # 自定义代码
│   ├── pages/              # 自定义页面（React组件）
│   └── css/                # 自定义样式
├── static/                 # 静态资源（图片/字体等）
├── versioned_docs/         # 历史版本存档
│   ├── version-1.1.0/     # 1.1.0版本存档
│   └── version-1.2.0/      # 1.2.0版本存档
├── versioned_sidebars/     # 历史版本侧边栏配置
├── .gitignore             # Git忽略规则
├── docusaurus.config.js   # 主配置文件（主题/插件等）
├── package.json           # 项目依赖和脚本
├── sidebars.js            # 文档导航侧边栏配置
└── versions.json          # 版本管理配置
```

## Installation

```bash
yarn install
```

## Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.


## create version

```bash
npm run docusaurus docs:version 2.0.0
```
then Create a corresponding version folder under the docusaurus-plugin-content-docs folder and import the Chinese file of md






