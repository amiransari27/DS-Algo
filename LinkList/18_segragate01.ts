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

    function segragate01(head: IListNode): IListNode {
        if (head === null || head.next === null) return head

        let curr: IListNode = head

        let dummyZero: IListNode = new ListNode(-1)
        let preZero: IListNode = dummyZero

        let dummyOne: IListNode = new ListNode(-1)
        let preOne: IListNode = dummyOne

        while (curr !== null) {
            if (curr.val === 1) {
                preOne.next = curr
                preOne = preOne.next
            } else {
                preZero.next = curr
                preZero = preZero.next
            }
            curr = curr.next
        }

        preZero.next = dummyOne.next
        preOne.next = null

        return dummyZero.next
    }





    let l1: IListNode = getListNode([1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0])

    console.log(segragate01(l1))
})()