// Objects are used to store keyed collections of data
// and to represent more complex entities in JavaScript.

/*
====================================================
Creating Objects
====================================================
*/

// An empty object (“empty cabinet”) can be created using two syntaxes:

let user = new Object(); // Object constructor
let user2 = {};          // Object literal (most commonly used)

// The curly braces `{}` syntax is called an object literal.
// Usually, object literals are preferred because they are shorter and clearer.

/*
====================================================
Object Literals and Properties
====================================================
*/

// We can immediately define properties inside `{}` using "key: value" pairs.

user = {
  // key (also called property or identifier)
  name: "Akshay",
  age: 26
};

// We can read property values using dot notation:
console.log(user.name); // Akshay
console.log(user.age);  // 26

// Property values can be of any data type.
// Let's add a boolean value:
user.isAdmin = true;
console.log(user.isAdmin); // true

// We can delete a property at any time:
delete user.age;
console.log(user.age); // undefined

/*
====================================================
Multi-word Property Names
====================================================
*/

// Multi-word property names must be written inside quotes
// and accessed using bracket notation.

let user3 = {
  "likes birds": true,
  "age": "26"
};

// Bracket notation is required here
console.log(user3["age"]);          // 26
console.log(user3["likes birds"]);  // true

// Adding a new multi-word property
user3["Greet Message"] = "Hello Sir!";
console.log(user3["Greet Message"]);
console.log(user3);

// Dynamic property name using a variable
let key = "color";
user3[key] = "Red";
console.log(user3[key]); // Red

/*
====================================================
Property Value Shorthand
====================================================
*/

// Normal way of returning an object from a function
let makeUser = (name, age) => {
  return {
    name: name,
    age: age
  };
};

let user5 = makeUser("John", 28);
console.log(user5.name); // John
console.log(user5.age);  // 28

// If property name and variable name are the same,
// we can use Property Value Shorthand

let makeUser2 = (name, age) => {
  return {
    name,
    age
  };
};

// We can also change property names if needed
let makeUser3 = (name, age) => {
  return {
    userName: name,
    userAge: age
  };
};

// We can mix shorthand and normal properties
let makeUser4 = (name, age) => {
  return {
    userName: name,
    age
  };
};

/*
====================================================
Property Name Limitations
====================================================
*/

// Variables cannot use reserved keywords like "for", "let", "return".
// But object properties CAN use reserved words.

let obj = {
  for: 1,
  let: 2,
  return: 3
};

console.log(obj.for + obj.let + obj.return); // 6

/*
====================================================
Property Existence Test — 'in' Operator
====================================================
*/

// Checking a property using `=== undefined` is unreliable
// because a property may exist with value `undefined`.

let obj2 = {};
console.log(obj2.age === undefined); // true (property does NOT exist)

// Property exists but its value is undefined
let obj3 = {
  name: undefined
};

let email = "email";

console.log(obj3.name);        // undefined
console.log("name" in obj3);   // true  → property exists
console.log(email in obj3);    // false → property does not exist

// Key points:
// - Property does not exist → undefined
// - Property exists but value is undefined → undefined
// - Therefore, `=== undefined` cannot confirm existence
// - The `in` operator solves this problem

/*
====================================================
for...in Loop
====================================================
*/

// Dot notation accesses fixed property names
// Bracket notation is used for dynamic property access

let obj4 = {
  name: "Aman",
  age: 28,
  email: "aman@gmail.com",
  isAdmin: true
};

// `for...in` loops over object keys
for (let key in obj4) {
  console.log(`${key} : ${obj4[key]}`);
}
