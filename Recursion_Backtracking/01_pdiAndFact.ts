(function () {
    function pdi(n: number): void {
        if (n < 1) {
            return
        }
        console.log(n)
        pdi(n - 1)
        console.log(n)
    }

    pdi(5)

    function fact(n: number): number {
        if (n < 1) {
            return 1
        }

        const fc = fact(n - 1)
        return n * fc
    }

    console.log(fact(5))
})()