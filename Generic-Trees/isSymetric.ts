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


    function areMirror<V, L>(node1: ITreeNode<V>, node2: ITreeNode<L>): boolean {
        if (node1.child.length !== node2.child.length) {
            return false
        }

        for (let i = 0; i < node1.child.length; i++) {
            let j = node2.child.length - 1 - i
            if (!areMirror(node1.child[i], node2.child[j])) {
                return false
            }
        }

        return true
    }

    function isSymetric<V>(node: ITreeNode<V>) {
        if (areMirror<V, V>(node, node)) {
            return true
        }
        return false
    }

    const euler1: number[] = [10, 20, 60, -1, -1, 30, 70, -1, 80, 110, -1, 120, -1, -1, 90, -1, -1, 40, 100, -1, -1, -1]

    const root: ITreeNode<number> = getTreeRoot<number>(euler1)

    console.log(isSymetric(root))
})()