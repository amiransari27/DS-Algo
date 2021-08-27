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

    function createBSTreeInOrder(inOrder: number[], si: number, ei: number): IBSTree {
        if (si > ei) return null

        const mid: number = Math.floor((si + ei) / 2)
        const node = new BSTree(inOrder[mid])

        node.left = createBSTreeInOrder(inOrder, si, mid - 1)
        node.right = createBSTreeInOrder(inOrder, mid + 1, ei)

        return node

    }

    let prev: IBSTree = null

    function isValidBSTree(node: IBSTree): boolean {
        if (node === null) return true

        if (!isValidBSTree(node.left)) return false

        if (prev !== null && prev.val > node.val) return false

        prev = node

        if (!isValidBSTree(node.right)) return false

        return true
    }


    let inOrder: number[] = [10, 20, 25, 26, 30, 32, 40, 50, 75, 87]


    const root = createBSTreeInOrder(inOrder, 0, inOrder.length - 1)


    console.log(isValidBSTree(root))


})()