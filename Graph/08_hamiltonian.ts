(function () {
    // Hamiltonian Path & Cycles in Graphs and Graph Theory
    class Edge {
        v: number
        n: number
        constructor(v: number, n: number) {
            this.v = v
            this.n = n
        }
    }

    function createGraph(graphInput: any[]): Edge[][] {
        const graph: Edge[][] = JSON.parse(JSON.stringify(Array(graphInput[0]).fill([])))
        for (let i = 1; i < graphInput.length; i++) {
            let [v, n] = graphInput[i]

            graph[v].push(new Edge(v, n))
            graph[n].push(new Edge(n, v))
        }

        return graph
    }

    const graphInput = [7, [0, 1], [1, 2], [2, 3], [2, 5], [3, 0], [3, 4], [4, 5], [5, 6], [6, 4]]

    const graph: Edge[][] = createGraph(graphInput)

    // console.log(graph)

    function visitGraph(graph: Edge[][], src: number, visited: any, psf: string, osrc: number) {

        if (Object.keys(visited).length === graph.length - 1) {


            for (let edge of graph[src]) {
                if (edge.n === osrc) {
                    console.log(psf + "*")
                    return
                }
            }
            console.log(psf + ".")
            return
        }

        visited[src] = true
        for (let edge of graph[src]) {
            if (!visited[edge.n]) {
                visitGraph(graph, edge.n, visited, psf + edge.n, osrc)
            }
        }
        delete visited[src]
    }

    function hamiltonian(graph: Edge[][]) {
        const visited: { [key: number]: boolean } = {}

        visitGraph(graph, 0, visited, `0`, 0)

    }

    hamiltonian(graph)


})()