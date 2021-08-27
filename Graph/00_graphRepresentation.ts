/**
 *  0__3__ 4
 *  |__|  |__\
 *  1  2  5  6
 */

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

    console.log(getGraph())
})()