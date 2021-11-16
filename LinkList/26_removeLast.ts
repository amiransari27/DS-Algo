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

        removeLast() {
            if (this.head === null) return
            if (this.size === 1) {
                this.head = this.tail = null
            } else {
                let prev: IListNode = this.tail.prev
                this.tail.prev = null
                prev.next = null
                this.tail = prev
            }
            this.size--
        }

    }




    let l1: LinkList = new LinkList([10, 20, 30, 40])

    console.log(l1.printDesc())

    l1.removeLast()

    console.log(l1.printDesc())
})()