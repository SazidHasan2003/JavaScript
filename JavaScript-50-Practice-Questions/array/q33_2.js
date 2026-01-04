console.log("\n Using a new array\n");
let array = [4, 36, 7, 43, 3, 6];


for(let i=array.length;i>=0;i--){

array[i+3]=array[i];

}

array[0]=8;
array[1]=9;
array[2]=2;

console.log(array);


console.log("\n Using a new array best method\n");


let newArr = [8, 9, 2]; // The values you want to insert at the beginning

// Shift elements of 'array' to the right by 3 positions
for (let i = array.length - 1; i >= 0; i--) {
  array[i + newArr.length] = array[i];  // Shift elements by 3 positions to the right
}

// Insert elements of newArr at the beginning
for (let i = 0; i < newArr.length; i++) {
  array[i] = newArr[i];  // Insert values from newArr at the beginning of array
}

console.log(array);