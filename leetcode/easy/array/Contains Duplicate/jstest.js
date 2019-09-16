/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var judge = false;

    for(var i=0; i<=nums.length-1; i++){
      for(var j=i+1; j<=nums.length-1;j++){
        if(nums[i] == nums[j]){
          console.log(true,"<------------judge is true");
          return true;
        }else{

        }
      }
    }
    console.log(judge,"<------------judge");
    return judge;
};

var A = [1,1,1,3,3,4,3,2,4,2];

containsDuplicate(A);
