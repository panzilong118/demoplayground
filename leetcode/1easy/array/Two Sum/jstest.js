/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
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
