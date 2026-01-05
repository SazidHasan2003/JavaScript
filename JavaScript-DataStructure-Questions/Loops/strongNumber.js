const prompt=require('prompt-sync')()
let n=Number(prompt("Enter n number: "));
let sum=0;
let copy=n;
while(n>0){
let rem=n%10;
   let fact=1;
    for(let i=1;i<=rem;i++){
   fact*=i
   
    }
   sum+=fact;
   n=Math.floor(n/10);

   

}

if(copy===sum){

    console.log("Strong");
    
   }
   else{console.log("Noy strong");
   }

