(function () {
  class LinkNode {
    val: number;
    next: LinkNode | null;

    constructor(val: number) {
      this.val = val;
      this.next = null;
    }
  }

  type LinkList = LinkNode | null

  function getLinkHead(nums: number[]) {
    let head: LinkList = null;
    let current: LinkList = null;
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


  let head: LinkList = getLinkHead([7, 8, 18, 19, 21, 100, 122]);

  let tempHead: LinkList = null

  function addFirst(node: LinkList): void {
    if (tempHead === null) {
      tempHead = node
    } else {
      node && (node.next = tempHead)
      tempHead = node
    }
  }

  let current: LinkList = head
  let prev: LinkList = null
  let forw: LinkList = null
  while (current !== null) {
    forw = current.next
    prev = current

    current.next = null

    addFirst(current)

    current = forw

  }

  console.log(tempHead)
})()
