export const lomgestSubstring = (s: string): number => {
    let set = new Set<string>();
    let maxLength = 0;
    let left = 0;
    for (let right = 0; right < s.length; right++) {
        while (set.has(s[right])) {
            set.delete(s[left]);
            left++;
        }
        set.add(s[right]);
        const length = right - left + 1;
        maxLength = Math.max(maxLength, length);
    }
    return maxLength;
}