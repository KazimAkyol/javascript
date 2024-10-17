//* Wallet-App

//! veri tanimlama

let veri = ["tarih", "miktar", "harcamaAlani"];

let container = document.getElementsByClassName(".container")[0];

//! veri girdisi

const tarih = document.getElementById(".tarih");
const miktar = document.getElementById(".miktar");
const harcamaAlani = document.getElementById(".harcama-alani");

const kaydet = document.getElementById(".kaydet");
const gelirInput = document.getElementById(".gelir-input");
const ekleBtn = document.getElementById(".ekle-btn");

const harcamaTablosu = document.getElementById(".harcama-tablosu");

//! veri kaydetme,ekleme

// veri.forEach((eleman, index) => {
//   container.innerHTML += `${index}.index: ${eleman}`;
// });

//! veri silme

//! toplam bulma
