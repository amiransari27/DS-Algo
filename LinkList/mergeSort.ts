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

    function getMid(head: LinkList): LinkList {
        if (head === null || head.next === null) return head

        let slow: LinkList = head
        let fast: LinkList = head

        while (fast.next !== null && fast.next.next !== null) {
            slow && (slow = slow.next)
            fast = fast.next.next
        }

        return slow
    }

    function mergeSolrtedLinkList(l1: LinkList, l2: LinkList): LinkList {
        if (l1 === null || l2 === null) return l1 === null ? l2 : l1

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

        return dummy.next
    }

    function mergeSort(head: LinkList): LinkList {
        if (head === null || head.next === null) return head

        let midNode = getMid(head)
        let nHead = null
        midNode && (nHead = midNode.next)
        midNode && (midNode.next = null)

        let l1 = mergeSort(head)
        let l2 = mergeSort(nHead)

        return mergeSolrtedLinkList(l1, l2)
    }

    let head: LinkList = getLinkHead([1, 10, 20, 21, 40, 5, 87, 200, 4, 38, -6, -1, 0, 6]);

    let res = mergeSort(head)

    console.log(res)
})()
