export const coinChange = (coins: number[], amount: number): number => {
    const dp = new Array(amount + 1).fill(Infinity);

    dp[0] = 0;

    for (let i = 1; i <= amount; i++) {
        for (const coin of coins) {
            if (i - coin >= 0) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }

    return dp[amount] === Infinity ? -1 : dp[amount];
};

export const coinStack = (coins: number[], amount: number): number => {
    const result: Record<number, number> = {};
    const helper = (remaining: number): number => {
        if (remaining < 0) {
            return -1;
        }
        if (remaining === 0) {
            return 0;
        }
        if (result[remaining] !== undefined) {
            return result[remaining];
        }
        let min = Infinity;
        for (const coin of coins) {
            const res = helper(remaining - coin);
            if (res >= 0 && res < min) {
                min = res + 1;
            }
        }
        result[remaining] = min === Infinity ? -1 : min;
        return result[remaining];
    };
    return helper(amount);
};