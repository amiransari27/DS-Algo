(function () {
    // sr - source row
    // sc - source column
    // dr - destination row
    // dc - destination column
    function printMazePath(
        sr: number,
        sc: number,
        dr: number,
        dc: number,
        psf: string
    ) {

        if (sr === dr && sc === dc) {
            console.log(psf)
            return
        }

        if (sc < dc) {
            printMazePath(sr, sc + 1, dr, dc, `${psf}h`)
        }

        if (sr < dr) {
            printMazePath(sr + 1, sc, dr, dc, `${psf}v`)
        }

    }

    printMazePath(1, 1, 3, 3, "")
})()