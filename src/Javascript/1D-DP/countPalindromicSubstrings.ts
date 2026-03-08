export const countPalindromicSubstrings = (s: string): number => {
    let count = 0;
    const isPalindrome = (str: string): boolean => {
        let left = 0;
        let right = str.length - 1;
        while (left < right) {
            if (str[left] !== str[right]) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    };
    for (let i = 0; i < s.length; i ++) {
        for (let j = i; j < s.length; j++) {
            const substr = s.substring(i, j + 1);
            if (isPalindrome(substr)) {
                count++;
            }
        }
    }
    return count;
};