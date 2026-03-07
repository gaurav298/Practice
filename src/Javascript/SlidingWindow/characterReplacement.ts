export const characterReplacement = (s: string, k: number): number => {
    let freqChar: Record<string, number> = {};
    let left = 0;
    let maxFreq = 0;
    let maxLength = 0;
    for (let right = 0; right < s.length; right ++) {
        const char = s[right];
        freqChar[char] = (freqChar[char] || 0) + 1;
        maxFreq = Math.max(maxFreq, freqChar[char]);
        while ((right - left + 1) - maxFreq > k) {
            freqChar[s[left]]--;
            left++;
        }
        maxLength = Math.max(maxLength, right - left +1)
    }
    return maxLength;
}