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

        let prev: LinkList = null
        let current: LinkList = head
        let ford: LinkList = null

        while (current !== null) {
            // backup
            ford = current.next
            // link
            current.next = prev

            prev = current
            current = ford
        }
        return prev

    }

    function findMidNode(head: LinkList): LinkList {
        if (head === null || head.next === null) return head

        let slow: LinkList = head
        let fast: LinkList = head
        while (fast.next !== null && fast.next.next !== null) {
            slow && (slow = slow.next)
            fast = fast.next.next
        }

        return slow
    }


    let head: LinkList = getLinkHead([1, 2, 1]);

    let midNode: LinkList = findMidNode(head)
    let nHead: LinkList = null
    midNode && (nHead = midNode.next)
    midNode && (midNode.next = null)

    nHead = reverseLinkList(nHead)

    let c1: LinkList = head
    let c2: LinkList = nHead
    let res: boolean = true

    while (c1 !== null && c2 !== null) { // or just use (c2 !== null)
        if (c1.val !== c2.val) {
            res = false
            break
        }
        c1 = c1.next
        c2 = c2.next
    }

    console.log(res)




})()
