/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    var number = 0;
    //用indexOf判断
    if(needle.length>0){
      if(haystack.indexOf(needle) > -1){
        number = haystack.indexOf(needle)
      }else{
        number = -1;
      }
    }else{

    }
    console.log(number,"<------------number");
    return number;
};

// var haystack = "hello",
//     needle = "ll";
// var haystack = "aaaaa",
//     needle = "bba";
var haystack = "aaaaa",
    needle = "";
strStr(haystack,needle);
