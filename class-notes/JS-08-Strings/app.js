// ?=========================================================
// ?                 STRINGLER
// ?=========================================================

//!String Tanimlama

const str1 = "Clarusway DE-10";
const str2 = `Hello world!`;

console.log(str2); // Hello world!

// String constructor ile String olusturma

const str3 = new String("World");
console.log(str3); //"World"

const str4 = "🐝";
console.log(str4);

//! Normalde primitive veri tiplerinin property veya metodu olmaz.
//! Ancak Javascript otomatik olarak primitive String'leri String object'lerine dönüştürür. Bu sayede, String object'lerine ait olan fonksiyonlar veya özellikleri primitive string ile kullanmak mümkün olur.
//!Ayrıca 2 tür arasında çevrim yapmakta mümkündür.

//* -------------------------------------------------------------------------- */
//*                         STRING YAPISI VE INDEXLEME                         */
//* -------------------------------------------------------------------------- */

let kelime = "Clarusway";

console.log(kelime[0]); //C
console.log(kelime[1]); //l
console.log(kelime[2]); //a

for (let i = 0; i <= 8; i++) {
  console.log(kelime[i]); //Clarusway
}

// Stringler, parca olarak degistiremezsiniz
// You cannot mutate a string, since it is a primitive value:
//immutable

kelime[7] = "o";
console.log(kelime); //Clarusway

//! ************STRING PROPERTY ************
// Property bir stringin kendi özelliğidir, bir method(fonksiyon) değildir.
// Parantez açıp kapatmaya gerek yoktur

//?length
//prototype

//! ************STRING METHODS ************
// charAt()             Returns the character at the specified index.
// charCodeAt()	        Returns the Unicode of the character at the specified index.
// concat()	            Joins two or more strings, and returns a new string.
// endsWith()	        Checks whether a string ends with a specified substring.
// fromCharCode()	    Converts Unicode values to characters.
// includes()	        Checks whether a string contains the specified substring.
// indexOf()	        Returns the index of the first occurrence of the specified value in a string.
// lastIndexOf()	    Returns the index of the last occurrence of the specified value in a string.
// localeCompare()	    Compares two strings in the current locale.
// match()	            Matches a string against a regular expression, and returns an array of all matches.
// repeat()	            Returns a new string which contains the specified number of copies of the original string.
// replace()	        Replaces the occurrences of a string or pattern inside a string with another string, and return a new string without modifying the original string.
// search()	             Searches a string against a regular expression, and returns the index of the first match.
// slice()	            Extracts a portion of a string and returns it as a new string.
// split()	            Splits a string into an array of substrings.
// startsWith()	        Checks whether a string begins with a specified substring.
// substr()	            Extracts the part of a string between the start index and a number of characters after it.
// substring()	        Extracts the part of a string between the start and end indexes.
// toLocaleLowerCase()	Converts a string to lowercase letters, according to host machine's current locale.
// toLocaleUpperCase()	Converts a string to uppercase letters, according to host machine's current locale.
// toLowerCase()	    Converts a string to lowercase letters.
// toString()	        Returns a string representing the specified object.
// toUpperCase()	    Converts a string to uppercase letters.
// trim()	            Removes whitespace from both ends of a string.
// valueOf()	        Returns the primitive value of a String object.

// *=========================================================
// *               lenght - Property
// *=========================================================

//? Lenght => Bir stringin bosluklarda dahil kac karaktaerden olustugunu verir.

const metin = "Clarusway🚗";
console.log(metin.length); //11

//Emojiler 2 karakter uzunlugundadir.

for (let i = 0; i <= metin.length - 1; i++) {
  console.log(metin[i]);
}

let emoji = "🚗";
console.log(emoji.length); //2

//! ************STRING METHODS ************
// String metodları () kullanılır. (Arkaplanda fonksiyonlardır)
//? Chaining yani zincirleme olarak birden fazla metod birlikte kullanılabilir.

// *=========================================================
// *   toLowerCase() toUpperCase() immutable=değiştirmez
// *=========================================================
//? Karakterleri büyük harfe dönüştürme => .toUpperCase()

console.log(metin.toUpperCase()); //CLARUSWAY🚗
console.log(metin); //Clarusway🚗
//Degisim gecicidir. Tamamen degistirmiyor, degistirip kaydetmek istiyorsak yeni bir degere atamaliyiz.
let yeniMetin = metin.toUpperCase();
console.log(yeniMetin); //CLARUSWAY🚗

//? Karakterleri kücük harfe dönüstürme => .toLowercase()

console.log(yeniMetin.toLowerCase());
let yeniMetin2 = yeniMetin.toLowerCase();
console.log(yeniMetin2);

/* -------------------------------------------------------------------------- */
/*                      //! String Bİrleştirme yöntemleri                     */
/* -------------------------------------------------------------------------- */

//* + ile birlestirme
//* concat ile birlestirme
//* Template Literal (``) ile baglama

