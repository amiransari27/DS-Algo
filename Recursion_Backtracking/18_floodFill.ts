(function () {
    function floodFill(
        maze: number[][],
        row: number,
        col: number,
        psf: string,
        visited: boolean[][]
    ) {
        if (
            row < 0 ||
            col < 0 ||
            row === maze.length ||
            col === maze[0].length ||
            maze[row][col] === 1 ||
            visited[row][col]
        ) {
            return
        }

        if (row === maze.length - 1 && col === maze[0].length - 1) {
            console.log(psf)
            return
        }

        visited[row][col] = true
        floodFill(maze, row - 1, col, psf + "t", visited)
        floodFill(maze, row, col - 1, psf + "l", visited)
        floodFill(maze, row + 1, col, psf + "b", visited)
        floodFill(maze, row, col + 1, psf + "r", visited)
        visited[row][col] = false
    }

    const maze: number[][] = [
        [0, 1, 0],
        [0, 0, 0],
        [1, 0, 1],
        [1, 0, 0],
    ]
    const visited: boolean[][] = JSON.parse(
        JSON.stringify(new Array(4).fill(new Array(3).fill(false)))
    )

    floodFill(maze, 0, 0, "", visited)
})()