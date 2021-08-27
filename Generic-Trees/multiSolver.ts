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



    function display<V>(node: ITreeNode<V>): void {

        const res = []
        res.push(`${node.val} -- `)

        for (let child of node.child) {
            res.push(`${child.val},`)
        }

        console.log(res.join(" "))

        for (let child of node.child) {
            display(child)
        }

    }

    function multisolver<V>(node: ITreeNode<V>, depth: number): void {

        multisolver.size += 1
        multisolver.max = Math.max(multisolver.max, node.val)
        multisolver.min = Math.min(multisolver.min, node.val)
        multisolver.height = Math.max(multisolver.height, depth)

        for (let child of node.child) {
            multisolver(child, depth + 1)
        }

    }
    multisolver.size = 0
    multisolver.min = Infinity
    multisolver.max = -Infinity
    multisolver.height = 0


    const euler1: number[] = [10, 20, 60, -1, -1, 30, 70, -1, 80, 110, -1, 120, -1, -1, 90, -1, -1, 40, 100, -1, -1, -1]

    const root: ITreeNode<number> = getTreeRoot<number>(euler1)

    multisolver(root, 0)
    console.log({ ...multisolver })
})()