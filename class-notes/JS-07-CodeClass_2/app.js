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
