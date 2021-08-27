(function () {
    function placeNQueens(
        board: boolean[][],
        row: number,
        cols: boolean[],
        ndiagonal: boolean[],
        rdiagonal: boolean[],
        asf: string
    ) {

        if (row >= board.length) {
            console.log(asf)
            return
        }

        for (let i = 0; i < board[0].length; i++) {
            if (
                cols[i] === false &&
                ndiagonal[row + i] === false &&
                rdiagonal[row - i + board.length - 1] === false
            ) {
                board[row][i] = true
                cols[i] = true
                ndiagonal[row + i] = true
                rdiagonal[row - i + board.length - 1] = true
                placeNQueens(board, row + 1, cols, ndiagonal, rdiagonal, asf + "\n" + row + "-" + i)
                board[row][i] = false
                cols[i] = false
                ndiagonal[row + i] = false
                rdiagonal[row - i + board.length - 1] = false
            }
        }
    }

    const n: number = 4
    const board: boolean[][] = JSON.parse(JSON.stringify(Array(n).fill(Array(n).fill(false))))
    const cols: boolean[] = Array(n).fill(false)
    const ndiagonal: boolean[] = Array(2 * n - 1).fill(false) // row + col
    const rdiagonal: boolean[] = Array(2 * n - 1).fill(false) // row - col + length - 1

    placeNQueens(board, 0, cols, ndiagonal, rdiagonal, "")
})()