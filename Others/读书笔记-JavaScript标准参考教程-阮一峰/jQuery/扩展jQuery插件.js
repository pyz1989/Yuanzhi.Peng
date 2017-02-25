;(function($){
	jQuery.fn.myPlugin = function() {

	}
//将jQuery,Window作为参数传递给函
//可以加快代码的执行速度和执行更有效的最小化操作
})(jQuery, window); 
/*
注意的是，在插件内部，this关键字指的是jQuery对象的实例。
而在一般的jQuery回调函数之中，this关键字指的是DOM对象。
*/
//在插件内部，this关键字指的是jQuery对象的实例。
//而在一般的jQuery回调函数之中，this关键字指的是DOM对象
;(function ($){
  $.fn.maxHeight = function (){
    var max = 0;
	// 下面这个this，指的是jQuery对象实例
    this.each(function() {
		// 回调函数内部，this指的是DOM对象
	    max = Math.max(max, $(this).height());
    });
    return max;
  };
})(jQuery);
//大多数情况下，插件应该返回jQuery对象，这样可以保持链式操作
;(function ($){
  $.fn.greenify = function (){
	this.css("color", "green");
	return this;
  };
})(jQuery);
$("a").greenify().addClass("greenified");
//对于包含多个jQuery对象的结果集，可以采用each方法，进行处理。
;$.fn.myNewPlugin = function() {
    return this.each(function() {
        // 处理每个对象
    });
};
//插件可以接受一个属性对象参数
//使用extend方法，为参数对象设置属性的默认值
;(function ($){
  $.fn.tooltip = function (options){
    var settings = $.extend( {
      'location'         : 'top',
      'background-color' : 'blue'
    }, options);
    return this.each(function (){
      // 填入插件代码
    });
  };
})(jQuery);