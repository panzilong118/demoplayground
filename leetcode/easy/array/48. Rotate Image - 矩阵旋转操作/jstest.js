/*
  48. Rotate Image - 矩阵旋转操作
  https://leetcode.com/problems/rotate-image/submissions/
  https://github.com/azl397985856/leetcode/blob/master/problems/48.rotate-image.md
  You are given an n x n 2D matrix representing an image.

  Rotate the image by 90 degrees (clockwise).

  Note:

  You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

  Example 1:

  Given input matrix =
  [
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ],

  rotate the input matrix in-place such that it becomes:
  [
    [7,4,1],
    [8,5,2],
    [9,6,3]
  ]
  Example 2:

  Given input matrix =
  [
    [ 5, 1, 9,11],
    [ 2, 4, 8,10],
    [13, 3, 6, 7],
    [15,14,12,16]
  ],

  rotate the input matrix in-place such that it becomes:
  [
    [15,13, 2, 5],
    [14, 3, 4, 1],
    [12, 6, 8, 9],
    [16, 7,10,11]
  ]
*/

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

/*
  思路：
    1.把旋转后的新数组push原有数组之后，再删除之前的原有数组, 达到不增加新数组的目的
*/
// var rotate = function(matrix) {
//   // i - 行的位置, j - 列的位置
//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = matrix.length - 1; j >= 0; j--) {
//       matrix[i].push(matrix[j][i]);
//     }
//   }
//   for(let k = 0; k < matrix.length; k++) {
//     matrix[k].splice(0, matrix.length);
//   }
// };

/*
  思路：
  这道题目让我们 in-place，也就说空间复杂度要求 O(1)，如果没有这个限制的话，很简单。

  通过观察发现，我们只需要将第 i 行变成第 n - i - 1 列， 因此我们只需要保存一个原有矩阵，然后按照这个规律一个个更新即可。

  关键点：
  矩阵旋转操作
*/

var rotate = function(matrix) {
  // 时间复杂度O(n^2) 空间复杂度O(n)
  const oMatrix = JSON.parse(JSON.stringify(matrix)); // clone
  const n = oMatrix.length;
  // i - 列的位置, j - 行的位置
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      matrix[j][n - i - 1] = oMatrix[i][j];
    }
  }
};

var matrix = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
];
// var matrix = [
//   [ 5, 1, 9,11],
//   [ 2, 4, 8,10],
//   [13, 3, 6, 7],
//   [15,14,12,16]
// ]
rotate(matrix);
console.log(matrix);
