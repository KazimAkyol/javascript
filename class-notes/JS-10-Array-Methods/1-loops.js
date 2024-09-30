//* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//*                       ITERATION IN ARRAYS
//* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//* ======================================================
//*                     FOR LOOP
//* ======================================================

//* Örnek: dizi1 array'indeki pozotof sayilarla negatif dayilari 2 ayri array'de toplayan function yaziniz:

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

console.log(pozitifler); //15,34,27,4,7
console.log(negatifler); //-5,-78,-45,-9











//* Örnek: Alttaki dizinin elemanlarini yan yana string olarak yazdir (for of döngüsü kullanin)

const arabalar = ["bmw", "mercedes", "audi", "volvo"];

//! 1.yol (join()):

console.log(arabalar.join(""));

//! 2.yol (for of)













//! for loop=> Bir dizi üzerinde iteration yapmanın orjinal yollarından biridir.	
//? forEach=> Bir dizi üzerinde iteration yapmak için daha az kod içeren daha yeni bir yoldur.
//! for loop=>Performansta daha hızlıdır.	
//? forEach=> Performansta geleneksel döngüden daha yavaştır.
//! for loop=> Break ifadesi döngüden çıkmak için kullanılabilir.	
//? forEach=> Break ifadesi, geri arama işlevi nedeniyle kullanılamaz.


// //***** every()

//? Tum diziyi itere eder ve aldigi callback fonksiyonuna gore test gerceklestirir.Tüm elemanlar icin test basarili ise true aksi takdirde false deger döndürür.

const yas = [18,23,36,56,89];

console.log(yas.every((a)=> a>=18)); //true
console.log(yas.every((a)=> a>20)); //false

// //***** some()






console.log(yas.some((eleman)=> eleman > 70)); //true
console.log(yas.some((eleman)=> eleman < 0)); //false
