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


    function creatBSTreePostInOrder(
        postOrder: number[],
        postSI: number,
        postEI: number,
        inOrder: number[],
        inSI: number,
        inEI: number,
    ): IBSTree {

        if (inSI > inEI) {
            return null
        }

        let idx: number = inOrder.indexOf(postOrder[postEI])
        let countOfLSTreeElmt = inEI - idx

        const node: IBSTree = new BSTree(postOrder[postEI])

        node.right = creatBSTreePostInOrder(
            postOrder,
            postEI - countOfLSTreeElmt,
            postEI - 1,
            inOrder,
            idx + 1,
            inEI
        )
        node.left = creatBSTreePostInOrder(
            postOrder,
            postSI,
            postEI - countOfLSTreeElmt - 1,
            inOrder,
            inSI,
            inEI - countOfLSTreeElmt - 1
        )

        return node

    }

    let postOrder: number[] = [7, 8, 3, 9, 10, 4, 1, 11, 5, 6, 2, 0]
    let inOrder: number[] = [7, 3, 8, 1, 9, 4, 10, 0, 11, 5, 2, 6]

    const res = creatBSTreePostInOrder(postOrder, 0, 11, inOrder, 0, 11)
    console.log(res)
})()