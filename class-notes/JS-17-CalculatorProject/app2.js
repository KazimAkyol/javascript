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

//* herhangi bir number'a basılınca

numberButtons.forEach((number) => {
  number.onclick = () => {
    //!ekranı hazırla

    ekranaHazirlik(number.textContent);

    updateEkran();
  };
});

const ekranaHazirlik = (number) => {
  //? kullanıcı 0 girerse, sonrasında 0 ve . dışında bir sayı girerse, ekranda sadece girilen yeni sayı (0 iptal olsun) gözüksün sadece 7 gözüksün mesela, altEkranYazi = num; bunu yap ama son basımı iptal et ve döndür

  if (altEkranSayi == "0" && number != "0" && number != ".") {
    altEkranSayi = number;
    //! bu döngüden cik, bu isini globaldeki degiskeni degistirerek bitirdi ama bir sey döndürmeyecek, daha önceki 0'i da yok sayacak
    return;
  }

  //? kullanıcı herhangi bir yerde . girmişken, tekrar nokta girmeye calisirsa giremesin

  if (number == "." && altEkranSayi.includes(".")) return;

  //? ekrana 10 basamakli sayi girilebilsin, 11.basamak girilmesin

  if (altEkranSayi.length > 9) return;

  //? kullanici ilk basta 0 girer, ardindan tekrar 0 girerse, girilmesin, tek 0 döndürsün

  if (altEkranSayi === "0" && number === "0") return;

  //? bütün sartlari basari ile gectiyse basılan numaraları arka arkaya ekle

  altEkranSayi += number;
};

//! burada yapilanlari ekrana bastir

const updateEkran = () => {
  //? ilk sayılar altekran'da görünsün

  altEkranDiv.textContent = altEkranSayi;

  //? işlem girilince
  // üstekran'da altta yazan rakam + işlem gözükmeli

  if (islem) {
    ustEkranDiv.textContent = ustEkranSayi + " " + islem;
  } else {
    ustEkranDiv.textContent = "";
  }
};

//* herhangi bir isleme tiklandiginda

operationButtons.forEach((op) => {
  op.onclick = () => {
    //? altekran boşken, hiçbir şekilde sayı girişi yapılmamışsa, operatöre basılmasın. Boş return yapmaya çalıştığımız işlemi yaptırmaz.
    //? return fonksiyon içerisinde her yerde kullanılabilir. Kod return satırına eriştiğinde fonksiyon durur ve değer fonksiyonun çağırıldığı yere geri gönderilir. Bir fonksiyon içerisinde birden fazla return fonksiyonu da olabilir ve return değer döndürmek zorunda değildir.

    if (altEkranSayi === "") return;

    //?arka arkaya işlem yapılırsa (eşittir'e basmadan hesaplama yapılsın)
    if (altEkranSayi && ustEkranSayi) hesapla();

    islem = op.textContent;

    ustEkranSayi = altEkranSayi;

    altEkranSayi = "";

    updateEkran();
  };
});

//* eşittir butonuna tıklandığında

equalButtons.onclick = () => {
  hesapla();

  updateEkran();
};

//* hesapla fonksiyonu

const hesapla = () => {
  let sonuc;
  switch (islem) {
    case "+":
      sonuc = Number(ustEkranSayi) + Number(altEkranSayi);
      break;
    case "-":
      sonuc = ustEkranSayi - altEkranSayi;
      break;
    case "x":
      sonuc = ustEkranSayi * altEkranSayi;
      break;
    case "÷":
      sonuc = ustEkranSayi / altEkranSayi;
      break;
    default:
      break;
  }

  //! hesaplama yapıldıktan sonra ekranda olmasını istediklerimi vs-code'da güncelleyip updateEkran()'ı çağırmalıyım
  altEkranSayi = sonuc;
  ustEkranSayi = "";
  islem = "";
};

//? AC butonuna basıldığında
document.querySelector(".ac").onclick = () => {
  ustEkranSayi = "";
  altEkranSayi = "";
  islem = "";
  updateEkran();
};

//? PM (+-) butonuna basıldığında
document.querySelector(".pm").onclick = () => {
  //* ekranda sayi yokken PM'e basilmasin

  if (altEkranSayi !== "") {
    altEkranSayi = altEkranSayi * -1;
  }
  updateEkran();
};

//?percent (%) butonuna basıldığında
document.querySelector(".percent").onclick = () => {
  //* ekranda sayi yokken percent'e basilmasin

  if (altEkranSayi !== "") {
    altEkranSayi = altEkranSayi / 100;
    updateEkran();
  }
};
