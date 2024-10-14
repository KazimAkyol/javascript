//* ======================================================
//*                     IOS CALCULATOR
//* ======================================================

const numberButtons = document.querySelectorAll(".num");
const operationButtons = document.querySelectorAll(".operator");
const equalButtons = document.querySelector(".equal");
const ustEkranDiv = document.querySelector(".previous-display");

const altEkranDiv = document.querySelector(".current-display");

//?operator değişkenleri (*******bu şekil global tutmayıp sürekli textcontent te değişiklik yaparsak işlem girildikten sonra, if ile üst ekrana geçer ya sayılar, işlem sonrası bir daha altta sayı göremeyiz ve sürekli uzun uzun yazmamak için, ve işlem e diğer fonksiyonlardan erişemeyiz)

let islem = "";
let altEkranText = "";
let ustEkranText = "";

//?*********** herhangi bir number a basılınca

numberButtons.forEach((number) => {
  number.onclick = () => {
    //!ekranı hazırla

    //?basılan numaraları arka arkaya ekle

    altEkranSayi += number.textContent;
    // altEkranSayi = altEkranSayi + number.textContent;

    //altEkranText += number.textContent;

    updateEkran();
  };
});

//!BURADA YAPILANLARI EKRANA BASTIR

const updateEkran = () => {
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
  // islem yapildiktan sonra yukarida rakam kaliyor ve sonucun önünde eksi kaliyor. Bunu düzelt
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
