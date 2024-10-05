// ? ==========================================================
// ?                   FONKSİYONLAR-SCOPE
// ? ==========================================================
console.log("************ 4- SCOPE *************");

//! Global scope (gökteki yildizlar gibi herkes görebilir)

let first = 5;
let second = 34;
let third = 456;
//let second = 9;

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
//console.log(fourth); //süslü içinde kaldı

//*********************** */

let number = 11; //!global-scope

const fonksiyon = () => {
  let number = 56; //!function-scope
  number++;

  return number;
};

console.log(number); //11

console.log(fonksiyon()); //57

//! zorlamayla icerideki number'i fonksiyon return'ü sayesinde, globaldeki number number=fonksiyon()//golbal scope'taki number'i function scope'taki number console.log((number))//57

// const number=157 // Identifier 'number' has already been declared

//* if-for gibi süslüler block-scope

{
  number++;

  let sayi = 89;
  let sayi2 = sayi + 12;

  console.log(sayi2); //101
}

console.log(number); //12
//console.log(sayi2);//süslü icinde olan süslü icinde kalir

//? VAR datatype

number2 = 100; //! hoisted (number2 ye sonradan type atadım ve type i her VAR  gibi oldu)

var number2 = 123;
console.log(number2);

var result = "HALLO";

if (number2 == 105) {
  let result = "HI!"; //! block-scope

  console.log(result);
} else {
  result = "SALUT"; //!global den gelen result
}

console.log(result);
