let rastgeleSayi = Math.ceil(Math.random() * 20);

console.log(rastgeleSayi); // yukarida yazdigimiz Math komutunun calisip calismadigini console'da kontrol ettik

let mesaj = document.querySelector(".msg");

//! her check butonuna basinca olacaklar:

document.querySelector(".check").onclick = () => {
  let tahmin = document.querySelector(".guess");

  if (tahmin.value == rastgeleSayi) {
    document.querySelector(".body").style.backgroundColor = "green";

    //console.log(mesaj);

    mesaj.textContent = "Terbikler...";

    document.querySelector(".number").textContent = rastgeleSayi;
  } else if (tahmin.value > rastgeleSayi) {
    mesaj.textContent = "AZALT";
  } else {
    mesaj.textContent = "ARTTIR";
  }
};

//! soru isareti kutusuna tiklandiginda yeni yarismaci icin sayfayi hazirla:

document.querySelector(".number").onclick = () => {
  //*bilgisayar yeni bir sayı tutsun:
  rastgeleSayi = Math.ceil(Math.random() * 20);

  //*body'nin rengi turuncu olsun:
  document.querySelector(".body").style.backgroundColor = "tomato";

  //* tahmin beliren kutuda tekrar ? olsun:
  document.querySelector(".number").textContent = "?";

  //*mesaj kısmında "oyun yeni oyuncu için tekrar başlıyor" yazsın:
  mesaj.textContent = "oyun yeni oyuncu için tekrar başlıyor";
};
