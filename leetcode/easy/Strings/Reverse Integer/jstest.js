
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  //数字先转换为字符串，然后变成数组
  var arr = Array.from(x.toString());
  var num = "";
  //翻转数组,并拼接成字符串
  if(x>=0){

    for(var i=arr.length-1; i>=0; i--){
      num += arr[i];
    }
    for(var j=0; j<=num.length-1; j++)
      //如果开头是0就去掉0
      if(num.startsWith(0)){
        num = num.slice(1);
      }
  }else{
    //如果是负数，前面加上负号
    for(var i=arr.length-1; i>0; i--){
      num += arr[i];
    }
    num = "-"+num;
  }

  //字符串转成数字 这个不管用，需要的是数字
  // Number.parseInt(num);

  //字符串转成数字
  num = Number(num);
  // 判断下数字的范围 [−231,  231 − 1]
  if(num > 2147483647 || num < -2147483648 ){
    num = 0;
  }

  console.log(num,"<-------------------num");
  return num;

};

// var x = 123;
// var x = -123;
// var x = 1200;
var x = - 1200
// var x =1534236469;
reverse(x);
