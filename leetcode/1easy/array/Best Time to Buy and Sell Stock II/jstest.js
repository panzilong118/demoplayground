/**
 * @param {number[]} prices
 * @return {number}
 */
//失败的算法， 这种情况太多了， 很难全部覆盖到，需要彻底改变思路
// var maxProfit = function(prices) {
//   var max = [];
//   var submax=[];
//   var maxValue = 0;
//   for(let i=0; i<prices.length-1; i++){
//     let key = prices[i];
//     for(let j =i+1; prices[j] != undefined; j++){
//       if(submax[i] == undefined){
//         submax[i]=[];
//       }
//       submax[i].push(prices[j]-key);
//     }
//   }
//   console.log(submax,"<----------submax");
//   //i = 列， j = 行
//   for(let j=0; j<=submax.length-1; j++){
//     for(let i=0; i<=submax[j].length-1; i++){
//       //1.大于0. 2.日期限制
//       console.log(submax[j][i],"<---------submax[j][i]");
//       if(submax[j][i]>=0){
//         //l = 新列，k = 新行
//         for(let k = j+2; k <= submax.length-1; k++){
//           for(let l=0; l <= submax[k].length-1 && k>i+j+1; l++){
//             console.log(submax[k][l],"<---------submax[k][l]");
//             if(submax[k][l]>=0){
//               max.push(submax[j][i]+submax[k][l]);
//             }else{
//               max.push(submax[j][i]);
//             }
//             console.log(max,"<--------max");
//           }
//         }
//         max.push(submax[j][i]);
//         console.log(max,"<--------max");
//       }
//     }
//   }
//   console.log(max,"<----------max");
//   if(max.length>0){
//     maxValue = max[0];
//     for(let i=1; i<=max.length-1; i++){
//       // console.log(maxValue,"<----------maxValue");
//       // console.log(max[i],"<----------max[i]");
//       if(maxValue<max[i]){
//         maxValue = max[i];
//       }else{
//
//       }
//     }
//   }
//   console.log(maxValue,"<----------maxValue");
//   return maxValue;
// };
//
// // var A = [7,1,5,3,6,4];
// // var A = [1,2,3,4,5];
// // var A = [7,6,4,3,1];
// var A = [3,3,5,0,0,3,1,4];
// maxProfit(A);
// console.log(A,"<----------A");


/**
 * @param {number[]} prices
 * @return {number}
 */
 // var maxProfit = function(prices) {
 //     var len = prices.length;
 //     if(len <= 1){
 //       return 0;
 //     }
 //     var ret = 0;
 //     for(var i = 1; i < len; i++) {
 //         ret += Math.max(0, prices[i] - prices[i-1]);
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
// maxProfit(A);
// console.log(A,"<----------A");

/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
   var sum=0;
   let len=prices.length;
    for (let i = 0; i <= len; i++ ) {
          if(prices[i]<prices[i+1]){
            sum+=prices[i+1]-prices[i];
            console.log(sum,"<-----------sum");
          }
      }
    return sum;
 };

var A = [7,1,5,3,6,4];
// var A = [7,1,5,6,3,4];
// var A = [1,2,3,4,5];
// var A = [7,6,4,3,1];
// var A = [3,3,5,0,0,3,1,4];
maxProfit(A);
console.log(A,"<----------A");
