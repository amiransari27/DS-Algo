(function () {
    function printStairPath(n: number, psf: string) {

        if (n === 0) {
            console.log(psf)
            return
        } else if (n < 0) {
            return
        }

        for (let i = 3; i >= 1; i--) {
            printStairPath(n - i, `${psf}${i}`)
        }
    }

    printStairPath(4, "")
})()