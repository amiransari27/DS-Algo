(function () {
    function longestValidParentheses2(s: string): number {

        let open: number = 0
        let close: number = 0

        let max: number = 0

        for (let i = 0; i < s.length; i++) {
            if (s[i] === '(') {
                open++
            } else {
                close++
            }

            if (open === close) {
                max = Math.max(max, open + close)
            }

            if (open > close) {
                open = close = 0
            }

        }

        for (let i = s.length; i >= 0; i--) {
            if (s[i] === '(') {
                open++
            } else {
                close++
            }

            if (open === close) {
                max = Math.max(max, open + close)
            }

            if (close > open) {
                open = close = 0
            }

        }

        return max

    };

    console.log(longestValidParentheses2(')()())()'))
})()