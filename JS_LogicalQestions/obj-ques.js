// Ques 1. Write the code, one line for each action:

// Create an empty object user.
// Add the property name with the value John.
// Add the property surname with the value Smith.
// Change the value of the name to Pete.
// Remove the property name from the object.

let obj = {}
obj.name = "John";
obj.surname = "Smith";
obj.name = "Pete";
delete obj.name;

// Ques 2. Write a function isEmpty(obj) which returns true if the object has no properties, false otherwise.

let obj2 ={};

let isEmpty = ( obj2 ) => {
    for( let key in obj2 ){
        return false;
    }
    return true;
}

isEmpty( obj2 ); // true

// Ques 3. We have an object storing salaries of our team:

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

// Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

let sum  = 0 ;
for( let key in salaries){
    sum += salaries[key]
}
console.log( sum ); // 390


// Ques 4. Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

let obj3 = {
  width: 200,
  height: 300,
  title: "My menu"
};

let multiplyNumeric = ( obj3 ) => {                              //   let multiplyNumeric = (obj) => {
     for( let key in obj3 ){                                     //   for( let key in obj3 ){
        if(typeof obj3[key] === 'string' ){                      //      if( typeof obj3[key] === 'number' ){
            continue;                                            //         obj3[key] *=  2;
        }else{                                                   //         console.log(`${key} : ${obj3[key]}`); 
            obj3[key] = obj3[key] * 2 ;                          //       }
            console.log(`${key} : ${obj3[key]}`);                //      }
        }                                                        //    } 
     }
}
multiplyNumeric( obj3 );