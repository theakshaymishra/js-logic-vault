console.log("working");

// ==============================
// Arrow Function Basics Part - 3
// ==============================

// Arrow functions provide a **shorter and more concise syntax** for creating functions.
// Syntax: let func = (arg1, arg2, ..., argN) => expression;

// Equivalent of:
// let func = function(arg1, arg2, ..., argN) {
//   return expression;
// };

// -------------------------
// Example: Sum of two numbers
// -------------------------
let sum = (a, b) => a + b;

// Single-line arrow functions **auto-return** the expression.
// Equivalent to:
// let sum = function(a, b) { return a + b; }

console.log(sum(1, 2)); // 3

// -------------------------
// Single Argument Example
// -------------------------
let double = n => n * 2; // Parentheses optional for single argument
console.log(double(4));   // 8

// -------------------------
// No Arguments Example
// -------------------------
let sayHi = () => "Hello!"; // Empty parentheses required
console.log(sayHi());       // Hello!

// -------------------------
// Conditional Function Example
// -------------------------
// Arrow functions can be used dynamically like function expressions

// let age = prompt("What is your age?", 18);

// let welcome = (age < 18) ?
//   () => alert('Hello!') :
//   () => alert("Greetings!");

// welcome();

// -------------------------
// Replacing Function Expressions with Arrow Functions
// -------------------------
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

// Using arrow functions for callbacks:
ask(
  "Do you agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execution.")
);
