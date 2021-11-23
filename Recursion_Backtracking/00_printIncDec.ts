(function () {
    function printIncreasing(n: number): void {
        if (n < 1) {
            return
        }
        printIncreasing(n - 1)
        console.log(n)
    }

    printIncreasing(5)

    function printDecreasing(n: number): void {
        if (n < 1) {
            return
        }

        console.log(n)
        printDecreasing(n - 1)
    }

    printDecreasing(5)
})()