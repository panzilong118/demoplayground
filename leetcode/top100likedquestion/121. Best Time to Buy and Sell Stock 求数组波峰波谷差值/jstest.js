/*
  121. Best Time to Buy and Sell Stock 求数组波峰波谷差值
  https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/
  https://github.com/azl397985856/leetcode/blob/master/problems/121.best-time-to-buy-and-sell-stock.md
  Say you have an array for which the ith element is the price of a given stock on day i.

  If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

  Note that you cannot sell a stock before you buy one.

  Example 1:

  Input: [7,1,5,3,6,4]
  Output: 5
  Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
               Not 7-1 = 6, as selling price needs to be larger than buying price.
  Example 2:

  Input: [7,6,4,3,1]
  Output: 0
  Explanation: In this case, no transaction is done, i.e. max profit = 0.
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
 //思路 - 暴力模拟
// var maxProfit = function(prices) {
//   let max = 0;
//   let themax = 0;
//   for(let i = 0; i<prices.length; i++){
//     themax = 0;
//     for(let j = i; j<prices.length; j++){
//       if(prices[j]>prices[i]){
//         themax = prices[j] - prices[i];
//         if(themax > max){
//           max = themax;
//         }
//       }
//     }
//   }
//
//   return max;
// };

/**
 * @param {number[]} prices
 * @return {number}
 */
/*
思路：
  由于我们是想获取到最大的利润，我们的策略应该是低点买入，高点卖出。
  由于题目对于交易次数有限制，只能交易一次，因此问题的本质其实就是求波峰浪谷的差值的最大值。
  用图表示的话就是这样：

关键点解析
  这类题只要你在心中（或者别的地方）画出上面这种图就很容易解决
*/
var maxProfit = function(prices) {
    let min = prices[0];
    let profit = 0;
    // 7 1 5 3 6 4
    for(let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i -1]) {
            // 找波峰
            profit = Math.max(profit, prices[i] - min);
        } else {
            // 找波谷
            min = Math.min(min, prices[i]);;
        }
    }

    return profit;
};

var prices = [7,1,5,3,6,4];
var max = maxProfit(prices);
