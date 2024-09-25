// ? ==========================================================
// ?                   FONKSİYONLAR-SCOPE
// ? ==========================================================
console.log("************ 4- SCOPE *************");

//! Global scope (gökteki yildizlar gibi herkes görebilir)

let first = 5;
let second = 34;
let third = 456;
// let second=9

console.log(first, second, third);

const scopeFunction = () => {
  first = 8;

  let second = 1234; //!function-scope

  let fourth = first + second; //8+1234

  console.log(fourth); //1242

  return second;
};

console.log(scopeFunction());

console.log(first);
console.log(second);
// console.log(fourth);// süslü içinde kaldı

//*********************** */

