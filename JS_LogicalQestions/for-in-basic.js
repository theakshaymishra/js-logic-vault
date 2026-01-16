// Q1 Accessing even index.

let arr = ['A', 'B', 'C', 'D'];

for( a in arr ){
   ( a%2 == 0 ) ? arr[a] = 'even' : arr[a] ;
   console.log( arr[a]) ;
}

// Q2 Sum of numeric values of object.

let obj = { a: 10, b: 'x', c: 20 };
let sum = 0 ;
for( let o in obj ){
    if( typeof obj[o] === 'number'){
        sum += obj[o];
    }
}
 console.log(sum);