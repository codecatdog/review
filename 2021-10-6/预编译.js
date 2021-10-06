function fn(a) {
    console.log(a); //function a() {}
    var a = 123;
    console.log(a);  //123
    function a() {};
    console.log(a); //123
    var b = function () {}
    console.log(b); //function () {}
    function d() {}
}

fn(2);

// 函数执行前进行预编译：
/**
 * 1. 创建AO对象 AO = {}
 * 2. 将函数的形参和变量作为AO的属性名，值为undefined 
//  * AO = {
//  *  a: undefined,
//  *  b: undefined
//  * }
 * 3. 将实参值赋给形参
//  * AO = {
//  *  a: 2,
//  *  b: undefined
//  * }
 * 4. 在函数体中找函数声明，将AO属性值变为对应函数体
//  * AO = {
//  *  a: function a() {},
//  *  b: function () {},
//  *  d: function d() {}
//  * }
 * */ 

// 全局：
/**
 * 1. 创建GO对象 GO = {}
 * 2. 找变量声明，将变量名作为GO属性名，值为undefined
 * 3. 找函数声明，将GO的属性值变为对应函数体
 */

// 执行： 解释一行执行一行