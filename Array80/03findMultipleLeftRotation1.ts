/**
 * Quickly find multiple left rotations of an array | Set 1
 */

function findMultipleLeftRotation1(): void {
    const arr: number[] = [1, 3, 5, 7, 9];
    const n: number = arr.length
    const tmp: number[] = [];

    function preprocess(): void {
        for (let i = 0; i < n ; i++) {
            tmp[i] = tmp[i + n] = arr[i]
        }
    }


    function rotate(k: number): void {
        let start: number = k % n;
        const rotatedArr: number[] = [];
        for (let i = start; i < start + n; i++){
            rotatedArr.push(tmp[i])
        }
        console.log(rotatedArr)
    }

    preprocess()

    let k = 1
    rotate(k)

    k = 3
    rotate(k)

    k = 6
    rotate(k)

}

findMultipleLeftRotation1()