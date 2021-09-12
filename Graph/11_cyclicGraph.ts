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

        graph[1].push(new Edge(1, 0))


        graph[2].push(new Edge(2, 3))

        graph[3].push(new Edge(3, 2))

        graph[4].push(new Edge(4, 5))
        graph[4].push(new Edge(4, 6))

        graph[5].push(new Edge(5, 4))
        graph[5].push(new Edge(5, 6))

        graph[6].push(new Edge(6, 4))
        graph[6].push(new Edge(6, 5))

        return graph
    }

    const graph: Edge[][] = getGraph()

    function isACycle(graph: Edge[][]): void {
        const visited: boolean[] = []
        const queue: any[] = []
        for (let src in graph) {
            if (!visited[src]) {
                queue.push({ src: src, psf: `${src}` })

                while (queue.length) {
                    const ed = queue.shift()

                    if (visited[ed.src]) {
                        console.log("It has a cycle", ed.psf)
                        return
                    }

                    visited[ed.src] = true

                    for (let e of graph[ed.src]) {
                        if (!visited[e.nbr]) {
                            queue.push({ src: e.nbr, psf: `${ed.psf}${e.nbr}` })
                        }
                    }


                }
            }

        }

        console.log("It does not have a cycle")

    }

    isACycle(graph)
})()