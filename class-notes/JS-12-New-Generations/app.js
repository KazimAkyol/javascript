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

//? Destructuring Yöntemi

let { id, brand, type, price } = product;

console.log(id, brand, type);
console.log(price);
price += 5000;
console.log(price);
console.log(product.price);

const {
  id: pro1Id,
  brand: pro1Brand,
  type: Pro1Type,
  price: pro1Price,
} = product1;

console.log(pro1Brand, pro1Id, pro1Price, Pro1Type);

//? NESTED DESTR
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

//* Example
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

const objGöster = function () {
  return {
    name: "Hazel",
    surname: "Nut",
    job: "team lead",
    age: 40,
  };
};

console.log(objGöster());

let { name, surname, job, age } = objGöster();
console.log("Age:", age);
console.log("Job:", job);

//? Fonksiyon Parametresi

const data = {
  id: "123",
  desc: "This is top secret Information",
  createdTime: "1980",
};

const printData = () => {
  console.log(`${data.id} - ${data.desc} - ${data.createdTime}`);
};

const printDataDestr = () => {
  const { id, desc, createdTime } = data;
  console.log(`${id} - ${desc} - ${createdTime}`);
};

const printDataAir = ({ id, desc, createdTime }) => {
  console.log(`${id} - ${desc} - ${createdTime}`); //! Noluyo HATA!!!
};

printData();
printDataDestr();
//printDataAir();

//* =============================================
//*  DESTRUCTURING (ARRAY)
//* =============================================

const people = ["Fatma", "Gökhan", "Kazim", "Muhterem", "Harvey"];
let fatma = people[0];
console.log(fatma);
const [a, b, c,, d] = people;
console.log(a, b, c);
console.log(d);

//* ==============================================
//*  REST (...)
//* =============================================

//* =============================================
//*  SPREAD (...)
//* =============================================

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
