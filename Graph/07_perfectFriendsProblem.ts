(function () {
    //Perfect Friends Problem using Graphs

    class Edge {
        v: number
        n: number
        constructor(v: number, n: number) {
            this.v = v
            this.n = n
        }
    }

    const graphInput = [7, [0, 1], [2, 3], [4, 5], [5, 6], [6, 4]]
    const graph: Edge[][] = JSON.parse(JSON.stringify(Array(graphInput[0]).fill([])))
    for (let i = 1; i < graphInput.length; i++) {
        let [v, n] = graphInput[i]

        graph[v].push(new Edge(v, n))
        graph[n].push(new Edge(n, v))
    }

    function visitGraph(graph: Edge[][], src: number, visited: boolean[], list: number[]) {
        if (visited[src] === true) {
            return
        }

        visited[src] = true
        list.push(src)
        for (let edge of graph[src]) {
            visitGraph(graph, edge.n, visited, list)
        }

    }

    function connectedGraph(graph: Edge[][]): void {
        const res = []

        const visited = Array(graph.length).fill(false)

        for (let i in graph) {
            if (visited[i] === false) {
                let list: number[] = []
                visitGraph(graph, +i, visited, list)
                res.push(list)
            }
        }


        let pairs: number = 0

        for (let i = 0; i < res.length; i++) {
            for (let j = i + 1; j < res.length; j++) {
                pairs += res[i].length * res[j].length
            }
        }

        console.log(res, pairs)

    }

    connectedGraph(graph)
})()