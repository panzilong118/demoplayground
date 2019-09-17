/*
  122. Best Time to Buy and Sell Stock II 求数组多个波峰波谷差值之合
  https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
  https://github.com/azl397985856/leetcode/blob/master/problems/122.best-time-to-buy-and-sell-stock-ii.md
  Say you have an array for which the ith element is the price of a given stock on day i.

  Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

  Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

  Example 1:

  Input: [7,1,5,3,6,4]
  Output: 7
  Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
               Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
  Example 2:

  Input: [1,2,3,4,5]
  Output: 4
  Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
               Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are
               engaging multiple transactions at the same time. You must sell before buying again.
  Example 3:

  Input: [7,6,4,3,1]
  Output: 0
  Explanation: In this case, no transaction is done, i.e. max profit = 0.
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
//失败的算法， 这种情况太多了， 很难全部覆盖到，需要彻底改变思路
// var sumProfit = function(prices) {
//   var sum = [];
//   var subsum=[];
//   var sumValue = 0;
//   for(let i=0; i<prices.length-1; i++){
//     let key = prices[i];
//     for(let j =i+1; prices[j] != undefined; j++){
//       if(subsum[i] == undefined){
//         subsum[i]=[];
//       }
//       subsum[i].push(prices[j]-key);
//     }
//   }
//   console.log(subsum,"<----------subsum");
//   //i = 列， j = 行
//   for(let j=0; j<=subsum.length-1; j++){
//     for(let i=0; i<=subsum[j].length-1; i++){
//       //1.大于0. 2.日期限制
//       console.log(subsum[j][i],"<---------subsum[j][i]");
//       if(subsum[j][i]>=0){
//         //l = 新列，k = 新行
//         for(let k = j+2; k <= subsum.length-1; k++){
//           for(let l=0; l <= subsum[k].length-1 && k>i+j+1; l++){
//             console.log(subsum[k][l],"<---------subsum[k][l]");
//             if(subsum[k][l]>=0){
//               sum.push(subsum[j][i]+subsum[k][l]);
//             }else{
//               sum.push(subsum[j][i]);
//             }
//             console.log(sum,"<--------sum");
//           }
//         }
//         sum.push(subsum[j][i]);
//         console.log(sum,"<--------sum");
//       }
//     }
//   }
//   console.log(sum,"<----------sum");
//   if(sum.length>0){
//     sumValue = sum[0];
//     for(let i=1; i<=sum.length-1; i++){
//       // console.log(sumValue,"<----------sumValue");
//       // console.log(sum[i],"<----------sum[i]");
//       if(sumValue<sum[i]){
//         sumValue = sum[i];
//       }else{
//
//       }
//     }
//   }
//   console.log(sumValue,"<----------sumValue");
//   return sumValue;
// };
//
// // var A = [7,1,5,3,6,4];
// // var A = [1,2,3,4,5];
// // var A = [7,6,4,3,1];
// var A = [3,3,5,0,0,3,1,4];
// sumProfit(A);
// console.log(A,"<----------A");


/**
 * @param {number[]} prices
 * @return {number}
 */
 // var sumProfit = function(prices) {
 //     var len = prices.length;
 //     if(len <= 1){
 //       return 0;
 //     }
 //     var ret = 0;
 //     for(var i = 1; i < len; i++) {
 //         ret += Math.sum(0, prices[i] - prices[i-1]);
 //         console.log(ret,"<----------ret");
 //     }
 //     return ret;
 // };
//
// // var A = [7,1,5,3,6,4];
// // var A = [7,1,5,6,3,4];
// // var A = [1,2,3,4,5];
// // var A = [7,6,4,3,1];
// var A = [3,3,5,0,0,3,1,4];
// sumProfit(A);
// console.log(A,"<----------A");

/**
 * @param {number[]} prices
 * @return {number}
 */
 // var sumProfit = function(prices) {
 //   var sum=0;
 //   let len=prices.length;
 //    for (let i = 0; i <= len; i++ ) {
 //          if(prices[i]<prices[i+1]){
 //            sum+=prices[i+1]-prices[i];
 //            console.log(sum,"<-----------sum");
 //          }
 //      }
 //    return sum;
 // };

/*
思路
  由于我们是想获取到最大的利润，我们的策略应该是低点买入，高点卖出。
  由于题目对于交易次数没有限制，因此只要能够赚钱的机会我们都不应该放过。
  如下图，我们只需要求出加粗部分的总和即可
  用图表示的话就是这样：

关键点解析
  这类题只要你在心中（或者别的地方）画出上面这种图就很容易解决
*/
 /**
  * @param {number[]} prices
  * @return {number}
  */
 var sumProfit = function(prices) {
     let sum = 0;

     for(let i = 1; i < prices.length; i++) {
         if (prices[i] > prices[i -1]) {
             // 如果是相邻的差值都累加上，如果一致涨，就都吃掉
             sum  += prices[i] - prices[i - 1];
         }
     }

     return sum;
 };

var arr = [7,1,5,3,6,10];
// var A = [7,1,5,6,3,4];
// var A = [1,2,3,4,5];
// var A = [7,6,4,3,1];
// var arr = [3,3,5,0,0,3,1,4];
const res = sumProfit(arr);
console.log(res,"<----------res");
