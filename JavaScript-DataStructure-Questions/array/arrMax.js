let prompt=require('prompt-sync')()

let arr=new Array(5);
let max;
for(let i=0;i<arr.length;i++){
let val=Number( prompt(`enter the value ${i}: `));
arr[i]=val;

if(i===0||max<val){
max=val;

}

}

console.log(arr);
console.log('Maximum: '+max);
console.log(max);