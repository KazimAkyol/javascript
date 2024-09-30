//! ****************** SWITCH - CASE ***********
//! ---------------------------------------------

// Switch-case bloğu if-else gibi kullanılacak, if-else yöntemine alternatif bir yöntemdir.
// Burda bir şart durumunun karşılasacağı birden fazla ihtimale göre ortaya çıkabilme ihtimali olan her duruma karşılık bir yapı verilir .
// Switch de önemli olan şey; bir şartla karşılaştığı zaman onu uygular ve devam eder işte o noktada çıkmasını istiyoruz ve kod blogunu kırıp çıkmazsak (with break) sadece sonuncu değeri yazar.

// let urun = prompt("Bir ürün giriniz");
// let fiyat;
// let urunAdedi = 10;
// let = tutar;

// switch (urun) {
//   case "kalem": {
//     fiyat = "kalem 5$";
//     tutar=urunAdedi*5
//     break;
//   }

//   case "defter": {
//     fiyat = "defter 10$";
//     tutar=urunAdedi*10
//     break;
//   }
//   default: {
//     console.log("gecerli bir ürün giriniz");
//     break;
//   }
// }

// console.log(fiyat);
// console.log(tutar);

//**********hesap makinesi örnegi - switch-case********* */

const sayi1 = +prompt("1.Sayıyı giriniz:");
const islem = prompt(" Bir operator giriniz(+,-,*,/):");
const sayi2 = +prompt("2. sayıyı giriniz:");

// let sonuc;

// switch(islem){
//     case"+":sonuc=sayi1+sayi2;break;
//     case"-":sonuc=sayi1-sayi2;break;
//     case"*":sonuc=sayi1*sayi2;break;
//     case"/":sonuc=sayi1/sayi2;break;
//     default:console.log("Lütfen bir islem operatörü giriniz");
// }
// console.log(sonuc);

switch (islem) {
  case "+":
    console.log(sayi1 + sayi2);
    break;
  case "-":
    console.log(sayi1 - sayi2);
    break;
  case "*":
    console.log(sayi1 * sayi2);
    break;
  case "/":
    console.log(sayi1 / sayi2);
    break;
  default:
    console.log("Gecerli bir operatör giriniz");
}

// let ay=7
// switch (ay){
//     case (ay===12 || ay===1 || ay===2):
//         {console.log("kis");
//         break;}

//     case (ay===3 || ay===4 || ay===5):
//         {console.log("ilkbahar");
//         break;}

//     case (ay===6 || ay===7 || ay===8):
//         {console.log("yaz");
//         break;}

//     case (ay===9 || ay===10 || ay===11):
//         {console.log("sonbahar");
//         break;}

//     default:
//         console.log("Gecersiz bir ay girdiniz");
// }

const day = new Date().getDay();
console.log(day);

switch (day) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
}

//ÖRNEK SORULAR

//1.Bir kullanici girisine göre selamlama yapma
//tr:merhaba
//en:hello
//fr:bonjour

//2.Bir ögrenci notuna göre harf notunu belirleme:
//90 üzeri A
//80 üzeri B
//70 üzeri C
//60 üzeri D
//alti F degeri

//3.Kideme göre alinacak promosyon miktarini gösteren programi switch-case ile olusturalim

//prof: 1000$
//senior: 700$
//junior: 300$
//default: 100$

let maas = 1000;
let kidem = prompt("personelin kidemini giriniz");
let promosyon;

// örn: profesörün promosyonu maas+1000 olacaktır

// 4.Bir alışverişte toplam tutara göre indirim hesaplama:
// let totalAmount = 150;
// 200den büyükse indirim 20%
// 100den büyükse indirim 10%
// bunun dışında indirim yok  :) "fakir bu kadarcık mı alışveriş yaptın" yazalım

// 5.Bir kullanıcıya ait yaşa göre kategori belirleme:
// yaş 2den küçükse çocuk
// 13-19 arası Genç
// 20-64 arası Yetişkin
// 65 üzeri Yaşlı  yazdıralım

// 6.switch-case yapısı kullanılarak bir sıcaklık değerine göre hangi kıyafeti giymeniz gerektiğini belirleyen bir JavaScript kodu yazınız. Kod, sıcaklık değerine bağlı olarak şunları yapmalıdır:

// Eğer sıcaklık 0°C'den düşükse, "Kalın mont giyin" yazdırmalıdır.
// Eğer sıcaklık 0°C ile 10°C arasında ise, "Ceket giyin" yazdırmalıdır.
// Eğer sıcaklık 10°C ile 20°C arasında ise, "Kazak giyin" yazdırmalıdır.
// Eğer sıcaklık 20°C ve üzerindeyse, "Tişört giyin" yazdırmalıdır.
// Herhangi bir geçersiz sıcaklık değeri için "Geçersiz sıcaklık" yazdırmalıdır.

// 7.switch-case yapısını kullanarak bir telefon modeline göre fiyatını belirleyen bir JavaScript kodu yazınız. Kod, telefon modeline göre şunları yapmalıdır:

// Eğer telefon modeli "iPhone 13" ise, "Fiyat: 20,000 TL" yazdırmalıdır.
// Eğer telefon modeli "Samsung Galaxy S21" ise, "Fiyat: 18,000 TL" yazdırmalıdır.
// Eğer telefon modeli "OnePlus 9" ise, "Fiyat: 15,000 TL" yazdırmalıdır.
// Herhangi bir telefon modeli için "Telefon modeli bulunamadı" yazdırmalıdır.
