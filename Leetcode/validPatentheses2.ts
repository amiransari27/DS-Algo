(function () {
    function validParentheses2(str: string): boolean {
        const pMap: Map<string, string> = new Map<string, string>()
        pMap.set('}', '{')
        pMap.set(')', '(')
        pMap.set(']', '[')

        const stack: string[] = []

        let top: number = -1

        for (let i = 0; i < str.length; i++) {

            if (pMap.has(str[i])) {
                if (pMap.get(str[i]) !== str[top]) {
                    return false
                } else {
                    top = getTop(pMap, str, top - 1)
                }
            } else {
                top = i
            }
        }

        return top == -1

    }

    function getTop(pMap: any, str: string, top: number): number {
        let right: number = 0

        while (top >= 0) {
            if (pMap.has(str[top])) { // closing bracket
                right++
            } else {
                right--
            }

            if (right < 0) {
                return top
            }

            top--

        }

        return -1

    }

    console.log(validParentheses2("[()()]"))
})