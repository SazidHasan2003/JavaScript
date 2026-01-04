let array=[1,2,3,4,5,6];
console.log(array.slice(0,3));



console.log("C like approch");

let newArr=new Array(3);

for(let i=0; i < newArr.length; i++){

   newArr[i]=array[i];

}
console.log(newArr);
