// 9. 实现reverse函数将二叉树各节点左右翻转
// 节点数据结构如下：
var node = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4,
      left: null,
      right: null
    },
    right: {
      value: 5,
      left: null,
      right: null
    }
  },
  right: {
    value: 3,
    left: {
      value: 6,
      left: null,
      right: null
    },
    right: {
      value: 7,
      left: null,
      right: null
    }
  }
}

// 函数定义如下：
function reverse (node) {
  if (node === null) return;
  this.reverse(node.left);
  this.reverse(node.right);
  var temp = node.left;
  node.left = node.right;
  node.right = temp;
  return node;
}

const reverseNode = reverse(node);
