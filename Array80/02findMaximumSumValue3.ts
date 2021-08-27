/**
 * Find maximum value of Sum( i*arr[i]) with only rotations on given array allowed
 */

function findMaximumSumValue3(): void {
    const arr: number[] = [8, 3, 1, 2]
    const n: number = arr.length

    let arrSum: number = 0;
    let currSum: number = 0;

    for (let i = 0; i < n; i++) {
        arrSum += arr[i]
        currSum += arr[i] * i
    }

    let maxSum = currSum

    for (let i = 1; i < n; i++) {
        currSum = currSum + arrSum - arr[n - i] * n
        // currSum = 11 - 14 + 32
        // currSum = 11 + 14 - 8

        if (currSum > maxSum) {
            maxSum = currSum
        }
    }


    console.log('Output :', maxSum)

}

findMaximumSumValue3()