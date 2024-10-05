// ? =========================================================
// ?                    FONKSİYONLAR
// ?==========================================================

//!-----------------------------------------------------------
//! 2.YÖNTEM  : FUNCTION EXPRESSION
//!-----------------------------------------------------------
//! Function expression ve arrow function yöntemlerinde önce fonksiyon tanimlanmalidir sonra cagrilmalidir.Aksi takdirde hata alırsiniz.

console.log("******** 2- EXPRESSION*******");

//* Örnek-1: (tek-çift kontrolü):

//isEvenOdd(34); Expression da fonksiyon tanimlanmadan cagiramayiz.

const isEvenOdd = function (sayi) {
  return sayi % 2 == 0 ? "cifttir" : "tektir";
};

//console.log(isEvenOdd(34)); //cifttir

const result = isEvenOdd(35);
console.log(result); //tektir

//* Örnek-2:

const buyukBul = function (a, b, c) {
  let enBuyuk; //function scope
  if (a > b && a > c) {
    enBuyuk = a;
  } else if (b > a && b > c) {
    enBuyuk = b;
  } else enBuyuk = c;

  console.log(enBuyuk);
};

buyukBul(243, 475, 78); //475

//* Örnek-3: (arguments keyword'ü ile):

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

//* Örnek-4: Bir fonsiyon oconden baska bir fonksiyon cagirilabilir.

const usAl = function (a, b) {
  return a ** b;
};

const cevreBul = function (a, b) {
  return (a + b) * 2;
};

const alanBul = function (a, b) {
  let alan = a * b;
  return alan;
};

const Hesapla = function (secim, s1, s2) {
  if (secim == "üsalirmisin") {
    console.log(usAl(s1, s2));
  } else if (secim == "cevrebulurmusun") {
    console.log(cevreBul(s1, s2));
  } else if (secim == "alanbulurmusun") {
    console.log(alanBul(s1, s2));
  }
};

Hesapla("üsalirmisin", 3, 5);
Hesapla("cevrebulurmusun", 3, 5);
Hesapla("alanbulurmusun", 3, 5);

//* Örnek-5: Bir ülkedeki ortalama yaşam ömrü 95 yıl olduğuna göre, doğum yılı girilen kişinin yaşını hesaplattıran, yaşına göre ortalama ... ömrünüz kaldı yazıp önerilerde bulunan program:
//* 0-10 : "Sen bu değerleri önemseme hayatın tadını çıkar"
//* 10-20 : "Gezmek görmek istediğin yerler varsa yola çıkma zamanı.."

/* -----------------------------------------------------------*/

const bilgilendirme = function (birth) {
  const ortOmur = 95;

  const kalanOmur = ortOmur - (2024 - birth);

  if (kalanOmur > 0 && kalanOmur <= 10) {
    return "Sen bu degerleri önemseme, hayatin tadini cikar";
  } else if (kalanOmur > 10 && kalanOmur <= 20) {
    return "Gezmek görmek istedigin yerler varsa yola cikma zamani";
  } else return `${kalanOmur} yil ömrün var istedigin gibi yasa`;
};

console.log(bilgilendirme(1939));
console.log(bilgilendirme(1949));
console.log(bilgilendirme(1979));
