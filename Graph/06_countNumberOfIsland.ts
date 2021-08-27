(function () {
    function countNumberOfIsland(matrix: number[][]): number {

        const visited: boolean[][] = JSON.parse(
            JSON.stringify(
                Array(matrix.length).fill(
                    Array(matrix[0].length).fill(false)
                )
            )
        )


        let count: number = 0
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[0].length; j++) {
                if (matrix[i][j] === 0 && visited[i][j] === false) {
                    helper(matrix, i, j, visited)
                    count += 1
                }
            }
        }

        return count

    }

    function helper(matrix: number[][], i: number, j: number, visited: boolean[][]) {

        if (
            i < 0 ||
            i >= matrix.length ||
            j < 0 ||
            j >= matrix[0].length ||
            matrix[i][j] === 1 ||
            visited[i][j] === true
        ) {
            return
        }

        visited[i][j] = true
        helper(matrix, i - 1, j, visited)
        helper(matrix, i, j + 1, visited)
        helper(matrix, i + 1, j, visited)
        helper(matrix, i, j - 1, visited)
    }

    const matrix: number[][] = [
        [0, 0, 1, 1, 1, 1, 1, 1],
        [0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 0],
        [1, 1, 0, 0, 0, 1, 1, 0],
        [1, 1, 1, 1, 0, 1, 1, 0],
        [1, 1, 1, 1, 0, 1, 1, 0],
        [1, 1, 1, 1, 1, 1, 1, 0],
        [1, 1, 1, 1, 1, 1, 1, 0]
    ]

    console.log(countNumberOfIsland(matrix))
})()