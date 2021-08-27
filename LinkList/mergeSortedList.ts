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



    let l1: LinkList = getLinkHead([1, 10, 20, 21, 40]);
    let l2: LinkList = getLinkHead([2, 11, 23, 31, 49]);

    let dummy: LinkList
    let prev: LinkList = dummy = new LinkNode(-1)
    let c1: LinkList = l1
    let c2: LinkList = l2

    while (c1 !== null && c2 !== null) {
        if (c1.val < c2.val) {
            prev.next = c1
            c1 = c1.next
        } else {
            prev.next = c2
            c2 = c2.next
        }
        prev = prev.next
    }

    prev.next = c1 !== null ? c1 : c2

    console.log(dummy.next)
})()
