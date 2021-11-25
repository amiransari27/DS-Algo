(function () {
    function printArray(arr: number[], idx: number) {
        if (idx > arr.length - 1) {
            return
        }

        console.log(arr[idx])
        printArray(arr, idx + 1)
    }

    printArray([10, 20, 30, 40, 50], 0)

    function printReverseArray(arr: number[], idx: number) {
        if (idx > arr.length - 1) {
            return
        }

        printReverseArray(arr, idx + 1)
        console.log(arr[idx])

    }

    printReverseArray([10, 20, 30, 40, 50], 0)

    function maxArray(arr: number[], idx: number): number {
        if (idx > arr.length - 1) {
            return 0
        }

        let tmp = maxArray(arr, idx + 1)

        return Math.max(arr[idx], tmp)
    }

    console.log(maxArray([23, 45, 3, 6, 7, 90, 21], 0))


    function firstIndex(arr: number[], idx: number, x: number): number {
        if (idx > arr.length - 1) {
            return -1
        }

        let fiisa: number = firstIndex(arr, idx + 1, x)
        if (arr[idx] === x) {
            return idx
        } else {
            return fiisa
        }
    }

    let arr: number[] = [2, 3, 5, 1, 4, 5, 6, 8, 6, 4, 4, 7]
    console.log(firstIndex(arr, 0, 7))

    function betterFindIndex(arr: number[], idx: number, x: number): number {
        if (idx > arr.length - 1) {
            return -1
        }

        if (arr[idx] === x) {
            return idx
        } else {
            const fiisa: number = betterFindIndex(arr, idx + 1, x)
            return fiisa
        }

    }
    console.log(betterFindIndex(arr, 0, 7))

})()