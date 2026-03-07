export const validParenthesis = (s: string): boolean => {
    if (!s.length || s.length % 2 !== 0) {
        return false;
    }
    const map: Record<string, string> = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    const stack = [];
    if (s[0] === '{' || s[0] === '[' || s[0] === '(') {
        stack.push(s[0]);
    } else {
        return false;
    }
    for (let i = 1; i < s.length; i++) {
        if (s[i] === '{' || s[i] === '[' || s[i] === '(') {
            stack.push(s[i]);
        } else {
            if (map[s[i]] === stack[stack.length - 1]) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    return stack.length ? false : true;
};