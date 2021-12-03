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

    function printKeypadCombination(que: string, ans: string) {

        if (que.length === 0) {
            console.log(ans)
            return
        }

        const char: string = que[0]
        const ros: string = que.substring(1)

        let codeForCh = codes[char]

        for (let i = 0; i < codeForCh.length; i++) {
            const ch: string = codeForCh[i]

            printKeypadCombination(ros, ans + ch)
        }

    }

    printKeypadCombination("678", "")
})()