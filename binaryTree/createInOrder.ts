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

    function createBSTreeInOrderTraversal(inOrder: number[], sIndex: number, eIndex: number): IBSTree {

        if (sIndex > eIndex) {
            return null
        }

        let mid: number = Math.floor((sIndex + eIndex) / 2)
        let node: IBSTree = new BSTree(
            inOrder[mid],
            createBSTreeInOrderTraversal(inOrder, sIndex, mid - 1),
            createBSTreeInOrderTraversal(inOrder, mid + 1, eIndex)
        )

        // node.left = createBSTreeInOrderTraversal(inOrder, sIndex, mid - 1)
        // node.right = createBSTreeInOrderTraversal(inOrder, mid + 1, eIndex)


        return node

    }

    let inOrder: number[] = [9, 12, 17, 19, 21, 23, 50, 57, 67, 70, 81]

    const res = createBSTreeInOrderTraversal(inOrder, 0, inOrder.length - 1)

    console.log(res)
})()