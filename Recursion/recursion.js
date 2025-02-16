/*  Recursion - A function that calls itself
 Two main components are essential for recursion - Base case and Recursion case
 1. Base Case - This is the condition that stops the recursion. Without a base case, the function will keep calling itself indefinitely, leading to a stack overflow.
 2. Recursion case - This is where the function calls itself with a modified argument, moving closer to the base case. It breaks the problem into smaller subproblems.
*/

// General way of Logs numbers from n to 0
function logIndex(n) {
  if (n < 0) return;
  for (let i = n; i >= 0; i--) {
    console.log(i);
  }
}

// Recursive way of Logs numbers from n to 0

function logIndexRecursive(n) {
  if (n < 0) return; // base case
  console.log(n);
  return logIndexRecursive(n - 1);
}
