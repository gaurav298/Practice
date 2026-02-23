export const twoSum = (arr: number[], target: number): number[] => {
    const hash: Record<number, number> = {};
    for (let i = 0; i < arr.length; i++) {
        const complement = target - arr[i];
        if (hash[complement] !== undefined) {
            return [hash[complement], i];
        } else {
            hash[arr[i]] = i;
        }
    }
    return [0, 0];
};