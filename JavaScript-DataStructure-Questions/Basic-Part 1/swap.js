let a=10;
let b=20;

let temp;

temp=a;
a=b;
b=temp;
console.log("a "+a);
console.log("b "+b);

console.log("\nWithout extra variable\n");
let c=10;
let d=20;
c=c+d;
d=c-d;
c=c-d;

console.log("c "+c);
console.log("d "+d);


//dstructering
[a,b]=[b,a]
console.log("\n\a "+a);
console.log("b "+b);
console.log(Math.cbrt(27));


let f=5;
let g=10;
let h=3;
let s=(f+g+h)/2;

console.log(Math.sqrt(s*(s-f)*(s-g)*(s-h)));
