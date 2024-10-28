//* ======================================================
//*     OOP - Inheritance and Polymorphism(ES6)
//*         (kalıtım,miras)ve(çok biçimlilik)
//* =====================================================

//? Extends keyword ü, parent class'ın işlevselliğini child class'a genişletmek (extend) için kullanılır... (INHERITANCE)

//* Polymorphism object-oriented programming concept'li bir programlama kavramıdır,bir variable'ın, nesnenin, ya da fonksiyonun,birden çok form alma özelliğini ifade eder.

//* In the OOP, Polymorphism genellikle  Overloading and Overriding ile gerçekleştirilir (Overriding=aynı ada sahip iki fonksiyon tanımlarsanız, tanımlanan sonuncusu önceden tanımlanmış sürümü geçersiz kılar ve fonsiyona her çağrı yapıldığında, son tanımlanan fonksiyon yürütülür.)(Overloading=overloading demektir, javascriptte böyle denmez, aynı adlarla fonksiyonu işlemek denir ve JS  direkt overloading'i desteklemez, manuel uğraşmak gerekir.)

class Book {
  constructor(a, b, c) {
    this.title = a;
    this.yazar = b;
    this.year = c;

    this.ozetFunction = function () {
      return `${this.title} kitabini ${this.year} yilinda ${this.yazar} yazmistir`;
    };
  }

  yilHesapla() {
    return `bu kitap ${2024 - this.year} yilliktir`;
  }
}

//! OVERRIDING

class Dergi extends Book {
  constructor(x, y, z, d, e) {
    super(x, y, z);

    this.mounth = d;
    this.fiyat = e;

    //! fonksiyona overriding yapacagim
    this.ozetFunction = function () {
      return `${this.yazar} hat ${this.year} Buch ${this.title} geschrieben`;
    };
  }

  //! overriding

  yilHesapla() {
    return "gökhan, muhterem, kazim günaydin";
  }
}

const dergi1 = new Dergi("kasagi", "ömer seyfettin", 1910, "aralik", 50);

console.log(dergi1.ozetFunction());
console.log(dergi1.yilHesapla());

//! OVERLOADING
// Diger programlama dillerinden farkli olarak JavaScript, Function Overloading'i desteklemez.
// Iste JavaScript'in  Function Overloading'i desteklemedigini gösteren kücük bir kod.

function selamla(a) {
  alert(a);
}
function selamla(a, b, c) {
  console.log(a, b, c);
}

selamla("naber"); // naber undefined undefined

selamla("naber", "nasilsin", "merhaba"); // naber nasilsin merhaba

// Çıktıdaki "undefined" ifadesinin nedeni şudur: JavaScript'te aynı adla iki işlev tanımlanırsa, son tanımlanan işlev önceki işlevin üzerine yazar.
// Bu durumda, selamla(arg1) öğesinin üzerine selamla(arg1,arg2,arg3) tarafından yazılmıştır, ancak işleve yalnızca bir Argüman ("naber") ilettik. Bu, ikinci ve üçüncü argümanın tanımsız olduğu anlamına gelir, yani ikinci argümanı yazdırmaya çalıştığımızda, “tanımsız” olarak yazdırılır.
// overloading işlevinin JavaScript'te desteklenmediğini gördük, ancak overloading işlevini kendi başımıza uygulayabiliriz; bu, daha fazla sayıda ve daha fazla türde argüman söz konusu olduğunda oldukça karmaşıktır. Aşağıdaki kod, JavaScript'te overloading işlevinin nasıl uygulanacağını anlamanıza yardımcı olacaktır.
//*https://www.geeksforgeeks.org/function-overloading-in-javascript/
