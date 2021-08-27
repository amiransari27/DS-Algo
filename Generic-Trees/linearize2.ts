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



    function linearize2(node: ITreeNode<number>): ITreeNode<number> {
        if (node.child.length === 0) {
            return node
        }

        let tail: ITreeNode<number> = linearize2(node.child[node.child.length - 1])

        while (node.child.length > 1) {
            let last: ITreeNode<number> = node.child.pop()
            let secondLast: ITreeNode<number> = node.child[node.child.length - 1]
            let secondLastTail: ITreeNode<number> = linearize2(secondLast)
            secondLastTail.child.push(last)
        }

        return tail
    }

    function levelOrderTraversalLinewiseAlt2(node: ITreeNode<number>): void {
        const mQueue: ITreeNode<number>[] = []
        mQueue.push(node)

        const res: number[][] = []
        let level: number = 0
        while (mQueue.length > 0) {
            if (!res[level]) {
                res[level] = []
            }

            let n: number = mQueue.length

            for (let i = 0; i < n; i++) {
                const curr: ITreeNode<number> = mQueue.shift()
                res[level].push(curr.val)
                for (let child of curr.child) {
                    mQueue.push(child)
                }
            }
            level++


        }

        for (let i = 0; i < res.length; i++) {
            console.log(res[i].join(" "))
        }

    }

    const euler: number[] = [10, 20, 50, -1, 60, -1, -1, 30, 70, -1, 80, 110, -1, 120, -1, -1, 90, -1, -1, 40, 100, -1, -1, -1]

    const root = getTreeRoot(euler)

    levelOrderTraversalLinewiseAlt2(root)

    linearize2(root)

    levelOrderTraversalLinewiseAlt2(root)
})()