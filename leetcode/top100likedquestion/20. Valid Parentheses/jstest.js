/**
 * @param {string} s
 * @return {boolean}
 * 思路 1.定义map对象匹配括号的匹配
 * 2.自定义数组arr 如果是前括号，push字符串到数组
 * 3.如果是后括号，比较是否和数组里面的最好一位的前括号匹配。如果配置，弹出最后一位数组继续，如果不匹配，返回false。
 * 4。最后如果自定义数组arr长度等于0，说明是符合条件的字符串。否则不是
 */

var isValid = function(s) {
    let map = {
        ")": "(",
        "]": "[",
        "}": "{"
    }
    let arr = [];
    for(let i = 0; i < s.length; i ++){
        if(s[i] === "(" || s[i] === "[" || s[i] === "{"){
            arr.push(s[i]);
        }
        else{
            if(arr[arr.length - 1] === map[s[i]]){
                arr.pop();
            }
            else {
              return false;
            }
        }
    }
    return arr.length === 0 ? true : false;
};

var s = '';
var judge = isValid(s);
