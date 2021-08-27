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


    function creatBSTreePreInOrder(
        preOrder: number[],
        preSI: number,
        preEI: number,
        inOrder: number[],
        inSI: number,
        inEI: number,
    ): IBSTree {

        if (inSI > inEI) return null

        let idx: number = inOrder.indexOf(preOrder[preSI])
        let countOfLSTReeElmt = idx - inSI

        const node: IBSTree = new BSTree(preOrder[preSI])

        node.left = creatBSTreePreInOrder(preOrder, preSI + 1, preSI + countOfLSTReeElmt, inOrder, inSI, idx - 1)
        node.right = creatBSTreePreInOrder(preOrder, preSI + countOfLSTReeElmt + 1, preEI, inOrder, idx + 1, inEI)

        return node
    }

    let inOrder: number[] = [7, 3, 8, 1, 9, 4, 10, 0, 11, 5, 2, 6]
    let preOrder: number[] = [0, 1, 3, 7, 8, 4, 9, 10, 2, 5, 11, 6]

    const res = creatBSTreePreInOrder(preOrder, 0, 11, inOrder, 0, 11)

    console.log(res)
})()