let largest=(val)=>{
    let max=0;

   for(let i=1;i<val.length;i++){

    if(val[i]>val[max]){
     
     max=i;

    }
       
  
    }

    return val[max];
    
}

console.log(largest([1,2,30,4,5]));