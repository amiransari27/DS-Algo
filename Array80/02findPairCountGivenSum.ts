/**
 * Given a sorted and rotated array, find number of count 
 * if there is a pair with a given sum
 */

function findPairCount(): number {
    const arr: number[] = [11, 15, 6, 7, 9, 10];
    const sum: number = 16;
    const n: number = arr.length

    let i: number = 0;
    for (; i < n - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            break;
        }
    }
    let count: number = 0
    let l: number = (i + 1) % n
    let r: number = i

    while (l !== r) {
        if ((arr[l] + arr[r]) === sum) {
            count ++
        }

        if ((arr[l] + arr[r]) > sum) {
            r = (n + r - 1) % n
        } else {
            l = (l + 1)%n
        }
    }
    return count
}

console.log('Output : ', findPairCount())