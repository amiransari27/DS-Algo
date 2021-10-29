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

    function removeDuplicateInSortedList(head: IListNode): IListNode {
        let dummy: IListNode = new ListNode(-Infinity)
        let tail: IListNode = dummy
        let curr: IListNode = head

        while (curr !== null) {
            if (tail.val === curr.val) {

            } else {
                tail.next = curr
                tail = tail.next
            }
            curr = curr.next
        }

        tail.next = null
        return dummy.next

    }







    let l1: IListNode = getListNode([1, 1, 1, 2, 3, 4, 5, 5, 6, 6, 7, 8, 9, 9])



    console.log(removeDuplicateInSortedList(l1))
})()