(function () {
    // sr - source row
    // sc - source column
    // dr - destination row
    // dc - destination column
    function getMazePaths(sr: number, sc: number, dr: number, dc: number): string[] {

        if (sr === dr && sc === dc) {
            return [""]
        }

        let hpaths: string[] = []
        let vpaths: string[] = []
        if (sc < dc) {
            hpaths = getMazePaths(sr, sc + 1, dr, dc)
        }
        if (sr < dr) {
            vpaths = getMazePaths(sr + 1, sc, dr, dc)
        }

        const paths: string[] = []

        for (let path of hpaths) {
            paths.push(`h${path}`)
        }

        for (let path of vpaths) {
            paths.push(`v${path}`)
        }

        return paths
    }

    const ans: string[] = getMazePaths(1, 1, 3, 3)

    console.log(ans)
})()