/*
 * Example - 扁平化数组
 * 数组扁平化处理：实现一个flatten方法，使得输入一个数组，该数组里面的元素也可以是数组，该方法会输出一个扁平化的数组。
*/
let givenArr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];
// let outputArr = [1,2,2,3,4,5,5,6,7,8,9,11,12,12,13,14,10]

function flatten(arr){
    // var res = [];
    // for(var i=0;i<arr.length;i++){
    //     if(Array.isArray(arr[i])){
    //         res = res.concat(flatten(arr[i]));
    //     }else{
    //         res.push(arr[i]);
    //     }
    // }
    // return res;
    // return givenArr.toString().split(',').map(v => +v);
    return givenArr.toString().split(',').map(v => Number.parseInt(v));
}

// 实现flatten方法使得
var outputArr = flatten(givenArr);
console.log(outputArr);
