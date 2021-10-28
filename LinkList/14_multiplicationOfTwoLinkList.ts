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

    function multiplyListWithDigit(head: IListNode, digit: number): IListNode {
        let curr: IListNode = head

        let dummy: IListNode = new ListNode(-1)
        let tail: IListNode = dummy
        let carry: number = 0

        while (curr !== null || carry !== 0) {
            let sum: number = carry + ((curr !== null ? curr.val : 0) * digit)
            console.log(carry, sum)

            let d: number = parseInt(`${sum % 10}`)
            carry = parseInt(`${sum / 10}`)
            tail.next = new ListNode(d)

            curr !== null && (curr = curr.next)
            tail = tail.next
        }


        return dummy.next
    }

    function addTwoLinkList(prod: IListNode, ans: IListNode) {
        let c1: IListNode = prod
        let c2: IListNode = ans
        let carry: number = 0

        while (c1 !== null || carry !== 0) {
            let sum: number = carry + (c1 !== null ? c1.val : 0) + (c2.next !== null ? c2.next.val : 0)

            let d: number = parseInt(`${sum % 10}`)
            carry = parseInt(`${sum / 10}`)

            if (c2.next !== null) {
                (c2.next.val = d)
            } else {
                c2.next = new ListNode(d)
            }

            c1 !== null && (c1 = c1.next)
            c2 = c2.next

        }
    }

    function muliplyTwoLinkList(l1: IListNode, l2: IListNode) {
        l1 = revese(l1)
        l2 = revese(l2)

        let l2_itr: IListNode = l2

        let dummy: IListNode = new ListNode(-1)
        let ans: IListNode = dummy

        while (l2_itr !== null) {
            let prod: IListNode = multiplyListWithDigit(l1, l2_itr.val)
            l2_itr = l2_itr.next

            addTwoLinkList(prod, ans)
            ans = ans.next

        }

        return revese(dummy.next)
    }


    let l1: IListNode = getListNode([1, 2, 3, 4, 5, 6, 7])

    let l2: IListNode = getListNode([7, 8, 9])


    console.log(muliplyTwoLinkList(l1, l2))
})()