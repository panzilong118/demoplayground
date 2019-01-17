/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 /*
  * 双重循环，暴力模拟
 */
var twoSum = function(nums, target) {
    var number = [];
    //双重循环 顺序遍历
    for(var i=0; i<=nums.length-1; i++){
      for(var j=i+1; j<=nums.length-1; j++){
        if((nums[i]+nums[j]) == target){
          number.push(i,j);
        }
      }
    }

    console.log(number,"<---------------number");
    return number;
};

var nums = [2, 7, 11, 15],
    target = 9;
twoSum(nums,target);


/*
 * 利用hashtable，减少了一次循环。
 * 目标数字 - 当前循环数字 = 要找的那个数字
 * 如果这个数字已经存在在hash表中，直接出结果；否则把这个数字存放在hash表中
*/

var twoSum = function(nums, target) {
  var hashTable = {},
      result = [],
      findthisnum = 0;

  for(var i=0; i<nums.length; i++){
    findthisnum = target-nums[i];
    if(typeof hashTable[findthisnum]!="undefined"){
       result.push(hashTable[findthisnum],i);

    }else{
      hashTable[nums[i]] = i;
    }

  }
  return result;
};

var nums = [2, 7, 11, 15],
    target = 9;
twoSum(nums,target);
