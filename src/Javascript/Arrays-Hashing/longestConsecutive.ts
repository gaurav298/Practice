export const longestConsecutive = (nums: number[]): number => {
    if (!nums.length) {
        return 0;
    }
    let sorted = nums.sort((a, b) => a - b);
    let previous = sorted[0];
    let max = 1;
    let count = 1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === previous) {
            continue;
        } else if (nums[i] === previous + 1) {
            count += 1;
        } else {
            max = Math.max(max, count);
            count = 1;
        }
        previous = nums[i];
    }
    return Math.max(max, count);
};