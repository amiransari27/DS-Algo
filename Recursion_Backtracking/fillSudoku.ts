(function () {

    function fillSudoku(grid: number[][], i: number, j: number) {

        if (i === grid.length) {
            console.log(grid.join("\n"))
            return
        }
        let ni: number = 0
        let nj: number = 0

        if (j === grid[0].length - 1) {
            ni = i + 1
            nj = 0
        } else {
            ni = i
            nj = j + 1
        }
        if (grid[i][j] !== 0) {
            fillSudoku(grid, ni, nj)
        } else {
            for (let pO = 1; pO <= 9; pO++) {
                if (isValid(grid, i, j, pO) === true) {
                    grid[i][j] = pO
                    fillSudoku(grid, ni, nj)
                    grid[i][j] = 0
                }
            }
        }

    }

    function isValid(grid: number[][], i: number, j: number, pO: number) {

        for (let k = 0; k < 9; k++) {
            if (grid[i][k] === pO) {
                return false
            }
        }

        for (let k = 0; k < 9; k++) {
            if (grid[k][j] === pO) {
                return false
            }
        }

        let cI: number = Math.floor(i / 3) * 3
        let cJ: number = Math.floor(j / 3) * 3

        for (let x = 0; x < 3; x++) {
            for (let y = 0; y < 3; y++) {
                if (grid[x + cI][y + cJ] === pO) {
                    return false
                }
            }
        }


        return true
    }

    const grid: number[][] = [
        [3, 0, 6, 5, 0, 8, 4, 0, 0],
        [5, 2, 0, 0, 0, 0, 0, 0, 0],
        [0, 8, 7, 0, 0, 0, 0, 3, 1],
        [0, 0, 3, 0, 1, 0, 0, 8, 0],
        [9, 0, 0, 8, 6, 3, 0, 0, 5],
        [0, 5, 0, 0, 9, 0, 6, 0, 0],
        [1, 3, 0, 0, 0, 0, 2, 5, 0],
        [0, 0, 0, 0, 0, 0, 0, 7, 4],
        [0, 0, 5, 2, 0, 6, 3, 0, 0]
    ]

    console.log(grid.join("\n"))
    console.log("loading...")
    fillSudoku(grid, 0, 0)

})()