/* -------------------------------------------------------------------------- */
//!                                  OBJECTS                                  */
/* -------------------------------------------------------------------------- */

//* Diziler : index numaralari ile erisim saglaniyor. 0'dan baslayarak artan bir siralama.

//! Diziler sirali belleklerdir ve sirali bir sekilde ulasilabilir. Ama daha karmasik veriler icin Object(nesne) kullanilir.

const dizi = [1, 2, 3, 4, 5, 6];
//console.log(dizi[0]);

//! Objectlerde key-value (Property-value) degerlerini icerir. Bu o nesnenin özelliklerini belirtir.

//! Herhangi bir veriye erisim icin property (key) adi kullanilir.

//? 1.Object() class'indan türetme:

const car = new Object(); //Bos bir obje ürettik
console.log(car);
car.brand = "BMW";
car.model = 2000;
car.isCrashed = true;

console.log(car);

const car1 = new Object();

car1.brand = "Volvo";
car1.brand = 2005;
car1.isCrashed = false;

console.log(car1);

//? 2.Constructor metodu ile object olusturma:

//* Sanki bir kalip olusturmus olduk
function personelList(id, ad, maas) {
  this.id = id;
  this.ad = ad;
  this.maas = maas;
}

const personal1 = new personelList(1001, "Ali", 10000);
console.log(personal1);

const personal2 = new personelList(1002, "Veli", 20000);
console.log(personal2);

//! ÖNEMLI

//? OBJECT LITERAL - En cok kullanacagimiz Yöntem:

let personalYapisi = {}; //Bos bir obje olusturmak

console.log(typeof personalYapisi);

//* Objectler icinde

let personal = {
  name: "Henry",
  lastName: "Nathan",
  dateOfBirth: 2001,
  isMarried: false,
  workExperience: ["tester", "developer", "team lead"],
  adress: {
    city: "London",
    street: "Baker Street",
    no: 221,
    postalCode: 3214511,
  },
  calculateAge: function () {
    return new Date().getFullYear() - this.dateOfBirth;
  },
  selam: function () {
    return "Merhaba";
  },
  formattedName: function () {
    return `${this.name} ${this.lastName}'nin yasi ${this.calculateAge()}`;
  },
  //* Objectler icinde arrow function kullanarak this metoduyla object icindeki degerlere ulasilmaz.

  arrowFunction: () => {
    return this; //window objesine karsilik gelir. HTML root anlamindadir.
  },
  classicFunction: function () {
    return this;
  },

  //* Arrow function üretilirken this keyword'ünden kurtulmak icin yapilmistir.
  //* Arrow function'da this window objesine karsilik gelir.
  //* window objesi icinde workExperiences isimli bir özellik bulamadigindan undefined
};

console.log(personal);
console.log(personal.name);
console.log(personal.dateOfBirth);
console.log(personal.calculateAge());
console.log(personal.selam());
console.log(personal.formattedName());
console.log(personal.arrowFunction());
console.log(personal.classicFunction());

const obj = {
  name: "Mehmet",
  age: 40,
  fullName: function () {
    //Klasik fonksiyon taniminda this objedeki elemanlardir
    return this.age;
  },
  formattedName: () => {
    return this.age;
  },
};

console.log(obj.fullName());
console.log(obj.formattedName());

