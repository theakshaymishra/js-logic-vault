// Write a loop which prompts for a number greater than 100.
// If the visitor enters another number – ask them to input again.

// The loop must ask for a number until either the visitor
// enters a number greater than 100 or cancels the input/enters
// an empty line.

// Here we can assume that the visitor only inputs numbers. 
// There’s no need to implement a special handling for a 
// non-numeric input in this task.

// Method 1.
// while(true){
//     let num = prompt("Enter a number larger than 100 :");
//     num = Number(num)
//   if(num>100){
//       console.log("correct")
//       break;
//   }else{
//       console.log("Try Again")
//   }
// }

// Method 2.
while (Number(prompt("Enter a number larger than 100:")) <= 100) {
  console.log("Try Again");
}
console.log("Correct");