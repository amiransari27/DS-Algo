(function () {
  class LinkNode {
    val: number;
    next: LinkNode | null;

    constructor(val: number) {
      this.val = val;
      this.next = null;
    }
  }


  function getLinkHead(nums: number[]) {
    let head: LinkNode | null = null;
    let current: LinkNode | null = null;
    for (let i = 0; i < nums.length; i++) {
      if (i === 0) {
        head = current = new LinkNode(nums[i]);
      } else {
        if (current !== null) {
          current.next = new LinkNode(nums[i]);
          current = current.next;
        }
      }
    }

    return head;
  }

  function reverseLinkList(head: LinkNode | null): LinkNode | null {

    if (head === null || head.next === null) return head
    let current: LinkNode | null = head
    let pre: LinkNode | null = null
    let forw: LinkNode | null = null
    while (current !== null) {
      forw = current.next // backup
      current.next = pre // link

      pre = current
      current = forw

    }

    return pre
  }

  function findMidNode(head: LinkNode | null): LinkNode | null {

    if (head === null || head.next === null) return head

    let slow: LinkNode | null = head;
    let fast: LinkNode | null = head;
    while (fast.next !== null && fast.next.next !== null) {
      slow && (slow = slow.next)
      fast = fast.next.next;
    }
    return slow;
  }


  let head: LinkNode | null = getLinkHead([1, 2, 3, 4, 5, 6, 7]);

  let midNode: LinkNode | null = findMidNode(head)  // IC - n

  let nHead: LinkNode | null = null
  midNode && (nHead = midNode.next)
  midNode && (midNode.next = null)

  nHead = reverseLinkList(nHead) // IC - n/2


  let c1: LinkNode | null = head
  let c2: LinkNode | null = nHead
  let f1: LinkNode | null = null
  let f2: LinkNode | null = null


  while (c1 !== null && c2 !== null) {  // IC - n
    //backup
    f1 = c1.next
    f2 = c2.next

    //link 
    c1.next = c2
    c2.next = f1

    c1 = f1
    c2 = f2

  }

  // total TC - O(n), Space - O(1)
  console.log(JSON.stringify(head))



})()
