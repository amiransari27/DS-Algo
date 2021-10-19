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

        let seven: IListNode = null
        let eleven: IListNode = null

        for (let val of num) {
            if (cur === null) {
                head = cur = new ListNode(val)
            } else {
                cur.next = new ListNode(val)
                if (val === 7) {
                    seven = cur.next
                }
                if (val === 11) {
                    eleven = cur.next
                }
                cur = cur.next
            }
        }

        eleven.next = seven

        return head
    }


    function checkCycle(head: IListNode): boolean {

        let slow: IListNode = head
        let fast: IListNode = head

        while (fast.next !== null && fast.next.next !== null) {
            slow = slow.next
            fast = fast.next.next

            if (slow == fast) {
                return true
            }
        }

        return false
    }


    let l: IListNode = getListNode([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])



    console.log(checkCycle(l))

})()