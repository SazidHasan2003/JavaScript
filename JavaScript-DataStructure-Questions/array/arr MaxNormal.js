let prompt=require('prompt-sync')()

let arr=[1,2,10,4,5];
let max=arr[0];
for(let i=1;i<arr.length;i++){
if(max<arr[i]){
max=arr[i];

}

}


console.log('Maximum: '+max);
