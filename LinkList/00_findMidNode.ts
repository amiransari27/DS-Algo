(function () {
  class ListNode {
    val: number
    next: IListNode
    constructor(val: number) {
      this.val = val
      this.next = null
    }
  }

  type IListNode = ListNode | null

  function getListNode(num: number[]) {
    let head: IListNode = null
    let cur: IListNode = null
    for (let val of num) {
      if (cur === null) {
        head = cur = new ListNode(val)
      } else {
        cur.next = new ListNode(val)
        cur = cur.next
      }
    }
    return head
  }

  function findMid(head: IListNode): void {
    let slow: IListNode = head
    let fast: IListNode = head

    while (fast.next !== null && fast.next.next !== null) {
      slow = slow.next
      fast = fast.next.next
    }

    console.log(slow.val)
  }

  const list: IListNode = getListNode([1, 2, 3, 4, 5, 6, 7])

  findMid(list)
})()