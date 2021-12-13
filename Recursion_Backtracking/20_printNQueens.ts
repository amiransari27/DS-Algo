(function () {
    function printNQueens(chess: number[][], qsf: string, row: number) {
        if (row === chess.length) {
            console.log(qsf)
            return
        }

        for (let col = 0; col < chess.length; col++) {
            if (isSafePlace(chess, row, col)) {
                chess[row][col] = 1
                printNQueens(chess, `${qsf} ${row}-${col}`, row + 1)
                chess[row][col] = 0
            }

        }
    }

    function isSafePlace(chess: number[][], row: number, col: number): boolean {
        for (let i = row - 1, j = col; i >= 0; i--) {
            if (chess[i][j]) {
                return false
            }
        }

        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (chess[i][j]) {
                return false
            }
        }

        for (let i = row - 1, j = col + 1; i >= 0 && j < chess.length; i--, j++) {
            if (chess[i][j]) {
                return false
            }
        }

        return true
    }


    const n: number = 4
    const chess: number[][] = JSON.parse(JSON.stringify(Array(n).fill(Array(n).fill(0))))
    printNQueens(chess, "", 0)
})()