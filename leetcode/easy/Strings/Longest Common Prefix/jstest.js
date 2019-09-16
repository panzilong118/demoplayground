/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    var commonStr = "";
    //找到数组中字符串长度最小的字符串作为循环次数循环
    var strsLength = [];
    var loopTimes = 0;
    //当前字符串
    var letter = "";
    //如果是空数组直接返回""
    if(strs.length<1){
      return commonStr;
    //如果数组中只有一个字符串，直接返回这个字符串
    }else if(strs.length == 1){
      return strs[0];
    }
    //找到数组中字符串长度最小的字符串作为循环次数循环
    for(var i=0; i<=strs.length-1; i++){
      strsLength[i] = strs[i].length;
    }
    loopTimes = Math.min(...strsLength)-1;
    console.log(strsLength,"<--------------strsLength");
    //把数组字符串看成一个数组矩阵，竖向遍历数组
    for(var i=0; i<=loopTimes; i++){
      for(var j=0; j<=strs.length-1; j++){
        console.log(strs[j].charAt(i),"<-----------the letter");
        //把数组中第一个字符串的作为标杆
        letter = strs[0].charAt(i);
        //如果标杆不等于之后的字符，直接在这个index上截取子字符串返回
        if(letter != strs[j].charAt(i)){
          console.log(strs[0].substring(0,i),"<----------commonStr");
          commonStr = strs[0].substring(0,i);
          return commonStr;
        //如果标杆等于之后的字符，并且已经循环到最后一个字符，在公共字符串上加上这个字符
        }else if(letter == strs[j].charAt(i) && j == strs.length-1){
          commonStr += letter;
        }else{

        }
      }
    }

    return commonStr;
};

// var strs = ["flower","flow","flight"];
// var strs = ["dog","racecar","car"];
// var strs = [];
// var strs = ["a"];
var strs = ["c","c"];
longestCommonPrefix(strs);
