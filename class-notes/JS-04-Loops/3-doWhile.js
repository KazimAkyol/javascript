//!  ********** DO- WHILE *******
//* Kontrol sonda yapıldığı için, en az bir defa işlem gerçekleşir.

//  do {
//       calistirilacak kodlar
//   }
//   while(Koşul);

//* Kullanicinin sifresini kontrol eden program, dogru girene kadar soran bir program:

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

// sayi tahmini
let devam = "";
do {
  const sayi = Math.trunc(Math.random() * 50);
  console.log(sayi);
  let hak = 5;

  while (hak > 0) {
    hak--;
    tahmin = +prompt("Bir sayı tahmin ediniz:");
    if (tahmin === sayi) {
      console.log("Buldunuz");
      break;
    } else if (tahmin > sayi) {
      console.log("AZALT");
    } else {
      console.log("Arttır");
    }
  }

  devam = prompt("Devam etmek istermisin(E):");
} while (devam === "E");
