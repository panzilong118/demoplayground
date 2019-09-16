//String to Integer (atoi)
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  var number = 0;
  //去空格
  str = str.trim();
  //转成数字
  number = parseInt(str);
  //判断number值,给出不同结果
  if(isNaN(number)){
    number = 0;
  }else if(number > 2147483647){
    number = 2147483647;
  }else if(number < -2147483648){
    number = -2147483648;
  }
  console.log(number,"<---------number");
  return number;
};

// var str = "42";
// var str = "   -42";
// var str = "4193 with words";
// var str = "words and 987";
var str =  "-91283472332";
myAtoi(str);
