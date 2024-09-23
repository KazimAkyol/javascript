//! SAYI TAHMIN OYUNU
// 1'den 50'ye kadar olan sayilardan bilgisayar bir sayi tutacak
// Kullanici bu sayiyi bulmaya calisacak
// Kullanicinin isini kolaylastirmak icin kücük girdiyse ARTTIR, büyük girdiyse AZALT gibi yönlendirmelere yapalim
// Buldugunda TEBRIKLER yazalim:

let = devam = "";
let hak = 5;

do {
  const sayi = Math.trunc(Math.random() * 50);
  console.log(sayi);
  hak = 5;
  while (hak > 0) {
    hak--;
    let tahmin = +prompt("Tahmininizi Giriniz:");

    if (tahmin === sayi) {
      console.log("TEBRIKLER");
    } else if (tahmin > sayi) {
      console.log("AZALT");
    } else {
      console.log("ARTTIR");
    }

    if (hak === 0) {
      console.log("üzgünüm bulamadin, tutulan sayi:", sayi);
    }
  }

  devam = prompt("Devam etmek ister misiniz:(E/e)");
} while (devam.toUppercase() === "E");
