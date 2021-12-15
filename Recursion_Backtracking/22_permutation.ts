(function () {
    function permutation(boxes: number[], ci: number, ti: number) {

        if (ci > ti) {
            console.log(boxes);
            return
        }

        for (let i = 0; i < boxes.length; i++) {
            if (boxes[i] === 0) {
                boxes[i] = ci
                permutation(boxes, ci + 1, ti)
                boxes[i] = 0
            }
        }
    }

    const boxes = new Array(4).fill(0)
    permutation(boxes, 1, 2)
})()