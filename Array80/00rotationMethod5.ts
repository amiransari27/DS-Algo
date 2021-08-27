/**
 * (Right rotation)
 * Write a function rotate(ar[], d, n) that rotates arr[] of size n by d elements.
 * Reversal algorithm for array rotation
 * 
 * Time Complexity : O(n)
 */

function method5(): void {

    const arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let d: number = 3, n: number = 10;
    d = d % n
    function reverseArray(start: number, end: number) {
        while (start < end) {
            let tmp: number = arr[start]
            arr[start] = arr[end]
            arr[end] = tmp
            start++
            end--;
        }
    }

    reverseArray(n - d, n - 1)
    reverseArray(0, n - d - 1)
    reverseArray(0, n - 1)

    console.log(arr)
}

method5()