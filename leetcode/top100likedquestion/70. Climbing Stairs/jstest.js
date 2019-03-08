/**
 * @param {number} n
 * @return {number}
 */
// 斐波那契数列
var climbStairs = function(n) {
    let arr=[1,2,3];
    for(let i = 3;i<n;i++){
        arr[i]=arr[i-1] + arr[i-2];
    }
    return arr[n-1];
};

var n = 5;
var output = climbStairs(n);
