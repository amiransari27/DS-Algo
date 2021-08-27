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


        graph[0].push(new Edge(0, 3, 40))
        graph[0].push(new Edge(0, 1, 10))

        graph[1].push(new Edge(1, 2, 10))
        graph[1].push(new Edge(1, 0, 10))

        graph[2].push(new Edge(2, 3, 10))
        graph[2].push(new Edge(2, 1, 10))

        graph[3].push(new Edge(3, 0, 40))
        graph[3].push(new Edge(3, 4, 2))
        graph[3].push(new Edge(3, 2, 10))

        graph[4].push(new Edge(4, 3, 2))
        graph[4].push(new Edge(4, 5, 3))
        graph[4].push(new Edge(4, 6, 8))

        graph[5].push(new Edge(5, 4, 3))
        graph[5].push(new Edge(5, 6, 3))

        graph[6].push(new Edge(6, 4, 8))
        graph[6].push(new Edge(6, 5, 3))

        return graph
    }

    let sPath: string = ""
    let sWeight: number = Infinity

    let lPath: string = ""
    let lWeight: number = -Infinity

    let cPath: string = ""
    let cWeight: number = Infinity

    let fPath: string = ""
    let fWeight: number = -Infinity

    let queue: { psf: string, wsf: number }[] = []

    function mutiSolver(
        graph: Array<Array<Edge>>,
        src: number,
        dest: number,
        visited: boolean[],
        criteria: number,
        psf: string,
        wsf: number
    ): void {
        if (src === dest) {

            if (wsf < sWeight) {
                sWeight = wsf
                sPath = psf
            }

            if (wsf > lWeight) {
                lWeight = wsf
                lPath = psf
            }

            if (wsf > criteria && wsf < cWeight) {
                cWeight = wsf
                cPath = psf
            }

            if (wsf < criteria && wsf > fWeight) {
                fWeight = wsf
                fPath = psf
            }

            if (queue.length < 3) {
                queue.push({ psf: psf, wsf: wsf })
            } else {
                queue = queue.sort((a, b) => a.wsf - b.wsf)
                const smallest = queue.shift()
                if(smallest.wsf > wsf){
                    queue.push(smallest)
                }else{
                    queue.push({ psf: psf, wsf: wsf })
                }
            }
 

            return
        }

        visited[src] = true
        for (let edge of graph[src]) {
            if (visited[edge.nbr] === false) {
                mutiSolver(graph, edge.nbr, dest, visited, criteria, psf + edge.nbr, wsf + edge.wt)

            }
        }
        visited[src] = false
    }

    const visited: boolean[] = Array(7).fill(false)
    const graph = getGraph()

    console.log(mutiSolver(graph, 0, 6, visited, 42, "0", 0))

    console.log(`smallest : ${sPath}@${sWeight}`)
    console.log(`largest : ${lPath}@${lWeight}`)
    console.log(`ceil of 42 : ${cPath}@${cWeight}`)
    console.log(`floor of 42 : ${fPath}@${fWeight}`)

    queue = queue.sort((a, b) => a.wsf - b.wsf)
    const third = queue.shift()
    console.log(`Third largest : ${third.psf}@${third.wsf}`)

})()