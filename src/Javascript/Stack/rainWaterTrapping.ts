export const trap = (height: number[]): number => {
    let stack: number[] = [];
    let water = 0;
    for (let i = 0; i < height.length; i++) {
        while (stack.length && height[i] > height[stack[stack.length - 1]]) {
            let bottom = stack.pop();
            if (stack.length === 0) {
                break;
            }
            let left = stack[stack.length - 1];
            let width = i - left - 1;
            let h = Math.min(height[i], height[left] - height[bottom as number]);
            water += width * h; 
        }
        stack.push(i);
    }
    return water;
};