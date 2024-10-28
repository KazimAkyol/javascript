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
