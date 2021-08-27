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

    function mergeSortedLinkList(l1: LinkList, l2: LinkList): LinkList {
        if (l1 === null || l2 === null) return l1 !== null ? l1 : l2

        let dummy = new LinkNode(-1)
        let prev = dummy
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

    let l1: LinkList = getLinkHead([1, 2, 4]);
    let l2: LinkList = getLinkHead([6, 7, 8, 18]);
    let l3: LinkList = getLinkHead([1, 8, 18, 19, 21]);
    let l4: LinkList = getLinkHead([7, 8, 18, 19, 21, 100, 122]);

    function mergeKSortedLinkList(lists: LinkList[]): LinkList {
        if (lists.length === 0) return null
        if (lists.length === 1) return lists[0]



        let mid: number = Math.floor((lists.length) / 2)

        // console.log('l1', lists.slice(0,mid))
        // console.log('l2', lists.slice(mid))

        let left = mergeKSortedLinkList(lists.slice(0, mid))
        let right = mergeKSortedLinkList(lists.slice(mid))

        return mergeSortedLinkList(left, right)

    }

    let res = mergeKSortedLinkList([l1, l2, l3, l4])

    console.log(res)
})()
