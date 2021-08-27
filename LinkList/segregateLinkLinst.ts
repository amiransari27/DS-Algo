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

    function segregateEvenOdd(head: LinkList): LinkList {
        if (head === null || head.next === null) return head

        let dummyEven: LinkList = new LinkNode(-1)
        let evenTail: LinkList = dummyEven
        let dummyOdd: LinkList = new LinkNode(-1)
        let oddTail: LinkList = dummyOdd
        let current: LinkList = head

        while (current !== null) {
            if (current.val % 2 === 0) {
                evenTail.next = current
                evenTail = evenTail.next

            } else {
                oddTail.next = current
                oddTail = oddTail.next
            }
            current = current.next
        }

        evenTail.next = null
        oddTail.next = null

        evenTail.next = dummyOdd.next

        return dummyEven.next

    }

    let head: LinkList = getLinkHead([1, 3, 2, 4, 5, 6, 7, 8, 18, 19, 21]);

    let res = segregateEvenOdd(head)
    console.log(res)
})()
