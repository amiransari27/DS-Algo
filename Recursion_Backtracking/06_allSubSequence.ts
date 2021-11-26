(function(){
    function allSubSequence(str: string): string[]{
        if (str.length === 0){
            let bres: string[] = [""]
            return bres
        }
    
        let fchar = str[0]
        let rstring = str.substring(1)
        let resSubStr = allSubSequence(rstring)
    
        let ansList: string[] = []
        for (let s of resSubStr){
            ansList.push("" + s)
            ansList.push(fchar + s)
        }
    
        return ansList
    }
    
    console.log(allSubSequence("abc"))
})()