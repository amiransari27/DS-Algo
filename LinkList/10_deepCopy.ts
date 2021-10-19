(function () {
    class ListNode {
        val: number
        random: number | null
        next: IListNode
        constructor(val: number, isRandom: boolean = true) {
            this.val = val
            this.next = null
            this.random = isRandom ? Math.floor(Math.random() * 50) : null
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

    let listMap = new Map()

    function copy(head: IListNode): IListNode {
        if (head === null) return head
        let curr: IListNode = head

        let nHead: IListNode = new ListNode(-Infinity)
        let prev: IListNode = nHead

        while (curr !== null) {
            const node: IListNode = new ListNode(-curr.val, false)
            prev.next = node

            listMap.set(curr, node)

            curr = curr.next

            prev = prev.next

        }

        curr = head

        while (curr !== null) {
            const temp: IListNode = listMap.get(curr)

            temp.random = curr.random

            curr = curr.next
        }

        return nHead.next
    }

    let l: IListNode = getListNode([1, 2, 3, 4, 5, 6, 7])

    console.log(l, copy(l))

})()