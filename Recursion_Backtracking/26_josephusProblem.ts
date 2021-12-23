/**
 * 0 1 2 3 4 5    // kill kth person  
 *         4 5 0 1 2  // convert it again from o to n - 1 
 *         0 1 2 3 4  // kill kth person
 *                 4 0 1 2 
 *                 0 1 2 3
 *                 0 1 2
 *                   1 2
 *                   0 1
 *  
 * .
 * .
 * .
 */

(function () {
    function josephusProblem(n: number, k: number): number {
        if (n == 1) {
            return 0
        }
        let x = josephusProblem(n - 1, k)
        let y = (x + k) % n
        return y
    }

    console.log(josephusProblem(5, 3))
})()