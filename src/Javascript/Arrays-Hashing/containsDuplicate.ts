export const hasDuplicate = (arr: number[]): boolean => {
    let hasDuplicate: boolean = false;
    const hash: Record<number, number> = {};
    for (let i = 0; i < arr.length; i++) {
        if (hash[arr[i]]) {
            hasDuplicate = true;
            break;
        } else {
            hash[arr[i]] = arr[i];
        }
    }
    return hasDuplicate;
};