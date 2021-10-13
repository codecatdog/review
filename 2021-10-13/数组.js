// 1. 数组的方法
// 改变原数组： shift、unshift、pop、push、sort、reverse、splice
// 不改变原数组：slice、concat、join、toString

// push 往数组末尾添加元素，返回数组长度 arr.push(1, 2, 3)
Array.prototype.push = function() {
    for(var i = 0; i < arguments.length; i ++) {
        this[this.length] = arguments[i];
    }
    return this.length;
}

var arr = [1, 2, 3];
arr.push(4, 5, 6);
console.log(arr);

// sort() 排序 若按数字大小排序
// 1. 必须写俩形参
// 2. 返回值： >0 后面的数在前， <0 前面的数在前  =0不动
var arr1 = [23, 34, 13, 45, 9, 26, 10];
arr1.sort(function(a, b) {
    return a - b; //升序
    // return b - a; //降序
});
console.log(arr1);

// 发散： 随机打乱一个有序数组
arr1.sort(function() {
    return Math.random() - 0.5;
});
console.log(arr1);

// 数组去重 arr.unique()
Array.prototype.unique = function () {
    var obj = {}
    var arr = []
    for(var i = 0; i < this.length; i ++) {
        if(!obj[this[i]]) {
            obj[this[i]] = 1;
            arr.push(this[i]);
        }
    }
    return arr;
}

var arr2 = [1, 1, 2, 3, 6, 4, 3, 2, 6];
var arr3 = arr2.unique();
console.log(arr3);