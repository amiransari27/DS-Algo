/**
 * Find the Rotation Count in Rotated Sorted array
 */

function findRotaionCount2(): number {
    const arr: number[] = [2, 3, 6, 12,15, 18];
    const n: number = arr.length;

    function findPivot(low: number, high: number): number {

        if (low > high) {
            return -1
        }

        if (low === high) {
            return low
        }

        let mid: number = Math.floor((low + high) / 2)

        if (arr[mid] > arr[mid + 1]) {
            return mid
        }

        if (arr[mid - 1] > arr[mid]) {
            return mid - 1
        }

        if (arr[0] > arr[mid]) {
            return findPivot(low, mid - 1)
        } else {
            return findPivot(mid + 1, high)
        }

    }

    const pivot: number = findPivot(0, n - 1)

    return (pivot >=0 && pivot !== n-1)  ? pivot + 1 : 0
}
console.log("Output :", findRotaionCount2())


