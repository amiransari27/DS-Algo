/**
 * Find the Rotation Count in Rotated Sorted array
 */

function findRotaionCount1(): number {
    const arr: number[] = [15, 7, 9, 11, 12];
    const n: number = arr.length;
    let count: number = 0;
    for (let i = 0; i < n; i++) {
        count++;
        if (arr[i] > arr[i + 1]) {
            break;
        } 
    }

    return count === n ? 0 : count
}

console.log('Output :', findRotaionCount1())

