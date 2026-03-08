export const numDecodings = (s: string): number => {
    const n = s.length;
    const dp = new Array(n + 1).fill(0);

    dp[0] = 1;

    if (s[0] !== '0') {
        dp[1] = 1;
    }

    for (let i = 2; i <= n; i++) {
        const oneDigit = Number(s.slice(i - 1, i));
        const twoDigit = Number(s.slice(i - 2, i));

        if (oneDigit >= 1) {
            dp[i] += dp[i - 1];
        }

        if (twoDigit >= 10 && twoDigit <= 26) {
            dp[i] += dp[i - 2];
        }
    }

    return dp[n];
};