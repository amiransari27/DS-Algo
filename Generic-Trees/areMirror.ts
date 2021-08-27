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


    function areMirror(node1: ITreeNode<number>, node2: ITreeNode<any>): boolean {
        if (node1.child.length !== node2.child.length) {
            return false
        }

        for (let i = 0; i < node1.child.length; i++) {
            let j = node2.child.length - 1 - i
            let isTrue = areMirror(node1.child[i], node2.child[j])
            if (!isTrue) {
                return false
            }
        }

        return true
    }

    const euler1: number[] = [10, 20, 50, -1, 60, -1, -1, 30, 70, -1, 80, 110, -1, 120, -1, -1, 90, -1, -1, 40, 100, -1, -1, -1]

    const euler2: number[] = [10, 20, 50, -1, -1, 30, 70, -1, 80, 110, -1, 120, -1, -1, 90, -1, -1, 40, 100, -1, 60, -1, -1, -1]

    const root1: ITreeNode<number> = getTreeRoot(euler1)

    const root2: ITreeNode<any> = getTreeRoot(euler2)


    console.log(areMirror(root1, root2))
})()