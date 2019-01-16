/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    var judge = true;
    //每行元素数字不能重复
    //i,k - 行; j - 列
    for(let j=0; j<=board.length-1; j++){
      for(let i=0; i<=board[j].length-1; i++){
        for(let k = i+1; k<=board[j].length-1; k++){
          if(board[j][i] != "." && board[j][k] != "." && board[j][i] == board[j][k]){
            return false;
          }else{

          }
        }
      }
    }

    //每列元素数字不能重复 - 先旋转，再重复每行元素数字不能重复
    var rotateBoard = [[],[],[],[],[],[],[],[],[]];
    for(let i=0; i<=board.length-1; i++){
      for(let j=0; j<=board.length-1; j++){
          rotateBoard[i].push(board[j][i]);
      }
    }
    console.log(rotateBoard,"<--------------rotateBoard");
    for(let j=0; j<=rotateBoard.length-1; j++){
      for(let i=0; i<=rotateBoard[j].length-1; i++){
        for(let k = i+1; k<=rotateBoard[j].length-1; k++){
          if(rotateBoard[j][i] != "." && rotateBoard[j][k] != "." && rotateBoard[j][i] == rotateBoard[j][k]){
            return false;
          }else{

          }
        }
      }
    }

    //每一宫(3*3)内元素不能有重复数字
    var sectionBoard = [[],[],[],[],[],[],[],[],[]];
    //row-新行; i - 行; j - 列; n - 计数器遍历行; m - 计数器遍历列
    var row = 0,
        i = 0,
        j = 0,
        n = 0;
        m = 0;
    for(m=0; m<=6; m+=3){
      for(n=0; n<=6; n+=3,row++){
        for(j=0; j<=2;j++){
          for(i=0; i<=2; i++){
            sectionBoard[row].push(board[m+j][n+i]);
          }
        }
      }
    }
    console.log(sectionBoard,"<--------------sectionBoard");
    for(let j=0; j<=sectionBoard.length-1; j++){
      for(let i=0; i<=sectionBoard[j].length-1; i++){
        for(let k = i+1; k<=sectionBoard[j].length-1; k++){
          if(sectionBoard[j][i] != "." && sectionBoard[j][k] != "." && sectionBoard[j][i] == sectionBoard[j][k]){
            return false;
          }else{

          }
        }
      }
    }


    console.log(judge,"<--------------judge");
    return judge;
};

var A = [
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

isValidSudoku(A);
