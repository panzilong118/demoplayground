// 二. 实现超出整数存储范围的两个大整数相加function add(a,b)。注意a和b以及函数的返回值都是字符串。

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
    return arr.reverse().join('');
}

// var res = add('11111111111111111','22222222222222222');
// 执行结果：11101，正确值应该为1201
// var res = add('545', '656');
var res = add('99', '101');
