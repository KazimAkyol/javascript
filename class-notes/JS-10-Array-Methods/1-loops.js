//* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//*                       ITERATION IN ARRAYS
//* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//* ======================================================
//*                     FOR LOOP
//* ======================================================

//* Örnek: dizi1 array'indeki pozotof sayilarla negatif dayilari 2 ayri array'de toplayan function yaziniz:

const dizi1 = [-5, 15, -78, -45, 34, 27, 4, -9, 7];

const negatifler = [];

const pozitifler = [];

for (let i = 0; i < dizi1.length; i++) {
  if (dizi1[i] < 0) {
    negatifler.push(dizi1[i]);
  } else {
    pozitifler.push(dizi1[i]);
  }
}

console.log(pozitifler); //15,34,27,4,7
console.log(negatifler); //-5,-78,-45,-9
