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

    function segregateEvenOdd(head: IListNode): IListNode {
        if (head === null || head.next === null) return head

        let curr: IListNode = head
        let dEven: IListNode = new ListNode(Infinity)
        let evenT: IListNode = dEven
        let dOdd: IListNode = new ListNode(Infinity)
        let oddT: IListNode = dOdd

        while (curr !== null) {
            if (curr.val % 2 === 0) {
                //even
                evenT.next = curr
                evenT = evenT.next
            } else {
                oddT.next = curr
                oddT = oddT.next
            }
            curr = curr.next
        }
        evenT.next = null
        oddT.next = null

        evenT.next = dOdd.next

        return dEven.next

    }




    const list1: IListNode = getListNode([1, 3, 5, 7, -2, 4, 6, 8])

    console.log(segregateEvenOdd(list1))
})()
