const prompt= require('prompt-sync')()

let age=Number(prompt("Enter the age"));
if(isNaN(age)){

    console.log("Wrong input");
    

}
else if(age>=18){
    console.log("Voter");
    
}else{console.log("Not voter");}