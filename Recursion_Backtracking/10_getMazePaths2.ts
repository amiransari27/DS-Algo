(function () {
    // sr - source row
    // sc - source column
    // dr - destination row
    // dc - destination column
    function getMazePaths(sr: number, sc: number, dr: number, dc: number): string[] {

        if (sr === dr && sc === dc) {
            return [""]
        }

        const paths: string[] = []

        // horizontal
        for (let ms = 1; ms <= dc - sc; ms++) {
            const hpaths: string[] = getMazePaths(sr, sc + ms, dr, dc)
            for (let path of hpaths) {
                paths.push(`h${ms}${path}`)
            }
        }

        //vertical
        for (let ms = 1; ms <= dr - sr; ms++) {
            const vpaths: string[] = getMazePaths(sr + ms, sc, dr, dc)
            for (let path of vpaths) {
                paths.push(`v${ms}${path}`)
            }
        }

        //diagonal
        for (let ms = 1; (ms <= dr - sr) && (ms <= dc - sc); ms++) {
            const dpaths: string[] = getMazePaths(sr + ms, sc + ms, dr, dc)
            for (let path of dpaths) {
                paths.push(`d${ms}${path}`)
            }
        }

        return paths
    }

    const ans: string[] = getMazePaths(1, 1, 3, 3)

    console.log(ans)
})()