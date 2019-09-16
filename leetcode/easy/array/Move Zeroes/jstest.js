/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * 1.设置计数器
 * 2.遍历数组
 * 3.如果元素等于0，直接从数组中剔除
 * 4.为了继续遍历数组，需要i--
 * 5.计数器加1
 * 6.遍历计数器，在数组的最后添加0
 */
var moveZeroes = function(nums) {
  var countZeroes = 0;
  for(var i=0; i<=nums.length-1; i++){
    if(nums[i] ==0){
      nums.splice(i,1);
      i--;
      countZeroes++;
    }
  }
  for(var j=0;j<=countZeroes-1; j++){
    nums.push(0);
  }
  console.log(nums,"<-------------------nums");
};

var A = [0,1,0,3,12];
moveZeroes(A);