let text1 = "Merhaba";
let text2 = "JavaScript";

console.log(text1 + " " + text2); //Merhaba Javascript

let text = "Merhaba";

text += " clarusway";
console.log(text); //Merhaba clarusway

// let a = 5;
// let b = 4;

// a += b;
// console.log(a);

// *=========================================================
// *               concat() immutable=değiştirmez
// *=========================================================
//? concatanation


const s1 = "Mola Saati";
const s2 = " yaklasiyor";

console.log(s1.concat(s2));
console.log(s1);
console.log(s2);

let newStr = s1.concat(s2);
console.log(newStr);

let str5 = "Merhaba";
let str6 = "Dünya";
console.log(`${str5} ${str6}`);

console.log(`${str5} 
    
    ${str6}
    
    "Nasilsin?"`); //seklinde yazilabilir

//! String Parcalama Metodlari
//split()
//substring()
//substr()
//slice()

const metin1 = "Clarusway IT Bootcamp De10";
console.log(metin1.split(" "));
console.log(metin1);

let parcalanmisMetin = metin1.split(" ");
console.log(parcalanmisMetin);
console.log(parcalanmisMetin[2]); //Bootcamp

for (let i = 0; i < parcalanmisMetin.length; i++) {
  if (parcalanmisMetin[i] === "IT") {
    console.log("Bu cümle IT kelimesi iceriyor"); //Bu cümle IT kelimesi iceriyor
  }
  //console.log(parcalanmisMetin[i]);
}

//Cümleyi harf harf parcalamak icin
console.log(metin1.split("")); //tirnak icerisinde bosluk birakilmadigi icin yazilan kelimeleri harf harf console'a yazdirir.

//! Verilen tarih bilgisini gün/ay/yil olarak ayirma:

let date = "27.09.2024";
let newDate = date.split(".");
console.log(newDate);
let gun = newDate[0];
let ay = newDate[1];
let yil = newDate[2];

console.log("gün", gun);
console.log("ay", ay);
console.log("yil", yil);

let months = "Jan / Feb / Mar / Apr / May / Jun / Aug / Sep / Oct / Nov / Dec";

let newMonth = months.split(" / ");
console.log(newMonth);

//?join metodu

//?reverse metodu

let kelime1 = "Merhaba";

console.log(kelime1.split("").reverse().join(""));

//! Polindrom:
let kelime2 = "madam";

let mesaj =
  kelime2 === kelime2.split("").reverse().join("")
    ? "Polindromdur"
    : "Plondrom degildir";

console.log(mesaj); //Polindromdur

let sentence = "Merhaba Cohort DE-10";
console.log(sentence.slice(8, 14));
console.log(sentence.slice(8));

console.log(sentence.slice(-5));
console.log(sentence.slice(-12, -6));

//substring

console.log(sentence.substring(8, 14));

let cumle = "to be or not To be, Thats is The question";
console.log(cumle.toUpperCase().includes("TO BE"));

//! Bir site adresi güvenli mi degil mi?
//! https : s secure demek

let url = "https://clarusway.com/";

let msg = url.includes("https")
  ? "Bu site güvenlidir"
  : "bu site güvenli degildir";
console.log(msg);

console.log(cumle.indexOf("be")); //3
console.log(cumle.indexOf("The")); //29
// parantez icinde yazilan/aratilan karakter yoksa -1 döndürür
console.log(cumle.lastIndexOf("be"));

//? search() bir string icindeki aranan elemanin ilk index numarasini yazar. Bulamzsa -1 döndürür.
// Büyük kücük harfe duyarlidir.
console.log(cumle.search("be"));

let variable = "Kücük";

console.log(variable.search(/U/)); // -1

// [A-Z] , [a-z] , [0-9]
let cumle2 = "to be or not To be, Thats is The question";
console.log(variable.search(/[A-Z]/));
console.log(variable.search(/[a-z]/));
console.log(cumle2.search(/[A-Z]/));
console.log(cumle2.search(/[a-z]/));
console.log(cumle2.search(/[0-9]/));
console.log(cumle2.search(/[.]/));

// ^ olmayan

console.log(variable.search(/[^A-Z]/));

//? match metodu, bir dize icindeki bir düzenli ifadeye (Regex) uyari kisimlari bulur ve bir dizi olarak döner.
//Bir dizi döndürür.

let phone = "My phone is 123-456-7890";

let result = phone.match(/\d/);
console.log(result);

console.log(phone.startsWith("My"));
console.log(phone.endsWith("890"));

//! Stringde Degisiklik Yapma

let text5 = "Hello World, How are you? World";
let newText = text5.replace("World", "JavaScript");
console.log(newText);
console.log(text5.replaceAll("World", "JavaScript"));

//? bas ve sondaki bosluklari kaldirmak icin => trim

let metin2 = " Clarusway";
console.log(metin2);
let metin3 = metin2.trim();
console.log(metin3);
