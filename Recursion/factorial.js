//  Factorial of 5! - 5*4*3*2*1 = 120;

// Iterative version - Return a factorial of n (n!);
function factorial(n) {
  let result = 1;
  for (let i = n; i > 0; i--) {
    result *= i;
  }
  return result;
}

factorial(5); //120

// Recursive version: Returns the factorial of n (n!)
function factorialRecursive(n, total = 1) {
  if (n <= 1) return total;
  return factorialRecursive(n - 1, n * total);
}

factorialRecursive(5); //120
