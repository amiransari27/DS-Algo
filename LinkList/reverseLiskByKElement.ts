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

    function getLength(head: LinkList): number {
        let len: number = 0
        while (head !== null) {
            head = head.next
            len++
        }
        return len
    }



    let head: LinkList = getLinkHead([7, 8, 18, 19, 21, 100, 122, 2, 1]);

    let tHead: LinkList = null
    let tTail: LinkList = null

    function addFirst(node: LinkList): void {
        if (tHead === null) {
            tHead = node
            tTail = node
        } else {
            node && (node.next = tHead)
            tHead = node
        }
    }

    let k = 3
    let n: number = getLength(head)
    let curr: LinkList = head
    let forw: LinkList = null
    let oHead: LinkList = null
    let oTail: LinkList = null

    while (n >= k) {
        console.log()
        let tLength = k

        while (tLength > 0) {
            curr && (forw = curr.next)
            curr && (curr.next = null)
            addFirst(curr)
            curr = forw
            tLength--
        }
        // console.log(tHead)

        if (oHead === null) {
            console.log('yes')
            oHead = tHead
            oTail = tTail
        } else {
            console.log('no')
            oTail && (oTail.next = tHead)
            oTail = tTail
        }

        tHead = null
        tTail = null

        n -= k

    }

    oTail && (oTail.next = curr)

    console.log(oHead)


})()