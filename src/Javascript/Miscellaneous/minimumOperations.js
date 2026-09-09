const minimumOperations = (nums, k) => {
    let totalOperations = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > k) {
            totalOperations += nums[i] - k;
        }
    }
    return totalOperations;
};