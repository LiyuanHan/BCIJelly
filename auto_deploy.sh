#!/bin/bash

# 自动部署脚本：修改 + 提交 + 推送 + GitHub Actions 自动部署

# 1. 修改 Markdown 文件（可选）
# 你可以手动编辑 intro.md 或其他文件，然后执行该脚本

# 2. 添加所有改动
git add .

# 3. 提交改动（带默认 commit message，可改为读取参数）
git commit -m "update documentation"

# 4. 推送到 main 分支（触发 GitHub Action 自动部署）
git push origin main

echo "✅ 提交完成，等待 GitHub Actions 自动部署 (~3 mins)..."