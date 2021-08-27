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

    function createBSTreePreAndInOrder(
        preOrder: number[],
        preSi: number,
        preEi: number,
        inOrder: number[],
        inSi: number,
        inEi: number
    ): IBSTree {
        if (inSi > inEi) return null

        const node = new BSTree(preOrder[preSi])

        let idx = inOrder.indexOf(preOrder[preSi])
        let countLSTE = idx - inSi

        node.left = createBSTreePreAndInOrder(
            preOrder,
            preSi + 1,
            preSi + countLSTE,
            inOrder,
            inSi,
            idx - 1
        )

        node.right = createBSTreePreAndInOrder(
            preOrder,
            preSi + countLSTE + 1,
            preEi,
            inOrder,
            idx + 1,
            inEi
        )

        return node
    }

    function houseRobber(node: IBSTree): { withRob: number, withoutRob: number } {
        if (node === null) return { withRob: 0, withoutRob: 0 }

        const left = houseRobber(node.left)
        const right = houseRobber(node.right)

        let withRob = left.withoutRob + right.withoutRob + node.val
        let withoutRob = Math.max(left.withRob, left.withoutRob) + Math.max(right.withRob, right.withoutRob)

        return { withRob, withoutRob }
    }


    let preOrder: number[] = [0, 1, 3, 7, 8, 4, 9, 10, 2, 5, 11, 6]
    let inOrder: number[] = [7, 3, 8, 1, 9, 4, 10, 0, 11, 5, 2, 6]


    const root = createBSTreePreAndInOrder(preOrder, 0, 11, inOrder, 0, 11)

    const res = houseRobber(root)
    console.log("Maximum robbed amount: ", Math.max(res.withRob, res.withoutRob))

})()