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

//? 1.DOT NOTAION - Nokta Gösterimi

console.log("Dot Notation ile erisim", personal.dateOfBirth);
console.log(personal);

//? 2.Köseli parantezler icinde özellik belirterek erisim
// Degisken kullanimina olanak saglar.

console.log("Özellik yöntemi ile erisim", personal["dateOfBirth"]);
// Object kullaniminda buna örnek verilecek.

console.log(personal.name);
console.log(personal.workExperience[1]);
personal.workExperience.forEach((work) => console.log(work));

//? 3.Destructuring yöntemi ile erisim:

const { name, lastName, isMarried } = personal;

console.log(name);
console.log(lastName);
console.log(isMarried);
//console.log(workExperience); Destructure islemine tabi olmadigi icin hata verir

//*-------------------------------

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
// Yukaridaki sekilde yapildiginda degisimlarden etkilenir

//* Kopyasinin etkilenmemesini istemiyorsak - Deep Copy yöntemi kullanilir.

const deepCopyPersonal = JSON.parse(JSON.stringify(personal));
console.log(deepCopyPersonal);
personal.salary = 30000;
console.log("---------------");
console.log("Personal", personal);
console.log("deep copy", deepCopyPersonal);





//* for of

let numberAndLetter = [1, "a", "b", 2, 3, 5, "c", "d"];

for (const x of numberAndLetter) {
    console.log(x);
}

// for of sirali olan dizilerde kullanilir ama objectlerde daha komplex bir yapi oldugu icin for-of kullanilmaz.

// for (const x of workerList) {
//     console.log(x);
// }

// TypeError: workerList is not iterable hatasi aliriz






console.log(Object.keys(workerList));
console.log(Object.values(workerList));
console.log(Object.entries(workerList));

let newValue = Object.entries(workerList);

console.log(newValue[2]);

for (const x of Object.keys(workerList)) {
    console.log(x);
}

for (const y of Object.values(workerList)) {
    console.log(y);
}

for (const [k, v] of Object.entries(workerList)) {
    console.log(`${k} degeri icin maas ${v.salary}`);
}


const devFilter = Object.values(workerList).filter((p)=>p.job === "developer");
console.log(devFilter);

const devName = Object.values(workerList).filter((p)=>p.name[0] === "F");
console.log(devFilter);

const filterSalary = Object.values(workerList).filter((p)=>p.salary > 30000);
console.log(filterSalary);

//* FOR IN

//? JSON

//* JSON ile ic ice obje karistirmayalim!!!

// [{},{},{},{},{}]

const team = [
    {
        id:1,
        name:"Harold",
        lastName: "Strevy",
        dateOfBirth: 1998,
        job:"developer",
        salary: 10000,
        drivingLicence: true,
    },
]