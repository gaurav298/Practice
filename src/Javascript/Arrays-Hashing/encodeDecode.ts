const encode = (words: string[]): string => {
    return words.map(w => w.length + '#' + w).join('');
};

const decode = (word: string): string[] => {
    const res = [];
    let i = 0;
    while (i < word.length) {
        let j = i;
        while (word[j] !== '#') {
            j++;
        }
        const len = parseInt(word.slice(i, j));
        const targetWord = word.slice(j + 1, j + 1 + len);
        res.push(targetWord);
        i = j + 1 + len; 
    }
    return res;
};

export const encodeDecode = (words: string[]): string[] => {
    const word = encode(words);
    return decode(word);
} ;