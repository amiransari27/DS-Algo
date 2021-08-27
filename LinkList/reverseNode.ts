(function () {
    class LinkNode {
        val: number;
        next: LinkNode | null;

        constructor(val: number) {
            this.val = val;
            this.next = null;
        }
    }


    function getLinkHead(nums: number[]) {
        let head: LinkNode | null = null;
        let current: LinkNode | null = null;
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

    function reverseLinkList(nums: number[]): LinkNode | null {
        //[1,2,3,4,5]
        let head: LinkNode | null = getLinkHead(nums); // create link list

        if (head === null || head.next === null) return head

        let current: LinkNode | null = head
        let pre: LinkNode | null = null
        let forw: LinkNode | null = null
        while (current !== null) {
            forw = current.next // backup
            current.next = pre // link

            pre = current
            current = forw

        }

        return pre
    }

    console.log(JSON.stringify(reverseLinkList([1, 2, 3, 4, 5, 6, 7])))
})()

