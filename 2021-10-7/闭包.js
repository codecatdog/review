// 闭包：内部函数被保存到外部
function a() {
    var num = 100;
    function b() {
        num ++;
        console.log(num);
    }
    return b;
}
var demo = a(); //demo <- b b被保存到外部，在外部执行
demo(); //b() 101
demo(); //b() 102
//当内部函数被保存到外部时会产生闭包，闭包会导致原有作用域链不释放，造成内存泄漏。

// 闭包的作用：
// 1. 实现公有变量 eg:累加器 如上述代码
// 2. 可以做缓存（存储结构）
// 3. 可以实现封装，属性私有化
// 4. 模块化开发，防止污染全局变量

// 几个例子
function test() {
    var arr = [];
    for(var i = 0; i < 10; i ++) {
        arr[i] = function () {
           console.log(i);
        }
    }
    return arr;
}
var myArr = test(); //myArr <- arr
for(var j = 0; j < 10; j ++) {
    myArr[j]();
} // 10 10 10 10 10 10 10 10 10 10
// arr[i]赋值时后面的函数并不执行

// 若想输出0-9,则改为：
function test() {
    var arr = [];
    for(var i = 0; i < 10; i ++) {
        (function(j) {
            arr[j] = function () {
                console.log(j);
             }
        }(i));
        
    }
    return arr;
}
var myArr = test(); //myArr <- arr
for(var j = 0; j < 10; j ++) {
    myArr[j]();
}

// 立即执行函数 
// 此类函数没有声明，在一次执行后即释放。适合做初始化工作。
+ function() {
    console.log('a');
}();  //a   只有表达式才能被执行，此处若没有+，则会报错