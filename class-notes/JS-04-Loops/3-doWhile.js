//!  ********** DO- WHILE *******
// kontrol sonda yapıldığı için, en az bir defa işlem gerçekleşir.

// do {
//      çalıştırılacak kodlar
//   }
//   while(Koşul);

//Kullanicinin sifresini kontrol eden program, dogru girene kadar soran bir program:

// let password = "1234.)";

// let userPassword;

// do {
//   userPassword = prompt("Enter your a Password:");

//   if (userPassword !== password) {
//     console.log("Hatali Giris yaptiniz, Yeniden giriniz");
//   }
// } while (userPassword !== password);

//Kullanicidan sayi istiyoruz. Sayi girilmediyse tekrar girsin

let sayi;

do {
  sayi = prompt("Bir sayi girin:");
} while (isNaN(sayi));
