兼容性问题
======
>> IE 8-9: Allows console functions to be used without throwing errors, but does not appear to output the data anywhere.
``` 扩展console
	window.console = window.console || (function() {
		var c = {}; 
		c.log = c.warn = c.debug = c.info = c.error = c.time = c.dir = c.profile = c.clear = c.exception = c.trace = c.assert = function(){};
	return c;
	})(); 
```
[when you can use console](http://caniuse.com/#search=console)

> 对于块元素与内联元素是可以相互转换的，如将内联元素变成块级元素，可增加样式display:inline.同理将div变成内联元素可增加样式display:block;
