(function () {
    function placeNQueens(
        board: boolean[][],
        row: number,
        cols: boolean[],
        nd: boolean[],
        rd: boolean[],
        asf: string
    ) {

        if (row >= board.length) {

            console.log(asf)
            return
        }

        for (let col = 0; col < board[0].length; col++) {

            if (
                cols[col] === false &&
                nd[row + col] === false &&
                rd[row - col + board[0].length - 1] === false
            ) {

                board[row][col] = true
                cols[col] = true
                nd[row + col] = true
                rd[row - col + board[0].length - 1] = true
                placeNQueens(board, row + 1, cols, nd, rd, asf + "\n" + row + "-" + col)
                rd[row - col + board[0].length - 1] = false
                nd[row + col] = false
                cols[col] = false
                board[row][col] = false
            }
        }
    }

    const n: number = 4
    const board: boolean[][] = JSON.parse(
        JSON.stringify(
            new Array(n).fill(new Array(n).fill(false))
        )
    )
    const cols: boolean[] = new Array(n).fill(false)
    const nd: boolean[] = new Array(2 * n - 1).fill(false)
    const rd: boolean[] = new Array(2 * n - 1).fill(false)

    placeNQueens(board, 0, cols, nd, rd, "")
})()