//* ======================================================
//*                   FOREACH METHOD
//! NOT: forEach metodu void bir metottur. (Yani herhangi bir değer döndürmez.log(forEach..)=undefined) terminal işlemdir, diziyi fonksiyon içinde yazdırır ve tüketir bitirir. ve siz extra bişey istemedikçe diziyi değiştirmez

//*======================================================

//* Örnek-1:
const prices1 = [100, 250, 50, 90];

prices1.forEach((osman) => console.log(osman));

console.log(prices1); //orijinal diziyi degistirmez.

let toplam = 0;

const terminal = prices1.forEach((a) => console.log((toplam += a)));

console.log(terminal); //undefined

//* Örnek-2:

//* p => prices dizisinin her bir elemanı
//* i => indis
//* prices=> prices dizisidir. farklı isim kullanılabilir
//*  herbir elemanı 2 katıyla çarp ve bütün dizi elemanlarını topla

const prices2 = [100, 250, 50, 90];

let toplam1 = 0;

prices2.forEach((p, i, prices) => {
  //? 
  prices[i] = p * 2;

  //? dizinin elemanlarini toplayip yazdirdim
  console.log((toplam1 += p));
});

console.log(prices2);


//* Örnek-3: Meyveler dizisindeki elemanların harf sayısı 3 ten büyük olan meyveleri büyük harfe çevir.

const meyveler = ["elma", "erik", "muz", "karpuz"];

meyveler.forEach((meyve) => {
  if (meyve.length > 3) {
    console.log(meyve.toUpperCase());
  } else {
    console.log(meyve);
  }
});
