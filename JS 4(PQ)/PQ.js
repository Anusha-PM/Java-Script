// 1st Questions

let arr =[1,2,3,4,5,6,2,3];
let num = 2;
for(let i =0;i<arr.length;i++){
    if(arr[i] == num){
        arr.splice(i,1);
    }
}
console.log(arr);

// 2nd Question
let count=0;
let number = 287152;
for(let i=0;i<(`${number}`.length);i++){
count++;
}
console.log(count);

// 3rd Question
let sum=0;
let number2 = 287152;
let copy=number;
while(copy>0){
   digit = copy%10;
  sum=sum+digit;
 copy= Math.floor(copy/10);
}

console.log(sum);

// 4 th Question 
let factnum =5;
let fact =1;
for(let i=1;i<=factnum;i++){
fact=fact*i;
}
console.log(fact);

// 5th question

let array =[2,5,7,9,12,2];
let largest =array[0];
for(let i=0;i<array.length;i++){
if(array[i]>largest){
largest=array[i];
}}
console.log(largest);


