// 8. 实现concat函数，将两个已经排好序的数组按照次序拼装为一个数组
// 比如一下两个数组：
// A: [1, 3, 5, 7, 8, 9, 15]
// B: [2, 4, 6, 8, 13]
// 合并为:
// [1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 13, 15]
function concat(A, B) {
  const arr = [...A, ...B];
  for(var j=1;j<arr.length;j++){
    for(var i=j-1; i>=0; i--){
      if(arr[i] > arr[j]){
        var swap = arr[j];
        arr[j] = arr[i];
        arr[i] = swap;
        j--;
      }
    }
  }
  return arr;
}
const A = [1, 3, 5, 7, 8, 9, 15];
const B = [2, 4, 6, 8, 13];
const mergeArr = concat(A, B);
