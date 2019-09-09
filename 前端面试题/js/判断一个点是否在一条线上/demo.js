/*
* 判断一个点是否在一条线上
* https://stackoverflow.com/questions/17692922/check-is-a-point-x-y-is-between-two-points-drawn-on-a-straight-line
* if (distance(A, C) + distance(B, C) == distance(A, B))
*    return true; // C is on the line.
*    return false; // C is not on the line.
*/

const A = {
  x: 1,
  y: 1
}

const B = {
  x: 10,
  y: 10
}

const C = {
  x: 3,
  y: 3
}

function distance(start, end){
  const x = Math.pow((start.x - end.x), 2);
  const y = Math.pow((start.y - end.y), 2);
  return Math.sqrt(x + y);
}

return distance(A, C) + distance(B, C) === distance(A, B);
