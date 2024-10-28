//* ======================================================
//*        OOP - Static and Private  (ES6)
//* ======================================================

//? Static degiskenler ve fonksiyonlar bütün bir class'i ilgilendiren verileri tutmak veya degistirmek icin elverislidir.

//?  Nesnelerden bagimsiz sadece ilgili class'a ait bir degiskene ihtiyac varsa o zaman static degisken kullanmak mantiklidir.

//! ENCAPSULATİON OOP'nin temel unsurlarindan birisidir.
//! Bir class icerisindeki degeri/durumu class disindan dogrudan ve izinsiz erisimlere kapatmak icin kullanilir.

//! Encapsulation, private degiskenler ve private fonksiyonlar yardimiyla yapilir.
//! ES6 ve sonrasinda private degisken ve metodlari belirtmek icin # (hash) kullanilir.

//! Private degiskenlere dogrudan erisilemezler. Bunlara erismek icin class icerisinde tanimlanan public (genel) erisimli getter ve setter metodlar kullanilir.

//! Private metodlara ise class disarisindan da erisilemez.
//! Private metodlara ancak class icerisindeki diger metodlar ile erisilebilir.

class Book {
  //! private bir degisken tanimlayalim

  #maas;

  //! static degisken tanimlamasi

  static counter = 0;

  constructor(title, yazar, year) {
    this.title = title;
    this.yazar = yazar;
    this.year = year;
    this.#maas = 50000;
    this.ozetFunction = function () {
      return "kitap okumak iyidir";
    };

    Book.counter++;
  }

  //? Class icerisinde public metodlar yardimiyla private degiskenler okunabilir.
  //? Bu tip metodlara getter metod denilir.
  //! getter metodlari class icerisinde tanimlanmalidir.

  getMaas() {
    return this.#maas;
  }

  //? Class icerisinde public metodlar yardimiyla private degiskenlere yazilabilir.
  //? Bu tip metodlara setter metod denilir.
  //! setter metodlar class icerisinde tanimlanmalidir.

  setMaas(yenimaas) {
    this.#maas = yenimaas;
  }
}

const book1 = new Book("nutuk", "atatürk", 1930);
console.log(book1);
console.log(book1.title);
console.log(book1.maas); // izin verilmedigi icin göremedik
console.log(Book.counter);
console.log(Book.maas);

console.log(book1.getMaas()); // encapsulation kullanilan veri getter araciligiyla görülebilir

console.log(book1.year); // 1930

book1.year = 1950;

console.log(book1.year); // 1950

book1.setMaas(100000);

console.log(book1.getMaas()); // 100000

//! ABSTRACT'a Örnek

function Kitap(a, b, c) {
  //! sadece developer'in gördügü yerde tutulan veriler abstract(soyutlama) edilmis olur.

  let name = a;
  let yazar = b;

  let getNoDetails = function () {
    return `${name} kitabi $ {yazar} kisisine aittir`;
  };

  this.getDetails = function () {
    return `book ${name} belongs to author ${yazar}`;
  };

  this.year = c;
}

let person = new Kitap("seker portakali", "jose mauro", 1800);

console.log(person);
console.log(person.name); // undefined
console.log(person.getNoDetails); // undefined
console.log(person.getDetails()); // book seker portakali belongs to author jose mauro
