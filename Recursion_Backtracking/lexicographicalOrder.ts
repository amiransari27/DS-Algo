(function () {
    function lexicographicalOrder(n: number): void {

        for (let i = 1; i <= 9; i++) {
            dfs(i, n)
            console.log("\n")
        }
    }

    function dfs(i: number, n: number): void {
        if (i > n) {
            return
        }
        console.log(i)
        for (let j = 0; j < 10; j++) {
            dfs((10 * i) + j, n)
        }
    }


    lexicographicalOrder(1000)
})()