(function () {
    class TreeNode<V> {
        val: V;
        child: ITreeNode<V>[];

        constructor(val: V) {
            this.val = val;
            this.child = [];
        }
    }

    type ITreeNode<V> = TreeNode<V> | null

    function getTreeRoot<V>(treeVals: V[]): ITreeNode<V> {
        let root: ITreeNode<V> = null
        let stack: ITreeNode<V>[] = []
        for (let i = 0; i < treeVals.length; i++) {
            if (treeVals[i] === -1) {
                stack.pop()
            } else {
                let newNode = new TreeNode(treeVals[i])
                if (root === null) {
                    root = newNode
                }
                let parent = stack.pop()
                parent && (parent.child.push(newNode))

                parent && stack.push(parent)
                stack.push(newNode)
            }

        }
        return root
    }





    function ceilAndFloor<V>(node: ITreeNode<V>, data: number): void {

        if (node.val > data) {
            ceilAndFloor.ceil = Math.min(ceilAndFloor.ceil, node.val)
        }

        if (node.val < data) {
            ceilAndFloor.floor = Math.max(ceilAndFloor.floor, node.val)
        }

        for (let child of node.child) {
            ceilAndFloor(child, data)
        }
    }
    ceilAndFloor.ceil = Infinity // smallest among larger
    ceilAndFloor.floor = -Infinity // largest among smaller

    function kthLargestElement<V>(node: ITreeNode<V>): void {
        let factor: number = Infinity
        let k: number = 3

        for (let i = 0; i < k; i++) {
            ceilAndFloor(node, factor)
            factor = ceilAndFloor.floor
            ceilAndFloor.floor = -Infinity
        }

        console.log(`${k}th largest - ${factor}`)
    }

    const euler1: number[] = [10, 20, 60, -1, -1, 30, 70, -1, 80, 110, -1, 120, -1, -1, 90, -1, -1, 40, 100, -1, -1, -1]

    const root: ITreeNode<number> = getTreeRoot<number>(euler1)

    kthLargestElement<number>(root)

})()