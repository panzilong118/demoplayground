/*
  36. Valid Sudoku 合法的数独矩阵
  https://leetcode.com/problems/valid-sudoku/
  Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

  Each row must contain the digits 1-9 without repetition.
  Each column must contain the digits 1-9 without repetition.
  Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition.

  A partially filled sudoku which is valid.

  The Sudoku board could be partially filled, where empty cells are filled with the character '.'.

  Example 1:

  Input:
  [
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
  ]
  Output: true
  Example 2:

  Input:
  [
    ["8","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
  ]
  Output: false
  Explanation: Same as Example 1, except with the 5 in the top left corner being
      modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.
  Note:

  A Sudoku board (partially filled) could be valid but is not necessarily solvable.
  Only the filled cells need to be validated according to the mentioned rules.
  The given board contain only digits 1-9 and the character '.'.
  The given board size is always 9x9.
*/

/*
  思路：
    暴力模拟
*/

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    var judge = true;
    // 每行元素数字不能重复
    // i, k - 行; j - 列
    for (let j = 0; j <board.length; j++) {
      for (let i = 0; i < board[j].length; i++) {
        for (let k = i + 1; k < board[j].length; k++) {
          if (board[j][i] !== '.' && board[j][k] !== '.' && board[j][i] === board[j][k]){
            return false;
          }
        }
      }
    }
    // 每列元素数字不能重复 - 先旋转，再重复每行元素数字不能重复
    var rotateBoard = [[], [], [], [], [], [], [], [], []];
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board.length; j++) {
        rotateBoard[i].push(board[j][i]);
      }
    }
    for (let j = 0; j < rotateBoard.length; j++) {
      for (let i = 0; i < rotateBoard[j].length - 1; i++) {
        for (let k = i + 1; k <rotateBoard[j].length; k++) {
          if (rotateBoard[j][i] !== '.' && rotateBoard[j][k] !== '.' && rotateBoard[j][i] === rotateBoard[j][k]){
            return false;
          }
        }
      }
    }
    // 每一宫(3*3)内元素不能有重复数字
    var sectionBoard = [[],[],[],[],[],[],[],[],[]];
    // row - 新行; i - 行; j - 列; n - 计数器遍历行; m - 计数器遍历列
    var row = 0,
        i = 0,
        j = 0,
        n = 0;
        m = 0;
    for (m = 0; m <= 6; m += 3) {
      for (n = 0; n <= 6; n += 3, row++) {
        for (j = 0; j <= 2; j++) {
          for(i = 0; i <= 2; i++){
            sectionBoard[row].push(board[m+j][n+i]);
          }
        }
      }
    }
    for (let j = 0; j < sectionBoard.length; j++) {
      for (let i = 0; i < sectionBoard[j].length; i++) {
        for (let k = i + 1; k < sectionBoard[j].length; k++) {
          if (sectionBoard[j][i] !== '.' && sectionBoard[j][k] !== '.' && sectionBoard[j][i] === sectionBoard[j][k]) {
            return false;
          }
        }
      }
    }
    return judge;
};

var arr = [
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
];

const res = isValidSudoku(arr);
console.log(res);
