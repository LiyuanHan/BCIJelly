#!/bin/bash

# Step_1: 下载并构建 BCIJelly 项目
git clone -b main git@github.com:LiyuanHan/BCIJelly.git
cd BCIJelly
npm install
npm run build
npm rum deploy

echo "✅ BCIJelly 已经下载并构建完成。"

# Step_2:  BCIJelly-Docs 项目
echo "✅ 后续开发都在vscode中"

# Step_3: 每次开发结束，都自动部署
echo "✅ 开发完成，准备提交到 GitHub..."
echo "✅ 请手动执行 ./auto_deploy.sh 脚本进行提交和推送。"