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

