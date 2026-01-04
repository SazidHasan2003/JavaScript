
console.log("With spread operator");
let array=[5,234,5,6,235,8,45,2];
let arr2=[...array];
console.log(arr2);

console.log("Without spread operator");

let arr3=[]

array.forEach(function(value){

arr3.push(value);

}

)
console.log(arr3);