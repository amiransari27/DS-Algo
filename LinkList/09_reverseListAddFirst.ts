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

  let dummy: IListNode = null

  function addFirst(curr: IListNode) {
    if (dummy === null) {
      console.log(curr)
      dummy = curr
    } else {
      curr.next = dummy
      dummy = curr
    }
  }

  function reverseLinkListByAddFirst(list: IListNode): IListNode {
    // if (list == null || list.next === null) return list

    let curr: IListNode = list
    let forw: IListNode = null

    while (curr !== null) {
      forw = curr.next

      curr.next = null

      addFirst(curr)

      curr = forw
    }

    return dummy

  }




  const l: IListNode = getListNode([1, 3, 5, 7])

  console.log(reverseLinkListByAddFirst(l))
})()