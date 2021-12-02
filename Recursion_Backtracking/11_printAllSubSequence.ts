(function () {
    function printAllSubSequence(str: string, ans: string) {

        if (str.length === 0) {
            console.log(ans)
            return
        }

        const fchar: string = str[0]
        const rstr: string = str.substring(1)

        printAllSubSequence(rstr, ans)
        printAllSubSequence(rstr, `${fchar}${ans}`)
    }

    printAllSubSequence("abc", "")
})()