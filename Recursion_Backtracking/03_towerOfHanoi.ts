(function () {
    function towerOfHanoi(n: number, t1: string, t2: string, t3: string) {
        if (n === 0) {
            return
        }

        towerOfHanoi(n - 1, t1, t3, t2)
        console.log(`${n} [${t1} -> ${t2}]`)
        towerOfHanoi(n - 1, t3, t2, t1)
    }

    towerOfHanoi(3, "A", "B", "C")
})()