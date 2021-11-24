(function(){
    function printArray(arr: number[], idx: number){
        if (idx > arr.length - 1){
            return
        }
    
        console.log(arr[idx])
        printArray(arr, idx + 1)
    }
    
    printArray([10,20,30,40,50], 0)
    
    function printReverseArray(arr: number[], idx: number){
        if (idx > arr.length - 1){
            return
        }
    
        printReverseArray(arr, idx + 1)
        console.log(arr[idx])
        
    }
    
    printReverseArray([10,20,30,40,50], 0)
    
    function maxArray(arr: number[], idx: number): number{
        if (idx > arr.length - 1){
            return 0
        }
    
        let tmp = maxArray(arr, idx + 1)
    
        return Math.max(arr[idx], tmp)
    }
    
    console.log(maxArray([23,45,3,6,7, 90,21], 0))
})()