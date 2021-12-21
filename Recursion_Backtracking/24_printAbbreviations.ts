(function () {
    function printAbbreviations(str: string, asf: string, count: number, pos: number){

        if(pos >= str.length){
            if(count === 0){
                console.log(asf)
            }else{
                console.log(asf + count)
            }
            return
        }
    
    
        if(count === 0){
            printAbbreviations(str, asf + str[pos], 0, pos + 1)
        }else{
            printAbbreviations(str, asf + count + str[pos], 0, pos + 1)
        }
        
    
        printAbbreviations(str, asf, count + 1, pos + 1)
    }
    
    
    printAbbreviations("pep", "", 0, 0)
})()