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


    function completeRemoveDuplicate(head: IListNode): IListNode {
        if (head === null || head.next === null) return head

        let dummy: IListNode = new ListNode(-Infinity)
        let itr: IListNode = dummy
        itr.next = head //potential unique element
        let curr: IListNode = head.next

        while (curr !== null) {
            let isLoopRun: boolean = false
            while (curr !== null && itr.next.val === curr.val) {
                isLoopRun = true
                curr = curr.next
            }

            if (isLoopRun) itr.next = curr
            else itr = itr.next

            curr && (curr = curr.next)

        }

        return dummy.next

    }

    let l1: IListNode = getListNode([1, 1, 1, 2, 3, 4, 5, 5, 6, 6, 7, 8, 9, 9])

    console.log(completeRemoveDuplicate(l1))
})()