[Object MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

# Object.keys(obj)返回参数obj可被枚举的属性
Object.keys（obj），返回一个数组，数组里是该obj可被枚举的所有属性。
## 1
```
	function Pasta(grain, width, shape) {
			this.grain = grain;
			this.width = width;
			this.shape = shape;
			this.toString = function () {
					return (this.grain + ", " + this.width + ", " + this.shape);
			}
	}
	console.log(Object.keys(Pasta)); //console: []
	var spaghetti = new Pasta("wheat", 0.2, "circle");
	console.log(Object.keys(spaghetti)); //console: ["grain", "width", "shape", "toString"]
```
## 2
```
    var arr = ["a", "b", "c"];
    console.log(Object.keys(arr)); // console: ["0", "1", "2"]

    var obj = { 0 : "a", 1 : "b", 2 : "c"};
    console.log(Object.keys(obj)); // console: ["0", "1", "2"]

    var an_obj = { 100: "a", 2: "b", 7: "c"};
    console.log(Object.keys(an_obj)); // console: ["2", "7", "100"]

    var my_obj = Object.create({}, { getFoo : { value : function () { return this.foo } } });
    my_obj.foo = 1;
    console.log(Object.keys(my_obj)); // console: ["foo"]
```
