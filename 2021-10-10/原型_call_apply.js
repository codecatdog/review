// 原型：是function对象的一个属性，它定义了构造函数制造出来的对象的公共祖先。
// 通过该构造函数产生的对象，可以继承该原型的属性和方法。原型也是对象。
// 利用原型的特点和概念，可以提取共有属性

Person.prototype.name = 'ling';
// Person.prototype = {  //原型也是对象
//     height: 180,
//     weight: 155
// }
function Person() { //构造函数

}
var p1 = new Person(); //继承name属性
console.log(p1.name);

// 对象查看原型：__proto__
console.log(p1.__proto__); // output: { name: 'ling' }

// 对象查看contructor: constructor
console.log(p1.constructor)  //output: [Function: Person]

console.log(p1.constructor.prototype === p1.__proto__); //true

// __proto__:隐式属性，将对象与原型联系起来，可以后期更改
Person.prototype.name = 'ling';
function Person() { //构造函数

    // var this = {
    // 
    //     __proto__: Person.prototype
    // }
}
var p2 = new Person();
Person.prototype = {
    name: 'cherry'
}
console.log(p2.name); //ling

// 创建对象：
/**
 * 1. var obj = { }
 * 2. var obj = new Constructor();
 * 3. 利用原型 var obj = Object.create(原型)
 */
Person.prototype.name = 'ling';
function Person() {

}
var p3 = Object.create(Person.prototype);
// 绝大多数对象最终都继承自Object.prototype，除了Object.create(null)

// call/apply
// 作用：改变this指向
// 区别：传参形式不同，call需要把实参按照形参的个数形式传进去；apply需要传arguments(数组形式)
function Person(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
}
function Student(name, age, sex, tel, grade) {
    Person.call(this, name, age, sex); 
    this.tel = tel;
    this.grade = grade;
}
var stu = new Student('ling', 18, 'female', 188, 2020);
console.log(stu);

// 插播： str.charCodeAt(i) 字符串第i位Unicode编码  >255 表示两个字节 （汉字）