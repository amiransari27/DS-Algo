(function () {
    class LinkNode {
        val: number;
        next: LinkNode | null;

        constructor(val: number) {
            this.val = val;
            this.next = null;
        }
    }

    type LinkList = LinkNode | null

    function getLinkHead(nums: number[]) {
        let head: LinkList = null;
        let current: LinkList = null;
        for (let i = 0; i < nums.length; i++) {
            if (i === 0) {
                head = current = new LinkNode(nums[i]);
            } else {
                if (current !== null) {
                    current.next = new LinkNode(nums[i]);
                    current = current.next;
                }
            }
        }

        return head;
    }

    function reverseLinkList(head: LinkList): LinkList {
        if (head === null || head.next === null) return head

        let curr: LinkList = head
        let prev: LinkList = null
        let forw: LinkList = null

        while (curr !== null) {
            //backup
            forw = curr.next
            //link
            curr.next = prev

            prev = curr
            curr = forw
        }

        return prev
    }

    function subtractOfTwoLinkList(l1: LinkList, l2: LinkList): LinkList {
        let rHeadL1: LinkList = reverseLinkList(l1)
        let rHeadL2: LinkList = reverseLinkList(l2)

        let newHead: LinkList = new LinkNode(-1)
        let newTail: LinkList = newHead
        let borrow: number = 0
        while (rHeadL1 !== null) {

            console.log(rHeadL1.val, borrow)
            let sub: number = rHeadL1.val + borrow - (rHeadL2 ? rHeadL2.val : 0)
            borrow = 0

            if (sub < 0) {
                borrow = -1
                sub += 10
            }
            newTail.next = new LinkNode(sub)
            newTail = newTail.next

            rHeadL1 = rHeadL1.next
            rHeadL2 && (rHeadL2 = rHeadL2.next)

        }

        return reverseLinkList(newHead.next)
    }

    let l1: LinkList = getLinkHead([1, 2, 3, 4, 5, 6, 7,]); // unique number
    let l2: LinkList = getLinkHead([7, 8, 9]); // unique number

    console.log(subtractOfTwoLinkList(l1, l2))
})()