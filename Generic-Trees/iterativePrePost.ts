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

    function iterativePrePost<V>(node: ITreeNode<V>): void {
        const { stack } = iterativePrePost
        stack.push({ node: node, state: -1 })

        let preString = ""
        let postString = ""

        while (stack.length > 0) {
            const peek = stack[stack.length - 1]

            if (peek.state === -1) {
                preString += `${peek.node.val} `
                peek.state += 1
            } else if (peek.state === peek.node.child.length) {
                postString += `${peek.node.val} `
                stack.pop()
            } else {
                let child = peek.node.child[peek.state]
                stack.push({ node: child, state: -1 })
                peek.state += 1
            }

        }

        console.log("preString - ", preString)
        console.log("postString - ", postString)

    }
    iterativePrePost.stack = []

    const euler1: number[] = [10, 20, -50, -1, -60, -1, -1, 30, -70, -1, 80, -110, -1, 120, -1, -1, 90, -1, -1, 40, -100, -1, -1, -1]

    const root: ITreeNode<number> = getTreeRoot<number>(euler1)

    iterativePrePost(root)

})()