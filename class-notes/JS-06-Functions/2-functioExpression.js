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
  let enBuyuk;
  if (a > b && a > c) {
    enBuyuk = a;
  } else if (b > a && b > c) {
    enBuyuk = b;
  } else enBuyuk = c;

  console.log(enBuyuk);
};

buyukBul(23, 45, 78);
