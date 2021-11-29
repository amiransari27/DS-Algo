(function () {
    // valid jump 1,2,3
    function getStairPaths(n: number): string[] {

        if (n === 0) {
            return [""]
        } else if (n < 0) {
            return []
        }

        const paths1: string[] = getStairPaths(n - 1)
        const paths2: string[] = getStairPaths(n - 2)
        const paths3: string[] = getStairPaths(n - 3)

        const paths: string[] = []

        for (let path of paths1) {
            paths.push(`1${path}`)
        }

        for (let path of paths2) {
            paths.push(`2${path}`)
        }

        for (let path of paths3) {
            paths.push(`3${path}`)
        }

        return paths
    }

    const ans: string[] = getStairPaths(4)

    console.log(ans)
})()