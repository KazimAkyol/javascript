//!  %%%%%%%%%%% DEĞİŞKEN TANIMLAMA  %%%%%%%%%%%%%%%%

//  CONST ve LET, ECMASCRIPT6 ile gelmiştir. VAR eski versiyonlardan beri bulunmaktadır.

// ===================  CONST  ======================
// ? const ve let Modern JS ile gelmiş yeni değişken tanımlama keyword'leridir.
// ! CONST: Sadece başlangıçta değer atanabilir.
// ! Sonradan değeri değiştirilemez (non-primitive'ler (array..) hariç).

const degiskenAdi = "Javascript";

const sayi = 7;

console.log(typeof degiskenAdi, typeof sayi);

//!sayi=8 // Assignment to constant variable.
//!const ile tanimlanan degiskenler degistirilemez

// ======================  LET  ========================
//? LET de CONST gibi yaygın kullanılan değişken tanımlama yöntemidir.
//! CONST'dan farkı, sadece tanımlama kısmında değil istenildiği zaman değeri değiştirilebilir.
//* CONST gibi tanımlandığı blok içerisinde geçerlidir. Başka yerlerden erişilemez. (Block-Scoped)
//? CONST kullanamadığımız durumlarda (değişkenin değeri sürekli değişecekse) LET kullanmalıyız.

let dil = "javascript";

dil = "java";

console.log(dil);

let sayi1 = 23;

sayi1 = 34;

let sayi2 = "45";

console.log(sayi2 + 56);

//! bir string ile number toplanirsa aslinda toplama yapmaz, onlari iki kelime gibi yanyana yazar

console.log(sayi2 - 34);
console.log(sayi2);

// ===================  VAR VERİ TİPİ ===============================
//? VAR ile bir değişken tanımlandığında LET de olduğu gibi değeri sonradan değiştirilebilir.
//! VAR değişkenleri tanımlandığı yere göre global olarak veya fonksiyon içerisinde erişilebilir.
//* - Değişken fonksiyon içerisinde tanımlandı ise ancak o fonksiyonda erişilebilir (Function-scoped).
//? - Eğer, değişken fonksiyonların dışında tanımlandı ise tüm her yerden erişilebilir. (Global-scoped).
//! Günümüzde programcılar global değişken gerekmedikçe VAR ile değişken tanımlamayı seçmemektedir.

var sayi3 = 67;

sayi3 = 56;
console.log(sayi3);

console.log("***************************************");

var ilk = "global";

console.log(ilk);

{
  console.log(ilk);

  ilk = "GLOBAL";
  console.log(ilk);

  var ikinci = "naber";
}

console.log(ikinci);
console.log(ilk); // var oldugu icin süslünün disindan da erisebildik.

console.log("*****************LET********************");

let first = "osman"; //global scope

console.log(first);

{
  //block scope
  console.log(first);

  first = "hüseyin";
  console.log(first);

  let second = 45;
  console.log(second);
}

console.log(first);

//console.log(second);
//let ve const ile tanimlanan block taki elemana disaridan erisemeyiz

console.log("***********CONST***********");

const erste = "kazim";

console.log(erste);

{
  console.log(erste);

  //erste="muhterem"// degistirmeye kalkinca hata verdi

  const zweite = "gökhan";

  console.log(zweite);
}

//console.log(zweite);

// const ve let icin scope(süslü) icinde kalir
