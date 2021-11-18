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

        removeAt(index: number) {
            if (!this.size) return
            else if (index < 0 || index > this.size - 1) return

            if (index === 0) {
                this.head = this.head.next
                this.size--
                if (this.size === 0) {
                    this.tail = null
                }
                return
            }
            if (index === this.size - 1) {
                this.tail = this.tail.prev
                this.tail.next = null
                this.size--
                return
            }

            let curr: IListNode = this.head
            while (index-- > 0) {
                curr = curr.next
            }
            let prev = curr.prev
            let forw = curr.next

            curr.next = null
            curr.prev = null

            prev.next = forw
            forw.prev = prev
            this.size--
        }

    }




    let l1: LinkList = new LinkList([10])

    console.log(l1.printAsc())
    l1.removeAt(0)
    console.log(l1.printAsc())
    console.log(l1.printDesc())

})()