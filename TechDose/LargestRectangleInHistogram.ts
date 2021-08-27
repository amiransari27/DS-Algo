/**
 * largest rectangle in histogram
 * 
 * Time complexit - O(n^2)
 * 
 * Revision :
 * 
 */

function largestRectangleInHistogram1(bars: number[]): number {

    const areas: number[] = [] 

    for (let i = 0; i < bars.length; i++) {

        //current index
        let ci: number = i
        // nearest left index
        let nli: number = ci
        // nearest right index
        let nri: number = ci

        //find left nearest
        for (let j = ci; j >= 0; j--) {
            if (bars[j] >= bars[ci]) {
                nli = j
                continue
            }
            break
        }

        //find nearest right index

        for (let k = ci; k < bars.length; k++){
            if (bars[k] >= bars[ci]) {
                nri = k
                continue
            }
            break
        }

        console.log(nli, nri, bars[i])

        let area: number = (nri - nli + 1) * bars[i]
        
        areas.push(area)

    }

    console.log(areas)

    return Math.max(...areas)

}


console.log(largestRectangleInHistogram1([2,1,5,6,2,3]))