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

### git 命令

- 初始化（init）
  ```js
  git init
  ```
- 配置（config）
  可在配置文件`.gitconfig`里修改

  ```js
  git config --global user.email //全局邮箱地址
  git config --gloabl user.name // 全局用户名
  ```

- 忽略文件 ignore files
  通过配置`.gitignore`忽略某些文件或目录
- 状态（status)
  显示当前工作区与暂存区的状态，如已修改及己准备提交的文件
  ```js
  git status
  ```
- 添加（add）
  将文件添加到暂存区

  ```js
  git add hello.js // 添加文件
  git add /path/hello.js // 添加子目录文件
  git add . // 或 -A 添加所有
  ```

- 分支（branch）
  管理分支
  - 查看所有分支
  ```js
   git branch -a
  ```
  - 创建新分支
  ```js
  git branch NewBranch
  ```
  - 删除分支
  ```js
  git branch -d branchName
  ```
  - 重命名分支
  ```js
  git branch -m oldBranchName newBranchName
  ```
  - 修改分支描述
  ```js
  git branch branchName --ediit-description
  ```
- 标签（tag）
  用于标记仓库快照，包括轻量和可标注
  - 列出标签
  ```js
  git tag
  ```
  - 创建标签
  ```js
  git tag -a v2.0 -m 'version 2.0'
  // -a 可标注类型
  // -m 标注说明
  ```
  - 显示标签详情
  ```js
  git show tagName
  ```
  - 推送标签到远端
  ```js
  git push origin tagName
  git push origin --tags //推送所有
  ```
- 切换（checkout）
  更换某个分支或提交的版本
  ```js
  git checkout // 切换到缺省分支，一般master
  git checkout branchName // 切换到某分支
  git checkout -b newBranchName // 创建新分支
  ```
- 克隆（clone）
  克隆远程 git 仓库到本地，并绑定所有分支到对应的远端分支
  ```js
  git clone URI路径
  ```
- 提交（commit）
  将缓存中的内容提交到 git 仓库
  ```js
  git commit -m 'commit message' // 附加提交说明
  git commit -S -m 'signed message' // 附加数字签名
  git commit -a -m 'auto message' // 自动将修改的文件加入缓存区再提交
  git commit --amend -m 'correct message' // 与最后一次提交合并
  ```
- 显示差异（diff）
  ```js
  git diff // 显示工作目录与缓存区的差异
  git diff --cacahed // 显示缓存区与当前git库版本间的差异
  git diff HEAD // 显示工作目录与当前git库版本间的差异
  ```
- 日志（log）
  ```js
  git log // 显示所有提交
  git log --oneline // 简化显示提交
  git log --merges // 只显示合并的提交
  git log --graph // 显示版本变化
  ``
  ```
- 合并（merge）
  ```js
  git merge branchName // 把其他分支合并到当前分支
  git merge --no-ff branchName //强制合并生成新版本
  ```
- 拉取（pull）
  `git pull <remote> <branch>`从远程仓库拉取某个版本，并合并到本端的某个分支
  ```js
  git pull origin master  // 把远端origin的master分支拉取到本端合并
  git pull // 拉取远端绑定的分支并合并
  git pull origin master --rebase // 使用rebase策略合并（本端修改基于远端最新版之上）
  ```
- 推送（push）
  `git push <remote> <branch>`把本端 branch 分支推送到远端仓库
  ```js
  git push origin master // 推送本端origin的mater分支到远端合并
  git push //推送本端所有与远端绑定的分支
  git push -u origin master // -u 设置推送分支与远端分支绑定，设置一次即可
  ```
- 暂存（stash）
  保存当前暂存区与工作目录的变更到 git 中的某个存储区域，需要时再取出并合并到当前工作目录和暂存区
  当工作区变为保存状态时，执行 pull 操作前，需使用 stash 保存修改，清空工作区
  ```js
  git stash list // 列出所有存储的修改
  git stash pop // 弹出栈顶的修改，并实施于当前工作目录或暂存区
  git stash apply stash@{N}// 实施栈顶起的第N个的修改
  git stash drop // 抛弃栈顶的修改
  ```
- 重整（rebase）
  把一个分支上的提交转移到另一个分支上，可能合并两个分支，故*不要重整已提交到公共仓库的版本*
  ```js
  git rebase master experimentBranch // 把特性分支重整到住分支上
  ```
- 复位（reset）
  变更当前 HEAD 的某个版本，也可以根据 HEAD 指向的内容，更新存储区或工作目录
  ```js
  git reset // 复位缓存区
  git reset --hard // 复位缓存区，用HEAD指向的内容更新缓存区和工作目录
  git reset 31f2bb1 // 先移动HEAD指针，再reset
  git reset --hard 31f2bb1 // 先移动HEAD指针，再reset --hard
  git reset --31f2bb1 // 只移动HEAD指针
  ```
- 参考日志（reflog）
  以时间顺序列出所有 git 操作，缺省时间为 90 天；结合 reset 可恢复某个分支状态
  ```js
  git reflog
  ```
- 回退（revert）
  回退某个提交的修改，不影响提交与回退间的其他提交
  ```js
  git revert <commit>
  ```
- 删除（rm）
  删除文件，并变更工作目录与缓存区状态
  ```js
  git rm hello.js
  ```
