// ================================================
// Managing Multiple Arguments & Objects Part - 4
// ================================================

// Example: Shopping Cart Price Calculation with Rest Operator

// -------------------------
// Type 1: Using only rest operator
// -------------------------
let calculateCartPrice = (...nums) => { // ...nums collects all arguments into an array
    let sum = 0;
    console.log(nums); // [200, 300, 400, 500, 600, 700]

    // Using for-in loop to sum values
    for (let i in nums) {
        sum += nums[i];
    }

    console.log(sum); // 2700
};

calculateCartPrice(200, 300, 400, 500, 600, 700);

// -------------------------
// Type 2: Using fixed parameters + rest operator
// -------------------------
let calculateCartPrice2 = (val1, val2, ...nums) => {
    let sum = 0;
    console.log(nums); // [400, 500, 600, 700] — first two values taken by val1 & val2

    for (let i in nums) {
        sum += nums[i];
    }

    console.log(sum); // 2200
};

calculateCartPrice2(200, 300, 400, 500, 600, 700);

// -------------------------
// Notes:
// 1. val1, val2 take first two arguments.
// 2. ...nums collects the remaining arguments into an array.
// 3. Spread and rest operator are similar in syntax but used differently.
// -------------------------

// ==============================
// Handling Objects in Functions
// ==============================

let myObj = {
    userName: 'Ramesh',
    price: 2999,
    buying: 'Grocery',
};

let handleObj = (obj) => {
    console.log(
        `Name of username is ${obj.userName} and he buys ${obj.price} Rupees of ${obj.buying}.`
    );
};

// Calling the function with object variable
handleObj(myObj); 
// Output: Name of username is Ramesh and he buys 2999 Rupees of Grocery.

// Directly passing an object to the function
handleObj({
    userName: 'Suresh',
    price: 5999,
    buying: 'Musical Instruments',
});
// Output: Name of username is Suresh and he buys 5999 Rupees of Musical Instruments.
