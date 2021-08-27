(function () {
    class BSTree {
        val: number
        left: IBSTree
        right: IBSTree

        constructor(val: number, left?: IBSTree, right?: IBSTree) {
            this.val = val
            this.left = left === undefined ? null : left
            this.right = right === undefined ? null : right
        }
    }

    type IBSTree = BSTree | null


    function creatBSTreeLevelOrder(levelOrder: number[]): IBSTree {

        const queue: { node: IBSTree, lb: number, rb: number }[] = []
        queue.push({ node: null, lb: -Infinity, rb: Infinity })

        let root = null
        let index: number = 0
        while (queue.length > 0 && index < levelOrder.length) {
            const removedNode = queue.shift()

            const newNode: IBSTree = new BSTree(levelOrder[index])

            if (root === null) {
                root = newNode
            } else {
                if (!(removedNode.lb < newNode.val && newNode.val < removedNode.rb)) {
                    console.log(removedNode.lb, newNode.val, removedNode.rb)
                    continue
                }

                if (newNode.val < removedNode.node.val) {
                    removedNode.node.left = newNode
                } else {
                    removedNode.node.right = newNode
                }

            }
            queue.push({ node: newNode, lb: removedNode.lb, rb: newNode.val })

            queue.push({ node: newNode, lb: newNode.val, rb: removedNode.rb })


            index++
        }




        return root
    }

    let levelOrder: number[] = [50, 17, 72, 12, 23, 54, 76, 9, 14, 19, 67] //  

    const res = creatBSTreeLevelOrder(levelOrder)
    console.log(res)
})()