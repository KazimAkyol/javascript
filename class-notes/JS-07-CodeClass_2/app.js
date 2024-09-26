islem(4, 20);

function islem(par1, par2) {
  console.log(par1); //4
  console.log(par2); //20

  return par1 + par2;
}

console.log(islem(5, 10)); //15

console.log("******** lock *********");

let topla = function (p1, p2) {
  return p1 + p2;
};

console.log(topla(4, 6)); //10

console.log("******** lock *********");

const carp = (p1, p2) => {
  return p1 * p2;
};

console.log(carp(4, 5)); //20

console.log("******** lock *********");

let isim = "harvey watson";
console.log(isim.lenght); //undefined
console.log(isim[0]); //h
console.log(isim[1]); //a
console.log(isim[2]); //r
console.log(isim[isim.lenght - 1]); //undefined

console.log("******** lock *********");

//! 1- Celsius değerini Fahrenheit değerine dönüştüren bir fonksiyon yazınız? (Celsius × 9/5) + 32 = Fahrenheit

//! 2- Belirli bir string ifadenin tersini bulan fonksiyonu yazınız?

//! 3- Belirli bir string ifadenin palindrome olup olmadığını bulan fonksiyonu yazınız?

const string1 = "selles";

//console.log(isPalindrome(string1)); //true

//! 4- Belirli bir sayinin tam bölenlerinin toplamini bulan fonksiyonu yaziniz.

const sumDivisors = function (num) {};

//! 5-Yarıçapı verilen bir dairenin alan ve çevresini bulan program?

//! 6- Belirli vir sayinin asal olup olmadigini bulan fonksiyonu yaziniz:

const isPrime = (num) => {
  if (num < 2) return false;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }

  return true;
};

console.log(isPrime(71));

//! 7- ilk 2 parametreyi carpip 3.parametre üssüne alan fonsiyonu yaziniz:

const transmogrifier = (val1, val2, val3) => {
  let result = Math.pow(val1 * val2, val3);
  console.log(result);
};

transmogrifier(3, 4, 2);

//! 8- Bir sayiyi tersine cevirecek bir fonksiyon yaziniz:

//546
//!1.Yöntem:

//!2.Yöntem:

let numara = 5441681;

console.log(numara);

//! 9- 100-1000'e kadar olan sayilarin polindrom olanlarini belirten/yazan program:

function reverseNumber(number) {
  var reverse = 0;
  var num = number;
  while (num != 0) {
    reverse = reverse * 10;
    reverse = reverse + (num % 10);
    num = Math.trunc(num / 10);
  }
  return reverse === number ? `$(number) polindromdur` : null;
}

for (let i = 100; i < 1000; i++) {
  let x = reverseNumber(i);
  x === null ? null : console.log(x);
}

//! 12 - Mükemmel sayiyi bulan fonksiyonunu yaziniz:

//? Bölen sayilarinin toplami orjinal sayinin 2 katina esitse bu mükemmel sayidir...
//? 6 = 1, 2, 3, 6 = 12 =6*2
//? 28 = 1, 2, 4 ,7, 14, 28 = 56 =28*2

const mukSayi = (sayi) => {
  let toplam = 0;

  for (let i = 2; i <= sayi / 2; i++) {
    if (sayi % i === 0) {
      toplam += i;
    }
  }
  toplam += 1 + sayi;
  //console.log(toplam)

  if (toplam == sayi * 2) {
    console.log("Mükemmel sayidir...");
  } else {
    console.log("Mükemmel sayi degildir...");
  }
};

mukSayi(150); // mükemmel sayi degildir
mukSayi(28); // mükemmel sayidir