// 遍历对象 for(var prop in obj)  prop为属性名
// 1. 判断是不是原始值 typeof 原始值直接拷贝
// 2. 判断是数组还是对象 toString() '[object Array]','[object Object]'

var obj = {
    name: "abc",
    friends: ['li', 'ty'],
    family: {
        num: 110,
        wife: {
            name: 'july'
        }
    },
    test: function(name) {
        this.name = name;
    }
}
// 深度拷贝
function deepClone(origin, target) {
    // origin: 原始对象
    // target: 拷贝后产生的对象，可以不传实参进来
    var target = target || {},
        toStr = Object.prototype.toString,
        arrStr = '[object Array]'
    for (var prop in origin) {
        if (origin[prop] !== null && typeof (origin[prop]) == 'object') {
            if (toStr.call(origin[prop]) == arrStr) {
                target[prop] = [];
            } else {
                target[prop] = {};
            }
            // 对象或数组进行递归
            deepClone(origin[prop], target[prop])
        } else {
            target[prop] = origin[prop];
        }
    }
    return target

}

target = deepClone(obj)
target.test('mm');
target.test = [];
console.log(target);
console.log(obj);
