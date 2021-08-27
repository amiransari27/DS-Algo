/**
 * Write a function rotate(ar[], d, n) that rotates arr[] of size n by d elements.
 * METHOD 3 (A Juggling Algorithm)
 * 
 * Time complexity : O(n)
 * Auxiliary Space : O(1)
 */

function method3(): void {

    const arr: number[] = [1, 2, 3, 4, 5, 6, 7];
    const d: number = 2, n: number = 7;

    function getGCD(a: number, b:number): number{
        return b===0 ? a: getGCD(b, a % b)
    }
    let gcd: number  = getGCD(n, d)

    Array(gcd).fill(undefined).forEach((_, i: number)=>{
        let tmp: number = arr[i]
        let j:number = i, k: number;
        while(1){
            k = j + d
            if(k >= n)
                k = k-n
            if(k === i)
                break
            arr[j] = arr[k]
            j = k
        }
        arr[j] = tmp
    })
    
    console.log(arr)

}

method3()