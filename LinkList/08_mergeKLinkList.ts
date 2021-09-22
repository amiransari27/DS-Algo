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

    function mergeTwoSortedList(l1: IListNode, l2: IListNode): IListNode {
        if (l1 === null || l2 === null) return l1 === null ? l2 : l1

        let dummy: IListNode = new ListNode(-Infinity)
        let pre: IListNode = dummy
        let c1: IListNode = l1
        let c2: IListNode = l2

        while (c1 !== null && c2 !== null) {
            if (c1.val < c2.val) {
                pre.next = c1
                c1 = c1.next
            } else {
                pre.next = c2
                c2 = c2.next
            }
            pre = pre.next
        }

        pre.next = c1 !== null ? c1 : c2
        return dummy.next
    }

    function mergeKSortedList(list: IListNode[], start: number, end: number): IListNode {

        if (start === end) {
            return list[start]
        }

        if (start > end) {
            return null
        }

        let mid = Math.floor((start + end) / 2)
        console.log(mid)

        let l1: IListNode = mergeKSortedList(list, start, mid)
        let l2: IListNode = mergeKSortedList(list, mid + 1, end)

        return mergeTwoSortedList(l1, l2)
    }



    const l0: IListNode = getListNode([1, 3, 5, 7])
    const l1: IListNode = getListNode([-2, 4, 6, 8])
    const l2: IListNode = getListNode([1, 3, 5, 7])

    console.log(mergeKSortedList([l0, l1, l2], 0, 2))
})()
