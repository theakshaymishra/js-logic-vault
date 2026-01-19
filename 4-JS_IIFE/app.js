/***************************************************************
 * Immediately Invoked Function Expression (IIFE)
 *
 * An IIFE is a function that executes immediately after
 * it is defined.
 *
 * Normal functions execute only when they are called explicitly,
 * but IIFE runs automatically without being called.
 ***************************************************************/


// =============================================================
// 1. Basic IIFE Syntax
// =============================================================

(function () {
  console.log("Database Connected");
})();

(function () {
  console.log("Database Connected");
})();

(function () {
  console.log("Database Connected");
})();

/*
 NOTE:
 - Semicolon (;) is important before the next IIFE.
 - Without it, JavaScript may throw an error due to
   Automatic Semicolon Insertion (ASI).
 - function () { ... } is an anonymous function.
 - Wrapping it in parentheses makes it a function expression.
 - The final () executes the function immediately.
*/


// =============================================================
// 2. Why IIFE Was Needed (Before ES6)
// =============================================================

/*
 In ES5, JavaScript only had `var`.
 `var` does NOT follow block scope.
 Variables declared inside blocks like if/for
 could leak into the global scope.
*/

if (true) {
  var x = 10;
}

console.log(x); // 😵 Output: 10 (global scope pollution)

/*
 The only safe boundary in ES5 was function scope.
*/

function test() {
  var y = 20;
}

// console.log(y); // ❌ Error: y is not defined

/*
 Variables inside functions were safe,
 but the function name itself became global.

 IIFE was introduced to:
 - Create a private scope
 - Execute code immediately
 - Avoid polluting the global scope
*/


// =============================================================
// 3. IIFE with Parameters
// =============================================================

(function (name) {
  console.log(`Welcome back ${name}`);
})("Akshay");

// Output: Welcome back Akshay


// =============================================================
// 4. IIFE with Return Value
// =============================================================

let result = (function (a, b) {
  return a + b;
})(5, 8);

console.log(result); // Output: 13


// =============================================================
// 5. Arrow Function IIFE
// =============================================================

(() => {
  console.log("Welcome back sir!");
})();


// =============================================================
// 6. Arrow Function IIFE with Parameters
// =============================================================

((name) => {
  console.log(`Welcome back ${name}`);
})("Akshay");


// =============================================================
// 7. Arrow IIFE with Return Value
// =============================================================

let greet = (name => `Welcome back ${name}`)("Akshay");

console.log(greet); // Output: Welcome back Akshay

/*
 NOTE:
 `greet` stores the return value of the IIFE,
 NOT the function itself.
*/


// =============================================================
// 8. Function Call vs Return Value
// =============================================================

let print = function (name) {
  console.log("hey buddy!");
};

console.log(print("Akshay"));

/*
 Output:
 hey buddy!
 undefined

 Explanation:
 - "hey buddy!" is printed because the function executes.
 - `undefined` is printed because the function does not
   explicitly return a value.
 - In JavaScript, functions return `undefined` by default
   if no return statement is provided.
*/
