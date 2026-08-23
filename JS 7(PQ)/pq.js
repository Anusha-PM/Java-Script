// 1st Question
const arrayAverage = (arr) => {
   let sum=0;
    for(let i=0;i<arr.length;i++){
    sum+=arr[i];
     }
     let avg = sum/(arr.length);
    return avg;
    
 }

let result =  arrayAverage([1,4,5,3,6,7,8]);
console.log(result);
console.log(Math.floor(result));

// 2nd Question
const isEven = (n) => {
    if(n%2==0){
        return true;
    }
    else{
        return false;
    }
}
let results = isEven(1);
if(results==true){
console.log("Even");
}
else{
    console.log("Not even");
}
