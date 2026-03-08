export const wordBreak = (s: string, wordDict: string[]): boolean => {
    const n = s.length;
    const dp = new Array(n + 1).fill(false);

    dp[n] = true;

    for (let i = n - 1; i >= 0; i--) {
        for (const word of wordDict) {
            if (
                i + word.length <= n &&
                s.startsWith(word, i) &&
                dp[i + word.length]
            ) {
                dp[i] = true;
                break;
            }
        }
    }

    return dp[0];
};