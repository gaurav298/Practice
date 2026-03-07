export const threeSum = (nums: number[], target: number): number[][] => {
    const length = nums.length;
    const result = [];
    const numbers = nums.sort((a, b) => a - b);
    for (let i = 0; i < length - 2; i++) {
        if (i > 0 && numbers[i] === numbers[i - 1]) {
            continue;
        }
        let left = i + 1;
        let right = length - 1;
        while (left < right) {
            const sum = numbers[i] + numbers[left] + numbers[right];
            if (sum === target) {
                result.push([numbers[i], numbers[left], numbers[right]]);
                while (left < right && numbers[left] === numbers[left + 1]) {
                    left++;
                }
                while (left < right && numbers[right] === numbers[right - 1]) {
                    right--;
                }
                left++;
                right--;
            } else if (sum < target) {
                left++;
            } else {
                right--;
            }
        }
    }
    return result;
};