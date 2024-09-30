// ?=========================================================
// ?                DİZİLER (ARRAYS)
// ?=========================================================

//* Dizi Tanımlama
//* ---------------------------------------------------------

//! 1. yöntem (Array literal) tercih edilen yöntem

const yaslar = [30, 56, 45, 98, 23];

console.log(yaslar);

//yaslar = [3, 5, 7]; // Assigment to constant variable

//! 2.yöntem (Array constructor):

const cars = new Array("BMW", "TOFAS", "VOLVO");
console.log(cars);

//************************* */

const birth = 1979;

const isimler = [
  "fatma",
  "kazim",
  "gökhan",
  2024 - birth,
  "muhterem",
  true,
  yaslar,
];

console.log(isimler);

console.log(isimler[2]); //gökhan
console.log(isimler[6]); //yaslar
console.log(isimler[6][2]); //45
console.log(--isimler[6][2]); //44 (45-1)
console.log(isimler[6][2]);

isimler[6] = false;
console.log(isimler[6]); // false (43.satirda 6.indeksli eleman false olarak degistirildigi icin console'da false olarak yazdirdi. Bu islem kalicidir.)

console.log(isimler);

// ?=========================================================
// ?                DİZİYİ DEĞİŞTİREN METODLAR (MUTATOR)
// ?=========================================================

//* pop() dizinin son elemanini siler, yazdirmaya kalkarsak sildigi elemani döndürür.

const meyveler = ["Elma", "Erik", "Armut", "Muz", "Kivi"];

meyveler.pop(); // kivi silindi

console.log(meyveler);
console.log(meyveler.pop()); // Muz'u gösterdi ve kalici olarak sildi.
console.log(meyveler);

//* shift() komutu dizinin ilk elemanini siler, yazdirmaya kalkarsak sildigi elemani döndürür.

console.log(meyveler.shift());
console.log(meyveler);

//* push() dizinin sonuna eleman ekler.

meyveler.push("cilek", "Kavun", "karpuz"); // 3 elemani da diziye ekleyecek.

console.log(meyveler);

//* unshift() dizinin basina eleman ekler.

meyveler.unshift("Ayva");

console.log(meyveler);

//* reverse() dizinin tamamini ters cevirir(dizilerde calisir).

meyveler.reverse();

console.log(meyveler);

console.log(meyveler[3].split("").reverse());

console.log(meyveler[3].split("").reverse().join(""));

//* splice() 1. parametre dizinin eleman ekleyeceğimiz index'ini belirtir.
//* 2. parametre=0 ise belirttiğim index'teki elemanı sağa ittir, artık orada yeni yazdığım olsun.
//* 2.parametre=1 ise belirttiğim index teki elemanı sil üstüne yaz.

console.log(meyveler);

meyveler.splice(2, 1, "Ananas");
console.log(meyveler);

meyveler.splice(2, 0, "seftali");
console.log(meyveler);

console.log(meyveler.splice(3, 1)); //3 indexli eleman silindi.
console.log(meyveler);

meyveler.push("cilek");
console.log(meyveler.sort());

const number = [3, 5, 1, 35, 10, 22, 55, 77, 231];

console.log(number.sort());

console.log(number.sort((a, b) => a - b));
