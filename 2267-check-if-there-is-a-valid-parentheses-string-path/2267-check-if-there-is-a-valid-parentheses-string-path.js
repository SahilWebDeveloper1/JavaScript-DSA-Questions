/**
 * @param {character[][]} grid
 * @return {boolean}
 */
var hasValidPath = function(grid) {
    let m = grid.length
    let n = grid[0].length
    if ((m + n - 1) % 2 !== 0) return false;
    if (grid[0][0] === ')' || grid[m - 1][n - 1] === '(') return false;
    
    const dp = Array.from({ length: m }, () =>
        Array.from({ length: n }, () => new Set())
    );
    dp[0][0].add(1);

    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            for (let bal of dp[r][c]) {
                if (r + 1 < m) {
                    let nextBal = bal + (grid[r + 1][c] === '(' ? 1 : -1);
                    if (nextBal >= 0) dp[r + 1][c].add(nextBal);
                }
                if (c + 1 < n) {
                    let nextBal = bal + (grid[r][c + 1] === '(' ? 1 : -1);
                    if (nextBal >= 0) dp[r][c + 1].add(nextBal);
                }

            }
        }
    }

    return dp[m - 1][n - 1].has(0);
};