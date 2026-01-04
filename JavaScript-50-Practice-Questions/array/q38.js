let arr1=[1,2];
let arr2=[3,4];

console.log(arr1.concat(arr2));

console.log("without concat manually");

let newArr=[];
for(let i=0; i<arr1.length; i++){

    newArr.push(arr1[i]);
}

for(let i=0; i<arr1.length; i++){

    newArr.push(arr2[i]);
}

console.log(newArr);