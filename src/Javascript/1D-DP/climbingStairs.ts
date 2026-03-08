export const climbingStairs = (steps: number): number => {
    const dp = new Array(steps + 1);
    dp[1] = 1;
    dp[2] = 2;
    for (let i = 3; i <= steps; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[steps];
}