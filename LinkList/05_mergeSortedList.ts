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

    function mergeTwoSortedList(list1: IListNode, list2: IListNode): IListNode {
        if (list1 === null || list2 === null) return list1 !== null ? list1 : list2

        let dummy = new ListNode(-Infinity)
        let prev = dummy

        let c1 = list1
        let c2 = list2

        while (c1 !== null && c2 !== null) {

            if (c1.val < c2.val) {
                prev.next = c1
                c1 = c1.next
            } else {
                prev.next = c2
                c2 = c2.next
            }
            prev = prev.next
        }

        prev.next = c1 !== null ? c1 : c2


        return dummy.next
    }





    const list1: IListNode = getListNode([1, 3, 5, 7])
    const list2: IListNode = getListNode([-2, 4, 6, 8])


    console.log(mergeTwoSortedList(list1, list2))
})()
