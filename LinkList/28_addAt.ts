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
            console.log(curr)
        }

        printDesc() {
            let curr: IListNode = this.tail
            while (curr !== null) {
                console.log(curr.val)
                curr = curr.prev
            }
        }

        addAt(index: number, node: IListNode): void {
            if (!this.size) {
                return
            }
            else if (index < 0 || index > this.size) {
                return
            }

            if (index === 0) {
                let forw: IListNode = this.head
                this.head = node
                this.head.next = forw
                forw.prev = this.head
                return
            } else if (index === this.size) {
                this.tail.next = node
                node.prev = this.tail
                this.tail = node
                return
            }

            let curr: IListNode = this.head
            index--

            while (index-- > 0) {
                curr = curr.next
            }

            let forw = curr.next
            curr.next = node
            node.next = forw
            forw.prev = node
            node.prev = curr

        }

    }




    let l1: LinkList = new LinkList([10, 20, 30, 40])

    console.log(l1.printAsc())
    l1.addAt(4, new ListNode(21))
    console.log(l1.printAsc())
    console.log(l1.printDesc())

})()