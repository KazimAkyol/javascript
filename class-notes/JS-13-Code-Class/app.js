//? Dizi (Array) Metodlar
//* pop(): dizinin son elemanini siler
//* shift(): dizinin basindaki elemani siler
//* push(): dizinin sonuna eleman ekler
//* unshift(): dizinin basina eleman ekler
//* reverse(): diziyi tersine cevirir
//* splice():(baslangic indexi, kacinci eleman secilecekse(silinecek), eklenecek eleman(item,tem2,item3))
//* sort(): sirlama yapar(stringlerde ASCII kodlarina göre siralama yapar)
//* sort ((a,b)=>a-b)
//* includes (deger) iceriyor mu? - (true-false)
//* indexOf(deger): degerin kacinci indexte oldugunun gösterir
//* join (" "): bir dizideki elemanlari birlestirerek string'e cevirir
//* slice(): diziden bir parcayi almamizi saglar
//* concat(): iki diziyi birlestirir
//* every(): dizi icindeki her eleman icin bir callback  fonksiyon cagirir ve call fonksiyondaki sarti sagliyorsa true döndürür

const numbers0 = [45, 16, 22, 14, 78];
console.log(numbers0.every((num) => num > 13)); //true

//* some(): dizi icindeki her eleman icin bir callback fonksiyon cagirir ve call fonksiyondaki en az bir eleman sarti sagliyorsa true döndürür

const numbers1 = [45, 16, 22, 14, 78];
console.log(numbers1.some((num) => num > 80)); //false

//* map(): bir dizi icin bir callback fonksiyon cagirir ve her eleman icin cikan sonuclari bir diziye yazdirir
//* forEach(): bir dizi icin bir callback fonksiyon cagirir. Geriye bir deger döndürmez
//* filter(): bir dizi icin bir callback fonksiyon cagirir ve verilerin kosula göre bir deger döndürür
//* reduce(): dizideki elemanlari toplayarak tek bir degere döndürür

//! 1.Bir dizideki elemanlarin ortalmasini bulan fonksiyon:

const numbers = [34, 56, 56, 87, 90];

// 1.yol

let toplam = 0;
const ortalama = () => {
  for (let i = 0; i < numbers.length; i++) {
    toplam += numbers[i];
  }
  return toplam;
};

console.log(ortalama(numbers) / numbers.length); //64.6

// 2.yol

console.log(numbers.reduce((toplam, eleman) => toplam + eleman) / 5); //64.6

// 3.yol

const sum = numbers.reduce((a, b) => {
  console.log("a", a);
  console.log("b", b);
  return a + b;
}, 0); // ilk index'e 0 verilerek a=0 ile baslandi

const result = sum / numbers.length;

console.log(result); //64.6

//! 2.Girilen bir cümledeki kelime sayisini bulan fonsiyon:

let sentence = "Merhaba           Cohort DE-10TR";

// function kelimeSayisi(sentence) {
//   // Cümleyi boşluklara göre bölüp kelimeleri sayar
//   let kelimeler = sentence.trim().split(/\s+/);
//   return kelimeler.length;
// }

// console.log(kelimeSayisi(sentence)); // 3

function countWords(newSentence) {
  //const sumOfnewCount = newSentence.split(" ").length;

  //Nirden fazla bosluk iceriyorsa
  const sumLetter = newSentence.split(/\s+/).length;

  return sumLetter;

  //return sumOfnewCount;
}

console.log(countWords(sentence));

console.log(sentence.split(/\s+/));

//! 3.Size bir  cümle verildi. "Clarusway" kelimesini bulmanız ve şuna benzer bir cümle döndürmeniz gerekir:
//? Clarusway'i bulamıyorsanız, "I can't find Clarusway :(" yazın.
//? findClarusway("I am finding Clarusway !") ➞ "I found Clarusway at 4!"

test: "I like Clarusway"; // Output : I found at Clarusway at 3!
test: "I like bootcamps "; // Output  I can't find Clarusway :(

function findClarusway(sentence) {
  if (sentence.includes("Clarusway")) {
    return `I found at Clarusway at ${sentence
      .split(" ")
      .indexOf("Clarusway")}`;
  } else {
    return "I can't find Clarusway";
  }
}

