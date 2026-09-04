---
title: vue项目自动部署
tag:
 -vue
 -技巧
sticky: true
---

>GitHub Actions 是 GitHub 的持续集成服务，是一个非常强大的功能，用它可以实现很多自动化功能。现在我们来使用Github Actions将我们做好的Vue项目部署到Github Pages上。

* workflow：持续集成一次运行的过程，即一个工作流程
* job：任务，一个工作流程由一个或多个任务组成
* step：步骤，每个任务由多个步骤组成，逐步完成
* action：动作，每个步骤可以执行一个或多个动作
## 步骤： 
### 修改配置 
**修改publicPath为将要发布的Github Pages的子路径，比如发布后的地址https://tuzilow.github.io/github-actions-demo/ ，那么publicPath就要设置为/github-actions-demo/**
```
module.exports = {
  publicPath: '/github-actions-demo/',
};
```
<br/>

### 编写workflow文件
**workflow文件采用YAML格式，后缀为.yml，在项目根目录下创建.github/workflows/目录，Github只要发现该目录中由yml文件就会自动运行该文件。创建ci.yml**

```
# 该workflow的名称，可以随意填写
name: Build And Deploy To Github Pages

# workflow的触发事件，这里代表master分支的push事件触发
on:
  push:
    branches: [ master ]

# 任务
jobs:
  # build-and-deploy 为任务的ID
  build-and-deploy:
    # 运行所需要的环境
    runs-on: ubuntu-latest 

    steps:
      # 步骤名
      - name: Checkout
        # 使用的actions脚本，这里是官方提供的获取源码脚本
        uses: actions/checkout@v2.3.1
        # 这个为使用 JamesIves/github-pages-deploy-action脚本所需要的配置
        with:
          persist-credentials: false

      # 执行npm脚本打包项目
      - name: Install and Build
        run: |
          npm install
          npm run build
      
      # 执行JamesIves/github-pages-deploy-action将项目发布到Github Pages
      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@3.7.1
        with:
          # 该workflow需要操作repo，因此需要一个密钥，下面会讲到如何获取这个密钥
          ACCESS_TOKEN: ${{ secrets.ACCESS_TOKEN }}
          # 发布到的分支
          BRANCH: gh-pages
          # 要发布的文件夹
          FOLDER: dist

```
### 获取密钥并存储到Github仓库中
1. 进入Github的Settings中https://github.com/settings/， 依次点击 *Developer settings*、*Personal access tokens*。然后点击*Generate new token*创建。因为要操作仓库，所以需要勾选repo权限。
2. 创建一个Github仓库，然后到仓库的<mark>Settings/Secret</mark>下，点击New repository secret将刚才保存的密钥保存，并命名为ACCESS_TOKEN（注意，如果这里的命名更改了，前面的yml文件中的$ secrets.ACCESS_TOKEN 也要更改）
3. 根据Github上的提示，将准备好的本地仓库推送之后就会自动执行workflow。我们可以到Actions中实时查看运行日志。







>出处：https://www.cnblogs.com/xueyubao/