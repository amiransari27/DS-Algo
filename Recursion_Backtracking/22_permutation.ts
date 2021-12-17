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
})();

(function () {
    // cb - current box
    // tb - target box
    // ssf - selection so far 
    // asf - answer so far 
    // ts - total selection
    function permutation(
        cb: number,
        tb: number,
        items: any,
        ssf: number,
        ts: number,
        asf: string
    ) {
        if (cb > tb) {
            if (ssf === ts) {
                console.log(asf)
            }
            return
        }

        for (let i = 1; i <= tb; i++) {
            if (items[i] === false) {
                items[i] = true
                permutation(cb + 1, tb, items, ssf + 1, ts, asf + i)
                items[i] = false
            }
        }

        permutation(cb + 1, tb, items, ssf, ts, asf + "-")
    }

    const items = {
        "1": false,
        "2": false,
    }

    permutation(1, 3, items, 0, 2, "")
})();    