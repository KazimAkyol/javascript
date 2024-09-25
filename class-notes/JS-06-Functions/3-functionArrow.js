// ? ==========================================================
// ?                    FONKSİYONLAR
// ? ==========================================================

// !-----------------------------------------------------------
// !3.YÖNTEM  : ARROW FUNCTIONS
// !-----------------------------------------------------------

console.log("****** 3- ARROW FUNCTIONS ******");

// //!Funct expression ve arrow func yontemlerinde
// //! Once fonks tanimlanmalidir sonra cagrilmalidir.
// //! Aksi takdirde hata alırsiniz.

//*örnek-1 : Girilen sayinin 3'ün kati olup olmadigini kontrol eden fonksiyon:

const kontrol = (sayi) =>
  sayi % 3 == 0 ? "bu sayi 3'ün katidir" : "bu sayi 3'ün kati degildir";
console.log(kontrol(34));

const kontrol2 = (sayi) => {
  return sayi % 3 == 0 ? "bu sayi 3'ün katidir" : "bu sayi 3'ün kati degildir";
};

console.log(kontrol2(51));

//*örnek-2 : Menu fonksiyon
//! ok(arrow) fonsiyonunda birden fazla ifade varsa, fonksiyonda süslü parantez kullanmaliyiz.

const menu = () => {
  console.log("=========================");
  console.log("    JAVASCRIPT DERSI     ");
  console.log("=========================");

  const a = "=========================";
  const b = "    JAVASCRIPT DERSI     ";
  const c = "=========================";

  return `${a} ${b} ${c}`;
};

console.log(menu());

//örnek-3: Silindirin hacmini hesapla (pi*r**2*h):

const hacimHesapla = (r, h) => Math.PI * r * r * h;

console.log(hacimHesapla(3, 5).toFixed(2));

//* Örnek-4: Girilen n. terimdeki  Fibonacci sayisını  yazdiran fonksiyonu dongu ile kodlayiniz. ve bu n sayısına kadar olan elemanları toplayınız
//? FIBONACCI terimleri:  1, 1, 2, 3, 5, 8, 13, 21, 34, ...
