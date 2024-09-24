// ? ==========================================================
// ?                    FONKSİYONLAR
// ? ==========================================================

// !-----------------------------------------------------------
// ! 1.YÖNTEM  : FUNCTION DECLARATION
// !-----------------------------------------------------------

//? Bir fonksiyon belirli bir görevi gerçekleştirmek için tasarlanmış,
//? yeniden kullanılabilir, (tek bir görev için tek fonksiyon olması daha iyidir)
//? test etmesi kolaydır

//! Fonksiyon tanımlama yöntemleri
// Function Declaration (Fonksiyon Bildirimi):
// Function Expression (Fonksiyon İfadesi):
// Arrow Function (Ok Fonksiyonları):
// Function Constructor (Fonksiyon Oluşturucusu):

//! * --------Function-Declaration----------------------------*/
// 1-Fonksiyonlar   function anahtar kelimesi ile tanımlanır
// 2-Function kelimesini ardından fonksiyonun ismi verilir.
// 3-Sonra da bir parantez açılıp kapatılır.
//? fonksiyonun çalışması için çağırmak gereklidir.Çağırılmadığında işleme alınmaz.Bu çağırma işlemine invoke yada call denir.

//! Function declaration yöntemi ile  fonksiyonun tanımlanması çağrılmasından önce veya sonra olabilir.

console.log("************ 1- FUNC DECLARATION *************");

//* örnek-1

yazdir();

//?fonksiyonun tanimlanmasi

function yazdir() {
  console.log("merhaba, nasilsiniz?");
}

//? call - invoke fonksiyonu calistirma
//yazdir

//* örnek-2 (parametreli fonksiyon)

function adYazdir(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

adYazdir("kazim", "fatma", "gökhan");
adYazdir("mehmet", "muhterem");

//* örnek-3 (parametreli, dönüs degerli-return)

function yasHesapla(isim, yil) {
  console.log(
    `benim adim ${isim} ve ben ${new Date().getFullYear() - yil} yasindayim`
  );
}

yasHesapla("mehmet", 1988);
