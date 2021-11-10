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

    function segragateOverPivot(head: IListNode, pivot: number): IListNode {
        if (head === null || head.next === null) return head

        let curr: IListNode = head
        let lastValue: number
        let index: number = 0
        while (curr !== null) {
            if (index === pivot) {
                lastValue = curr.val
                break
            }
            curr = curr.next
            index++
        }

        curr = head

        let smaller: IListNode = new ListNode(-1)
        let ps: IListNode = smaller

        let larger: IListNode = new ListNode(-1)
        let pl: IListNode = larger

        let pivotNode: IListNode = null

        index = 0
        while (curr !== null) {
            if (index === pivot) {
                console.log(curr.val)
                pivotNode = curr

            } else {
                if (curr.val <= lastValue) {
                    ps.next = curr
                    ps = ps.next
                } else {
                    pl.next = curr
                    pl = pl.next
                }
            }

            curr = curr.next
            index++
        }

        ps.next = pivotNode
        pivotNode.next = larger.next
        pl.next = null

        return smaller.next
    }





    let l1: IListNode = getListNode([1, 2, 2, 7, 5, 1, 9, 1, 2, 4, 5, 11, 10])

    console.log(segragateOverPivot(l1, 3))
})()