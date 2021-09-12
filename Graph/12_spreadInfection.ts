(function () {
    class Edge {
        src: number
        nbr: number

        constructor(src: number, nbr: number) {
            this.src = src
            this.nbr = nbr
        }
    }

    function getGraph(): Edge[][] {
        const graph: Array<Array<Edge>> = []

        for (let i = 0; i < 7; i++) {
            graph[i] = []
        }

        graph[0].push(new Edge(0, 1))
        graph[0].push(new Edge(0, 3))

        graph[1].push(new Edge(1, 0))
        graph[1].push(new Edge(1, 2))

        graph[2].push(new Edge(2, 3))
        graph[2].push(new Edge(2, 1))

        graph[3].push(new Edge(3, 0))
        graph[3].push(new Edge(3, 2))
        graph[3].push(new Edge(3, 4))


        graph[4].push(new Edge(4, 3))
        graph[4].push(new Edge(4, 5))
        graph[4].push(new Edge(4, 6))

        graph[5].push(new Edge(5, 4))
        graph[5].push(new Edge(5, 6))

        graph[6].push(new Edge(6, 4))
        graph[6].push(new Edge(6, 5))

        return graph
    }

    const graph: Edge[][] = getGraph()

    function spreadInfection(graph: Edge[][], start: number, time: number) {

        const visited: boolean[] = []
        const queue: any[] = []
        queue.push({ src: start, at: 1 })
        let count = 0

        while (queue.length) {
            const ed = queue.shift()

            if (visited[ed.src]) {
                continue
            }
            visited[ed.src] = true
            if (ed.at > time) {
                break
            }
            count++

            for (let e of graph[ed.src]) {
                if (!visited[e.nbr]) {
                    queue.push({ src: e.nbr, at: ed.at + 1 })
                }
            }
        }

        console.log("Total Infected - " + count)

    }
    spreadInfection(graph, 6, 3)
})()