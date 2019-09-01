/*
* 把有序数组随机混排
* 思路：根据数据长度产生一个随机数，挑出这个元素，并插入到新的数组
*/

/*
* Math.random() 函数返回一个浮点,  伪随机数在范围[0，1)，也就是说，从0（包括0）往上，
* 但是不包括1（排除1），然后您可以缩放到所需的范围。
* 实现将初始种子选择到随机数生成算法;它不能被用户选择或重置。
*/
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// console.log(getRandomInt(3));
// expected output: 0, 1 or 2

function randomArr(arr) {
  const ranArr = [];
  for (var i = 0; i < arr.length; i++){
    const idx = getRandomInt(arr.length);
    /*
    * splice() 方法通过删除或替换现有元素或者原地添加新的元素来修改数组,
    * 并以数组形式返回被修改的内容。此方法会改变原数组。
    * array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
    */
    const ranItem = arr.splice(idx, 1);
    console.log(ranItem[0]);
    ranArr.push(ranItem[0]);
    i--;
  }
  return ranArr;
}

const arr = [1, 2, 3, 4, 5];
const res = randomArr(arr);
console.log(res);
