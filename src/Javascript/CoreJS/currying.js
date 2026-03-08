const sum = (...first) => {
    let total = first.reduce((a, b) => a + b, 0);
    function inner(...second) {
        if (second.length === 0) {
            return total;
        }
        total += second.reduce((a, b) => a + b, 0);
        return inner;
    }
    inner.toString = () => total;
    inner.valueOf = () => total;
    return inner;
}

console.log(sum(1, 7)(4, 6)(66, 6)(35) + 0);