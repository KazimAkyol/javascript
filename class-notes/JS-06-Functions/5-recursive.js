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

console.log(add(7));//21
