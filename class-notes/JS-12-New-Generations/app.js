//* =============================================
//*  DESTRUCTURING (OBJECT)
//* =============================================

const product = {
  id: "123456",
  brand: "Apple",
  type: "Smart Phone",
  price: 30000,
};

const product1 = {
  id: "987654",
  brand: "Samsung",
  type: "Tablet",
  price: 5000,
};

//? .notasyonu ile erisim mümkün

console.log(product.type);
console.log(product.price);
let proPrice = product.price;
console.log(proPrice);
proPrice += 1000;
console.log(proPrice);
console.log(product.price);

//? square bracket

console.log("brand", product["brand"]);

//? destructuring yöntemi

let { id, brand, type, price } = product;

console.log(id, brand, type);
console.log(price);
price += 5000;
console.log(price);
console.log(product.price);

//? Key'ler isim degisiklikleriyle yapilir
const {
  id: pro1Id,
  brand: pro1Brand,
  type: Pro1Type,
  price: pro1Price,
} = product1;

console.log(pro1Brand, pro1Id, pro1Price, Pro1Type);

//? NESTED DESTRUCTURING
const insanlar = {
  kisi1: {
    kimlikNo: "1234567890",
    adi: "Ahmet",
    soyadi: "Can",
    meslek: "Mimar",
    maas: 30000,
  },
  kisi2: {
    kimlikNo: "44234567890",
    adi: "Canan",
    soyadi: "Can",
    meslek: "Sosyal Gelişim Uzmani",
    maas: 25000,
  },
};

console.log(insanlar.kisi2.meslek);
console.log(insanlar["kisi2"]["meslek"]);

//? Level-1 Destructuring
//const { kisi1, kisi2 } = insanlar;

// console.log(kisi1);
// console.log(kisi1.adi);

//? Level-2 Detructuring

// const { kimlikNo, adi, soyadi, meslek, maas } = kisi1;
// console.log(kimlikNo, adi, soyadi, meslek, maas);

//? 2 Seviyyeli Destructuring
const {
  kisi1: { adi, soyadi },
  kisi2: { adi: kisi2Ad, soyadi: kisi2Soyad },
} = insanlar;

console.log(adi);
console.log(kisi2Ad);

//* Örnek:
const team = [
  {
    name: "Josh",
    surname: "Barry",
    job: "developer",
    age: 30,
  },
  {
    name: "John",
    surname: "Barry",
    job: "tester",
    age: 45,
  },
  {
    name: "Hazel",
    surname: "Nut",
    job: "team lead",
    age: 40,
  },
];

team.forEach((person) => {
  console.log("Name:", person.name);
  console.log("Surname:", person.surname);
  console.log("Job:", person.job);
  console.log("Age:", person.age);
  console.log("*****************");
});

team.forEach((person) => {
  const { name, surname, job, age } = person;
  console.log("Name2:", person.name);
  console.log("Surname2:", person.surname);
  console.log("Job2:", person.job);
  console.log("Age2:", person.age);
  console.log("*****************");
});

team.forEach((person) => {
  console.log("Name3:", person.name);
  console.log("Surname3:", person.surname);
  console.log("Job3:", person.job);
  console.log("Age3:", person.age);
  console.log("*****************");
});

//!--- FONKSIYONLARDA DESTRUCTURING KULLANIMI ---

const objGoster = function () {
  return {
    name: "Hazel",
    surname: "Nut",
    job: "team lead",
    age: 40,
  };
};

console.log(objGoster());

let { name, surname, job, age } = objGoster();
console.log("Age:", age);
console.log("Job:", job);

//? Fonksiyon Parametresi

const data = {
  id: "123",
  desc: "This is top secret Information",
  createdTime: "1980",
};

const printData = (p) => {
  console.log(`${p.id} - ${p.desc} - ${p.createdTime}`);
};

const printDataDestr = (p) => {
  const { id, desc, createdTime } = p;
  console.log(`${id} - ${desc} - ${createdTime}`);
};

const printDataAir = ({ id, desc, createdTime }) => {
  console.log(`${id} - ${desc} - ${createdTime}`);
};

printData(data);
printDataDestr(data);
printDataAir(data);

//* =============================================
//*  DESTRUCTURING (ARRAY)
//* =============================================

