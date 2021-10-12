// 共用一个原型，且给自己的原型添加属性不影响共有原型
// 圣杯模式
function inherit(Target, Origin) {
    function F() {}
    F.prototype = Origin.prototype;
    Target.prototype = new F();
    Target.prototype.constructor = Target;
    Target.prototype.uber = Origin.prototype;  //增加一个uber记录真正继承自谁
}

// 改良版本：将F私有化，对外不可见
var inherit = (function() {
    var F = function () {};
    return function(Target, Origin) {
        F.prototype = Origin.prototype;
        Target.prototype = new F();
        Target.prototype.constructor = Target;
        Target.prototype.uber = Origin.prototype;
    }
}());

Father.prototype.name = 'tang';
function Father() {

}

function Son() {

}

inherit(Son, Father);
var son = new Son();
var father = new Father();
Son.prototype.name = 'ling'
console.log(son.name);
console.log(father.name);