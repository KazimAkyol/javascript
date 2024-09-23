console.log("***** Code Class - Loops *****");

// && >>>>> and
// || >>>>> or

//AND OPERATÖRÜ

//? her iki degerde true ise son true degeri döndürür, aksi takdirde ilk false degeri döndürür.

console.log(true && 1); // 1
console.log(false && 1); // false
console.log(1 && 3); //3
console.log(0 && 1); // 0
console.log(NaN && 1); //NaN
console.log([] && 1); //Boolen degeri icine yazilinca console da görünür.
console.log(Boolean([])); //true

//OR OPERATÖRÜ
console.log("***OR***");
console.log(true || false); //true
console.log(1 || false); //1
console.log(0 || NaN); //NaN
console.log(213 || "fatma" || true); //213
console.log([] || "" || undefined); //[]
console.log(0 || "" || undefined); //undefined
console.log(0 || false || undefined); //undefined

const sabah = false;

if (sabah) {
  console.log("Günaydin");
} else {
  console.log("Güle Güle");
}

//! 18 yasindan büyüklerin oy kullanabilecegini, 18 yasindan kücüklerin oy kullanamayacagini console a yazdiran kodu yaziniz: (if-else -- ternary)

//let yas = +prompt("yasinizi giriniz");

// if(yas < 18) {
// console.log("Yasiniz 18'den kücüktür.Oy kullanamazsiniz");
// }
// else{
// console.log("Yasiniz 18'den büyüktür.Oy kullanabilirsiniz");
// }

//yas < 18 ? console.log("Yasiniz 18'den kücüktür.Oy kullanamazsiniz") : console.log("Yasiniz 18'den büyüktür.Oy kullanabilirsiniz");

//!1/2 girilen yilin yüzyilini veren program 1788 > 18.yüzyil

//1788/100
//17,88
//17+1

// let yil = +prompt("Yil giriniz");
// let x = Math.trunc(yil/100) + 1;
// console.log(`${x}.yüzyil`);

//! 2 - Bir dersten  alinan notun harfini asagidaki duruma göre console a yazdiriniz

//?  Not:
//?  90'dan büyükse AA.
//? - 80'den büyük yada 90'a eşitse AB,
//? - 70'den büyük yada 80'a eşitse BB,
//? - 60'den büyük yada 70'a eşitse BC,
//? - 50'den büyük yada 60'a eşitse CC,
//? - 40'den büyük yada 50'a eşitse CD,
//? - 30'den büyük yada 40'a eşitse DD,
//? - 30'dan küçük yada eşitse FF,

// let x = +prompt("Lütfen notunuzu giriniz");

// if (x<0 || x>100) {
//     console.log("Lütfen 1-100 arasinda bir deger giriniz");
// }
// else if (x>90) {
//     console.log("AA");
// }
// else if (x>80) {
//     console.log("AB");
// }
// else if (x>70) {
//     console.log("BB");
// }
// else if (x>60) {
//     console.log("BC");
// }
// else if (x>50) {
//     console.log("CC");
// }
// else if (x>40) {
//     console.log("DD");
// }
// else {
//     console.log("FF");
// }

//! 2.Cözüm:

let dersNotu = 83;

if (dersNotu < 0 || dersNotu > 100) {
  console.log("Notunuz 100'den büyük 0'dan küçük olamaz");
} else if (dersNotu > 90) {
  console.log("Harfiniz AA'dir.");
} else if (dersNotu > 80) {
  console.log("Harfiniz AB'dir.");
} else if (dersNotu > 70) {
  console.log("Harfiniz BB'dir.");
} else if (dersNotu > 60) {
  console.log("Harfiniz BC'dir.");
} else if (dersNotu > 50) {
  console.log("Harfiniz CC'dir.");
} else if (dersNotu > 40) {
  console.log("Harfiniz CD'dir.");
} else if (dersNotu > 30) {
  console.log("Harfiniz DD'dir.");
} else {
  console.log("Harfiniz FF'dir.");
}

