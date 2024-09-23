//!  ************  TERNARY OPERATOR ************
// Şarta bağlı durumlar yazmak için başka ve daha kısa bir yöntem de ternary operator
// ES6 ile gelen bir özellik

//ÖRNEK 1: Askerlik örnegi if yapisi ile

// let yas = 17;

// console.log(typeof h);

// if (yas > 18 && h == "saglikli") {
//   console.log("Askerlik yapabilir");
// }
// else {
//   console.log("Askerlik yapamaz");
// }

// Ternary ile ÖRNEK 1

// yas > 18 ? console.log("Askerlik yapabilir") : console.log("Askerlik yapamaz");

const age = 19;
const health = true;
const gender = "male";

if (age > 18 && health == true && gender == "male") {
  console.log("Askerlik yapabilir");
} else {
  console.log("Askerlik yapamaz");
}

let mesaj =
  age > 18 && health == true && gender == "male"
    ? "tamam sen git askere"
    : "hayir asla gidemezsin";

console.log(mesaj);

age > 18 && health == true && gender == "male"
  ? console.log("tamam sen git askere")
  : console.log("hayir asla gidemezsin");

const sayi1 = 56;
const sayi2 = 23;

// toplamindan cikan sonuc 60dan büyükse sayilari carp kücükse bölme yap

let sonuc = sayi1 + sayi2;

sonuc > 60 ? console.log(sayi1 * sayi2) : console.log(sayi1 / sayi2);

let result = sonuc > 60 ? sayi1 * sayi2 : sayi1 / sayi2;

console.log(result);

//grade 50den büyükse gecti degilse kaldi

let grade = 40;

grade > 50 ? console.log("Gectiniz") : console.log("Kaldiniz");

//else icin bir degerimiz yoksa "" veya null verip kurturlabiliriz
grade > 50 ? console.log("Gectiniz") : null;

//ÖRNEK SORULAR
//1.Bir sayi 50 ile 100 arasinda mi? Evetse 50 ile 100 arasinda degilse, bu aralikta degil yazdiralim

let num = 55; //101 yailarak "Bu aralikta degil" seklinde de yazdirabiliriz
num > 50 && num < 100
  ? console.log("50 ile 100 arasinda")
  : console.log("Bu aralikta degil");

//2.Bir sayi hem 3'e hem 5'e tam bölünüyor mu?

//3.Bir araba modeli hem elektrikli hem de 2020’den sonra mı üretilmiş?
let isElectric = true;
let productionYear = 2022;

//4.Bir kişi yetişkin mi ve yaşlı mı (yaş 18'den büyük ve 65’ten büyük)?
let age1 = 70;

//5.Bir sayı hem negatif hem tek mi?
let num1 = -3;

// 6.Bir sayı hem 4’e hem 6’ya tam bölünebiliyor mu?

// 7.Bir sayı 5’e bölünebiliyor mu ve 50’den büyük mü?

// 8.İki sayı toplamı 100’den büyük ve farkları 20’den küçük mü?

// 9.Bir sayı hem çift mi hem de 10’un katı mı?

// 10.Bir sayı 1000’den büyük mü ve 5’e tam bölünebiliyor mu?