// typeof 返回类型为字符串，如 'undefined';未定义的变量a 只有放到typeof(a)中不报错
// number, string, boolean, object, function, undefined

// 类型转换
// 1. Number() 转换为数字
var num = Number("123.3"); // 123.3
var num = Number(true); // 1
var num = Number(false); // 0
var num = Number([]); // 0
var num = Number(""); // 0
var num = Number(null); // 0
var num = Number({}); // NaN
var num = Number(undefined); // NaN  "123abc"等等...

// 2. parseInt(str, radix) 将str以redix进制转换为10进制整型
var num = parseInt("123.7ad"); // 123  截断
var num = parseInt("a", 16); //16进制的a转换为10进制为---》10
var num = parseInt(null); // undefined, "", [], {}, NaN, true, false ----> NaN

// 3. String() or x.toString()
// toString() undefined and null不能用
a = NaN;
a.toString(); // "NaN"
// toString(radix) 将数字转为radix进制的字符串

// 4. Boolean()  parseFloat() ...
// [], {}, 1, " " ---> true  |  Boolean(), null, undefined, "", 0, NaN ---> false

// 隐式类型转换
// 1. isNaN()
isNaN("ABD"); //true  内部过程：Number("ABD") --- 》NaN

// 2. ++
var a = "123";
a ++; //a = Nmber("123"); a ++;

// 3. +a -a

// 4. 特殊
// undefined > 0   undefined < 0   undefined == 0    false
// null > 0        null < 0        null == 0         false
// undefined == null                                 true

// 5. ===   !== 不进行类型转换

// number.toFixed(3); 最多保留三位有效数字

// == 比较规则
// 1. number, string ,boolean 两两比较时，先转换为number类型再比较
// 2. object和其他类型比较，先调用valueOf()获取结果，没有的话则调用toString()获取返回值
// 3. null == undefined true 不做转换  (null === undefined   false)
// 4. NaN 与其他的都不等