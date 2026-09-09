const minOperations = (piles) => {
    piles.sort((a, b) => a - b);
    const operations = {};
    const total = 0;
    for (let i = 1; i < piles.length; i++) {
        if (piles[i] !== piles[i - 1]) {
            operations[piles[i]] = piles.length - i;
        }
    }
    for (const key in operations) {
        total += operations[key];
    }
};