// ? ==========================================================
// ?                    FONKSİYONLAR
// ? ==========================================================

// !-----------------------------------------------------------
// ! 1.YÖNTEM  : FUNCTION DECLARATION
// !-----------------------------------------------------------

//? Bir fonksiyon belirli bir görevi gerçekleştirmek için tasarlanmış,
//? yeniden kullanılabilir, (tek bir görev için tek fonksiyon olması daha iyidir)
//? test etmesi kolaydır.

//! Fonksiyon tanımlama yöntemleri
// Function Declaration (Fonksiyon Bildirimi):
// Function Expression (Fonksiyon İfadesi):
// Arrow Function (Ok Fonksiyonları):
// Function Constructor (Fonksiyon Oluşturucusu):

//! * --------Function-Declaration----------------------------*/
// 1-Fonksiyonlar function anahtar kelimesi ile tanımlanır.
// 2-Function kelimesinin ardından fonksiyonun ismi verilir.
// 3-Sonra da bir parantez açılıp kapatılır.
//? Fonksiyonun çalışması için çağırmak gereklidir.Çağırılmadığında işleme alınmaz.Bu çağırma işlemine invoke yada call denir.

//! Function declaration yöntemi ile fonksiyonun tanımlanması çağrılmasından önce veya sonra olabilir.

console.log("******** 1- FUNCTION DECLARATION *********");

//* örnek-1:

yazdir();

//?fonksiyonun tanimlanmasi

function yazdir() {
  console.log("merhaba, nasilsiniz?");
}

//? call - invoke fonksiyonu calistirma
//yazdir

//* örnek-2: (parametreli fonksiyon):

function adYazdir(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

adYazdir("kazim", "fatma", "gökhan");
adYazdir("mehmet", "muhterem");

//* örnek-3: (parametreli, dönüs degerli-return):

function yasHesapla(isim, yil) {
  console.log(
    `benim adim ${isim} ve ben ${new Date().getFullYear() - yil} yasindayim`
  );

  return new Date().getFullYear() - yil;
}

const mehmet = yasHesapla("mehmet", 1988); //benim adim mehmet ve ben 36 yasindayim
const muhterem = yasHesapla("muhterem", 1990); //benim adim muhterem ve ben 34 yasindayim
const fatma = yasHesapla("fatma", 2000); //benim adim fatma ve ben 24 yasindayim

//console.log(mehmet);
//console.log(fatma);

console.log((mehmet + muhterem + fatma) / 3); //31.333

//* örnek-4: (tek-cift sorgulamasi):

console.log(isEvenOdd(34));

console.log(isEvenOdd(37));

function isEvenOdd(sayi) {
  //console.log(sayi % 2 == 0 ? "cifttir" : "tektir");

  return sayi % 2 == 0 ? "cifttir" : "tektir";
}

//*örnek-5: (arguments keyword'ü ile karsilama):

function sumAll() {
  //console.log(arguments);
  //console.log(arguments[0]);// [] array saymaya 0'dan baslar, bu yüzden ilk sayi 23'tür.
  //console.log(arguments[1]);// [] array'de 2.sayi 1 numarasina tekabül eder, bu yüzden 2.sayi 34'tür.

  let toplam = 0;
  for (let i = 0; i < 11; i++) {
    toplam = toplam + arguments[i];
  }
  return `${toplam}, ${arguments[4]}`;
}

console.log(sumAll(23, 34, 67, 89, 23, 45, 35, 67, 23, 12, 36));
