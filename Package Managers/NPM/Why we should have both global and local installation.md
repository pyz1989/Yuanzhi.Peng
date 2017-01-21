为什么我们需要使用npm对依赖模块进行全局和本地安装
Why do we need to install gulp globally and locally
========

# 便于维护项目模块的不同版本，保证不同版本包之间的相互依赖
···
首先，如果只有全局安装(安装一次后，项目都可以使用)会导致一个问题：
项目A 依赖 模块C 的0.0.1版本
项目B 依赖 模块C 的1.0.1版本
模块C版本变动极大，1.0.1不兼容0.0.1，那么如何同时维护项目A和B
总不能维护A项目时，卸载模块C的1.0.1版本，安装其0.0.1版本，维护B项目时，...
···


[【原】nodejs全局安装和本地安装的区别](http://www.cnblogs.com/PeunZhang/p/5629329.html)
[npm 1.0: Global vs Local installation](https://nodejs.org/en/blog/npm/npm-1-0-global-vs-local-installation/)