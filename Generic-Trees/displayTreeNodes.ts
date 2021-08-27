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

    function displayTree(root: ITreeNode<number>): void {
        let str: string = ''
        root && (str += `${root.val}:- `)
        if (root && root.child.length > 0) {
            for (let i = 0; i < root.child.length; i++) {
                str += `${root.child[i].val}, `
            }
        }
        console.log(str)

        if (root && root.child.length > 0) {
            for (let i = 0; i < root.child.length; i++) {
                displayTree(root.child[i])
            }
        }

    }

    const euler: number[] = [10, 20, 50, -1, 60, -1, -1, 30, 70, -1, 80, 110, -1, 120, -1, -1, 90, -1, -1, 40, 100, -1, -1, -1]

    displayTree(getTreeRoot(euler))



})()