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

        let current: LinkList = head
        let prev: LinkList = null
        let forw: LinkList = null

        while (current !== null) {
            //backup
            forw = current.next
            // link
            current.next = prev

            prev = current
            current = forw

        }

        return prev

    }


    let head: LinkList = getLinkHead([1, 7, 2, 6, 3, 5, 4]);

    let fHead: LinkList = head
    let fPrev: LinkList = fHead

    let sHead: LinkList = null
    head && (sHead = head.next)
    let sPrev: LinkList = sHead

    while (sPrev !== null && sPrev.next !== null) {
        // backup
        let forw: LinkList = sPrev.next

        // link
        fPrev && (fPrev.next = forw)
        sPrev.next = forw.next

        // move
        fPrev && (fPrev = fPrev.next)
        sPrev = sPrev.next

    }

    fPrev && (fPrev.next = null)

    sHead = reverseLinkList(sHead)

    fPrev && (fPrev.next = sHead)

    console.log(fHead)
})()




