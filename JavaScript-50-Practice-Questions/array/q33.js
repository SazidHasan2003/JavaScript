let array=[4,36,7,43,3,6]
array.unshift(3,5);
array.unshift(15);
console.log(array)

console.log("\nWithout unsift js facility\n")
array=[3,5,15, ...array];

console.log(array)




//console.log(array)
