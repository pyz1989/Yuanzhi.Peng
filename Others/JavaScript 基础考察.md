1、写出下列代码的运行结果。
```
var a = { n: 1 };
var b = a;
a.x = a = { n: 2 };
console.log(a);
console.log(a.x);
console.log(b);
console.log(b.x);
```
2、写出如下代码的输出内容
```
function a(x) {
    return x * 2;
}
var a;
console.log(a);

function value() {
    return 1;
}
var value = 1;
console.log(value);
```
3、写出如下代码的输出内容
```
function a() {
    console.log(this);
}
a.call(null); 
```
4、写出如下代码的输出内容
```
var a = [];
for (var i = 0; i < 10; i++) {
    a[i] = function () {
        console.log(i);
    };
}
a[6]();
```
5、阅读下面代码，写出输出内容
```
var obj = {
    a: 1,
    foo: function f() {
        console.log(this.a);
    }
}
obj.foo();
var g = obj.foo;
g();	
g = obj.foo.bind(obj);
g();
```	
6、阅读下面代码，写出输出内容
```
var myAge = 10;
var divideByThree = function (number) {
    console.log(myAge);	          
    var myAge = number / 3;
    console.log(myAge);           
    return myAge;
};

divideByThree(3);
console.log(myAge);	           
```
7、写出如下代码的输出内容
```
var a = [1, 2, 3];
var b = [1, 2, 3];
var c = "1,2,3";
console.log(a == c); 
console.log(b == c);
console.log(a == b);
```
8、写出如下代码的输出内容
```
var a = 41;
var b = '42';
var c = '43';
var d = 'foo';     	
console.log(a < b);   
console.log(b < c);   
console.log(a < d);   
console.log(a > d);   
console.log(a == b);  
```
9、写出如下代码的输出内容
```
var a = [1, 2, 3, 4], i = 0;

a[i++] = a[i++] * 2;
console.log(a);
```
10、写出如下代码的输出内容
```
var name = 'global';
var obj = {
  name : 'obj',
  dose : function(){
    this.name = 'dose';
    return function(){
      return this.name;
    }
  }
};
var result = obj.dose().call(this);
console.log(result);
```

```
var a = [1, 2, 3];
var b = [1, 2, 3];
var c = "1,2,3";
console.log(a == c);
console.log(b == c);
console.log(a == b);

var a = [1, 2, 3];
var b = [1, 2, 3];
var c = "1,2,3";
console.log(a === c);
console.log(b === c);
console.log(a === b);

```