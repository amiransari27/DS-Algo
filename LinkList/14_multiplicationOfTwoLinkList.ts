(function(){
    class ListNode {
        val: number
        next: IListNode
        constructor(val: number) {
            this.val = val
            this.next = null
        }
    }
    
    type IListNode = ListNode | null
    
    function getListNode(num: number[]) {
        let head: IListNode = null
        let cur: IListNode = null
    
    
    
        for (let val of num) {
            if (cur === null) {
                head = cur = new ListNode(val)
            } else {
                cur.next = new ListNode(val)
                cur = cur.next
            }
        }
    
        return head
    }
    
    function revese(l: IListNode): IListNode{
    
        let curr: IListNode = l
        let prev: IListNode = null
        let forw: IListNode = null
        
        while(curr !== null){
            forw = curr.next
    
            curr.next = prev
            prev = curr
    
            curr = forw
        }
    
        return prev
    }
    
    function multiplyListWithDigit(head: IListNode, digit: number): IListNode{
        let curr: IListNode = revese(head)
    
        let dummy: IListNode = new ListNode(-1)
        let tail: IListNode = dummy
        let carry:number = 0
    
        while(curr !== null){
            let sum: number = carry + (curr.val * digit)
            let d: number = Math.round(sum % 10)
            carry = Math.round(sum/10)
            tail.next = new ListNode(d)
    
            curr = curr.next
            tail = tail.next 
        }
    
        if (carry > 0){
            tail.next = new ListNode(carry)
            tail = tail.next
        }
    
    
        return revese(dummy.next)
    }
    
    
    let l1: IListNode = getListNode([1, 2, 3, 4,5,6,7])
    
    let l2: IListNode = getListNode([7, 8, 9])
    
    
    console.log(multiplyListWithDigit(l2, 9))
})()