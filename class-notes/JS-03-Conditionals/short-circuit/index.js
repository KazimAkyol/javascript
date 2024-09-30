//* Short circuit, programlama terimleri içinde sıkça kullanılan bir kavramdır ve genellikle mantık operatörleri (AND, OR) ve koşullu ifadelerle ilişkilendirilir. Short circuit, bir koşulun değerlendirmesinin bir noktada durdurulması veya atlanması anlamına gelir. Bu, bazı durumları hızlı bir şekilde belirlemeye ve gereksiz işlemleri önlemeye yardımcı olabilir.

//* Short circuit özellikle `&&` (ve) ve `||` (veya) mantık operatörleri ile ilgilidir.

//* 1. `&&` (ve) Operatörü: && operatörü kullanıldığında, sol taraftaki ifade doğru (true) değilse, sağ taraftaki ifade değerlendirilmez ve sonuç hemen `false` olarak kabul edilir.

//* AND Yapısı: Yalnız bir tane 0 olması sonucu tamamanen 0 yapar

//* Short Circuit:

const x = 5;
const y = 8;

if (x > 0 && y > 0) {
  console.log("her iki kosulda dogru");
} else {
  console.log("en az bir kosul yanlis");
}

//* AND mükemmeliyetçidir. Hepsi doğru olunca true değer döndürür. ilk false gördüğünde onu yazar, eğer hepsi true ise sonuncu olanı yazar.

console.log("harvey" && 2 && "merhaba" && 5);
console.log(12 && null && "merhaba");
console.log("0" && [] && "merhaba" / 5 && 404);

//* false üreten değerler: 0, -0 , false , null,undefined ,""

//* OR: Mütevazidir: En az bir doğru yeterlidir. İlk gördüğü true değere sahip değeri yazar.

console.log("" || 5 || NaN || false || -0 || undefined);

let ad = "jonathan";
let statu = "admin";

if (ad === "jonathan" && statu === "admin") {
  console.log("hoş geldin");
} else {
  console.log("bu sisteme giremezsin");
}

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

for (let sayac = 1; sayac <= 10; sayac++) {
  console.log("clarusway");
}

let max = 5;
let sum = 0;

for (let counter = 1; counter <= max; counter++) {
  sum = sum + counter;
  console.log("ne geliyo counter", counter);
  console.log("ne geliyo sum", sum);
}

console.log("toplam", sum);

let sayi = 5;
let faktoryel = 1;

for (let i = 1; i <= sayi; i++) {
  faktoryel = faktoryel * i;
  // console.log("içerde",faktoryel)
}
console.log("dışarda faktoryel", faktoryel);

let str = "*";

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {}
  console.log((str = str + "*"));
  // console.log("\n");
  //   console.log(str);
}
