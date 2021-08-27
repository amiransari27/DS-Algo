(function () {
    function printAbbreviations(str: string, aasf: string, count: number, pos: number): void {

        if (pos >= str.length) {

            if (count === 0) {
                console.log(aasf)
            } else {
                console.log(aasf + count)
            }
            return
        }

        // yes
        if (count === 0) {
            printAbbreviations(str, aasf + str[pos], 0, pos + 1)
        } else {
            printAbbreviations(str, aasf + count + str[pos], 0, pos + 1)
        }

        //no
        printAbbreviations(str, aasf, count + 1, pos + 1)
    }

    const str: string = "pep"
    printAbbreviations(str, '', 0, 0)
})()