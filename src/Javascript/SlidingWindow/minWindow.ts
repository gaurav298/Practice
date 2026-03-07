export const minWindow = (s: string, t: string): string => {
    let minLength = Infinity;
    let minSubString = '';
    for (let i = 0; i < s.length; i++) {
        let remaining = t;
        for (let j = i; j < s.length; j++) {
            let idx = remaining.indexOf(s[j]);
            if (idx !== -1) {
                remaining = remaining.slice(0, idx) + remaining.slice(idx + 1);
            }
            if (remaining.length === 0) {
                let len = j - i + 1;
                if (len < minLength) {
                    minLength = len;
                    minSubString = s.substring(i, j + 1);
                }
                break;
            }
        }
    }
    return minSubString;
}

export const minWindowOptimized = (s: string, t: string): string => {
    let need: Record<string, number> = {};
    let window: Record<string, number> = {};
    let minLength = Infinity;
    let have = 0;
    let start = 0;
    let left = 0;
    for (const x of t) {
        need[x] = (need[x] || 0) + 1;
    }
    const needLength = Object.keys(need).length;
    for (let right = 0; right < s.length; right++) {
        const char = s[right];
        window[char] = (window[char] || 0) + 1;
        if (need[char] && need[char] === window[char]) {
            have++;
        }
        while (have === needLength) {
            const windowSize = right - left + 1;
            if (windowSize < minLength) {
                minLength = windowSize;
                start = left;
            }
            window[s[left]]--;
            if (need[s[left]] && window[s[left]] < need[s[left]]) {
                have--;
            }
            left++;
        }
    }
    return minLength === Infinity ? "" : s.substring(start, start + minLength);
}