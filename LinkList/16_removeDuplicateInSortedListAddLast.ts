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

    let th: IListNode = null
    let tt: IListNode = null

    function addLast(node: IListNode) {
        if (th === null) {
            th = tt = node
        } {
            tt.next = node
            tt = tt.next
        }
    }

    function removeDuplicateInSortedList(head: IListNode): IListNode {
        if (head === null || head.next === null) return head
        let curr: IListNode = head
        let forw: IListNode = null

        while (curr !== null) {
            forw = curr.next
            curr.next = null

            if (tt === null || tt.val !== curr.val) addLast(curr)

            curr = forw

        }

    }







    let l1: IListNode = getListNode([1, 1, 1, 2, 3, 4, 5, 5, 6, 6, 7, 8, 9, 9])

    removeDuplicateInSortedList(l1)

    console.log(th)
})()