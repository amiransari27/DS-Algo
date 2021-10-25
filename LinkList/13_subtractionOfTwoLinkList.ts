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

    function revese(l: IListNode): IListNode {

        let curr: IListNode = l
        let prev: IListNode = null
        let forw: IListNode = null

        while (curr !== null) {
            forw = curr.next

            curr.next = prev
            prev = curr

            curr = forw
        }

        return prev
    }

    function subtract(l1: IListNode, l2: IListNode): IListNode {

        let curr1: IListNode = l1
        curr1 = revese(curr1)
        let curr2: IListNode = l2
        curr2 = revese(curr2)

        let dummy: IListNode = new ListNode(-Infinity)
        let prev: IListNode = dummy
        let borrow: number = 0
        while (curr1 !== null) {
            let val
            let diff = curr1.val - (curr2 ? curr2.val : 0)
            if (diff < 0) {
                val = diff + 10 + borrow
                borrow = -1
            } else {
                val = diff + borrow
                borrow = 0
            }
            curr1 = curr1.next
            curr2 && (curr2 = curr2.next)


            prev.next = new ListNode(val)
            prev = prev.next
        }

        return revese(dummy.next)
    }

    let l1: IListNode = getListNode([1, 2, 3, 4, 5, 6, 7])

    let l2: IListNode = getListNode([7, 8, 9])


    console.log(subtract(l1, l2))
})()