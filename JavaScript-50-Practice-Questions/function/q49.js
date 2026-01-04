let kabab=(str)=>{
    
    return str.split(" ").join("-");
    
}

console.log(kabab("sazid hasan sarker"));


console.log("\nwithout split\n")

let kaba=(str)=>{
    
    return str.replaceAll(' ','-');
    
}

console.log(kaba("sazid hasan sarker"));