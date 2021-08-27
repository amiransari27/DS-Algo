(function () {
    class BSTree {
        val: number
        left: IBSTree
        right: IBSTree

        constructor(val: number, left?: IBSTree, right?: IBSTree) {
            this.val = val
            this.left = left === undefined ? null : left
            this.right = right === undefined ? null : right
        }
    }

    type IBSTree = BSTree | null


    function creatBSTreePostOrder(postOrder: number[], minR: number, maxR: number): IBSTree {
        if (creatBSTreePostOrder.index < 0) {
            return null
        }
        if (minR > postOrder[creatBSTreePostOrder.index]) {
            return null
        }
        if (postOrder[creatBSTreePostOrder.index] >= maxR) {
            return null
        }

        const node: IBSTree = new BSTree(postOrder[creatBSTreePostOrder.index--])

        node.right = creatBSTreePostOrder(postOrder, node.val, maxR)
        node.left = creatBSTreePostOrder(postOrder, minR, node.val)

        return node

    }
    creatBSTreePostOrder.index = 8

    let postOrder: number[] = [15, 10, 23, 25, 20, 35, 42, 39, 30]

    const res = creatBSTreePostOrder(postOrder, -Infinity, Infinity)

    console.log(res)
})()