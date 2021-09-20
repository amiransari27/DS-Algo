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

    function getMid(head: IListNode): IListNode {
        if (head === null || head.next === null) return head

        let slow: IListNode = head
        let fast: IListNode = head

        while (fast.next !== null && fast.next.next !== null) {
            slow = slow.next
            fast = fast.next.next
        }

        return slow
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

    function mergeSort(head: IListNode): IListNode {
        if (head === null || head.next === null) return head

        let mid: IListNode = getMid(head)
        let nHead: IListNode = mid.next
        mid.next = null

        let l1: IListNode = mergeSort(head)
        let l2: IListNode = mergeSort(nHead)

        return mergeTwoSortedList(l1, l2)

    }




    const list1: IListNode = getListNode([1, 3, 5, 7, -2, 4, 6, 8])

    console.log(mergeSort(list1))
})()
