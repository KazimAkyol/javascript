//* ======================================================
//*                     IOS CALCULATOR
//* ======================================================

const numberButtons = document.querySelectorAll(".num");
const operationButtons = document.querySelectorAll(".operator");
const equalButtons = document.querySelector(".equal");
const ustEkranDiv = document.querySelector(".previous-display");

const altEkranDiv = document.querySelector(".current-display");

//?operator değişkenleri (*******bu şekil global tutmayıp sürekli textcontent te değişiklik yaparsak işlem girildikten sonra, if ile üst ekrana geçer ya sayılar, işlem sonrası bir daha altta sayı göremeyiz ve sürekli uzun uzun yazmamak için, ve işlem e diğer fonksiyonlardan erişemeyiz)

let ustEkranText = "";
let altEkranText = "";
let islem = "";

//?*********** herhangi bir number a basılınca

numberButtons.forEach((number) => {
  number.onclick = () => {
    //!ekranı hazırla

    //?basılan numaraları arka arkaya ekle

    //updateEkran(number.textContent);

    altEkranText += number.textContent;

    updateEkran();
  };
});

//!BURADA YAPILANLARI EKRANA BASTIR

const updateEkran = () => {
  altEkranDiv.textContent = altEkranText;

  //?işlem girilince
  // üstekranda altta yazan rakam + işlem gözükmeli
  if (islem) {
    ustEkranDiv.textContent = `${ustEkranText} ${islem}`;
  } else ustEkranDiv.textContent = "";
};
//?**************HERHANGİ BİR İŞLEME TIKLANDIĞINDA

operationButtons.forEach((op) => {
  op.onclick = () => {
    islem = op.textContent;
    ustEkranText = altEkranText;

    altEkranText = "";

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
  switch (islem) {
    case "+":
      sonuc = altEkranText + ustEkranText;
      break;
    case "-":
      sonuc = altEkranText - ustEkranText;
      break;
    case "x":
      sonuc = "";
      break;
    case "÷":
      sonuc = "";
      break;
    default:
      break;
  }
  altEkranText = sonuc;
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
