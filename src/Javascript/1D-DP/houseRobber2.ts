export const houseRob = (houses: number[]): number => {
    const length = houses.length;
    if (length === 1) {
        return houses[0];
    }
    const robHouse = (money: number[]): number => {
        const len = money.length;
        let dp = new Array(len);
        dp[0] = houses[0];
        dp[1] = Math.max(money[0], money[1]);
        for (let i = 2; i < len; i++) {
            dp[i] = Math.max(dp[i - 1], dp[i - 2] + money[i]);
        }
        return dp[len - 1];
    }
    return Math.max(robHouse(houses.slice(0, length - 1)), robHouse(houses.slice(1)));
};