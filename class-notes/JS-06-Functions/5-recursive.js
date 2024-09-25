// ? ====================================================
// ?              FONKSİYONLAR - RECURSIVE
// ? ====================================================

//* Kendi kendine cagiran fonksiyona recursive fonksiyon denilir.

//* Özellikle karmasik hesaplamalarin kodlamasini kolaylastirmak icin kullanilir.
//* Ancak, dikkatli kullanmak gerekir. Yoksa stack overflow hatasi alinabilir.

//* Örnek-1: Sayma sayilarinin ilk 7 teriminin toplamini bulunuz:

const add = (n) => {
  let toplam = 0;

  for (let i = 1; i < n; i++) {
    toplam += i;
  }

  return toplam;
};

console.log(add(7)); //21

//* ayni örnegi recursive ile cözelim:

const toplamlar = (n) => {
  if (n < 1) {
    return n;
  } else {
    return toplamlar(n - 1) + n;
  }
};

console.log(toplamlar(1)); //1
console.log(toplamlar(2)); //top(1)+2
console.log(toplamlar(3)); //top(2)+3
console.log(toplamlar(4)); //top(3)+4
console.log(toplamlar(5)); //top(4)+5
console.log(toplamlar(6)); //top(5)+6
console.log(toplamlar(7)); //top(6)+7

//*Örnek-2: Girilen n.terimdeki Fibonacci sayisini yazdiran fonksiyonu recursive olarak kodlayiniz:

console.log("*********** 4-RECURSION ***********");

//? Fibonacci terimleri : 1,1,2,3,5,8,13,21,34...
//! Fibonacci dizisindeki n.terimi bulma fonksiyonu:

const fibo = (n) => {
  if (n <= 2) {
    return 1;
  } else {
    return fibo(n - 1) + fibo(n - 2);
  }
};

console.log(fibo(6));