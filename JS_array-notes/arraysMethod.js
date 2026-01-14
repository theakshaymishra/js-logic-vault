// ==============================
// Array Methods in JavaScript
// ==============================


// ==============================
// Splice
// ==============================

// Why we avoid using `delete` on arrays
let arr = ["I", "go", "home"];
delete arr[1];

console.log(arr);        // [ 'I', <1 empty item>, 'home' ]
console.log(arr.length); // 3

// `delete` removes the element but leaves an empty slot.
// To remove elements properly and shift indexes, we use `splice()`.

// Syntax:
// arr.splice(startIndex, deleteCount, ...itemsToInsert)

// Example 1: Removing elements
let arr1 = ["I", "go", "home"];
console.log(arr1.splice(1, 1)); // [ 'go' ]
console.log(arr1);              // [ 'I', 'home' ]

// `splice` completely removes the element and shifts remaining items.
// The removed elements can be stored if needed.

// Example 2: Removing multiple elements
let arr2 = ["I", "study", "JavaScript", "right", "now"];
let removedItems = arr2.splice(2, arr2.length - 3);

console.log(arr2);        // [ 'I', 'study', 'now' ]
console.log(removedItems); // [ 'JavaScript', 'right' ]

// Example 3: Inserting elements using splice
// Set deleteCount to 0 to insert without deleting
let arr3 = ["I", "study", "JavaScript", "right", "now"];
arr3.splice(3, 0, "React", "and", "Tailwind");

console.log(arr3);
// ["I", "study", "JavaScript", "React", "and", "Tailwind", "right", "now"]

// Example 4: Using negative index
// Negative index starts counting from the end
let arr4 = [6, 7, 8];
arr4.splice(-3, 0, 5, 6, 7);

console.log(arr4); // [5, 6, 7, 6, 7, 8]


// ==============================
// Slice
// ==============================

// `slice()` returns a new array from start index to end index (end not included).
// It does NOT modify the original array.

let arr5 = ['a', 'b', 'c', 'd', 'e', 'f'];
let slicedArr = arr5.slice(2, 4);

console.log(slicedArr); // ['c', 'd']
console.log(arr5);      // original array remains unchanged

// Difference between splice and slice:
// - splice → modifies the original array
// - slice  → returns a new copied array

// Creating a shallow copy of an array using slice()
let arr6 = ['a', 'b', 'c', 'd', 'e', 'f'];
let copiedArr = arr6.slice();

copiedArr.splice(2, 2);

console.log(copiedArr); // [ 'a', 'b', 'e', 'f' ]
console.log(arr6);      // [ 'a', 'b', 'c', 'd', 'e', 'f' ]


// ==============================
// Concat
// ==============================

// `concat()` returns a new array without modifying original arrays
let arr7 = [1, 2, 3, 4];
let arr8 = [5, 6, 7, 8];

let arr9 = arr7.concat(arr8);

console.log(arr7);
console.log(arr8);
console.log(arr9);

// Example: Concatenating objects
let arr10 = [1, 2];
let obj = {
  0: 'Something',
  1: 'Length'
};

let resultArr = arr10.concat(obj);
console.log(resultArr); // [1, 2, {0: 'Something', 1: 'Length'}]

// Multiple concat examples
let arr12 = [1, 2];

console.log(arr12.concat([3, 4]));           // [1,2,3,4]
console.log(arr12.concat([3, 4], [5, 6]));   // [1,2,3,4,5,6]
console.log(arr12.concat([3, 4], 5, 6));     // [1,2,3,4,5,6]


// ==============================
// forEach
// ==============================

// `forEach()` executes a function for each element.
// It does NOT return anything.
// `break` and `continue` are NOT allowed.

let arr13 = [1, 2, 3, 4, 5];
arr13.forEach(value => console.log(value));

let arr14 = [1, 2, 3, 4, 5];
arr14.forEach((num, index) => {
  console.log(`Index ${index}, Value ${num}`);
});

// Sum of array elements
let arr15 = [10, 20, 30, 40, 50];
let sum = 0;

arr15.forEach(num => {
  sum += num;
});

console.log(sum); // 150

// Even / Odd check
let arr16 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr16.forEach(num => {
  console.log(num % 2 === 0 ? `${num} is even` : `${num} is odd`);
});

// Modifying original array using forEach
let arr17 = [100, 200, 300];
arr17.forEach((price, index, arr) => {
  arr[index] = price + 100;
});

console.log(arr17); // [200, 300, 400]


// ==============================
// indexOf, lastIndexOf, includes
// ==============================

let fruits = ["apple", "banana", "mango", "banana"];

console.log(fruits.indexOf("banana", 2)); // 3
console.log(fruits.lastIndexOf("banana")); // 3

console.log(fruits.includes("mango"));  // true
console.log(fruits.includes("grapes")); // false

if (fruits.includes("apple")) {
  console.log("Apple exists!");
}

// Special case: NaN
const arr18 = [NaN];
console.log(arr18.indexOf(NaN));  // -1
console.log(arr18.includes(NaN)); // true


// ==============================
// find, findIndex, findLastIndex
// ==============================

let nums = [1, 3, 5, 8, 10];

console.log(nums.find(num => num % 2 === 0)); // 8
console.log(nums.find(num => num > 9));       // 10


// ==============================
// filter (concept)
// ==============================

// - Checks all elements
// - Returns a new array
// - Includes only elements that satisfy the condition
// - Does not modify original array


// ==============================
// map (concept)
// ==============================

// - Runs callback on each element
// - Returns a new array (same length)
// - Original array remains unchanged
// - `return` is mandatory


// ==============================
// split & join
// ==============================

// `split()` converts a string into an array
let str1 = "Akshay, Mishra, is, a, Developer";
let arr19 = str1.split(", ");

console.log(arr19);

let str2 = "Akshay-Mishra-is-a-a-Developer";
let arr20 = str2.split("-");

console.log(arr20);

let str3 = "Akshay";
console.log(str3.split(""));

// `join()` converts an array back into a string
console.log(arr19.join(", "));
console.log(arr20.join("-"));


// ==============================
// Array.isArray
// ==============================

console.log(typeof {}); // object
console.log(typeof []); // object

console.log(Array.isArray({})); // false
console.log(Array.isArray([])); // true


// ==============================
// Reduce
// ==============================

// `reduce()` is commonly used to calculate totals (e.g., shopping cart total).
// It accumulates values and returns a single output.

let numbers = [1, 2, 3, 4, 5];

let total = numbers.reduce((accumulator, current) => {
  return accumulator + current;
}, 0);

console.log(total); // 15
