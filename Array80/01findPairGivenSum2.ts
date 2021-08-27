/**
 * Given a sorted and rotated array, find if there is a pair with a given sum
 */

function findPair2(): boolean {
    const arr: number[] = [11, 15, 26, 38, 9, 10];
    const sum: number = 48;
    const n: number = arr.length

    let i: number = 0;
    for (; i < n - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            break;
        }
    }
    let l: number = (i + 1) % n
    let r: number = i

    while (l !== r) {
        if ((arr[l] + arr[r]) === sum) {
            return true
        }

        if ((arr[l] + arr[r]) > sum) {
            r = (n + r - 1) % n
        } else {
            l = (l + 1)%n
        }
    }
    return false
}

console.log('Output : ', findPair2())