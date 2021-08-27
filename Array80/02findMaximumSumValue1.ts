/**
 * Find maximum value of Sum( i*arr[i]) with only rotations on given array allowed
 */

function findMaximumSumValue1(): void {
    const arr: number[] = [10, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    const n: number = arr.length

    function rotateByOne() {
        const tmp = arr[0]
        for (let i = 1; i < n; i++) {
            arr[i - 1] = arr[i]
        }
        arr[n - 1] = tmp
    }

    function getSum(): number {
        let sum: number = 0
        for (let i = 0; i < n; i++) {
            sum += i * arr[i]
        }
        return sum
    }


    let maxSum: number = getSum();

    for (let i = 1; i < n; i++) {
        rotateByOne()
        let currentSum: number = getSum();
        if (currentSum> maxSum){
            maxSum = currentSum
        }

    }


    console.log('Output :', maxSum)

}

findMaximumSumValue1()