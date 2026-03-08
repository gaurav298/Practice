const memoize = {};

const factorial = (num) => {
    if (num <= 1) return 1;
    if (memoize[num]) {
        return memoize[num];
    }
    return memoize[num] = num * factorial(num - 1);
};

console.log(factorial(8));
console.log(factorial(6))