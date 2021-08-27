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

  function findMidNode(nums: number[]): LinkNode | null | undefined {
    const head: LinkNode | null = getLinkHead(nums);

    let slow: LinkNode | null | undefined = head;
    let fast: LinkNode | null | undefined = head;
    while (fast?.next !== null && fast?.next.next !== null) {
      slow = slow?.next;
      fast = fast?.next.next;
    }
    return slow;
  }

  console.log(
    findMidNode([1, 2, 3])?.val
  )
})()