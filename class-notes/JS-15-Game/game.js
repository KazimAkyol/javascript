let rastgeleSayi = Math.ceil(Math.random() * 20);

console.log(rastgeleSayi);

let mesaj = document.querySelector(".msg");
let tahmin = document.querySelector(".guess");

//! her check butonuna basınca olacaklar:

document.querySelector(".check").onclick = () => {
  if (tahmin.value == rastgeleSayi) {
    document.querySelector("body").style.backgroundColor = "green";

    mesaj.textContent = "Tebrikler...";

    document.querySelector(".number").textContent = rastgeleSayi;
  } else if (tahmin.value > rastgeleSayi) {
    mesaj.textContent = "AZALT";
  } else {
    mesaj.textContent = "ARTTIR";
  }
};

//! soru işareti kutusuna tıklandığında yeni yarışmacı için sayfayı hazırla:

document.querySelector(".number").onclick = () => {
  //* bilgisayar yeni bir sayı tutsun
  rastgeleSayi = Math.ceil(Math.random() * 20);

  //* body nin rengi kirmizi olsun
  document.querySelector("body").style.backgroundColor = "red";

  //* tahmin beliren kutuda tekrar ? olsun

  document.querySelector(".number").textContent = "?";

  //* mesaj kısmında "oyun yeni oyuncu için tekrar başlıyor" yazsın

  mesaj.textContent = "oyun yeni oyuncu için tekrar başliyor";
};

//! enter'a basılınca check butonuna basılmış gibi çalışsın:

tahmin.onkeydown = (tus) => {
  console.log(tus);

  if (tus.key == "Enter") {
    // if(tus.keyCode==13){

    document.querySelector(".check").click();
  }
};
