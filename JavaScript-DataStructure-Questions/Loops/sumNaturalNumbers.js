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
let sum=0;
 if(n>0){

for(let i=1;i<=n;i++){
sum+=i;

}

console.log("Sum is: "+sum);

 }else{

    console.log("Input should be greater than 0");
    
 }


}
}


