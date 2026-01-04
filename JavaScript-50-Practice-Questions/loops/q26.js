fact=1;
let prompt = require("prompt-sync")();

let num=prompt("Enter the number= ");
for(let i=num;i>=1;i--){
fact*=i;

}

console.log(`factorial of ${num} is ${fact}`);