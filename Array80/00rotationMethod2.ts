/**
 * Write a function rotate(ar[], d, n) that rotates arr[] of size n by d elements.
 * rotate by one
 * Time complexity : O(n * d)
 * Auxiliary Space : O(1)
 * 
 */

function method2(): void {

    const arr: number[] = [1, 2, 3, 4, 5, 6, 7];
    const d: number = 2, n: number = 7;

    Array(d).fill(undefined).forEach(() => {
        let tmp: number = arr[0];
        let i: number = 1;
        for (; i < n; i++) {
            arr[i-1] = arr[i]
        }
        arr[i] = tmp
    })

    console.log(arr)
}

method2()