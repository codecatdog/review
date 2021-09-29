//  输入一串低于10位的阿拉伯数字，输出其大写
//  如： 10000 -> 壹万
function alabo2Up(numstr) {
    // numstr: 一串低于10位的阿拉伯数字
    // 1. 判断输入数据是否符合规范
    reg = /^[1-9]\d{0,8}$/;
    if (!reg.test(numstr)) {
        console.error("输入数据格式有误！请检查");
        return;
    }
    // 2. 10100110 ---> 壹仟零壹拾万零壹佰壹拾
    // 4位4位一组进行划分后分别解读
    result = '';
    var up = ['', '万', '亿'];
    for (var i = numstr.length, j = 0; i > 0; i -= 4, j ++) {
        if(i - 4 <= 0) {
            subNum = numstr.slice(0, i);
        } else {
            subNum = numstr.slice(i - 4, i);
        }
        result = a2b(subNum) + up[j] + result;
    }
    console.log(result);

}

function a2b(num) {
    var up1 = ['', '拾', '佰', '仟'];
    var up2 = {'0':'零', '1': '壹', '2': '贰', '3': '叁', '4': '肆', '5': '伍', '6': '陆', '7': '柒', '8': '捌', '9': '玖'};
    temp = '';
    for(var i = 0; i < num.length; i ++) {
        temp += up2[num[i]] + (num[i] > '0' ? up1[num.length - i - 1] : '');
    }
    // 去掉末尾连续的零
    tempStr = temp.replace(/零{0,}$/, '');
    return tempStr;

}

number = 401021080;
alabo2Up(String(number));