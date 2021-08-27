/**
 * Write a function rotate(ar[], d, n) that rotates arr[] of size n by d elements.
 *
 * Input arr[] = [1, 2, 3, 4, 5, 6, 7], d = 2, n =7
 *   1) Store the first d elements in a temp array
 *  temp[] = [1, 2]
 *  2) Shift rest of the arr[]
 *  arr[] = [3, 4, 5, 6, 7, 6, 7]
 *   3) Store back the d elements
 *  arr[] = [3, 4, 5, 6, 7, 1, 2]
 * 
 * Time complexity : O(n)
 * Auxiliary Space : O(d)
 */

function method1(): void {
    const arr: number[] = [1, 2, 3, 4, 5, 6, 7];
    const d: number = 2, n: number = arr.length;
    
    const tmpArray: number[] = Array(d).fill(undefined).map((_, i: number) => arr[i]);
    
    for (let i:number = d; i < n; i++){
        arr[i-d] = arr[i]
    }

    for (let i:number = n-d; i < n; i++){
        arr[i] = <number>tmpArray.shift()
    }

    console.log(arr)
}

method1()