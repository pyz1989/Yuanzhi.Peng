jQuery
=====

# 下载
[官网下载](http://jquery.com/download/)

系列版本：1.x 2.x
区别：2.x 不在兼容IE 6、7、8浏览器
每一个系列版本又分为压缩版(compressed) 与 开发版(development)，我们在开发过程中使用开发版（开发版本便于代码修改及调试），项目上线发布使用压缩版（因为压缩版本体积更小，效率更快）。

$(document).ready 的作用是等页面的文档（document）中的节点都加载完毕后，再执行后续的代码，因为我们在执行代码的时候，可能会依赖页面的某一个元素，我们要确保这个元素真正的的被加载完毕后才能正确的使用。