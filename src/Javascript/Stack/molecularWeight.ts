export const calculateWeight = (formula: string): number => {
    const weights: Record<string, number> = {
        "C": 12,
        "H": 1,
        "O": 8
    };
    if (!formula.length) {
        return 0;
    }
    const weight = [0];
    for (let i = 0; i < formula.length; i++) {
        const char = formula[i];
        const nextChar = formula[i + 1];
        if (char === '(') {
            weight.push(0);
        } else if (char === ')') {
            let multiplier = 1;
            const groupedWeight = weight.pop();
            if (!isNaN(parseInt(nextChar))) {
                multiplier = +nextChar;
            }
            weight[weight.length - 1] += groupedWeight as number * multiplier;
        } else if (weights[char]) {
            let multiplier = 1;
            if (!isNaN(parseInt(nextChar))) {
                multiplier = +nextChar;
            }
            weight[weight.length - 1] += weights[char] as number * multiplier;
        }
    }
    return weight[0];
}