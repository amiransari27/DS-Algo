(function () {
    const codes: { [key: string]: string } = {
        "0": ",;",
        "1": "abc",
        "2": "def",
        "3": "ghi",
        "4": "jkl",
        "5": "mno",
        "6": "pqrs",
        "7": "tu",
        "8": "vwx",
        "9": "yz"
    }

    function getKypadCombination(str: string): string[] {

        if (str.length === 0) {
            return [""]
        }

        let ch: string = str[0]
        let rstr: string = str.substring(1)
        const rres: string[] = getKypadCombination(rstr)

        const res: string[] = []
        const codesforch = codes[ch]
        for (let i = 0; i < codesforch.length; i++) {
            const ch: string = codesforch[i]
            for (let s of rres) {
                res.push(`${ch}${s}`)
            }
        }

        return res
    }

    const ans:  string[] = getKypadCombination("78")
    console.log(ans)
})()