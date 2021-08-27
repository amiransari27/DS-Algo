/**
 * Find the minimum element in a sorted and rotated array
 */

function findMinimum2(): void {
    const arr: number[] = [1, 2, 3, 4, 5, 6, 0]
    const n: number = arr.length

    function getPivot(low: number, high: number): number {
        if (low > high) {
            return -1
        }

        if (low === high) {
            return low
        }

        let mid: number = Math.floor((low + high) / 2)

        if (arr[mid] > arr[mid + 1]){
            return mid
        }

        if (arr[mid] < arr[mid - 1]){
            return mid-1
        }

        if (arr[mid] < arr[low] ){
            return getPivot(low, mid-1)
        }else{
            return getPivot(mid+1, high)
        }
    }

    const pivot: number = getPivot(0, n-1)

    console.log(pivot)

    if(pivot >= 0 && pivot < n-1){
        console.log("Output: ", arr[pivot+1])
    } else{
        console.log("Output :", arr[0])
    }

}

findMinimum2()