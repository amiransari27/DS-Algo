(function () {
    function printTargetSumSubset(
        arr: number[],
        idx: number,
        ssf: string,
        sos: number,
        target: number
    ) {

        if (arr.length === idx) {
            if (sos === target) {
                console.log(ssf)
            }
            return
        }

        printTargetSumSubset(arr, idx + 1, `${ssf}-${arr[idx]}`, sos + arr[idx], target)
        printTargetSumSubset(arr, idx + 1, ssf, sos, target)
    }


    printTargetSumSubset([10, 20, 30, 40, 50], 0, "", 0, 70)
})()