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


    function createIntersect(l1: IListNode, l2: IListNode) {

        let curr2: IListNode = l2
        let tail2: IListNode = null

        while (1) {
            if (curr2.next === null) {
                tail2 = curr2
                break
            }
            curr2 = curr2.next
        }


        let curr1: IListNode = l1
        while (1) {
            if (curr1.val === 8) {
                tail2.next = curr1
                break
            }
            curr1 = curr1.next
        }
    }

    function findIntersection(l1: IListNode, l2: IListNode): IListNode {

        let curr1: IListNode = l1
        let tail1: IListNode = null

        while (1) {
            if (curr1.next === null) {
                tail1 = curr1
                break
            }
            curr1 = curr1.next
        }

        tail1.next = l2

        let slow: IListNode = l1
        let fast: IListNode = l1

        while (fast.next !== null && fast.next.next !== null) {
            slow = slow.next
            fast = fast.next.next

            if (slow == fast) {
                break
            }
        }


        slow = l1

        while (slow !== fast) {
            slow = slow.next
            fast = fast.next
        }

        tail1.next = null

        return slow

    }


    let l1: IListNode = getListNode([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])

    let l2: IListNode = getListNode([5, 6, 7])

    createIntersect(l1, l2)

    let ans = findIntersection(l1, l2)

    console.log(ans)

})()