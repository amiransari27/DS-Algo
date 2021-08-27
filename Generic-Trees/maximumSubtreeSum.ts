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





    function maximumSubtreeSum<V>(node: ITreeNode<V>): number {


        let sum: number = 0

        for (let child of node.child) {
            let cSum = maximumSubtreeSum(child)
            sum = sum + cSum
        }

        sum += node.val

        if (sum > maximumSubtreeSum.max) {
            maximumSubtreeSum.max = sum
            maximumSubtreeSum.maxSumNode = node.val
        }

        return sum

    }
    maximumSubtreeSum.max = -Infinity
    maximumSubtreeSum.maxSumNode = Infinity



    const euler1: number[] = [10, 20, -50, -1, -60, -1, -1, 30, -70, -1, 80, -110, -1, 120, -1, -1, 90, -1, -1, 40, -100, -1, -1, -1]

    const root: ITreeNode<number> = getTreeRoot<number>(euler1)



    maximumSubtreeSum<number>(root)
    console.log({ ...maximumSubtreeSum })

})()