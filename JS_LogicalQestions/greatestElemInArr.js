// Ques Find the greatest element in the array.

let arr = [3, 2, 1, 5, 2, 7, 10,];
let greatest = arr[0];
for( let a of arr ){
   if( a > greatest){
    greatest = a;
   }
};
console.log(greatest);

// for-in loop
// for( let a in arr ){
//    if( arr[a] > greatest){
//     greatest = arr[a];
//    }
// };

//  reduce()
// let ans = arr.reduce(( greatest , currentVal) => {
//   return  greatest < currentVal ? greatest = currentVal : greatest ;
// }, arr[0])
// console.log( ans)