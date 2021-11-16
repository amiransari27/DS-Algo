(function () {
    class ListNode {
        val: number
        next: IListNode
        prev: IListNode
        constructor(val: number) {
            this.val = val
            this.next = null
            this.prev = null
        }
    }

    type IListNode = ListNode | null

    class LinkList {
        size: number = 0
        head: IListNode = null
        tail: IListNode = null

        constructor(num: number[]) {
            for (let val of num) {
                if (this.tail === null) {
                    this.head = this.tail = new ListNode(val)
                } else {
                    const node = new ListNode(val)
                    node.prev = this.tail
                    this.tail.next = node
                    this.tail = this.tail.next
                }
                this.size++
            }
        }


        printAsc() {
            let curr: IListNode = this.head
            while (curr !== null) {
                console.log(curr.val)
                curr = curr.next
            }
        }

        printDesc() {
            let curr: IListNode = this.tail
            while (curr !== null) {
                console.log(curr.val)
                curr = curr.prev
            }
        }

        addFirst(node: IListNode) {
            if (node === null) return
            if (this.size === 0) {
                this.head = this.tail = node
            } else {
                node.next = this.head
                this.head.prev = node

                this.head = node
            }
            this.size++
        }

    }




    let l1: LinkList = new LinkList([10, 20, 30, 40, 50])

    console.log(l1.printAsc())

    l1.addFirst(new ListNode(0))

    console.log(l1.printAsc())
})()