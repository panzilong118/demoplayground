/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
  //先把字符串转换为数组，后翻转
  var arr = Array.from(s);
  var ret = "";
  for(var i=arr.length-1; i>=0; i--){
    ret += arr[i];
  }

  console.log(ret,"<-------------------ret");
  return ret;
};

// var s = "hello";
var s = "A man, a plan, a canal: Panama";
reverseString(s);
