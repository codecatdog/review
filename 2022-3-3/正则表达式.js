let reg = /abc/ig;
let res = reg.test('Abcd');  // 返回true/false
console.log(res);

let arr = 'AbcdAbc'.match(reg); // 返回匹配reg的字符串数组, 只有当正则表达式使用全局匹配时，数组中的每一个素为匹配reg的字符串
console.log(arr);

/**
 * g 全局匹配
 * m 多行
 * i 忽略大小写的匹配
 * 
 * \w === [0-9A-z_]
 * \W === [^\w]  除了\w的字符
 * \d === [0-9]
 * \D === [^\d]
 * \s === [\t\n\r\v\f]
 * \S === [^\s]
 * \b === 单词边界 匹配的是位置，不是字符
 * \B === 非单词边界
 * .  === [^\r\n]
 * 
 * 量词
 * n+ {1, }
 * n* {0, }
 * n? {0, 1}
 * n{x} {x}
 * n{x, y} {x, y}
 * n{x, } {x, }
 */

let word = /\W/g;
console.log(word.test('你好'));
console.log('kdjfkdjf_09'.match(word));

// let lan = /\B/g;
// console.log('dnjdk jkjfjdk'.match(lan));

let reg1 = /^abc$/;
let str = 'abc';
console.log(reg1.test(str)); //true

/**
 * !!!: '^'这个字符, 在中括号'[]'中被使用的话表示字符类的否定，如果不是的话就是表示限定开头
 */

let reg2 = /(\w)\1\1\1/g;  // 匹配'aaaa'形式的字符串
let reg3 = /(\w)\1(\d)\2/g; // 匹配'aabb'形式
let str3 = 'aa22bb22';
let res3 = str3.replace(reg3, function($, $1, $2) {
    /**
     * $: str中匹配出的字符串
     * $1: $中第一个括号位置的值
     * $2: $中第二个括号位置的值
     * 
     * 当匹配结果有多个满足的字符串时，该函数会多次执行， 返回替换的字符串
     *  */ 
    console.log($, $1, $2, '---');
    return $2 + $2 + $1 + $1 + $1 + 'abc';
})
console.log(res3, 'res3');

let reg4 = /a/g;
let str4 = 'aafgsaafddf';
console.log(str4.replace(reg4, 'b'));  // 将a替换为b

// 选a， 但是看a后面有没有b
// a(?!b) 选a， 但是a后面不能是b
var str5 = 'abaaaa';
var reg5 = /(?<=b)a/g;
console.log(reg5.test(str5));
console.log(str5.match(reg5));

/**
 * 1. a(?=b) 选a，a后面必须是b
 * 2. a(?!b) 选a，a后面不能是b
 * 3. (?<=b)a 选a， a前面必须是b
 * 4. (?<!b)a 选a，a前面不能是b
 */

// 打破贪婪匹配，加一个问号：
let str6 = 'aaaaaaa';
let reg6 = /a*?/g; 
console.log(reg6.test(str6));
console.log(str6.match(reg6));

let str7 = '1000000000';
let reg7 = /(?=(\B)(\d{3})+$)/g; // 匹配后面是 非边界 且 3个数字倍数 结尾 的位置
console.log(str7.replace(reg7, ','));