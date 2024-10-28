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
            return "kitap okumak iyidir"
        }

        Book.counter++;
    }

    //? Class icerisinde public metodlar yardimiyla private degiskenler okunabilir
    //? Bu tip metodlara getter metod denilir.
    //! getter metodlari class icerisinde tanimlanmalidir.

    getMaas() {
        return this.#maas;
    }

    //? Class icerisisinde
}