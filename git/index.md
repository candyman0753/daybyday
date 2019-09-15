**本地文件推送到远程仓库**

1. github 新建仓库
2. 创建本地项目并初始化 git 仓库(文件夹名需与 github 仓库里的一致)
   ```js
   git init
   ```
3. 添加项目文件到暂存区
   ```js
   git add .
   ```
4. 提交到仓库
   ```js
   git commit -m 'commit decription'
   ```
5. 关联远程仓库(首次使用需添加 github 公钥)
   ```js
   git remote add origin git@github.com:`yourGithubAddress`.git
   ```
6. 同步远程仓库(远程仓库不为空时需进行此步)
   ```js
   git pull --rebase origin master
   ```
7. 推送本地内容到远程仓库(首次推送需要加 `-u`)
   ```js
   git push -u origin master
   ```
