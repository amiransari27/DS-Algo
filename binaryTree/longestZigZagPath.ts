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

    function createBSTreePreOrder(levelOrder: number[], minR: number, maxR: number): IBSTree {

        if (createBSTreePreOrder.index >= levelOrder.length) return null
        if (levelOrder[createBSTreePreOrder.index] < minR) return null
        if (levelOrder[createBSTreePreOrder.index] > maxR) return null


        const node = new BSTree(levelOrder[createBSTreePreOrder.index++])

        node.left = createBSTreePreOrder(levelOrder, minR, node.val)
        node.right = createBSTreePreOrder(levelOrder, node.val, maxR)

        return node
    }
    createBSTreePreOrder.index = 0

    function longestZigZagPath(node: IBSTree): { forward: number, backward: number } {
        if (node === null) return { forward: -1, backward: -1 }

        const left = longestZigZagPath(node.left)
        const right = longestZigZagPath(node.right)

        longestZigZagPath.max = Math.max(longestZigZagPath.max, Math.max(left.backward, right.forward) + 1)

        return { forward: left.backward + 1, backward: right.forward + 1 }

    }
    longestZigZagPath.max = 0


    let preOrder: number[] = [50, 30, 25, 40, 32, 35, 34, 36, 60, 55, 70, 65, 80, 75] //  

    const root = createBSTreePreOrder(preOrder, -Infinity, Infinity)


    // final result 
    let response = longestZigZagPath(root)

    console.log("required cameras: ", { ...longestZigZagPath })
})()