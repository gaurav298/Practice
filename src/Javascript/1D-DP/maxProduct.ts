export const maxProduct = (nums: number[]): number => {
    let maxProd = nums[0];
    let minProd = nums[0];
    let result = nums[0];

    for (let i = 1; i < nums.length; i++) {
        const n = nums[i];

        const tempMax = Math.max(n, n * maxProd, n * minProd);
        const tempMin = Math.min(n, n * maxProd, n * minProd);

        maxProd = tempMax;
        minProd = tempMin;

        result = Math.max(result, maxProd);
    }

    return result;
};