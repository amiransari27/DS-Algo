/**
 * Knights Tour
 */

(function () {
    function printKnightTour(
        board: number[][],
        r: number,
        c: number,
        move: number
    ): void {
        if (r < 0 || c < 0 || r >= board.length || c >= board.length || board[r][c] > 0) {
            return
        } else if (move === board.length * board.length) {
            board[r][c] = move
            console.log(board)
            return
        }

        board[r][c] = move
        printKnightTour(board, r - 2, c + 1, move + 1)
        printKnightTour(board, r - 1, c + 2, move + 1)
        printKnightTour(board, r + 1, c + 2, move + 1)
        printKnightTour(board, r + 2, c + 1, move + 1)
        printKnightTour(board, r + 2, c - 1, move + 1)
        printKnightTour(board, r + 1, c - 2, move + 1)
        printKnightTour(board, r - 1, c - 2, move + 1)
        printKnightTour(board, r - 2, c - 1, move + 1)
        board[r][c] = 0

    }

    const board: number[][] = JSON.parse(JSON.stringify(Array(5).fill(Array(5).fill(0))))
    console.log(board)
    printKnightTour(board, 4, 4, 1)

})()