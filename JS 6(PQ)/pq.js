 // first Question
let number =0;
 let arr =[5,9,4,1,6,11];


function findLarge(){
    let newArray=[];
    for(let i=0;i<arr.length;i++){
         if(arr[i]>number){
            newArray.push(arr[i]);
            
         }

    }
     return newArray;
   

 }
 let result = findLarge();
 console.log(result);

// 2nd Question

 let str = "abcdabcdefgggh";

function unique() {
   let newarr = [];
     let newstr = "";

    for (let i = 0; i < str.length; i++) {
        if (!newarr.includes(str[i])) {
            newarr.push(str[i]);
            newstr += str[i];
        }
   }

    return newstr;
}

let uniquechar = unique();
console.log(uniquechar);

// 3rd Question

 let country=["Australia","Germany","United States of America"];
 let output =country[0];
 function largestLength(){
     for(let i=0;i<country.length;i++){

        if(country[i].length>output.length){
            output =country[i];
        }
   }
    return output;
 }
let finalResult = largestLength();
console.log(finalResult);

// 4th Question

 let vowels = "aeiou";
 function countVowels(str){
    let count = 0;
    for(let i=0;i<str.length;i++){
        if(vowels.includes(str[i])){
        count++;
    }}
     return count;
 }

 let finalCount = countVowels("aeiouaeiou");
 console.log(finalCount);

// 5th Question
function random(start,end){
    let randNum=Math.floor(Math.random() * (end - start + 1)) + start;
    return randNum;
}
let ranNum = random(1,6);
console.log(ranNum);