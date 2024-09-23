{
  const a = 5;
  console.log(a);
}

console.log("nedir");

//Short Circuit

const x = 5;
const y = 8;

if(x>0 && y>0) {
    console.log("her iki kosulda dogru");
}
else{
    console.log("en az bir kosul yanlis");
}

console.log("0" && [] && "merhaba"/5 && 404);

for (let sayac = 1; sayac <= 10; sayac++) {
    console.log("clarusway");
}

//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-

let max = 5;
let sum = 0;

for (let counter = 1; counter <= max; counter++) {
    sum = sum + counter;
    console.log("ne geliyor counter", counter);
    console.log("ne geliyor sum", sum);
}

console.log(sum);

//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-

let sayi = 5;
let faktoryel = 1;

for (let i = 1; i <= sayi; i++) {
    faktoryel = faktoryel * i;
    console.log("icerde", faktoryel);
    
}

console.log("disarda faktoryel", faktoryel);

//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-

for (let i = 0; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        console.log("*");
         
    }
    console.log("\n");
    //console.log(str);
}


