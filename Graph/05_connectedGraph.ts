// Get Connected Components of Graphs

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

        graph[1].push(new Edge(1, 0, 10))

        graph[2].push(new Edge(2, 3, 10))

        graph[3].push(new Edge(3, 2, 10))


        graph[4].push(new Edge(4, 5, 3))
        graph[4].push(new Edge(4, 6, 8))

        graph[5].push(new Edge(5, 4, 3))
        graph[5].push(new Edge(5, 6, 3))

        graph[6].push(new Edge(6, 4, 8))
        graph[6].push(new Edge(6, 5, 3))

        return graph
    }


    function visitGraph(
        graph: Array<Array<Edge>>,
        src: number,
        visited: boolean[],
        list: number[]
    ): void {

        list.push(src)
        visited[src] = true
        for (let edge of graph[src]) {
            if (visited[edge.nbr] === false) {
                visitGraph(graph, edge.nbr, visited, list)
            }
        }
    }

    // connected component 
    function connectedGraph(graph: Array<Array<Edge>>) {
        let res = []
        const visited: boolean[] = Array(7).fill(false)

        for (let i in graph) {
            if (visited[i] === false) {
                let list: number[] = []
                visitGraph(graph, +i, visited, list)
                res.push(list)
            }
        }

        return res
    }


    const graph = getGraph()

    console.log(connectedGraph(graph))

})()