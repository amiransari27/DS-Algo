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

    function reverse(head: IListNode): IListNode {
        let pre: IListNode = null
        let cur: IListNode = head
        let fow: IListNode = null

        while (cur !== null) {
            fow = cur.next // backpressure

            cur.next = pre // link
            pre = cur

            cur = fow // move fow
        }

        return pre
    }

    const list: IListNode = getListNode([1, 2, 3, 4, 5, 6, 7])

    console.log(reverse(list))
})()

