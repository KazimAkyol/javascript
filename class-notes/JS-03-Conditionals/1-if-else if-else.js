//! ************ IF - ELSE ********** //
/*
if ( şart )
{ 
    şart durumu doğru ise bu blok çalıştırılır
}
else{
    şart durumu doğru değilse bu blok çalıştırılır.
}
*/

let sicaklik = 30;

if (sicaklik > 50) {
  console.log("yikamaya basla");
} else {
  console.log("isitmaya devam et");
}

// prompt kodu kullanicidan bilgi almayi saglar
//! kullanicidan alinan her bilgi string olarak gelir

// Girilen sayi tek mi cift mi oldugunu yazan program:

// let sayi = Number(prompt("Bir sayi giriniz"));

// let kalan = sayi % 2;

// if (kalan === 0){
//     console.log("Sayi cifttir");
// }
// else{
//     console.log("Sayi tektir");
// }

//! ******* IF - ELSE IF - ELSE ******* //
/* if ( şart1 )
{ 
    şart1 durumu doğru ise bu blok çalıştırılır
} 

else if (şart2 ){
    şart1 durumu doğru değil şart2 durumu doğru ise bu blok çalıştırılır
}

else{
    şart durumu doğru değilse bu blok çalıştırılır.
}
*/

//! HESAP MAKINESI

console.log("*******Hesap Makinesi*******");

// 7 + 5= 12
// 7 - 5= 2
// 7 * 5= 35
// 7 / 5= 1

// const sayi1 = +prompt("1.Sayiyi giriniz:");
// const islem = prompt(" Bir operatör giriniz(+,-,*,/):");
// const sayi2 = +prompt("2.Sayiyi giriniz:");

// let sonuc;

// if (islem == "+") {
//   sonuc = sayi1 + sayi2;
// }
// else if (islem == "-") {
//   sonuc = sayi1 - sayi2;
// }
// else if (islem == "*") {
//   sonuc = sayi1 * sayi2;
// }
// else if (islem == "/") {
//   sonuc = sayi1 / sayi2;
// }
// else {
//   console.log("Yanlis operatör girdiniz");
// }

// console.log("SONUC:", sonuc);

// if (sonuc!=0){
//     console.log("Tebrikler bir sonuc buldunuz", sonuc);
// }

// 1.Kisayol
//  if (sonuc){
//     console.log("Tberikler bir sonuc buldunuz", sonuc);
// }

//short circuit

// && and || or

// && : hepsi dogru olmali, hepsi True sonuncuyu alir

// sonuc && console.log("Bir sonuc buldunuz");

let yas = 17;
let h = "saglikli";

if (yas > 18 && h == "saglikli") {
  console.log("Askerlik yapabilir");
} else {
  console.log("Askerlik yapamaz");
}
