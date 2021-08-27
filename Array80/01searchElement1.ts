/**
 * Search an element in a sorted and rotated array
 */

function search1(): void {
    const arr: number[] = [4, 5, 6, 7, 8, 1, 2, 3];
    const key: number = 8;


    function findPivot(low: number, high: number): number {
        if (low > high) {
            return -1
        }

        if (low === high) {
            return low
        }

        let mid = Math.floor((low + high) / 2)

        if (arr[mid] > arr[mid + 1]){
            return mid
        }
        if (arr[mid] < arr[mid - 1]){
            return mid - 1
        }
        if(arr[mid] > arr[0]){
            return findPivot(mid+1, high)
        }else{
            return findPivot(low, mid-1)
        }

    }

    function binarySearh(low: number, high: number, key: number): number{

        if(low > high){
            return -1
        }

        let mid = Math.floor((low + high) / 2)

        if(arr[mid] === key){
            return mid
        }

        if(arr[mid] > key){
            return binarySearh(low , mid-1, key)
        }else {
            return binarySearh(mid+1 , high, key)
        }

    }


    let pivot = findPivot(0, arr.length - 1)
    let i;

    if (pivot >= 0){

        if(key < arr[0]){

            i = binarySearh(pivot+1, arr.length -1, key)
        }else{
            
            i = binarySearh(0, pivot, key)
        }


    }


    console.log('index-',i)

}

search1()