// 1st Question
let arr =[1,2,3,4,5];
let newArray =arr.map((ele)=>
           ele*ele);
console.log(newArray);
let sum = newArray.reduce((accu,ele)=>
        accu+ele,0);
console.log(sum);

let average = sum/newArray.length;
console.log(average);

// 2nd Question

let arr1 =[1,-8,14,16,-4,10];
let newArr = arr1.map((ele) =>
     ele+5);
console.log(newArr);

// 3rd Question

let str = "Anusha";
let upper = str.toUpperCase();
console.log(upper);
let arr2 = [...upper];
console.log(arr2);

let strings=["adam","bob","catlyn","donald","eve"];
console.log(strings.map((string)=>string.toUpperCase()));

// 4th Question

const doubleReturnArgs = (arr,...args) =>
  [...arr,...args.map((v)=>v*2)

  ];

  console.log(doubleReturnArgs([1,2,3,4],4,5));

//   5 th Ouestion

const mergeObjects = (obj1,obj2) => ({...obj1,...obj2});

console.log(mergeObjects({a:1,b:2},{c:3,d:4}));