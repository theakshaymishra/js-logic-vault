/*
========================================
JavaScript Arrays – Core Concepts
Author: Akshay Mishra
========================================
*/

// Arrays are used to store ordered collections of data.
// Unlike objects, arrays maintain index-based order
// and provide built-in methods to manage elements.

// ========================================
// Array Declaration
// ========================================

const fruits = ["Apples", "Oranges", "Mangos", "Bananas"];

// Accessing elements
console.log(fruits[0]); // Apples
console.log(fruits[1]); // Oranges
console.log(fruits[2]); // Mangos
console.log(fruits[3]); // Bananas

// Replacing an element
fruits[2] = "Grapes";
console.log(fruits);

// Adding a new element
fruits[4] = "Papaya";
console.log(fruits);

// ========================================
// Arrays with Mixed Data Types
// ========================================

const mixedArray = [
  "Apple",
  { name: "John" },
  () => console.log("Hello from function inside array"),
  true,
];

// Calling function stored inside array
mixedArray[2]();

// ========================================
// Trailing Comma (Best Practice)
// ========================================

const fruitsWithComma = [
  "Apples",
  "Oranges",
  "Grapes",
];

// ========================================
// Accessing First & Last Elements
// ========================================

const fruitList = ["Apples", "Oranges", "Plum"];

// Using length
console.log(fruitList[0]); // First element
console.log(fruitList[fruitList.length - 1]); // Last element

// Using .at()
console.log(fruitList.at(0));  // First element
console.log(fruitList.at(-1)); // Last element

// ========================================
// Array Methods: push / pop / shift / unshift
// ========================================

// push + pop  → LIFO
// shift + unshift → FIFO

let numbers = [2, 4, 6, 7, 8];

// pop (remove last)
numbers.pop();
console.log(numbers);

// push (add at end)
numbers.push(8);
console.log(numbers);

// shift (remove first)
numbers.shift();
console.log(numbers);

// unshift (add at start)
numbers.unshift(6);
console.log(numbers);

// ========================================
// Looping through Arrays
// ========================================

const items = ["Apple", "Orange", "Pear", "Banana"];

// Traditional for loop
for (let i = 0; i < items.length; i++) {
  console.log(items[i]);
}

// for...of loop (recommended)
for (const item of items) {
  console.log(item);
}

// ========================================
// Length Property (Writable)
// ========================================

let sparseArray = [];
sparseArray[123] = "Apple";
console.log(sparseArray.length); // 124

let truncateArray = [1, 2, 3, 4, 5];

// Truncate array
truncateArray.length = 2;
console.log(truncateArray); // [1, 2]

// Restore length (values won't return)
truncateArray.length = 5;
console.log(truncateArray[3]); // undefined

// Clearing an array
truncateArray.length = 0;
console.log(truncateArray); // []

// ========================================
// String Conversion & toString()
// ========================================

const arr = [1, 2, 3];

console.log(String(arr));       // "1,2,3"
console.log(arr.toString());    // "1,2,3"

// ========================================
// Type Coercion with Arrays
// ========================================

// Binary '+' converts arrays to string
console.log(typeof ([] + 1)); // string
console.log([] + 1);          // "1"
console.log([4] + 4);         // "44"
console.log([4, 5] + 4);      // "4,54"

// String behavior
console.log("" + 1);          // "1"
console.log("1" + 1);         // "11"
console.log("1,2" + 1);       // "1,21"

// ========================================
// Array Comparison (Reference Based)
// ========================================

const a1 = [1, 2, 3, 4];
const a2 = [1, 2, 3, 4];

console.log(a1 == a2); // false (different references)

const a3 = a2;
console.log(a2 == a3); // true (same reference)

// Loose equality behavior
console.log(0 == []);   // true
console.log("0" == []); // false
console.log(0 == "");   // true

// ========================================
// Multidimensional Arrays
// ========================================

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix[0][1]); // 2
