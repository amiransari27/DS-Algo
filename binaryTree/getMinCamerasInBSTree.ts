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

    function getMinCamerasInBSTree(node: IBSTree): number {
        // -1 need a camera
        //  0 have a camera
        //  1 no need the camera

        if (node === null) return 1

        const left = getMinCamerasInBSTree(node.left)
        const right = getMinCamerasInBSTree(node.right)

        if (left === -1 || right === -1) {
            console.log(node.val)
            getMinCamerasInBSTree.count++
            return 0
        }

        if (left === 0 || right === 0) {
            return 1
        }

        return -1
    }
    getMinCamerasInBSTree.count = 0


    let preOrder: number[] = [50, 30, 25, 40, 32, 35, 34, 36, 60, 55, 70, 65, 80, 75] //  

    const root = createBSTreePreOrder(preOrder, -Infinity, Infinity)


    // final result 
    let response = getMinCamerasInBSTree(root)
    if (response === -1) {
        getMinCamerasInBSTree.count++
    }
    console.log("required cameras: ", getMinCamerasInBSTree.count)
})()