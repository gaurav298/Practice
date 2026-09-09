const minimumOperations = (password) => {
    const vowelSet = new Set(["a", "e", "i", "o", "u"]);
    const vowels = ["a", "e", "i", "o", "u"];
    const required = password.length / 2;
    let vowelCount = 0;
    for (const char of password) {
        if (vowelSet.has(char)) {
            vowelCount++;
        }
    }
    if (required === vowelCount) {
        return 0;
    }
    if (vowelCount > required) {
        return vowelCount - required;
    }
    const costs = 0;
    for (char of password) {
        if (vowelSet.has(char)) {
            continue;
        }
    }
    let min = 0;
    for (const vowel of vowels) {
        min = Math.min(min, Math.abs(char.charCodeAt(0) - vowel.charCodeAt(0)));
    }
    costs.push(min);
    costs.sort((a, b) => a - b);
    let answer = 0;
    const needed = required - vowelCount;
    for (let i = 0; i < needed; i++) {
        answer += costs[i];
    }
    return answer;
};