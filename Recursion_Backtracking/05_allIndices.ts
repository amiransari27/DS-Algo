(function () {
    function allIndices(arr: number[], idx: number, x: number, fsf: number): number[] {
        if (idx === arr.length) {
            return new Array(fsf)
        }

        if (arr[idx] === x) {
            const iarr: number[] = allIndices(arr, idx + 1, x, fsf + 1)
            iarr[fsf] = idx
            return iarr
        } else {
            const iarr: number[] = allIndices(arr, idx + 1, x, fsf)
            return iarr
        }
    }

    let arr: number[] = [2, 3, 5, 1, 4, 5, 6, 8, 6, 4, 4, 7]

    console.log(allIndices(arr, 0, 5, 0))
})()