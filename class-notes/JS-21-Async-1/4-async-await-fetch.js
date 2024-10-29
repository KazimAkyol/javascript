//*===============================================================
//*                   4- ASYNC-AWAIT
//*===============================================================

//? Async-Await ECMAScript 2017 ile Javascript diline eklenmistir.
//? Aslinda Promise yapisinin syntax olarak basitlestirilmis halidir.

//?! Bu baglamda syntatic sugar benzetmesi yapilabilir.

//* Bir fonksiyonu async hale getirmek icin fonksiyon keyword'ünün önüne async keyword'ü eklenir.

//* Bir async fonksiyon icerisinde await keyword'u ile yapilan istegin cevabinin beklenmesi saglanir.

//* Aslinda dizilis olarak senkron mantiga benzeyen kod yazarak Asenkron kod yazmayı mümkün kilar.

//* Await, promise-temelli herhangi bir fonksiyonun önüne getirilerek getirildigi satirdaki kodun durdurulmasini saglar. Yapilan istek yerine getirilip sonuc degerlerinin döndürülmesi ile kodun calismasi devam eder.

//! JavaScript try anahtar kelimesi kod bloğundaki kodları çalışma zamanında test etmek için kullanılır.

//! JavaScript catch anahtar kelimesi çalışma zaman hatası sonucu oluşan hataları ekrana yazdırmak için kullanılır.

//! JavaScript throw anahtar kelimesi özel hata oluşturmayı sağlar.

//! JavaScript finally anahtar kelimesi hata oluşması veya oluşmaması durumunda (her durumda) çalışacak kodları yazdırmak için kullanılır.

const defaultImage =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/220px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg";

const getirData = async () => {
  try {
    const res = await fetch("https://api.tvmaze.com/search/shows?q=girls");

    if (res.ok != true) {
      throw new Error(`url de hata var ${res.status}`);
    }

    const veri = await res.json();

    ekranaBastir(veri);
  } catch (error) {
    console.log(error);
    console.log("try-catch sayesinde koda devam edilebilir");

    document.querySelector(".users").innerHTML = `
  <img src="./img/404.png"/>
  <h1>${error}</h1>
  
  `;
  }
};

getirData();

const ekranaBastir = (data) => {
  data.forEach((a) => {
    console.log(a);

    document.querySelector(".users").innerHTML += `
  
  <h1>${a.show.name} </h1>
  
  <img  src="${a.show.image?.medium || defaultImage}"/>
  
  `;
  });
};
