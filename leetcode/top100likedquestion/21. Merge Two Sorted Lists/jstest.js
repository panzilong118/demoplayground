// 暴力模拟

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var mergeTwoLists = function(l1, l2) {
    let res = new ListNode();
    let cur = res;
    while(l1 && l2){
        if(l1.val <= l2.val){
            cur.next = new ListNode(l1.val);
            l1 = l1.next;
            cur = cur.next;
        }
        else {
            cur.next = new ListNode(l2.val);
            l2 = l2.next;
            cur = cur.next;
        }
    }
    cur.next = l1 || l2;
    return res.next;
};

var l1 = {
  val: 1,
  next:{
    val:2,
    next:{
      val:4,
      next:null
    }
  }
};

var l2 = {
  val: 1,
  next:{
    val:3,
    next:{
      val:4,
      next:null
    }
  }
};

var newNode = mergeTwoLists(l1, l2);