const people = ["Fatma", "Gökhan", "Kazim", "Muhterem", "Harvey"];
let fatma = people[0];
console.log(fatma);
const [a, b, c, , d] = people;
console.log(a, b, c);
console.log(d);

//* ==============================================
//*  REST (...)
//* =============================================

//? Rest operatoru kullanici tarafindan girilen degerleri dizi icerisine konumlandirir. Cesitli kullanim alanlari vardir.

//! 1-Bir diziyi veya objectteki bazi degerlerden geri kalanlarini ayri dizi ya da objelere kopyalanmasini saglayabilir.

//? ARRAY

const araclar = ["Kamyon", "Tir", "Kamyonet", "Motosiklet", "Minibüs", "Taksi"];
const [x, y, z, , ...kalanArac] = araclar;
console.log(x);
console.log(y);
console.log(z);
console.log(kalanArac);

//? OBJECT

const person = {
  ad: "Hazel",
  soyad: "Nut",
  is: "Team Lead",
  yas: 40,
};

const { ad, yas, ...geriKalan } = person;
console.log(yas);
console.log(geriKalan);

//! 2- Bir fonksiyonun argumanlarini diziye cevirmek icin kullanilabilir.

const topla = (a, b, ...kalan) => a + b;
console.log(topla(1, 5, 7, 9, 3));

const toplam = (...sayilar) => {
  return sayilar.reduce((a, b) => a + b);
};

console.log("Toplam:", toplam(1, 5, 7, 9, 3));
//! REST (...) ile non-iterable olan sayilari iterable hale (diziye) cevirmis olduk.

//* =============================================
//*  SPREAD (...)
//* =============================================

//? Spread operatoru ise iterables olan bir elemani bireysel degerler haline getirir.

const havaAraclari = ["ucak", "helikopter", "drone", "fuze"];
const karaAraclari = ["araba", "bisiklet", "scooter"];

const tasitlar = [havaAraclari, karaAraclari];
console.log(tasitlar);

const flatTasitlar = [...havaAraclari, ...karaAraclari];
console.log(flatTasitlar);

//* Örnek:

const cumle = "Uzun ince bir yoldayim";
const cumleDizisi = [...cumle];
console.log(cumleDizisi);

//* Örnek:

const numbers = [2, 5, 8, 3, 4];
console.log(Math.max(...numbers));

//? nested
const sahislar = {
  sahis1: {
    name: "Can",
    surname: "Canan",
    dob: "1990",
    job: "developer",
    salary: "140000",
    drivingLicense: true,
  },
  sahis2: {
    name: "John",
    surname: "Sweet",
    dob: "1990",
    job: "tester",
    salary: "110000",
    drivingLicense: false,
  },
  sahis3: {
    name: "Steve",
    surname: "Job",
    dob: "2000",
    job: "developer",
    salary: "90000",
    drivingLicense: true,
  },
};

//? JavaScript'te Objeler default olarak iterable degildir.
//? Ama for in ve for of döngüleri ile itere edilebilirler.

//? Objelerin key ve value'larini okumak icin built-in metodlar vardir.
//? Bu metodlar aslinda objelerin key ve/veya valu'larini bir dizi olarak döndürür.

for (const s in sahislar) {
  console.log(s);
  console.log(sahislar[s]);
  console.log(sahislar[s].salary);
}

//Kullanisli Object Metodlari

console.log(Object.keys(sahislar)); //? objenin key'leri array olarak döner.
console.log(Object.values(sahislar)); //? objenin value'lari array olarak döner.
console.log(Object.values(sahislar.sahis2)); //? obje'nin value'lari array olarak döner.
console.log(Object.entries(sahislar)); //? objenin key-value cifti array olarak döner.
console.log(Object.entries(sahislar.sahis1)); //? objenin key-value cifti array olarak döner.

for (const key of Object.keys(sahislar)) {
  console.log(sahislar[key].salary);
}

console.log("***************");

for (const v of Object.values(sahislar)) {
  console.log(v);
  console.log(v.name);
}

//! Stack and Heap Örnekleri:

// let a = 5;
// let b = 10;
// b = a;
// a = 22;
// console.log(`a = ${a} b = ${b}`);

// let c = [1, 2, 3, 4, 5];
// let d = c;

// d[0] = 9;

// console.log(d);
// console.log(c);
