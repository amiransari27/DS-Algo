/**
 * Find a rotation with maximum hamming distance
 * 
 * [1, 4, 1]
 * [1,4,1,1,4,1]
 * 
 * [2,8,0,2]
 * [0,2,2,8]
 */

function fingMaxHaming1(): void{
    const arr: number[] = [2,8,0,2]
    const n: number = arr.length
    const brr: number[] = []
    for(let i=0; i < n; i++){
        brr[i] = brr[i+n] = arr[i]
    }

    let max: number = 0

    for (let i=1; i<n; i++){

        let currMax: number = 0
        for (let j=i, k=0; j< (i+n); j++, k++){
            if (brr[j] !== arr[k]){
                currMax++
            }
        }

        console.log(currMax)

        max = Math.max(max, currMax)
    }


    console.log("Output :", max)

}

fingMaxHaming1()
