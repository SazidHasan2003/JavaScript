const prompt=require('prompt-sync')()
let n=prompt("Enter n number: ")
let sum=0;
while(n>0){

   let rem=n%10;
   n=Math.floor(n/10);

   sum+=rem;

}

console.log(sum);
