// ==============================
// Function Concepts - Part 2
// ==============================

// Global vs Local Variables
// -------------------------
// Global Variable: Accessible from anywhere in the program
// Local Variable: Accessible only within the function or block where declared

// -------------------------
// Local Variable Example
// -------------------------
function showMessage() {
  let message = "Hello, I'm JavaScript!"; // local variable
  alert(message);
}

// showMessage(); // Alerts: Hello, I'm JavaScript!
// alert(message); // Error! 'message' is local to the function

// -------------------------
// Accessing Outer (Global) Variables
// -------------------------
let userName = 'John';

function greetUser() {
  let message = 'Hello, ' + userName;
  console.log(message);
}

greetUser(); // Hello, John

// Functions can also modify outer variables
function changeUserName() {
  userName = "Bob"; // Modifies the global variable
  let message = 'Hello, ' + userName;
  console.log(message);
}

console.log(userName); // John (before function call)
changeUserName();       // Hello, Bob
console.log(userName); // Bob (after function call)

// -------------------------
// Function Execution Note
// -------------------------
// Functions are parsed/read but NOT executed until called.
// When called, all code inside the function gets executed.

// -------------------------
// Example: Passing Values to Functions
// -------------------------
function changeValue(val) {
  console.log(val);  // Original value passed
  val = "Akash";     // Modify local copy
  console.log(val);  // Modified value inside function
}

let mess = "Akshay";
console.log(mess);    // 1. Akshay
changeValue(mess);    // 2. Akash inside function
console.log(mess);    // 3. Akshay (original remains unchanged)
