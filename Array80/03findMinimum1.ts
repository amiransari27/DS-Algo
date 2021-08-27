/**
 * Find the minimum element in a sorted and rotated array
 */

function findMinimum1(): void {
    const arr: number[] = [1, 2, 3, 4,5, 6,0]
    const n: number = arr.length

    for (let i = 0; i < n; i++){
        if (arr[i] > arr[i+1]){
            console.log('Output :', arr[i+1])
            return
        }
    }
    console.log('Output :', arr[0])
}

findMinimum1()