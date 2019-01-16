/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    var judge = true;
    //两个字符串长度必须相等
    if(s.length!=t.length){
      return false;
    }

    for(var i=0; i<=s.length-1; i++){
      //如果s中的字符包含在t中，剔除t中的这个字符
      if(t.includes(s.charAt(i))){
        //判断下字母的多少,如果字母数量不一致，返回false
        //剔除这个字符
        var start = t.substring(0,t.indexOf(s.charAt(i)));
        var end = t.substring(t.indexOf(s.charAt(i))+1);
        t = start.concat(end);
        // return true;
      }else{
        return false;
      }
    }

    return judge;
};

var s = "anagram",
    t = "nagaram";
// var s = "rat",
//     t = "car";
// var s = "a",
//     t = "ab";
// var s = "a",
//     t = "aa";
// var s = "aacc",
//     t = "ccac";
isAnagram(s,t);
