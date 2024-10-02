/* -------------------------------------------------------------------------- */
//!                                  OBJECTS                                  */
/* -------------------------------------------------------------------------- */

//* Dizilere index numaralari ile erisim saglaniyor. 0'dan baslayarak artan bir siralama.

//! Diziler sirali bellekler bölgeleridir ve sirali bir sekilde ulasilabilir. Ama daha karmasik veriler icin Object(nesne) kullanilir.

const dizi = [1, 2, 3, 4, 5, 6];
//console.log(dizi[0]);

//! Objectlerde key-value (Property-value) degerlerini icerir. Bu o nesnenin özelliklerini belirtir.

//! Herhangi bir veriye erisim icin property (key) adi kullanilir.

/* -------------------------------------------------------------------------- */
//*                       // Object Oluşturma Yöntemleri                      */
/* -------------------------------------------------------------------------- */

//? 1.Object() class'indan türetme:

const car = new Object(); //Bos bir obje ürettik
console.log(car);
car.brand = "BMW";
car.model = 2000;
car.isCrashed = true;

console.log(car);

const car1 = new Object();
car1.brand = "Volvo";
car1.model = 2005;
car1.isCrashed = false;

console.log(car1);

/* --------------------------------------------------*/

//? 2.Constructor metodu ile object olusturma:

//* Sanki bir kalip olusturmus olduk
function PersonelList(id, ad, maas) {
  this.id = id;
  this.ad = ad;
  this.maas = maas;
}

const personal1 = new PersonelList(1001, "Ali", 10000);
console.log(personal1);

const personal2 = new PersonelList(1002, "Veli", 20000);
console.log(personal2);

//* Her nesne icin ayri bir kopya olusturulan metotlar, bellek kullanimini arttirabilir.

//! ÖNEMLI !!!
//? OBJECT LITERAL - En cok kullanacagimiz Yöntem:

let personalYapisi = {}; //Bos bir obje olusturmak

console.log(typeof personalYapisi);

