/* this keyword refers to the context in which a function is executed. 
Its value depends on how the function is called.
*/

/*
Simple term - 
The this keyword is a special keyword in JavaScript that refers to the execution context. 
Its value is determined at runtime, depending on how the function is invoked.
*/

// 1. Global scope;
// this refers to the Global Execution Context (Window Object)
console.log(this);
console.log(this === window); // true

// 2. this in functions.