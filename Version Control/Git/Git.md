Git 入门指南(Window版)
====
> Git是目前世界上最先进的分布式版本控制系统。
# 1. 版本控制系统
## 1.1 集中式版本控制系统
* CVS 
* SVN
* TFS

**集中式版本控制系统**：版本库是集中放在中央服务器的，而干活的时候，用的都是自己的电脑，所以首先要从中央服务器那里得到(获取)最新的版本，然后干活，干完后，需要把自己做完的活推送(提交)到中央服务器。集中式版本控制系统是必须联网才能工作，如果在局域网还可以，带宽够大，速度够快，如果在互联网下，如果网速慢的话，就纳闷了。
## 1.2 分布式版本控制系统
* Git

**分布式版本控制系统**：是没有中央服务器的，每个人的电脑就是一个完整的版本库。这样，工作的时候就不需要联网了，因为版本都是在自己的电脑上。既然每个人的电脑都有一个完整的版本库，那多个人如何协作呢？比如说自己在电脑上改了文件A，其他人也在电脑上改了文件A，这时，你们两之间只需把各自的修改推送给对方，就可以互相看到对方的修改了。
[集中式vs分布式](http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000/001374027586935cf69c53637d8458c9aec27dd546a6cd6000)
# 2. 安装
## 2.1 下载地址 
[Git SCM to Windows](https://git-for-windows.github.io/)
# 3. 使用


## 工作区与暂存区

# 4. Git常用命令
| 命令        | 说明           |
|------------- |------------------|
| 01. mkdir     |  
| 02. pwd     |
| 03. git init | 
| 04. git add file
| 05. git commit -m ""
| 06. git status
| 07. git diff file
| 08. git log
| 09. git reset -hard HEAD^ / git reset -hard HEAD~[]
| 10. cat file
| 11. git reflog
| 12. git checkout --file
| 13. git rm file
| 14. git remote add origin ""
| 15. git push -u
| 16. git clone ""
| 17. git checkout -b dev
| 18. git branch
| 19. git checkout master
| 20. git merge dev
| 21. git branch -d dev
| 22. git branch name
| 23. git stash
| 24. git stash list
| 25. git stash apply
| 26. git stash drop
| 27. git stash pop
| 28. git remote 
| 29. git remote -v
| 30. git push origin master


[git技巧：综合(查看git配置项)](http://blog.csdn.net/xhl_will/article/details/8442304)
