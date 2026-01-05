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
let fact=1;
 if(n>0){

for(let i=n;i>=1;i--){
fact*=i;

}

console.log("factorial is: "+fact);

 }else{

    console.log("Input should be greater than 0");
    
 }


}
}


