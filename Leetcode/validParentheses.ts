(function(){
    function validParentheses(str: string): boolean{
        const pMap: Map<string, string> = new Map<string,string>()
        pMap.set('}', '{')
        pMap.set(')', '(')
        pMap.set(']', '[')
      
        const stack: string[] = []
      
        for(let i=0; i<str.length; i++){
      
          if (pMap.has(str[i])){
            if(pMap.get(str[i]) !== stack.pop()){
              return false
            }
          }else{
            stack.push(str[i])
          }
        } 
      
        return stack.length > 0 ? false : true
      
      }
      
      console.log(validParentheses("[{()}]"))
})()