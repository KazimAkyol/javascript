//* ======================================================
//*                     IOS CALCULATOR
//* ======================================================

const numberButtons = document.querySelectorAll(".num");
const operationButtons = document.querySelectorAll(".operator");
const equalButtons = document.querySelector(".equal");
const ustEkranDiv = document.querySelector(".previous-display");

const altEkranDiv = document.querySelector(".current-display");
let ustEkranSayi = "";
let altEkranSayi = "";
let islem = "";

//?*********** herhangi bir number a basılınca

numberButtons.forEach((number) => {
  number.onclick = () => {
    //!ekranı hazırla

    //?kullanıcı herhangi bir yerde . girmişken, tekrar nokta girmeye kalkarsa giremesin

    if (number.textContent == "." && altEkranSayi.includes(".")) return;

    //? kullanici ilk basta 0 girer, ardindan tekrar 0 girerse, girilmesin, tek 0 döndürsün

    if (altEkranSayi === "0" && number.textContent === "0") return;

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
    ustEkranDiv.textContent = ustEkranSayi + " " + islem;
  } else {
    ustEkranDiv.textContent = "";
  }
};
//?**************HERHANGİ BİR İŞLEME TIKLANDIĞINDA

operationButtons.forEach((op) => {
  op.onclick = () => {
    //? altekran boşken, hiçbir şekilde sayı girişi yapılmamışsa, operatöre basılmasın. boş return yapmaya çalıştığınız işlemi yaptırmaz.
    //? return fonksiyon içerisinde her yerde kullanılabilir. Kod return satırına eriştiğinde fonksiyon durur ve değer fonksiyonun çağırıldığı yere geri gönderilir. Bir fonksiyon içerisinde birden fazla return fonksiyonu da olabilir. return değer döndürmek zorunda değildir.

    if (altEkranSayi === "") return;

    //?arka arkaya işlem yapılırsa (eşittire basmadan hesaplama yapılsın)
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
      sonuc = Number(altEkranSayi) + Number(ustEkranSayi);
      break;
    case "-":
      sonuc = ustEkranSayi - altEkranSayi;
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

  // hesaplama yapıldıktan sonra ekranda olmasını istediklerimi vs code da güncelleyip updateEkran() ı çağırmalıyım
  altEkranSayi = sonuc;
  ustEkranSayi = "";
  islem = "";
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
