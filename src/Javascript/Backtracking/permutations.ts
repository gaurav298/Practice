export const permutations = (s: string): string[] => {
    const result: string[] = [];
    const backtrack = (path: string, remaining: string) => {
        if (remaining.length === 0) {
            result.push(path);
            return;
        }
        for (let i = 0; i < remaining.length; i++) {
            backtrack(path + remaining[i], remaining.slice(0, i) + remaining.slice(i + 1));
        }
    }
    backtrack("", s);
    return result;
};