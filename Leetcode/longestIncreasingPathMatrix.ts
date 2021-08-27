(function () {
    function longestIncreasingPath(matrix: number[][]): number {

        let res = 0
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                let m = helper(matrix, i, j)
                res = Math.max(res, m)
            }
        }
        return res

    };

    const dir = [[1, 0], [-1, 0], [0, 1], [0, -1]]
    function helper(matrix: number[][], i: number, j: number): number {
        let max = 0

        for (let d of dir) {
            let x = i + d[0]
            let y = j + d[1]

            if (x >= 0 && y >= 0 && x < matrix.length && y < matrix[0].length && matrix[x][y] > matrix[i][j]) {
                let m = helper(matrix, x, y)
                max = Math.max(max, m)
            }
        }

        return max + 1
    }
})()