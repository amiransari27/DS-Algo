/**
 * Block swap algorithm for array rotation using loop
 */

function method6(): void {

    const arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let d: number = 3, n: number = 10;

    function swap(fi: number, si: number, d: number): void {
        for (let i = 0; i < d; i++) {
            const tmp = arr[fi + i]
            arr[fi + i] = arr[si + i]
            arr[si + i] = tmp
        }
    }

    function rotate(): void {
        if (d === 0 || d === n) {
            return
        }

        let i: number = d;
        let j: number = n - d;
        while (i !== j) {
            if (i < j) {
                swap(d-i, d+j-i, i)
                j -= i
            } else {
                swap(d-i, d, j)
                i -= j
            }
        }

        swap(d-i, d, i)
    }


    rotate()


    console.log(arr)
}

method6()