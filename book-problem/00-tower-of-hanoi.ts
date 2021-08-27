(function () {
    function toh(n: number, tA: string, tB: string, tC: string) {
        if (!n) {
            return
        }

        toh(n - 1, tA, tC, tB)
        console.log(`${n} -> ${tB}`)
        toh(n - 1, tC, tB, tA)
    }

    const n = 4
    toh(n, 'A', 'B', 'C') // put all the disk from A to B using C
})()