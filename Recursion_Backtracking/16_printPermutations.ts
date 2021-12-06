(function () {
    function printPermutations(str: string, ssf: string) {

        if (str.length === 0) {
            console.log(ssf)
            return
        }

        for (let i = 0; i < str.length; i++) {
            const ch: string = str[i]
            const rs: string = str.replace(str[i], "")
            printPermutations(rs, `${ssf}${ch}`)
        }




    }

    printPermutations("abc", "")
})()