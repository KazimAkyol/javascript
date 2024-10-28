//* ======================================================
//*             OOP - Classes (ES6)
//* ======================================================

//? Classlar,  objects oluşturmak için template (şablondur).
//? JS deki Classes,   prototypes üzerine kuruludur,  aynı zamanda ES5 syntax ından farklı bazı syntax and semantics e sahiptir .
//? Aslında  class keyword ü  ES6 da tanıtılmıştır, but is syntactical sugar (yalnızca dili kullanmanın bazı yönlerini daha kolay ve genel olarak daha keyifli hale getirmek için eklenen bir dil özelliği için kullanılan bir terimdir.), JavaScript  prototype-based dir.

class Book {
  constructor(a, b, c) {
    this.title = a;

    this.year = c;

    this.yazar = b;

    this.ozetFunction = function () {
      return `${this.title} kitabini ${this.year} yilinda ${this.yazar} yazmistir`;
    };
  }

  yilHesapla() {
    return `bu kitap ${2024 - this.year} yilliktir`;
  }
}

const book1 = new Book("yaprak dökümü", "resat nuri", "1960");
const book2 = new Book("safahat", "mehmet akif", "1910");

console.log(book1);
console.log(book1.ozetFunction());

console.log(book2);
console.log(book2.ozetFunction());

console.log(book1.yilHesapla());
console.log(book2.yilHesapla());

//? INHERITANCE

//* Book object kalibindan Dergi Object'ine kalip getir

class Dergi extends Book {
  constructor(title, yazar, year, d, e) {
    super(title, yazar, year);

    (this.mounth = d), (this.fiyat = e);
  }
}

const dergi1 = new Dergi("marie clare", "elon musk", 1980, "aralik", 50);
const dergi2 = new Dergi("giyim", "ipek bilir", 2000, "nisan", 50);

console.log(dergi1);
console.log(dergi1.ozetFunction());
console.log(dergi1.yilHesapla());

console.log(dergi2);
console.log(dergi2.ozetFunction());
console.log(dergi2.yilHesapla());

