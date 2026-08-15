let arr = [7,9,0,-2];
let n=4;
console.log(arr.slice(0,3));
let nums =[7,9,0,-2];
console.log(nums.slice(1,n));

let string = "anu";
if(string.length==0){
    console.log("String is empty")
}
else{
    console.log("String length : ",string.length);
}

let str="Anusha";
let index =3;
if(str[index] == str[index].toLowerCase()){
    console.log("character is lowercase");

}
else{
    console.log("character is not lowercase");
}

let string5="      anusha    ";
console.log(string5.trim());

let number = [1,2,3,4,5,6];
let item =9;
if(number.indexOf(item) != -1){
    console.log("element exists in array");
}else{
    console.log("elements doesn't exist in array");
}


