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

    function segragateOverLastIndex(head: IListNode): IListNode {
        if (head === null || head.next === null) return head

        let curr: IListNode = head
        let lastValue: number
        while (curr !== null) {
            lastValue = curr.val
            curr = curr.next
        }

        curr = head

        let smaller: IListNode = new ListNode(-1)
        let ps: IListNode = smaller

        let larger: IListNode = new ListNode(-1)
        let pl: IListNode = larger

        while (curr !== null) {
            if (curr.val <= lastValue) {
                ps.next = curr
                ps = ps.next
            } else {
                pl.next = curr
                pl = pl.next
            }
            curr = curr.next
        }

        ps.next = larger.next
        pl.next = null

        return smaller.next
    }





    let l1: IListNode = getListNode([1, 2, 2, 5, 5, 1, 9, 1, 2, 4, 5, 11, 10])

    console.log(segragateOverLastIndex(l1))
})()