// Returns the sum of numbers from 1 to n
function sum(n) {
  let result = 0;
  for (let i = n; i > 0; i--) {
    result += i;
  }
  return result;
}

sum(5); // 15

// Recursive way of return a sum;
function sumRecursive(n, total = 0) {
  if (n <= 0) return total; // Base Case : stop recursion and return the accumulated total
  return sumRecursive(n - 1, n + total);
}
sumRecursive(5); // 15
