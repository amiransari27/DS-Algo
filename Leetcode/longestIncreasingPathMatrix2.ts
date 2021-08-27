(function () {
    function longestIncreasingPath(matrix: number[][]): number {

        let res = 0
        const mem: Map<string, number> = new Map<string, number>()
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                let m = helper(mem, matrix, i, j)
                res = Math.max(res, m)
            }
        }
        return res

    };

    const dir = [[1, 0], [-1, 0], [0, 1], [0, -1]]
    function helper(mem: Map<string, number>, matrix: number[][], i: number, j: number): number {
        if (mem.has(`${i}-${j}`)) {
            return mem.get(`${i}-${j}`)
        }

        let max = 0

        for (let d of dir) {
            let x = i + d[0]
            let y = j + d[1]

            if (x >= 0 && y >= 0 && x < matrix.length && y < matrix[0].length && matrix[x][y] > matrix[i][j]) {
                let m = helper(mem, matrix, x, y)
                max = Math.max(max, m)
            }
        }
        max += 1
        mem.set(`${i}-${j}`, max)
        return max
    }
})()