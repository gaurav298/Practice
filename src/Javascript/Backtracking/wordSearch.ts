export const wordSearch = (board: string[][], word: string): boolean => {
    const rows = board.length;
    const cols = board[0].length;
    const dfs = (r: number, c: number, index: number): boolean => {
        if (index === word.length) {
            return true;
        }
        if (r < 0 || c < 0 || r > rows || c > cols || board[r][c] !== word[index]) {
            return false;
        }
        const temp = board[r][c];
        board[r][c] = "#";
        const found: boolean = dfs(r + 1, c, index + 1) || dfs(r - 1, c, index + 1) || dfs(r, c + 1, index + 1) || dfs(r, c - 1, index + 1);
        board[r][c] = temp;
        return found;
    }
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (dfs(i, j, 0)) {
                return true;
            }
        }
    }
    return false;
};