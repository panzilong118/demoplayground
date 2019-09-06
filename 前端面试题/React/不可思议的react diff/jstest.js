/*
React 源码剖析系列 － 不可思议的 react diff
https://zhuanlan.zhihu.com/p/20346379

1.React 通过制定大胆的 diff 策略，将 O(n3) 复杂度的问题转换成 O(n) 复杂度的问题；

2.React 通过分层求异的策略，对 tree diff 进行算法优化；
Web UI 中 DOM 节点跨层级的移动操作特别少，可以忽略不计。
只会对相同层级的 DOM 节点进行比较，即同一个父节点下的所有子节点。当发现节点已经不存在，
则该节点及其子节点会被完全删除掉，不会用于进一步的比较。这样只需要对树进行一次遍历，
便能完成整个 DOM 树的比较。

3.React 通过相同类生成相似树形结构，不同类生成不同树形结构的策略，对 component diff 进行算法优化；
3.1如果是同一类型的组件，按照原策略继续比较 virtual DOM tree。
3.2如果不是，则将该组件判断为 dirty component，从而替换整个组件下的所有子节点。
3.3通过 shouldComponentUpdate() 来判断该组件是否需要进行 diff

4.React 通过设置唯一 key的策略，对 element diff 进行算法优化；
当节点处于同一层级时，React diff 提供了三种节点操作，分别为：
INSERT_MARKUP（插入）function enqueueInsertMarkup(parentInst, markup, toIndex)
MOVE_EXISTING（移动）function enqueueMove(parentInst, fromIndex, toIndex)
REMOVE_NODE（删除）function enqueueRemove(parentInst, fromIndex)
通过唯一 key 可以判断新老集合中是否存在相同的节点，if (prevChild === nextChild)，
如果存在相同节点，则进行移动操作，但在移动前需要将当前节点在老集合中的位置与 lastIndex 进行比较，
if (child._mountIndex < lastIndex)，则进行节点移动操作，否则不执行该操作。
*/

// 新老集合中存在相同节点但位置不同时，对节点进行位置移动的情况
// 新集合中有新加入的节点且老集合存在需要删除的节点
// 遍历新节点 - 伪代码
for (nextChild in nextChildren) {
  // lastIndex 一直在更新，表示访问过的节点在老集合中最右的位置（即最大的位置） ( default 0 )
  let lastIndex = 0;
  // 新的节点位置 ( default 0 )
  let nextIndex = 0;
  // 判断新老集合中是否存在相同的节点 - 相同
  // prevChild: 老节点， nextChild: 新节点
  if (prevChild === nextChild) {
    // prevChild._mountIndex老节点位置 < lastIndex ( default 0 )
    if (prevChild._mountIndex < lastIndex) {
      // toIndex === nextIndex ( default 0 )
      enqueueMove(this, prevChild._mountIndex, toIndex);
    } else {
      // 不移动 - 不用添加到差异队列中
    }
    // lastIndex 一直在更新，表示访问过的节点在老集合中最右的位置（即最大的位置）
    lastIndex = Math.max(prevChild._mountIndex, lastIndex);
    // 更新当前节点位置 nextIndex ( default 0 )
    prevChild._mountIndex = nextIndex;
    nextIndex++;
  } else {
    // 新老集合中存在不相同节点
    // 创建新节点
    lastIndex = Math.max(prevChild._mountIndex, lastIndex);
    // 更新新节点在新集合中的位置
    newChild._mountIndex = nextIndex;
  }
}
// 当完成新集合中所有节点 diff 时，最后还需要对老集合进行循环遍历，
// 判断是否存在新集合中没有但老集合中仍存在的节点，发现存在这样的节点 D，因此删除节点 D，
// 到此 diff 全部完成
for (prevChild in prevChildren) {
  if (prevChild is not in the nextChildren) {
    enqueueRemove(this, fromIndex)
  }
}

/*
5.建议，在开发组件时，保持稳定的 DOM 结构会有助于性能的提升；

6.建议，在开发过程中，尽量减少类似将最后一个节点移动到列表首部的操作，
当节点数量过大或更新操作过于频繁时，在一定程度上会影响 React 的渲染性能。
*/
