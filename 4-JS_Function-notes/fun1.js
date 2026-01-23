// ==============================
// Function Basics in JavaScript
// ==============================

// Function Syntax:
// function functionName(params) {
//     // function body
// }

// Function Reference vs Function Call:
// functionName       // Reference only
// functionName()     // Call & execute

// ==============================
// Example 1: Adding Two Numbers
// ==============================

function addTwoNum(a, b) {
  // Return the sum of a and b
  return a + b;
}

// Usage:
// console.log(addTwoNum(5, 10)); // 15

// Storing result in a variable:
let result = addTwoNum(5, 10);
console.log(`Result: ${result}`); // Result: 15

// ==============================
// Example 2: User Login Message
// ==============================

// Basic example (may show undefined if no argument is passed)
function userLoginMessage(username) {
  if (username === undefined) {
    return console.log("Please enter username!");
  }
  return console.log(`${username} just logged in`);
}

// Usage:
// userLoginMessage();        // Please enter username!
// userLoginMessage("Akshay"); // Akshay just logged in

// ==============================
// Example 3: Returning Values Instead of Logging
// ==============================

function userLoginMessag(username) {
  if (username === undefined) {
    return "Please enter username!";
  }
  return `${username} just logged in`;
}

// console.log(userLoginMessag());         // Please enter username!
// console.log(userLoginMessag("Akshay")); // Akshay just logged in

// ==============================
// Example 4: Default Parameter Value
// ==============================

function userLoginMes(username = "Buddy") {
  return `${username} just logged in`;
}

// Usage:
console.log(userLoginMes());        // Buddy just logged in
console.log(userLoginMes("Akshay")); // Akshay just logged in
