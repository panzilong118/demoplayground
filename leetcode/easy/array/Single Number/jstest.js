/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  var number = 0;
  for(var i=0; i<= nums.length-1 && nums.length>1; i++){
    for(var j=i+1; j<= nums.length-1; j++){
      if(nums[i] == nums[j]){
        nums.splice(i,1);
        nums.splice(j-1,1);
        i--;
      }else{

      }
    }
  }
  number = nums[0];
  console.log(number,"<-------------number");
  return number;
};

var A = [1,3,1,-1,3];

singleNumber(A);
