// ? =========================================================
// ?                    FONKSİYONLAR
// ?==========================================================

//!----------------------------------------------------------
//! 2.YÖNTEM  : FUNCTION EXPRESSION
//!-----------------------------------------------------------
// //!Funct expression ve arrow func yontemlerinde
// //! Once fonks tanimlanmalidir sonra cagrilmalidir.
// //! Aksi takdirde hata alırsiniz.
//* Örnek1:tek-çift kontrolü
//**********************************************************/
console.log("******** 2- EXPRESSION*******");

//isEvenOdd(34); Expression da fonksiyon tanimlanmadan cagiramayiz

const isEvenOdd = function (sayi) {
  return (sayi %= 2 == 0 ? "cifttir" : "tektir");
};

//console.log(isEvenOdd(34));

const result = isEvenOdd(35);
console.log(result);

//*örnek-2

const buyukBul = function (a, b, c) {
  let enBuyuk; //finction scope
  if (a > b && a > c) {
    enBuyuk = a;
  } else if (b > a && b > c) {
    enBuyuk = b;
  } else enBuyuk = c;

  console.log(enBuyuk);
};

buyukBul(243, 475, 78);

//*örnek-3 arguments keyword'ü ile

const enBul = function () {
  let enBuyuk = arguments[0];
  let enKucuk = arguments[0];

  for (let i = 1; i < arguments.length; i++) {
    if (arguments[i] > enBuyuk) {
      enBuyuk = arguments[i];
    }

    if (arguments[i] < enKucuk) {
      enKucuk = arguments[i];
    }
  }
  return `en büyük sayi ${enBuyuk}, en kücük sayi ${enKucuk}`;
};

console.log(enBul(34, 111, 777, 678, 56, 2, 5678, 34, 6));

//* örnek-4 bir fonsiyon oconden baska bir fonksiyon cagirilabilir

const usAl = function (a, b) {
  return a ** b;
};

const alanBul = function(a,b) {
    let alan = a*b
    return alan
}

const Hesapla = function() {

}

Hesapla()