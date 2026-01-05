const prompt=require('prompt-sync')()
let pr=prompt("Enter n number: ")

if (pr===null){
    console.log("Cancelled");    
}

else{

    let n =Number(pr);

if(isNaN(n)){
    console.log("Invalid input");
}
else{
//let sum=0;
 if(n>0){
let isPrime=true;
for(let i=2;i<=Math.floor(n/2);i++){

if(n%i===0){

    isPrime=false;
    break;

    
}

}
console.log(n);

//console.log("Sum is: "+sum);

 }else{

    console.log("Input should be greater than 0");
    
 }


}
}


