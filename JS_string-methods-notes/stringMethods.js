// ===============================
// JavaScript String Basics
// ===============================

let message = "Hello, World!";
console.log(message); // Output: Hello, World!

// Accessing characters using index
// message[5]  -> ','
// message[7]  -> 'W'
// message[9]  -> 'r'

// In JavaScript, textual data is stored as strings.
// There is no separate data type for a single character.
// Internally, JavaScript strings use UTF-16 encoding.
// Strings can contain zero or more characters inside quotes.

// Note:
// Strings created using single quotes ('') or double quotes ("")
// behave exactly the same in JavaScript.

// ===============================
// Quotes Inside Quotes
// ===============================

// You can use quotes inside a string as long as
// they do not match the surrounding quotes.

// let answer1 = "It's alright";
// let answer2 = "He is called 'Johnny'";
// let answer3 = 'He is called "Johnny"';


// ===============================
// Template Strings (ES6)
// ===============================

// Template strings were introduced in ES6 (2015).
// They are enclosed in backticks (` `).
// They allow both single and double quotes inside the string.

// Example:
// let text = `He's often called "Johnny"`;

// ===============================
// String Length
// ===============================

// To find the length of a string, use the length property.
// Note: length is a property, not a function.

// Example:
// let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let length = text.length;
// console.log(length);


// ===============================
// String Methods (Without Arguments)
// ===============================

// 1. toUpperCase() and toLowerCase()

// These methods do NOT change the original string.
// They return a new string.

// Example:
// let text1 = "Hello World!";
// let upperText = text1.toUpperCase(); // "HELLO WORLD!"
// let lowerText = upperText.toLowerCase(); // "hello world!"


// 2. trim()

// The trim() method removes whitespace from both ends of a string.
// It does not modify the original string.

// Example:
// let text1 = "      Hello World!      ";
// let trimmedText = text1.trim(); // "Hello World!"


// Chaining example:
// let result = text1.trim().toLowerCase().toUpperCase();
// Result: "HELLO WORLD!"


// 3. trimStart()

// Removes whitespace only from the beginning of a string.
// Introduced in ECMAScript 2019.

// Example:
// let text1 = "     Hello World!     ";
// let result = text1.trimStart();
// Result: "Hello World!     "


// 4. trimEnd()

// Removes whitespace only from the end of a string.
// Introduced in ECMAScript 2019.

// Example:
// let text1 = "     Hello World!     ";
// let result = text1.trimEnd();
// Result: "     Hello World!"


// ===============================
// String Methods (With Arguments)
// Also known as String Search Methods
// ===============================

// 1. includes()

// Returns true if a string contains a specified value,
// otherwise returns false.

// Example:
// let text = "Hello world, welcome to the universe.";
// text.includes("world"); // true

// Notes:
// - The search is case-sensitive
// - The sequence of characters must match exactly

// Example with position:
// text.includes("world", 12); // false
// (Actual position of "world" is 6)


// 2. indexOf()

// Returns the index of the first occurrence of a substring.
// Returns -1 if the substring is not found.

// Example:
// let text = "Please locate where 'locate' occurs!";
// let index = text.indexOf("locate");
// Result: 7

// Note:
// - indexOf() is case-sensitive


// 3. replace()

// Replaces the first occurrence of a value with another value.
// Returns a new string.

// Example:
// let text = "Please visit Microsoft!";
// let newText = text.replace("Microsoft", "W3Schools");
// Result: "Please visit W3Schools!"


// 4. replaceAll()

// Replaces all occurrences of a specified value.

// Example:
// let text = "Please visit Microsoft and Microsoft!";
// let newText = text.replaceAll("i", "I");
// Result: "Please vIsIt MIcrosoft and MIcrosoft!"


// 5. concat()

// Joins two or more strings together.

// Example:
// let text1 = "Hello, my name is ";
// let text2 = "Akshay Mishra.";
// let finalMessage = text1.concat(text2);

// console.log(finalMessage);
// Result: "Hello, my name is Akshay Mishra."

// Same result can be achieved using + operator:
// let finalMessage = text1 + text2;


// 6. padStart() and padEnd()

// padStart() adds characters to the beginning of a string
// until it reaches the specified length.

// Example:
// const lastFourDigits = "7856";
// const maskedNumber = lastFourDigits.padStart(16, "*");
// console.log(maskedNumber);
// Result: "************7856"

// padEnd() works the same way but pads from the end.


// 7. charAt()

// Returns the character at a specific index.

// Example:
// let text = "HELLO WORLD";
// let char = text.charAt(6);
// Result: "W"

// If index is out of range, it returns an empty string.


// 8. charCodeAt()

// Returns the Unicode (UTF-16) code of the character
// at a given index.

// Example:
// let text = "HELLO WORLD";
// let code = text.charCodeAt(0);
// Result: 72


// 9. slice()

// Extracts a portion of a string and returns a new string.
// The end index is NOT included.

// Example:
// let text = "Hello world!";
// let part = text.slice(0, 5);
// Result: "Hello"


// 10. split()

// Splits a string into an array based on a separator.

// Example:
// let text = "Hello world. Welcome to the universe.";
// let words = text.split(" ");
// console.log(words);
// Result:
// ["Hello", "world.", "Welcome", "to", "the", "universe."]


// ===============================
// Template Literals Example
// ===============================

const accountNo = 5664;

// Using template literal
const templateString = `My account number is ${accountNo}`;
console.log(templateString);

// Using concat (alternative approach)
const newStr = "My account number is".concat(" ", accountNo);
console.log(newStr);
