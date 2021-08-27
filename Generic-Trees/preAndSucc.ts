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




    //Predecessor and Successor of an element
    function preAndSucc<V>(node: ITreeNode<V>, data: V): void {
        if (preAndSucc.state === 0) {
            if (node.val === data) {
                preAndSucc.state = 1
            } else {
                preAndSucc.predecessor = node.val
            }
        } else if (preAndSucc.state === 1) {
            preAndSucc.successor = node.val
            preAndSucc.state = 2
        } else {
            return
        }

        for (let child of node.child) {
            preAndSucc(child, data)
        }

    }
    preAndSucc.state = 0
    preAndSucc.predecessor = 0
    preAndSucc.successor = 0


    const euler1: number[] = [10, 20, 60, -1, -1, 30, 70, -1, 80, 110, -1, 120, -1, -1, 90, -1, -1, 40, 100, -1, -1, -1]

    const root: ITreeNode<number> = getTreeRoot<number>(euler1)

    preAndSucc<number>(root, 40)
    console.log({ ...preAndSucc })
})()