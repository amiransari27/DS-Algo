(function () {
    // sr - source row
    // sc - source column
    // dr - destination row
    // dc - destination column
    function printMazePath2(
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

        for (let ms = 1; ms <= dc - sc; ms++) {
            printMazePath2(sr, sc + ms, dr, dc, `${psf}h${ms}`)
        }

        for (let ms = 1; ms <= dr - sr; ms++) {
            printMazePath2(sr + ms, sc, dr, dc, `${psf}v${ms}`)
        }

        for (let ms = 1; (ms <= dc - sc && ms <= dr - sr); ms++) {
            printMazePath2(sr + ms, sc + ms, dr, dc, `${psf}d${ms}`)
        }

    }

    printMazePath2(1, 1, 3, 3, "")
})()