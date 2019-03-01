// 题目：输入一个整型数组，数组里有正数也有负数。数组中一个或连续的多个整数组成一个子数组。
// 求所有子数组的和的最大值。要求时间复杂度为O(n)
// 例如输入的数组为[1,-2,3,10,-4,7,2,-5], 和最大的子数组为{3,10,-4,7,2}。因此输出为该子数组的和18.

// 思路
// 双重循环数组，外层循环数组开始时 theSum 初始化为0，
// 内层循环数组，初始索引值以外层循环索引值开始，累加theSum，直到找到最大值 maxSum
function arrSum(arr){
  //当前循环的最大值
  var theSum = 0;
  //子数组最大值
  var maxSum = 0;
  for(var i=0; i<arr.length; i++){
    theSum = 0;
    for(var j = i; j<arr.length; j++){
      theSum += arr[j];
      if(theSum > maxSum){
        maxSum = theSum;
      }
    }
  }
  console.log(maxSum, '<--------maxSum');
  return maxSum;
}

var arr = [1,-2,3,10,-4,7,2,-5];
arrSum(arr);
