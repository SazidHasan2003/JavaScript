let hold=1;
for (let i=1;i<=3;i++){
for (let j=1;j<=3;j++){

process.stdout.write(hold.toString()+ " ");
    hold++
}
process.stdout.write("\n");

}

console.log("\n Different approch\n");
let Hold=1;
for (let i=1;i<=3;i++){
    let str=""
for (let j=1;j<=3;j++){
    str+=`${Hold} `;


    Hold++
}
console.log(str);
}