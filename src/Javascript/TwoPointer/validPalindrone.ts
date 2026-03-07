export const validPalindrone = (s: string): boolean => {
    let stringToCheck = s;
    stringToCheck = stringToCheck.replace(/[^a-zA-Z0-9]/g, '');
    for (let i = 0; i < stringToCheck.length; i++) {
        const indexChar = stringToCheck[i].toLowerCase();
        const correspondingChar = stringToCheck[stringToCheck.length - i - 1].toLowerCase();
        if (indexChar !== correspondingChar) {
            return false;
        }
    }
    return true;
}