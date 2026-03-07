export const maxSubArray = (nums: number[]): number => {
    let maxSum = -Infinity;
    let currentSum = 0;
    for (const num of nums) {
        currentSum = Math.max(num, num + currentSum);
        maxSum = Math.max(currentSum, maxSum);
    }
    return maxSum;
};