let array=[5,234,5,6,235,8,45,2];
let temp

for(let j=0; j<array.length-1; j++){
for(let i=0; i<array.length-j-1; i++){

if(array[i]>array[i+1]){

temp=array[i];
array[i]=array[i+1];
array[i+1]=temp;

}

}
}

console.log(array);

