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
