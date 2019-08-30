// 二. 实现超出整数存储范围的两个大整数相加function add(a,b)。注意a和b以及函数的返回值都是字符串。
// 对内置对象的一些细节掌握不够
function add (a, b) {
    let lenA = a.length,
        lenB = b.length,
        len = lenA > lenB ? lenA : lenB;
    // 先补齐位数一致
    if(lenA > lenB) {
        for(let i = 0; i < lenA - lenB; i++) {
            b = '0' + b;
        }
    } else {
        for(let i = 0; i < lenB - lenA; i++) {
            a = '0' + a;
        }
    }
    // reverse() 方法将数组中元素的位置颠倒，并返回该数组。该方法会改变原数组。
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
    // split() 方法使用指定的分隔符字符串将一个String对象分割成字符串数组，以将字符串分隔为子字符串，以确定每个拆分的位置。
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/split
    let arrA = a.split('').reverse(),
        arrB = b.split('').reverse(),
        arr = [],
        carryAdd = 0;
    for(let i = 0; i < len; i++) {
        let temp = Number(arrA[i]) + Number(arrB[i]) + carryAdd;
        arr[i] = temp > 9 ? temp - 10 : temp;
        carryAdd = temp >= 10 ? 1 : 0;
    }
    // 尝试下这种情况
    if(carryAdd === 1) {
        arr[len] = 1;
    }
    // join() 方法将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串。如果数组只有一个项目，那么将返回该项目而不使用分隔符。
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/join
    return arr.reverse().join('');
}

// var res = add('11111111111111111','22222222222222222');
// 执行结果：11101，正确值应该为1201
// var res = add('545', '656');
var res = add('99', '11');
