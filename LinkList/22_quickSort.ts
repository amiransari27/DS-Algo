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

    function segragate(head: IListNode, pivotIndex: number) {

        let smaller: IListNode = new ListNode(-1)
        let preSmaller: IListNode = smaller
        let large: IListNode = new ListNode(-1)
        let preLarge: IListNode = large

        let pivotNode: IListNode = head
        while (pivotIndex-- > 0) {
            pivotNode = pivotNode.next
        }
        let curr: IListNode = head

        while (curr !== null) {
            if (curr !== pivotNode) {
                if (curr.val <= pivotNode.val) {
                    preSmaller.next = curr
                    preSmaller = preSmaller.next
                } else {
                    preLarge.next = curr
                    preLarge = preLarge.next
                }
            }
            curr = curr.next
        }
        preSmaller.next = null
        preLarge.next = null
        pivotNode.next = null

        return {
            smaller: smaller.next,
            large: large.next,
            pivotNode
        }
    }

    function getLength(head: IListNode): number {
        let len: number = 0
        let curr: IListNode = head
        while (curr !== null) {
            len++
            curr = curr.next
        }
        return len
    }

    function mergeSortedLinkList({ lh, lt }, pivotNode, { rh, rt }): any {

        let head: IListNode = null
        let tail: IListNode = null

        if (lh !== null && rh !== null) {
            lt.next = pivotNode
            pivotNode.next = rh
            head = lh
            tail = rt
        } else if (lh !== null) {
            lt.next = pivotNode
            head = lh
            tail = pivotNode
        } else if (rh !== null) {
            pivotNode.next = rh
            head = pivotNode
            tail = rt
        } else {
            head = tail = pivotNode
        }


        return { h: head, t: tail }
    }

    function helper(head: IListNode): any {
        console.log("helper")
        if (head === null || head.next === null) return { h: head, t: head }

        let len = getLength(head)
        let pivotIndex = Math.floor(len / 2)
        console.log("pivotIndex", pivotIndex)

        const { smaller, large, pivotNode } = segragate(head, pivotIndex)

        const { h: lh, t: lt } = helper(smaller)
        const { h: rh, t: rt } = helper(large)

        return mergeSortedLinkList(
            { lh, lt },
            pivotNode,
            { rh, rt }
        )
    }

    function quickSort(head: IListNode) {
        return helper(head)
    }



    let l1: IListNode = getListNode([2, 7, 5, 9, 1, 4, 11, 10])


    console.log(quickSort(l1))
})()