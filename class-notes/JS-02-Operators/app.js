// * =======================================================
// *                 ARİTMETİK OPERATÖRLER
// * =======================================================

const cola = 50;
const cips = 35;
const dondurma = 20;

console.log("cola" + cips + dondurma); //cola3520

let toplam = cola + cips + dondurma;

console.log(toplam); //105

//! 1 artir

toplam = toplam + 1;

console.log(toplam); //106

toplam++;

console.log(toplam); //107

//!10 arttir

toplam = toplam + 10;

toplam += 10; // toplam=toplam+10 kisa yolu

console.log(toplam); //127

//? + operatörü string concatination islemi de yapar

const sayi1 = "12";
const sayi2 = 45;

console.log(sayi1 + sayi2); //1245
console.log(sayi1 - sayi2); //-33

const isim = "mehmet";
const soyisim = "kara";

console.log("benim adim soyadim " + isim + " " + soyisim);

//!BACKTICK (template literals) ````````

console.log(`benim adim soyadim ${isim} ${soyisim} `);

const sayi3 = "34";
const sayi4 = 71;

console.log(sayi3 + sayi4); //!3471
console.log(sayi4 - sayi3); //!37

//?bazi fonksiyonlar

// Math.floor();  //* her zaman en yakın alt tamsayıya yuvarlar
// Math.ceil();  //* her zaman en yakın üst tam sayıya yuvarlar
// Math.trunc(); //* sayının tam kısmını alır.
// Math.round(); //* en yakın tam sayıya yuvarlar.

// Math.random(); //* 0 ve 1 arasında rastgele sayı üretir.

//toFixed(x) //*virgülden sonra x adet basamak bırak

const ab = 1.3;
const cd = 1.8;
console.log(Math.floor(ab));
console.log(Math.floor(cd));
console.log(Math.ceil(ab));
console.log(Math.ceil(cd));

console.log(Math.trunc(ab));

console.log(Math.round(ab));
console.log(Math.round(cd));

console.log((3.145674893939).toFixed(3));

console.log(Math.random());

//document.write(Math.trunc(ab));

//RANDOM: rastgele
//rasgele sayi üretmek icin kullanilir
//0-1 arasinda bir sayi üretir
console.log(Math.random());
console.log(Math.ceil(Math.random() * 20));

//*ARTTIRMA AZALTMA

let a = 5;

console.log("ilk", a++); //5
console.log("ikinci", a); //6

let b = a++;
console.log(b); //&
console.log(a); //7

let c = 10;

console.log("ilk", ++c); //11

let d = ++c;
console.log(d); //12
console.log(c); //12

let e = 33;

console.log("ilk", e--); //33
console.log("ikinci", e); //32

console.log(--e); //31
console.log(e); //31

//! e yi 5 arttir

e = e + 5;
console.log(e); //36

console.log((e += 5)); //41

//! e yi 5 ile carp

e = e * 5;
console.log(e); //205

console.log((e *= 5)); //1025

console.log((e -= 5)); //1020

console.log((e /= 5)); //204

console.log((e %= 5)); //4

//? CARPMA VE ÜS ALMA

const PI = 3.14;

const yaricap = 5;

console.log(PI * yaricap ** 2); //78.5

//!Math pow(power) bir sayinin kuvvetini yani üssünü almak icin kullanilir

console.log(PI * Math.pow(yaricap, 2)); //78.5

//! Math sqrt metodu verilen degerin karekökünü alir

console.log(Math.sqrt(144)); //12

console.log(144 ** (1 / 2)); //12

//*********** MOD ALMA *************** */

const number = 456;

console.log("birler", 456 % 10); //birler basamagi 6

console.log("onlar", Math.trunc((456 % 100) / 10)); //onlar basamagi 5

console.log("yüzler", Math.trunc(456 / 100)); //yüzler basamagi 4

// * =======================================================
// *                 KARŞILAŞTIRMA OPERATÖRLERİ
// * =======================================================

const nummer = 4;

console.log(nummer == 4); //true
console.log(nummer === 4); //true
console.log(nummer === "4"); //false
console.log(nummer == "4"); //true

console.log(nummer != 4); //nummer 4 e esit degil demi
console.log(nummer != 5); //nummer 5 e esit degil demi
console.log(nummer != "4"); //nummer "4" e esit degil

console.log(nummer > 4); //false
console.log(nummer >= 4); //true

// * =======================================================
// *         MANTIKSAL OPERATORLER (logical operators)
// * =======================================================

console.log("*******************");

//?TRUE
console.log(Boolean(5));
console.log(Boolean(5.8));
console.log(Boolean(-5.8));
console.log(Boolean([1, 2, 5]));

//? 5 FALSE
console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(NaN)); //Not a Number

let v = null;
console.log(v);

const v1 = false || 4;
console.log(v1);
console.log(Boolean(v1));

const v2 = false || 0 || null || 12.6 || false || 3;
console.log(v2);
console.log(Boolean(v2));

const v3 = false || 0 || undefined || "" || null || NaN;
console.log(v3); //NaN
console.log(Boolean(v3));

const v4 = 5 && 3.5 && true && 0;
console.log(v4); //0
console.log(Boolean(v4));

const v5 = 4 && 13.4 && true && -5;
console.log(v5); //-5
console.log(Boolean(v5));

// * =======================================================
// *                 TİP DÖNÜŞÜMLERİ
// * =======================================================

let para = Number("1000") + Number("400");

console.log(para);//1400

console.log("1000" - "400");//600
console.log("1000" * "400");//400000
console.log("1000" / "400");//2.5
console.log("1000" + "400");//1000400

const s1 = 12;
const s2 = "23";
console.log(s1 + Number(s2)); //35

//**** */

let ss1 = "123.456";

console.log(parseInt(ss1)); //stringi tam sayiya cevirir //123
console.log(parseFloat(ss1)); // stringi sayiya cevirir //123.456

let f = 123.678;

console.log(f.toString()); //number'i stringe cevirir

//* ile number'a cevirme

let ee = "12";

console.log(typeof +ee);//12

//* toFixed(x) metodu virgülden x basamak birakmamizi saglar ama sayiyi string'e cevirir

let z = 34.4564563456;

console.log(+z.toFixed(3));

//*prompt komutu da toFixed gibi kullanilan sayiyi string yapar

// const age=+prompt("yasinizi giriniz")

console.log(typeof age);

//* Null Undefined NaN

console.log(typeof null); //object

console.log(Boolean(null)); //false

console.log(null - 5); //-5

console.log(null == undefined); //true
console.log(null === undefined); //false

console.log(null === null); //true

console.log(Number("asdfg")); //NaN
