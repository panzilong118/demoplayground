/**
 * @param {number[]} nums
 * @return {number}
 */
// 思路 1.利用reduce计算数组中每个元素出现的次数
// 2.循环判断数值大小就好

var majorityElement = function(nums) {
    var num = 0;
    var theLength = nums.length/2;

    var countedNums = nums.reduce(function (allNums, num) {
      if (num in allNums) {
        allNums[num]++;
      }
      else {
        allNums[num] = 1;
      }
      return allNums;
    }, {});

    for (item in countedNums){
      console.log(item, '<------item');
      if(countedNums[item] > theLength){
        num = item;
      }
    }

    return num;
};

var nums = [2,2,1,1,1,2,2];
var majorityNum = majorityElement(nums);
