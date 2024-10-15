//* ===================================================
//*                 Checkout Page Solution
//*  map filter, dest,spread =========================

//! table'da kullanilacak degiskenler
const kargo = 15.0;
const vergi = 0.18;

let sepettekiler = [
  { name: "Vintage Backbag", price: 34.99, adet: 1, img: "./img/photo1.png" },
  { name: "Levi Shoes", price: 54.99, adet: 1, img: "./img/photo2.png" },
  { name: "Antique Clock", price: 94.99, adet: 1, img: "./img/photo3.png" },
];






































//! Functions

function arttir() {
  var sonuc = document.getElementById("sonuc");
  sonuc.value = Number(sonuc.value) + 1;
}

function azalt() {
  var sonuc = document.getElementById("sonuc");
  sonuc.value = Number(sonuc.value) - 1;
}
