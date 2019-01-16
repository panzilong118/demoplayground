/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 //You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.
// var rotate = function(matrix) {
//
//   var rotatedMatrix = [],
//       row =0;
//
//   for(var z=0; z<=matrix.length-1; z++){
//     rotatedMatrix.push([]);
//   }
//   for(var i =0;i<=matrix.length-1;i++,row++){
//     for(var j= matrix.length-1; j>=0; j--){
//       rotatedMatrix[row].push(matrix[j][i]);
//     }
//   }
//   matrix = rotatedMatrix.slice();
//   matrix[0].push(1);
//   //复制数组是一个引用
//   // var copy = matrix.slice();
//   // console.log(copy,"<------------copy");
//   console.log(rotatedMatrix,"<------------rotatedMatrix");
//   console.log(matrix,"<------------matrix");
//   // matrix[0].push(1);
//   // console.log(matrix,"<------------matrix");
//   // console.log(copy,"<------------copy");
// };
//
// var matrix = [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ];
// rotate(matrix);


var rotate = function(matrix) {
  //把旋转后的新数组放在原有数组后，然后再剔除原有数组,达到不增加新数组的目的
  //i-行的位置； j - 列的位置
  for(var i =0; i<=matrix.length-1; i++){
    for(var j=matrix.length-1; j>=0; j--){
      matrix[i].push(matrix[j][i]);
    }
  }
  for(var k=0; k<=matrix.length-1; k++){
    matrix[k].splice(0,matrix.length);
  }

  console.log(matrix,"<------------matrix");

};

// var matrix = [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ];
var matrix = [
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
]
rotate(matrix);
