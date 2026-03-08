const fib = (n) => {
    const memoize = {};
    const helper = (num) => {
        if (memoize[num]) {
            return memoize[num];
        }
        if (num < 3) {
            return 1;
        }
        return memoize[num] = helper(num - 1) + helper(num - 2);
    };
    return helper(n);
};

console.log(fib(3));
console.log(fib(8));