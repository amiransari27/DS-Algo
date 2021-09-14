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
        graph[0].push(new Edge(0, 3, 9))

        graph[1].push(new Edge(1, 2, 10))

        graph[2].push(new Edge(2, 3, 10))



        graph[4].push(new Edge(4, 3, 2))
        graph[4].push(new Edge(4, 5, 3))
        graph[4].push(new Edge(4, 6, 8))

        graph[5].push(new Edge(5, 6, 3))

        return graph
    }

    const graph: Edge[][] = getGraph()

    function topologicalSort(graph: Edge[][]) {

        const visited: boolean[] = []
        const queue: any[] = []
        const stack: any[] = []
        for (let src in graph) {
            if (!visited[src]) {
                helper(graph, +src, visited, stack)
            }
        }

        console.log("---", stack)

    }

    function helper(graph: Edge[][], src: number, visited: boolean[], stack: any[]) {

        if (visited[src]) {
            return
        }
        visited[src] = true

        for (let e of graph[src]) {
            if (!visited[e.nbr]) {
                helper(graph, +e.nbr, visited, stack)
            }
        }
        stack.push(src)

    }

    topologicalSort(graph)
})()