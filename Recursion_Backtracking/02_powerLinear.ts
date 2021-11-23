(function () {
    function powerLinear(x: number, n: number): number {

        if (n === 1) {
            return x
        }
        const p: number = powerLinear(x, n - 1)
        return x * p
    }

    console.log(powerLinear(10, 2))

    function powerLinear2(x: number, n: number): number {
        if (n == 0) {
            return 1
        }

        const p: number = powerLinear2(x, Math.floor(n / 2))

        let xp: number = p * p

        if (n % 2 === 1) {
            xp = xp * x
        }
        return xp

    }

    console.log(powerLinear2(2, 5))
})()