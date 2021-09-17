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

  function findMid(head: IListNode): IListNode {
    if (head === null || head.next === null) return head

    let slow: IListNode = head
    let fast: IListNode = head

    while (fast.next !== null && fast.next.next !== null) {
      slow = slow.next
      fast = fast.next.next
    }

    return slow
  }

  function reverse(head: IListNode): IListNode {

    if (head === null || head.next === null) return head

    let pre: IListNode = null
    let cur: IListNode = head
    let fow: IListNode = null

    while (cur !== null) {
      fow = cur.next // backpressure

      cur.next = pre // link
      pre = cur

      cur = fow // move fow
    }

    return pre
  }

  function foldLinkList(head: IListNode): IListNode {
    if (head === null || head.next === null) return head

    let midNode: IListNode = findMid(head)
    let newHead: IListNode = midNode.next
    midNode.next = null

    newHead = reverse(newHead)

    let c1: IListNode = head
    let c2: IListNode = newHead
    let f1: IListNode = null
    let f2: IListNode = null

    while (c2 !== null) {
      //backup
      f1 = c1.next
      f2 = c2.next

      //link
      c1.next = c2
      c2.next = f1

      c1 = f1
      c2 = f2

    }

    return head

  }

  const list: IListNode = getListNode([1, 2, 3, 4, 5, 6, 7])

  console.log(foldLinkList(list))
})()
