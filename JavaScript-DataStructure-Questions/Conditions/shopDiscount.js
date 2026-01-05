const prompt=require('prompt-sync')()
let price=Number(prompt("Enter the ammunt you shoped: "));

if(price>0&&price<=5000){

    console.log(price);
}

else if(price>5000&&price<=7000){

    console.log(price-Math.floor((price*5)/100));
}

else if(price>5000&&price<=7000){

    console.log(price-Math.floor((price*5)/100)); 
}

else if(price>7000&&price<=9000){

    console.log(price-Math.floor((price*10)/100)); 
}

else if(price>9000){

    console.log(price-Math.floor((price*20)/100)); 
}

else{console.log("not a number");
}

//optimized
let dis=0;

if(price>0&&price<=5000){

    dis=0;;
}

else if(price>5000&&price<=7000){

    dis=5;;
}

else if(price>5000&&price<=7000){

    dis=10; 
}

else if(price>7000&&price<=9000){

    dis=15; 
}

else if(price>9000){

    dis=20; 
}

else{console.log("not a number");
}

console.log(price-Math.floor((price*dis)/100)); 