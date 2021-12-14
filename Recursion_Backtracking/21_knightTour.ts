(function () {
    function printKnightTour(chess: number[][], row: number, col: number, move: number) {
        if (row < 0 || col < 0 || row >= chess.length || col >= chess.length || chess[row][col] > 0) {
            return
        } else if (move === chess.length * chess[0].length) {
            chess[row][col] = move
            console.log(chess)
            chess[row][col] = 0
            return
        }

        chess[row][col] = move
        printKnightTour(chess, row - 2, col + 1, move + 1)
        printKnightTour(chess, row - 1, col + 2, move + 1)
        printKnightTour(chess, row + 1, col + 2, move + 1)
        printKnightTour(chess, row + 2, col + 1, move + 1)
        printKnightTour(chess, row + 2, col - 1, move + 1)
        printKnightTour(chess, row + 1, col - 2, move + 1)
        printKnightTour(chess, row - 1, col - 2, move + 1)
        printKnightTour(chess, row - 2, col - 1, move + 1)
        chess[row][col] = 0
    }


    const n: number = 5
    const chess: number[][] = JSON.parse(JSON.stringify(Array(n).fill(Array(n).fill(0))))
    printKnightTour(chess, 3, 3, 1)
})()