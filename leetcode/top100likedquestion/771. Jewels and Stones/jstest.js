/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  var num = 0;
  for(let i=0; i<S.length; i++){
    if(J.indexOf(S.charAt(i)) > -1){
      num++;
    }
  }

  return num;
};

// var J = "aA",
//     S = "aAAbbbb";
var J = "z",
    S = "ZZ";
var num = numJewelsInStones(J, S);
