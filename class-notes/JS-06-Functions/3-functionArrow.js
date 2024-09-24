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
