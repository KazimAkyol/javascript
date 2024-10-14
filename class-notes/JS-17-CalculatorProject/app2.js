//* ======================================================
//*                     IOS CALCULATOR
//* ======================================================

const numberButtons = document.querySelectorAll(".num");
const operationButtons = document.querySelectorAll(".operator");
const equalButtons = document.querySelector(".equal");
const ustEkranDiv = document.querySelector(".previous-display");

const altEkranDiv = document.querySelector(".current-display");

let islem = "";
let altEkranSayi = "";
let ustEkranSayi = "";

//?*********** herhangi bir number a basılınca

numberButtons.forEach((number) => {
  number.onclick = () => {
    //!ekranı hazırla

    //? basılan numaraları arka arkaya ekle
    altEkranSayi += number.textContent;
    // altEkranSayi = altEkranSayi + number.textContent;

    updateEkran();
  };
});

//!BURADA YAPILANLARI EKRANA BASTIR

const updateEkran = () => {
  //?ilk sayılar altekranda görünsün
  altEkranDiv.textContent = altEkranSayi;

  //?işlem girilince
  // üstekranda altta yazan rakam + işlem gözükmeli

  if (islem) {
    ustEkranDiv.textContent = ustEkranSayi + islem;
  }
};
//?**************HERHANGİ BİR İŞLEME TIKLANDIĞINDA

operationButtons.forEach((op) => {
  op.onclick = () => {
    if (altEkranSayi === "") return;

    //? arka arkaya islem yapilirsa (esittir'e basmadan hesaplama yapilsin)
    if (altEkranSayi && ustEkranSayi) hesapla();
    islem = op.textContent;

    ustEkranSayi = altEkranSayi;

    altEkranSayi = "";

    updateEkran();
  };
});

//?**************eşittir butonuna tıklandığında

equalButtons.onclick = () => {
  hesapla();

  updateEkran();
};

//! HESAPLA FONKSİYONU

const hesapla = () => {
  let sonuc;
  switch (islem) {
    case "+":
      sonuc = altEkranSayi + ustEkranSayi;
      break;
    case "-":
      sonuc = altEkranSayi - ustEkranSayi;
      break;
    case "x":
      sonuc = altEkranSayi * ustEkranSayi;
      break;
    case "÷":
      sonuc = altEkranSayi / ustEkranSayi;
      break;
    default:
      break;
  }

  altEkranSayi = sonuc;
  ustEkranSayi = "";
  //  islem=""
};

//?AC butonuna basıldığında
document.querySelector(".ac").onclick = () => {
  updateEkran();
};

//? PM butonuna basıldığında
document.querySelector(".pm").onclick = () => {
  updateEkran();
};

//?percent % butonuna basıldığında
document.querySelector(".percent").onclick = () => {
  updateEkran();
};
