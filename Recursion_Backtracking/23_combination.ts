(function () {
    // cb - current box
    // tb - target box
    // ssf - selection so far 
    // asf - answer so far 
    // ts - total selection
    function combination(cb: number, tb: number, ssf: number, ts: number, asf: string) {

        if (cb > tb) {
            if (ssf === ts) {
                console.log(asf)
            }
            return
        }

        combination(cb + 1, tb, ssf, ts, `${asf}-`)
        combination(cb + 1, tb, ssf + 1, ts, `${asf}i`)
    }


    combination(1, 4, 0, 2, "")
})()