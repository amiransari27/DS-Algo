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

    function findMid(head: IListNode): IListNode {
        if (head === null || head.next === null) return head

        let slow: IListNode = head
        let fast: IListNode = head

        while (fast.next !== null && fast.next.next !== null) {
            slow = slow.next
            fast = fast.next.next
        }

        return slow
    }

    function reverse(head: IListNode): IListNode {

        if (head === null || head.next === null) return head

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

    function isPalindrome(head: IListNode): boolean {
        if (head === null || head.next === null) return true

        let midNode: IListNode = findMid(head)
        let newHead: IListNode = midNode.next
        midNode.next = null

        newHead = reverse(newHead)

        let c1: IListNode = head
        let c2: IListNode = newHead

        while (c2 !== null) {
            //backup
            if (c1.val === c2.val) {
                c1 = c1.next
                c2 = c2.next
            } else {
                return false
            }

        }

        return true

    }

    const list: IListNode = getListNode([1, 3, 3, 1])

    console.log(isPalindrome(list))


})()
