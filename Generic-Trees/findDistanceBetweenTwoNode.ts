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


    function nodeToRootPath(node: ITreeNode<number>, num: number): number[] {
        if (node.val === num) {
            return [node.val]
        }

        for (let child of node.child) {
            let path: number[] = nodeToRootPath(child, num)
            if (path.length > 0) {
                path.push(node.val)
                return path
            }
        }

        return []
    }

    function distanceBetweenTwoNode(node: ITreeNode<number>, num1: number, num2: number) {
        let path1: number[] = nodeToRootPath(node, num1)
        let path2: number[] = nodeToRootPath(node, num2)

        let i: number = path1.length - 1
        let j: number = path2.length - 1

        while (i >= 0 && j >= 0 && path1[i] === path2[j]) {
            i--
            j--
        }
        i++
        j++
        return i + j

    }


    const euler: number[] = [10, 20, 50, -1, 60, -1, -1, 30, 70, -1, 80, 110, -1, 120, -1, -1, 90, -1, -1, 40, 100, -1, -1, -1]

    const root: ITreeNode<number> = getTreeRoot(euler)

    console.log(distanceBetweenTwoNode(root, 110, 120))

})()