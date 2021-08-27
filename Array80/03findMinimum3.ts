/**
 * Find the minimum element in a sorted and rotated array
 */

function findMinimum3(): void {
    const arr: number[] = [1, 2, 3, 4, 5, 6]
    const n: number = arr.length

    function findMin(low: number, high: number): number {
        if (low > high) {
            return arr[0]
        }

        if (low === high) {
            return arr[low]
        }

        let mid: number = Math.floor((low + high) / 2)

        if (arr[mid] > arr[mid + 1]){
            return arr[mid+1]
        }

        if (arr[mid] < arr[mid - 1]){
            return arr[mid]
        }

        if (arr[mid] < arr[low] ){
            return findMin(low, mid-1)
        }else{
            return findMin(mid+1, high)
        }
    }

    console.log("Output :", findMin(0, n-1))


}

findMinimum3()