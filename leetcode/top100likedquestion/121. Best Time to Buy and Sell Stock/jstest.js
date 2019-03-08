/**
 * @param {number[]} prices
 * @return {number}
 */
 //思路 - 暴力模拟
var maxProfit = function(prices) {
  let max = 0;
  let themax = 0;
  for(let i = 0; i<prices.length; i++){
    themax = 0;
    for(let j = i; j<prices.length; j++){
      if(prices[j]>prices[i]){
        themax = prices[j] - prices[i];
        if(themax > max){
          max = themax;
        }
      }
    }
  }

  return max;
};

var prices = [7,1,5,3,6,4];
var max = maxProfit(prices);
