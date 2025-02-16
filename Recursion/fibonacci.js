// Fibonacci - 0 1 1 2 3 5 8 ----

// 1. Return a fibonacci number of n;
// ----------------------------------
// 1.1 Iteration method
function fibonacci(n) {
  if (n <= 1) return n;
  let a = 0,
    b = 1;
  for (let i = 2; i <= n; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}
fibonacci(5); // 5

// 1.2 Recursion method
function fibonacciRecursion(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacciRecursion(n - 1) + fibonacciRecursion(n - 2);
}

fibonacciRecursion(5); // 5

// 2. Return a series of fibonacci of n;
// -------------------------------------

// 2.1 Iteration - return a series of fibonacci
function fibonacciSeries(n) {
  if (n < 0) return [];
  if (n === 0) return [0];
  if (n === 1) return [0, 1];
  const series = [0, 1];
  for (let i = 2; i < n; i++) {
    series.push(series[i - 1] + series[i - 2]);
  }
  return series;
}
// 2.2 Recursion - return a series of fibonacci
function fibonacciSeriesRecursion(n, arr = [0, 1]) {
  if (n < 0) return [];
  if (arr.length >= n) return arr.slice(0, n);
  arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  return fibonacciSeriesRecursion(n, arr);
}

fibonacciSeriesRecursion(5); // // [0, 1, 1, 2, 3]
