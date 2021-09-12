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
        graph[0].push(new Edge(0, 3, 10))

        graph[1].push(new Edge(1, 0, 10))
        graph[1].push(new Edge(1, 2, 10))

        graph[2].push(new Edge(2, 3, 10))
        graph[2].push(new Edge(2, 1, 10))

        graph[3].push(new Edge(3, 0, 10))
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

    function dijkstra(graph: Edge[][], src: number, dest: number) {

        const visited: boolean[] = []
        const queue: any[] = []
        queue.push({ src: src, psf: `${src}`, wt: 0 })


        while (queue.length) {
            const ed = queue.shift()

            if (visited[ed.src]) {
                continue
            }
            visited[ed.src] = true

            if (ed.src === dest) {
                console.log("Ans", ed)
                break
            }

            for (let e of graph[ed.src]) {
                if (!visited[e.nbr]) {
                    queue.push({ src: e.nbr, psf: ed.psf + e.nbr, wt: ed.wt + e.wt })
                }
            }
            queue.sort(function (a, b) {
                return a.wt - b.wt;
            })
        }

    }
    dijkstra(graph, 0, 6)
})()