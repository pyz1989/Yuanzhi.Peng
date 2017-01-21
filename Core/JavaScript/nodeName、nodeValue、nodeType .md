Html DOM: nodeName、nodeValue、nodeType 属性
----

# 1. nodeName

> nodeName 属性含有某个节点的名称。

**元素节点**的 nodeName 是标签名称
**属性节点**的 nodeName 是属性名称
**文本节点**的 nodeName 永远是 #text
**文档节点**的 nodeName 永远是 #document

**nodeName 所包含的 XML 元素的标签名称永远是大写的**

# 2. nodeValue
> 对于**文本**节点，nodeValue 属性包含文本。
> 对于**属性**节点，nodeValue 属性包含属性值。
1. 元素节点的 nodeValue 是 undefined 或 null
2. 文本节点的 nodeValue 是文本自身
3. 属性节点的 nodeValue 是属性的值
**nodeValue 属性对于文档节点和元素节点是不可用的。**

# 3. nodeType
> nodeType 属性可返回节点的类型。

## 最重要的节点类型是： 
| 元素类型        | 节点类型         |
|-------------    |------------------|
|元素：element 	  |1
|属性：attr 	  |2
|文本：text 	  |3
|注释：comments   |8
|文档：document   |9

## 补充
| 值 | 元素类型  |
|--- |-----------|
| 1  | ELEMENT
| 2  | ATTRIBUTE
| 3  | TEXT
| 4  | CDATA
| 5  | ENTITY REFERENCE
| 6  | ENTITY
| 7  | PI (processing instruction)
| 8  | COMMENT
| 9  | DOCUMENT
| 10 | DOCUMENT TYPE
| 11 | DOCUMENT FRAGMENT
| 12 | NOTATION

# 4. Demo

[HTML DOM的nodeName、nodeValue、nodeType值介绍](http://www.jb51.net/article/26680.htm)
[节点属性](http://www.imooc.com/code/1589)