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



    function createBSTreePreOrder(
        preOrder: number[],
        minRange: number,
        maxRange: number
    ): IBSTree {

        if (createBSTreePreOrder.index >= preOrder.length) {
            return null
        }
        if (minRange > preOrder[createBSTreePreOrder.index]) {
            return null
        }
        if (preOrder[createBSTreePreOrder.index] >= maxRange) {
            return null
        }

        let node: IBSTree = new BSTree(preOrder[createBSTreePreOrder.index++])

        node.left = createBSTreePreOrder(preOrder, minRange, node.val)
        node.right = createBSTreePreOrder(preOrder, node.val, maxRange)

        return node

    }
    createBSTreePreOrder.index = 0


    let preOrder: number[] = [30, 20, 10, 15, 25, 23, 39, 35, 42]

    const res = createBSTreePreOrder(preOrder, -Infinity, Infinity)

    console.log(res)
})()