//* Objectler icinde farkli veri türlerini barindirabiliriz. String,Number,Boolean,Dizi,Function,Object

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
  formattedName: function () {
    return `${this.name} ${this.lastName}'nin yasi ${this.calculateAge()}`;
  },
  //* Objectler icinde arrow function kullanarak this metoduyla object icindeki degerlere ulasilmaz.

  arrowFunction: () => {
    return this.workExperience; //window objesine karsilik gelir. HTML root anlamindadir.
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

/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
//*                 Object içindeki özelliğe erişim yöntemleri                */
/* -------------------------------------------------------------------------- */

//? 1.DOT NOTAION - Nokta Gösterimi

console.log("Dot Notation ile erisim", personal.dateOfBirth);
console.log(personal);

//? 2.Köseli parantezler icinde özellik belirterek erisim
// Degisken kullanimina olanak saglar.

console.log("Özellik yöntemi ile erisim", personal["dateOfBirth"]);
// Object kullaniminda buna örnek verilecek.

/* -------------------------------------------------------------------------- */
//! NOT: object içinde array varsa array metodları da kullanılabilir.

console.log(personal.name);
console.log(personal.workExperience[1]);
personal.workExperience.forEach((work) => console.log(work));

//? 3.Destructuring yöntemi ile erisim

const { name, lastName, isMarried } = personal;

console.log(name);
console.log(lastName);
console.log(isMarried);
//console.log(workExperience); Destructure islemine tabi olmadigi icin hata verir

/* --------------------------------------------------*/

//! Objeler icine kolaylikla yeni deger ekleyebiliriz:
personal.phoneNumber = "46-789-12-34";
console.log(personal);

//! Objeleri bir baska obje icine aktarabiliriz:
const elemanListesi = personal;
console.log("personal Listesi", personal);
console.log("Eleman Listesi", elemanListesi);

personal.title = "Full Stack Developer";
console.log("*********Kopyalama sonrasi*********");
console.log("personal Listesi", personal);
console.log("Eleman Listesi", elemanListesi);

//* Shallow copying (sig) kopyalama:
// Yukaridaki sekilde yapildiginda degisimlerden etkilenir

/* ------------------------------------------------------------------------*/
//* Kopyasinin etkilenmemesini istemiyorsak - Deep Copy yöntemi kullanilir.

const deepCopyPersonal = JSON.parse(JSON.stringify(personal));
console.log(deepCopyPersonal);
personal.salary = 30000;
console.log("---------------");
console.log("Personal", personal);
console.log("deep copy", deepCopyPersonal);

/* -------------------------------------------------------------------------- */
//*                               OBJECT METHODS                              */
/* -------------------------------------------------------------------------- */

//? 1.İçiçe (nested) Object kullanımı

let workerList = {
  person1: {
    name: "Fatma",
    lastName: "Yilmaz",
    dateOfBirth: 1999,
    salary: 50000,
    job: "developer",
  },
  person2: {
    name: "Gökhan",
    lastName: "Yilmaz",
    dateOfBirth: 1999,
    salary: 40000,
    job: "developer",
  },
  person3: {
    name: "Kazim",
    lastName: "Yilmaz",
    dateOfBirth: 1999,
    salary: 20000,
    job: "tester",
  },
};

console.log(workerList.person1.name);
console.log(workerList["person3"].name);

let x = 2;
console.log(workerList[`person${x}`].name);

/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
//*                             // FOR - OF YAPISI                            */
/* -------------------------------------------------------------------------- */

//* for of

let numberAndLetter = [1, "a", "b", 2, 3, 5, "c", "d"];

for (const x of numberAndLetter) {
  console.log(x);
}

// for of sirali olan dizilerde kullanilir ama objectlerde daha komplex bir yapi oldugu icin for-of kullanilmaz.

// for (const x of workerList) {
//     console.log(x);
// }

// TypeError: workerList is not iterable hatasi aliriz.

/* -------------------------------------------------------------------------- */

//! Object kendi icinde var olan özelliklerdir.
// Object.keys
// Object values
// Object.entries

// let workerList = {
//   person1: {
//     name: "Fatma",
//     lastName: "Yilmaz",
//     dateOfBirth: 1999,
//     salary: 10000,
//     job: "developer",
//   },
//   person2: {
//     name: "Gökhan",
//     lastName: "Yilmaz",
//     dateOfBirth: 1999,
//     salary: 40000,
//     job: "developer",
//   },
//   person3: {
//     name: "Kazim",
//     lastName: "Yilmaz",
//     dateOfBirth: 1999,
//     salary: 20000,
//     job: "tester",
//   },
// };

console.log(Object.keys(workerList));
console.log(Object.values(workerList));
console.log(Object.entries(workerList));

let newValue = Object.entries(workerList);

console.log(newValue[2]);

/* -------------------------------------------------------------------------- */

for (const x of Object.keys(workerList)) {
  console.log(x);
}

for (const y of Object.values(workerList)) {
  console.log(y);
}

for (const [k, v] of Object.entries(workerList)) {
  console.log(`${k} degeri icin maas ${v.salary}`);
}

/* -------------------------------------------------------------------------- */

const devFilter = Object.values(workerList).filter(
  (p) => p.job === "developer"
);
console.log(devFilter);

const devName = Object.values(workerList).filter((p) => p.name[0] === "F");
console.log(devFilter);

const filterSalary = Object.values(workerList).filter((p) => p.salary > 30000);
console.log(filterSalary);

/* -------------------------------------------------------------------------- */

//* FOR IN

for (x in workerList) {
  console.log("for in", x); //sadece key degerlerine ulasiriz
  console.log(workerList[x].name); // workerList[person1].name
}

/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
//*                   JSON -Javascript Object Notation                        */
/* -------------------------------------------------------------------------- */

//* JSON ile ic ice obje karistirmayalim!!!

// [{},{},{},{},{},{},{},{},{}]

const team = [
  {
    id: 1,
    name: "Harold",
    lastName: "Strevy",
    dateOfBirth: 1998,
    job: "developer",
    salary: 10000,
    drivingLicence: true,
  },
  {
    id: 2,
    name: "Farold",
    lastName: "Strevy",
    dateOfBirth: 2002,
    job: "developer",
    salary: 40000,
    drivingLicence: true,
  },
  {
    id: 3,
    name: "Katty",
    lastName: "Perry",
    dateOfBirth: 1998,
    job: "developer",
    salary: 30000,
    drivingLicence: true,
  },
];

//! JSON ile farkli veri türleri barindirilabilir.
// Dillerden bagimsizdir.
// Nesnelerin (objelerin) temsil edilmesi icin anahtar-deger ciftlerini kullanir. Bu, verilerin daha iyi organize edilmesini ve iliskilendirilmesini saglar.
// JSON, veri isleme acisindan hizlidir. Bu nedenle web uygulamalarinda ve servislerde yaygin olarak kullanilir.

//* JSON yeni bir eleman ekleme:

team.push({
  id: 4,
  name: "Harvey",
  lastName: "Perry",
  dateOfBirth: 1998,
  job: "tester",
  salary: 30000,
  drivingLicence: true,
});
console.log(team);

team.forEach((t) => console.log(`${t.name} ${t.lastName}`));

//workerList.forEach((m) => console.log(m.name)); //* Objelerde map,forEach,filter,reduce kullanilmaz JSON bir dizi icinde oldugu icin dizi metodlari map,forEach,filter,reduce kullanilabiliyor.

team.forEach((t) => console.log(`${t.name} ${t.lastName}`));

//* Team objesindeki her bir elemanin maasina %10 zam yapilmis halini göster:

const zam = team.map((m) => m.salary * 1.1);
console.log(zam);
