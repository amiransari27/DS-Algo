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

        addBefore(node: IListNode, newNode: IListNode) {
            let curr: IListNode = this.head

            while (curr !== node && curr !== null) {
                curr = curr.next
            }

            if (curr === null) {
                console.log("node not found")
                return
            }

            let pre: IListNode = curr.prev
            console.log("-----", pre.val)
            if (pre === null) {
                newNode.next = this.head
                this.head.prev = newNode
                this.head = newNode
            } else {

                pre.next = newNode
                newNode.prev = pre
                newNode.next = curr
                curr.prev = newNode
            }



        }

    }




    let l1: LinkList = new LinkList([10, 20, 30, 40, 50, 60])

    let node: IListNode = l1.head
    for (let i = 0; i < 3; i++) {
        node = node.next
    }


    console.log(l1.printAsc())
    l1.addBefore(node, new ListNode(35))
    console.log(l1.printAsc())
    console.log(l1.printDesc())

})()