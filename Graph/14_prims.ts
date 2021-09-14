(function () {
    class Edge {
        src: number
        nbr: number
        wt: number

        constructor(src: number, nbr: number, wt: number) {
            this.src = src
            this.nbr = nbr
            this.wt = wt

        }
    }

    function getGraph(): Edge[][] {
        const graph: Array<Array<Edge>> = []

        for (let i = 0; i < 7; i++) {
            graph[i] = []
        }

        graph[0].push(new Edge(0, 1, 10))
        graph[0].push(new Edge(0, 3, 40))

        graph[1].push(new Edge(1, 0, 10))
        graph[1].push(new Edge(1, 2, 10))

        graph[2].push(new Edge(2, 3, 10))
        graph[2].push(new Edge(2, 1, 10))

        graph[3].push(new Edge(3, 0, 40))
        graph[3].push(new Edge(3, 2, 10))
        graph[3].push(new Edge(3, 4, 2))


        graph[4].push(new Edge(4, 3, 2))
        graph[4].push(new Edge(4, 5, 3))
        graph[4].push(new Edge(4, 6, 8))

        graph[5].push(new Edge(5, 4, 3))
        graph[5].push(new Edge(5, 6, 3))

        graph[6].push(new Edge(6, 4, 8))
        graph[6].push(new Edge(6, 5, 3))

        return graph
    }

    const graph: Edge[][] = getGraph()

    function prims(graph: Edge[][], src: number, dest: number) {

        const visited: boolean[] = []
        const queue: any[] = []
        queue.push({ v: src, av: -1, wt: 0 })


        while (queue.length) {
            const rem = queue.shift()

            if (visited[rem.v]) {
                continue
            }
            visited[rem.v] = true

            if (rem.av !== -1) {
                console.log(`${rem.v}-${rem.av}@${rem.wt}`)
            }

            for (let e of graph[rem.v]) {
                if (!visited[e.nbr]) {
                    queue.push({ v: e.nbr, av: rem.v, wt: e.wt })
                }
            }
            queue.sort(function (a, b) {
                return a.wt - b.wt;
            })
        }

    }
    prims(graph, 0, 6)
})()