let sentence1 = "I like Clarusway";

console.log(findClarusway(sentence1));

console.log(sentence1.split(" ").indexOf("Clarusway"));

//! 4.Bir öğe dizisini alan, tüm yinelenen öğeleri kaldıran ve eski diziyle aynı sırada yeni bir dizi döndüren bir fonksiyon oluşturan program :

// removeDuplicated([1,0,1,0,1]) // Output [1,0]
// removeDuplicated(["the","small","cat","the","cat"]) // ouput["the","small","cat"]

function removeDuplicated(arr) {
  const duplicatedArray = [];
  for (const i of arr) {
    if (!duplicatedArray.includes(i)) {
      duplicatedArray.push(i);
    }
  }
  return duplicatedArray;
}

console.log(removeDuplicated([1, 0, 1, 0, 1]));
console.log(removeDuplicated(["the", "small", "cat", "the", "cat"]));

//! 5.Bir dizide ilk harfi A ile baslayan yeni bir diziye alan fonksiyon:
const words = ["Apple", "Banana", "Orange", "Avocado", "Grape", "Apricot"];

function filterWords(arr) {
  const newArr = arr.filter((word) => word[0] === "A");
  return newArr;
}

console.log(filterWords(words));

//! 6.Bir dizide verilen  maaşlara %10 zam yapılacak ama hala 20000 altında kalanlara ek ödeme planlanacak:
// a- Kaç kişi zam olsa bile 20000 altında kalıyor?
let salaries = [18000, 13000, 17000, 24000, 18500, 21000, 19300];

let belowUnder20K = salaries.filter((salary) => salary * 1.1 < 20000);
console.log(belowUnder20K);

// b- Maasi zamli halde 20000'in altinda kalanlara patronumuz belki ir güzellik yapar. 20000' altinda kalanlari 20000'e tamamlayabilir ama ne kadar bütce ayirmali?

let addBudget = salaries.map((salary) => {
  let increased = salary * 1.1;
  return increased < 20000 ? 20000 - increased : 0;
});

console.log(addBudget);
let totalPayment = addBudget.reduce((sum, payment) => sum + payment, 0);

console.log(totalPayment);

// EXTRA QUESTIONS

//! 7. Bu şekilde girilen stringi "altı,bir,iki,dört,beş,üç,yedi,sekiz,dokuz"
//! 612453789 bu hale dönüştüren program:

let string = "alti,bir,iki,dört,beş,üç,yedi,sekiz,dokuz";
let stringNumber = [];

const splitNumber = () => {
  let newString = string.split(",");
  console.log(newString);

  for (let i = 0; i < newString.length; i++) {
    if (newString[i] === "bir") stringNumber.push(1);
    else if (newString[i] === "iki") stringNumber.push(2);
    else if (newString[i] === "uc") stringNumber.push(3);
    else if (newString[i] === "dört") stringNumber.push(4);
    else if (newString[i] === "bes") stringNumber.push(5);
    else if (newString[i] === "alti") stringNumber.push(6);
    else if (newString[i] === "yedi") stringNumber.push(7);
    else if (newString[i] === "sekiz") stringNumber.push(8);
    else stringNumber.push(9);
  }
  return stringNumber.join("");
};

console.log(splitNumber(string));

//! Bir dizi icindeki sayilari asal olanlarini filtreleyen bir fonksiyonu olusturun: (filter ile yapilmasi önerilen)

const number1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let asalSayilar = numbers.filter((number) => {
  if (number < 2) {
    return false; // bu sayi asal sayi degildir
  }

  for (let i = 0; i < number.length; i++) {
    if (number % i === 0) {
      return false; // bu sayi asal sayi degildir
    }
  }
  return true;
});

console.log(asalSayilar);

//! Bir diziyi tersine çeviren bir map fonksiyonu oluşturun:
const originalArray = [1, 2, 3, 4, 5];

const reversedArray = originalArray.map(
  (value, index, array) => array[array.length - 1 - index]
);

console.log(reversedArray); // [5, 4, 3, 2, 1]
