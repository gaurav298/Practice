export const topKFrequent = (nums: number[], k: number): number[] => {
    const freqMap: Map<number, number> = new Map();
    for (let i = 0; i < nums.length; i++) {
        freqMap.set(nums[i], (freqMap.get(nums[i]) || 0) + 1);
    }
    const sorted = [...freqMap.entries()].sort((a, b) => b[1] - a[1]);
    return sorted.slice(0, k).map(([num]) => num);
};