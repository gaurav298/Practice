export const rob = (houses: number[]): number => {
    const length = houses.length;
    const dp = new Array(length);
    dp[0] = houses[0];
    dp[1] = Math.max(houses[0], houses[1]);
    for (let i = 2; i < length; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i -2] + houses[i]);
    }
    return dp[length - 1];
}