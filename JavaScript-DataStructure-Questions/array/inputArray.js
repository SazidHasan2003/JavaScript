let prompt=require('prompt-sync')()

let arr=new Array(5);
let sum=0;
for(let i=0;i<arr.length;i++){
let val=Number( prompt(`enter the value ${i}: `));
arr[i]=val;

sum+=arr[i];
}

console.log(arr);
console.log('Summation: '+sum);
