const fib = (n) => {
    if (n <= 1) {
        return 1;
    }
    return fib(n - 1) + fib(n - 2);
}

console.log(fib(5)); // 8
console.log(fib(10)); // 89
console.log(fib(20)); // 10946
