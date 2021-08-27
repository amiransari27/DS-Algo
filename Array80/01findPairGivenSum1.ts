/**
 * Given a sorted and rotated array, find if there is a pair with a given sum
 */

function findPair(): boolean {
    const arr: number[] = [11, 15, 26, 38, 9, 10];
    const sum: number = 48;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i !== j) {
                if (sum === arr[i] + arr[j]) {
                    return true
                }
            }
        }
    }
    return false

}

console.log('Output : ', findPair())