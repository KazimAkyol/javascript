//* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//*                       ITERATION IN ARRAYS
//* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//* ======================================================
//*                     FOR LOOP
//* ======================================================

//* Örnek: dizi1 array'indeki pozitif sayilarla negatif sayilari 2 ayri array'de toplayan function yaziniz:

const dizi1 = [-5, 15, -78, -45, 34, 27, 4, -9, 7];

const negatifler = [];

const pozitifler = [];

for (let i = 0; i < dizi1.length; i++) {
  if (dizi1[i] < 0) {
    negatifler.push(dizi1[i]);
  } else {
    pozitifler.push(dizi1[i]);
  }
}

console.log(negatifler); //[-5, -78, -45, -9]
console.log(pozitifler); //[15, 34, 27, 4, 7]

//* FOR IN ile ayni soruyu cözelim:

const dizi = [-5, 15, -78, -45, 34, 27, 4, -9, 7];

const negatifler1 = [];

const pozitifler1 = [];

for (let i in dizi) {
  if (dizi[i] < 0) {
    negatifler1.push(dizi[i]);
  } else {
    pozitifler1.push(dizi[i]);
  }
}

console.log(negatifler1); //[-5, -78, -45, -9]
console.log(pozitifler1); //[15, 34, 27, 4, 7]

//* FOR OF ile aynı soruyu çözelim:

const dizi2 = [-5, 15, -78, -45, 34, 27, 4, -9, 7];

const negatifler2 = [];

const pozitifler2 = [];

for (let eleman of dizi2) {
  if (eleman < 0) {
    negatifler2.push(eleman);
  } else {
    pozitifler2.push(eleman);
  }
}

console.log(negatifler2); //[-5, -78, -45, -9]
console.log(pozitifler2); //[15, 34, 27, 4, 7]

//* ======================================================
//*                   FOR IN LOOP
//* ======================================================

//*-------------------------------------------------------
//* SORU: Bir hayvanat bahçesinde bulunan hayvan türlerinin bir dizide saklandığını varsayalım.Bu hayvanları türüne göre aramamızı sağlayacak ve o türden kaç adet bulunduğunu ana programa döndürecek fonksiyonu yazınız:

// const animals = ["fil", "aslan", "deve", "fil", "kaplan", "deve", "aslan", "aslan", "aslan"];

// const animal = prompt("bir hayvan ismi giriniz");

// const findAnimal = () => {
//     let sayac = 0;

//     for (let i in animals) {
//         if(animals[i] == animal) {
//             sayac++;
//         }
//     }
//     return `${animal} hayvanindan ${sayac} adet vardir`
// };

// console.log(findAnimal());

//* ======================================================
//*                   FOR OF LOOP
//* ======================================================

//* for of döngüsü, for in döngüsünün bircok veri yapisini kapsayacak sekilde güncellenmis halidir. Bu döngüde dizi icindeki veriye erisirken indisleme kullanmaya gerek yoktur.

//* Örnek: Alttaki dizinin elemanlarini yan yana string olarak yazdiriniz (for of döngüsü kullaniniz):

const arabalar = ["bmw", "mercedes", "audi", "volvo"];

//! 1.yol (join()):

console.log(arabalar.join("")); //bmwmercedesaudivolvo

//! 2.yol (for of):

let araba = "";

for (let i of arabalar) {
  araba += i;
}

console.log(araba); //bmwmercedesaudivolvo

//! for loop=> Bir dizi üzerinde iteration yapmanın orjinal yollarından biridir.
//? forEach=> Bir dizi üzerinde iteration yapmak için daha az kod içeren daha yeni bir yoldur.
//! for loop=>Performansta daha hızlıdır.
//? forEach=> Performansta geleneksel döngüden daha yavaştır.
//! for loop=> Break ifadesi döngüden çıkmak için kullanılabilir.
//? forEach=> Break ifadesi, geri arama işlevi nedeniyle kullanılamaz.

//* every()

//? Tum diziyi itere eder ve aldigi callback fonksiyonuna göre test gerceklestirir.Tüm elemanlar icin test basarili ise true aksi takdirde false deger döndürür.

const yas = [18, 23, 36, 56, 89];

console.log(yas.every((a) => a >= 18)); //true
console.log(yas.every((a) => a > 20)); //false

//* some()

//? Aldigi callback fonksiyonuna (bizim yazdigimiz fonksiyon) göre test gerceklestirir. En az bir eleman icin bile test basarili ise true aksi takdirde false deger döndürür.

console.log(yas.some((eleman) => eleman > 70)); //true
console.log(yas.some((eleman) => eleman < 0)); //false
