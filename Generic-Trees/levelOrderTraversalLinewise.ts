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

    function levelOrderTraversalLinewise(node: ITreeNode<number>): void {
        let mQueue: ITreeNode<number>[] = []
        mQueue.push(node)

        const res: number[][] = []

        let cQueue: ITreeNode<number>[] = []
        let level: number = 0
        while (mQueue.length > 0) {
            let curr: ITreeNode<number> = mQueue.shift()
            if (!res[level]) {
                res[level] = []
            }
            res[level].push(curr.val)

            for (let child of curr.child) {
                cQueue.push(child)
            }

            if (mQueue.length == 0) {
                mQueue = cQueue
                cQueue = []
                level++
            }

        }

        for (let i = 0; i < res.length; i++) {
            console.log(res[i].join(" "))
        }

    }

    const euler: number[] = [10, 20, 50, -1, 60, -1, -1, 30, 70, -1, 80, 110, -1, 120, -1, -1, 90, -1, -1, 40, 100, -1, -1, -1]

    const root = getTreeRoot(euler)

    levelOrderTraversalLinewise(root)


})()