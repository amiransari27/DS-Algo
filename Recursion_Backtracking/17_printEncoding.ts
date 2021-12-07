(function () {
    const codes: { [key: string]: string } = {
        "1": "a",
        "2": "b",
        "3": "c",
        "4": "d",
        "5": "e",
        "6": "f",
        "7": "g",
        "8": "h",
        "9": "i",
        "10": "j",
        "11": "k",
        "12": "l",
        "13": "m",
        "14": "n",
        "15": "o",
        "16": "p",
        "17": "q",
        "18": "r",
        "19": "s",
        "20": "t",
        "21": "u",
        "22": "v",
        "23": "w",
        "24": "x",
        "25": "y",
        "26": "z"
    }

    function printEncoding(str: string, ssf: string) {
        if (str.length === 0) {
            console.log(ssf)
            return
        } else if (str.length === 1) {
            const char: string = str[0]
            if (char === '0') {
                return
            } else {
                const code = codes[char]
                ssf = `${ssf}${code}`
                console.log(ssf)
            }
        } else {
            const char = str[0]
            const substr = str.substring(1)

            if (char === '0') {
                return
            } else {
                const code = codes[char]
                printEncoding(substr, ssf + code)
            }

            const ch12 = str.substring(0, 2)
            const substr2 = str.substring(2)

            if (+ch12 <= 26) {
                const code = codes[char]
                printEncoding(substr2, ssf + code)
            }
        }
    }

    printEncoding("123", "")
})()