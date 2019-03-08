/**
 * @param {number[]} nums
 * @return {number[]}
 */
 // 思路1.初始化数组exNums
 // 2.遍历数组，如果数组不包含当前索引，push到exNums
var findDisappearedNumbers = function(nums) {
  var exNums = [];
  for(let i=1; i<=nums.length; i++){
    if(!nums.includes(i)){
      exNums.push(i);
    }
  }
  console.log(exNums);
  return exNums;
};

var nums = [4,3,2,7,8,2,3,1];
var exNums = findDisappearedNumbers(nums);
