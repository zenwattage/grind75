const fib = (n, memo = {}) => {
    if (n <= 1) {
        return 1;
    }
    console.log(memo);

    if (memo[n]) {
        return memo[n];
    }

    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    return memo[n];
}

console.log(fib(5)); // 8
// console.log(fib(10)); // 89