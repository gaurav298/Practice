export const minimumDiff = (arr: number[]): number[][] => {
    let min = Infinity;
    let output = [];
    const sortedArray = arr.sort((a, b) => a - b);
    for (let i = 1; i < sortedArray.length; i++) {
        const diff = sortedArray[i] - sortedArray[i - 1];
        if (diff <= min) {
            output.push([sortedArray[i - 1], sortedArray[i]]);
            min = diff;
        }
    }
    return output;
}