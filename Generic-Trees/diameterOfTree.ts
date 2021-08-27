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





    function diameterOfTree<V>(node: ITreeNode<V>): number {

        let maxHeight = -1
        let seconMaxHeight = -1

        for (let child of node.child) {
            let cHeight = diameterOfTree(child)

            if (cHeight > maxHeight) {
                seconMaxHeight = maxHeight
                maxHeight = cHeight

            } else if (cHeight > seconMaxHeight) {
                seconMaxHeight = cHeight
            }

        }

        if (diameterOfTree.dia < maxHeight + seconMaxHeight + 2) {
            diameterOfTree.dia = maxHeight + seconMaxHeight + 2
        }

        return maxHeight + 1
    }
    diameterOfTree.dia = -Infinity

    const euler1: number[] = [10, 20, -50, -1, -60, -1, -1, 30, -70, -1, 80, -110, -1, 120, -1, -1, 90, -1, -1, 40, -100, -1, -1, -1]

    const root: ITreeNode<number> = getTreeRoot<number>(euler1)


    console.log(diameterOfTree<number>(root))
    console.log({ ...diameterOfTree })

})()