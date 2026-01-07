console.log("Akshay")
let startNum = 2;
let endNum = prompt("Enter that number up to which you want to print even number! ")
endNum = Number(endNum)
if(endNum && endNum>1 && !isNaN(endNum)){
    while(startNum <= endNum){
    console.log(startNum);
    startNum += 2;
    }
} else{
    console.log("Enter digit greater than 1")
}

// let startNum = 2;
// let endNum = prompt("Enter that number up to which you want to print even number! ")
// endNum = Number(endNum)

// if(endNum && endNum > 1 && !isNaN(endNum)){
    
//     // Yahan humne check kiya: Kya number odd hai?
//     // Agar 11 % 2 karenge toh 1 bachega (True)
//     if(endNum % 2 !== 0){
//         endNum = endNum - 1; // 11 ko 10 bana diya
//     }

//     while(startNum <= endNum){
//         console.log(endNum);
//         endNum -= 2;
//     }
// } else {
//     console.log("Enter digit greater than 1")
}