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

for(let i=1;i<=Math.floor(n/2);i++){
//sum+=i;
if(n%i===0){

    console.log(i);
    
}

}
console.log(n);

//console.log("Sum is: "+sum);

 }else{

    console.log("Input should be greater than 0");
    
 }


}
}


