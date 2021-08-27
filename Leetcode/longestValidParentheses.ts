(function () {
    function longestValidParentheses(s: string): number {

        const stack: number[] = []
        stack.push(-1)

        let max: number = 0

        for (let i = 0; i < s.length; i++) {
            if (s[i] === '(') {
                stack.push(i)
            } else {
                stack.pop()
                if (stack.length > 0) {
                    max = Math.max(max, i - stack[stack.length - 1])
                } else {
                    stack.push(i)
                }
            }

        }

        return max

    };

    console.log(longestValidParentheses(")()())"))
})