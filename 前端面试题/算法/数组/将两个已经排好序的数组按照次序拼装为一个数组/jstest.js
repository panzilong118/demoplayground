/*
8. 实现concat函数，将两个已经排好序的数组按照次序拼装为一个数组
比如一下两个数组：
A: [1, 3, 5, 7, 8, 9, 15]
B: [2, 4, 6, 8, 13]
合并为:
[1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 13, 15]
*/

/*
思路：
A和B都已经是排好序的数组，我们只需要从后往前比较就可以了。
因为这是数组而不是链表，它们是有索引的，索引是从前到后的。
如果在数组前方添加一个数字，那么其后的所有元素都需要往后挪一步，
而如果在后方添加一个数字，前面的则不需要移动。
当A或者B数组索引为负数时，说明已经遍历完该数组，之后把没有遍历完的数组按照从后到前的顺序添加到新数组
*/

// 新数组
function concat(A, B) {
  const arr = [];
  let a = A.length - 1;
  let b = B.length - 1;
  let newLen = A.length + B.length - 1;
  while(a >= 0 && b >= 0) {
    if(A[a] > B[b]) {
      arr[newLen--] = A[a--];
    } else {
      arr[newLen--] = B[b--];
    }
  }
  if (a >= 0) {
    while (a >= 0) {
      arr[newLen--] = A[a--];
    }
  } else if (b >= 0) {
    while (b >= 0) {
      arr[newLen--] = B[b--];
    }
  }
  return arr;
}
const A = [1, 3, 5, 7, 8, 9, 15];
const B = [2, 4, 6, 8, 13];
const mergeArr = concat(A, B);