//! 3 - Artik yil sorusu

//? Artık yıl, bir yıldaki günlerin 365 yerine 366 gün olmasına denir. Bu fazladan gün (artık gün), normalde 28 gün olan şubat ayına 29 Şubat'ın eklenmesi ile elde edilir.  Bunun hesaplanması için aşağıdaki algoritma kullanılır.

//? Bir tarih 4 ile tam bölünüp 100 katları ile tam bölünemiyorsa, veya yıl 400 sayısına tam bölünüyorsa artık yıldır. BU iki şartın dışında yılarda şubat ayı 28 gün, artık yıllarda 29 gün olarak belirlenir.

//? Yukarıdaki bilgilere göre bir yılın artık yıl olup olmadığını konsola yazdıran conditional statement'i yazınız.

// let y = 2001;

// if (y%4 === 0 && y%100 !== 0) {
//     console.log(`${y} yili artik yildir`);
// }
// else if (y % 400 = 000) {
//     console.log(`${y} yili artik yildir`);
// }
// else{
//     console.log(`${y} yili artik yil degildir`);
// }

//! 4 - 1000 ile 2000 arasindaki 13'e bölümünden kalani 3 olan sayilari console a yazdiriniz

// let sayac = 0;

// for (let i = 1000; i < 2000; i++) {
//   if (i % 13 == 3) {
//     console.log(i);
//     sayac++;
//   }
// }

//console.log("kac tane", sayac);

//! 5 - Kullanicidan alinan 5 adet sayinin ortalamasini console a yazdiriniz

//? for ile

// let sayac = 0;
// let toplam = 0;
// for (let i = 1; i <= 5; i++) {
//   let sayi = +prompt("sayi giriniz");
//   sayac++;
//   toplam += sayi;
// }
// console.log(sayac);
// console.log(toplam / sayac);

//?while ile

// let num = 0;
// let result = 0;
// while (num<5) {
//     let sayi = +prompt("sayi giriniz")
//     result += sayi
//     num ++
// }

// console.log(`Girilen ${num} sayinin ortalamasi ${result/num} tir`);

//! 6 - Kullanıcıdan alınan sayıları negatif girilene kadar toplayan ve sonucunu konsola yazdıran kodu yazınız ?

// let sum = 0;

// while (true) {
//   let num = +prompt("lütfen sayi giriniz");
//   if (num < 0);
//   {
//     break;
//   }
//   sum += num;
// }

// console.log(`Girilen sayilarin toplami ${sum}`);

//! 7 - Sizden 1'den 100'e kadar sayilari console a yazdirmaniz istenmektedir ancak 3'ün katlarina gelince 'Fizz', 5'in katlarina gelince 'Buzz' yazacak. Hem 3'ün hem de 5'in katina geldiginde ise 'FizzBuzz' yazdirmaniz istenmektedir.

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

//! 8 - Bir sayinin(number) basamak sayisini yazdiran kodu yaziniz

// let number = +prompt("sayi giriniz");

// let digitCount = 0;
// while (number !==0) {
//     digitCount++
//     number = Math.trunc(number/10);
// }

// console.log(`sayinin basamak sayisi ${digitCount}`);

//! 9 - Kullanicidan alinan n adet kadar olan Fibonacci dizisini aralarinda bosluk olan string sekilde console a yazdiriniz // 0 1 1 2 3 5 8 13

// let a = 0;
// let b = 1;
// let strfibonacci = `0 1`;
// let n = +prompt("kac tane fibonacci sayisi istersiniz");
// for (let i = 2; i < n; i++) {
//   c = a + b;
//   strfibonacci += ` ${c}`;
//   a = b;
//   b = c;
// }
// console.log(strfibonacci);

//! 10 - Asagidaki ciktiyi console a yazdiriniz

//! 11 - Asagidaki ciktiyi console a yazdiriniz

//! 12 - Girilen degerlerin ücgen olusturup olusturamayacagini bulan program:

//let a = +prompt("Birinci kenari giriniz")
