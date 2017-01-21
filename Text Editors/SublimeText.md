Sublime Text 使用总结
===============
# 1 下载
[Sublime Text 3 下载地址](http://www.sublimetext.com/3 "Sublime Text 3 下载地址")

# 2 安装Package Control
https://packagecontrol.io/installation
2.1 在线安装
使用 **Ctrl + `**快捷键 或通过 View --> Show Console 菜单打开命令行窗口，粘贴以下代码到底部并回车
```Sublime Text 3
import urllib.request,os; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); urllib.request.install_opener( urllib.request.build_opener( urllib.request.ProxyHandler()) ); open(os.path.join(ipp, pf), 'wb').write(urllib.request.urlopen( 'http://sublime.wbond.net/' + pf.replace(' ','%20')).read())
```

```Sublime Text 2
import urllib2,os; pf='Package Control.sublime-package'; ipp = sublime.installed_packages_path(); os.makedirs( ipp ) if not os.path.exists(ipp) else None; urllib2.install_opener( urllib2.build_opener( urllib2.ProxyHandler( ))); open( os.path.join( ipp, pf), 'wb' ).write( urllib2.urlopen( 'http://sublime.wbond.net/' +pf.replace( ' ','%20' )).read()); print( 'Please restart Sublime Text to finish installation')
```
重启Sublime Text
如果在Perferences --> Package Settings中看到Package Control 这一项，则安装成功
2.2 手动安装

Selection
https://developer.mozilla.org/zh-CN/docs/Web/API/Selection
jquery如何将两个数组合并 -- 可以使用underscore.js，里面提供了很多Array的工具
https://segmentfault.com/q/1010000000127127
a1 = [1, 2, 3, 4, 5]
a2 = [2, 4, 6, 7, 8]
$.unique(a1.concat(a2))

.merge(first, second)合并两个数组

 var frontEnd = ['javascript', 'css', 'html'];

 var backEnd = ['java', 'php', 'c++'];        // 这种方式会修改第一个参数, 即frontEnd数组       

 var temp = $.merge(frontEnd, backEnd);

 alert(temp);

 jQuery.extend( [ deep ], target, object1, [ objectN ] )合并对象到第一个对象    

 markdown文件的编辑以及实时预览
 http://www.ooso.net/archives/611
 http://www.xuebuyuan.com/2175658.html
 markdown实现实时预览的效果
 http://www.jianshu.com/p/c2a36b6e2833
Sublime Text 3 常用插件以及安装方法
 https://www.cnsecer.com/460.html


 [12个不可不知的Sublime Text应用技巧和诀窍](https://segmentfault.com/a/1190000000505218)

 [Sublime Text 全程指引 by Lucida](http://www.cnblogs.com/figure9/p/sublime-text-complete-guide.html)
handlebars 模板引擎
 https://github.com/wycats/handlebars.js
 mustache 模板引擎
 http://www.cnblogs.com/lyzg/p/5133250.html

 SSO之CAS单点登录详细搭建教程
 http://www.cnblogs.com/lr393993507/p/5231432.html

[5个现在就该使用的数组Array方法: indexOf/filter/forEach/map/reduce详解](http://ourjs.com/detail/54a9f2ba5695544119000005)

F5和Ctrl+R一样都是刷新，就是刷新页面。强制刷新Ctrl+F5就是不允许使用缓存，所有资源都重新载入，比如你看知乎发现页面上的图片只加载了一半就停掉了，如果只刷新可能还是用的缓存里的这半张照片，那么就可以按个Ctrl+F5。 
[浏览器缓存知识小结及应用](http://www.cnblogs.com/lyzg/p/5125934.html)
[5个现在就该使用的数组Array方法: indexOf/filter/forEach/map/reduce详解](http://ourjs.com/detail/54a9f2ba5695544119000005)

[五种开源协议的比较(BSD,Apache,GPL,LGPL,MIT) – 整理](http://www.awflasher.com/blog/archives/939)

F5和Ctrl+R一样都是刷新，就是刷新页面。强制刷新Ctrl+F5就是不允许使用缓存，所有资源都重新载入，比如你看知乎发现页面上的图片只加载了一半就停掉了，如果只刷新可能还是用的缓存里的这半张照片，那么就可以按个Ctrl+F5。 