export const combinationSum = (nums: number[], target: number): number[][] => {
    let result: number[][] = [];
    const backtrack = (start: number, remaining: number, path: number[]) => {
        if (remaining === 0) {
            result.push([...path]);
            return;
        }
        if (remaining < 0) {
            return;
        }
        for (let i = start; i < nums.length; i++) {
            path.push(nums[i]);
            backtrack(i, remaining - nums[i], path);
            path.pop();
        }
    }
    backtrack(0, target, []);
    return result;
}