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

    function getTreeRoot(treeVals: number[]): ITreeNode<number> {
        let root: ITreeNode<number> = null
        let stack: ITreeNode<number>[] = []
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


    function find(node: ITreeNode<number>, num: number): boolean {
        if (node.val === num) {
            return true
        }

        for (let child of node.child) {
            if (find(child, num)) {
                return true
            }
        }

        return false
    }


    const euler: number[] = [10, 20, 50, -1, 60, -1, -1, 30, 70, -1, 80, 110, -1, 120, -1, -1, 90, -1, -1, 40, 100, -1, -1, -1]

    const root = getTreeRoot(euler)

    console.log(find(root, 110))

})()