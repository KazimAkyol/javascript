//* ===========================================================
//*                3- FETCH API
//*============================================================

//? Dis kaynaklardan veri getirmek icin kullanilan basit bir arabirimdir.
//? Ag istekleri yapmamiza ve cevaplari yönetebilmemize olanak saglar.
//? Javascript ortaminda en cok kullanilan Asenkron islem örneklerinin basinda gelmektedir.

//? fetch() fonksiyonu veri getirmek istediginiz kaynagin yolunu gosteren zorunlu bir parametre almaktadir ve bu istegin cevabini gösteren bir Promise döndürmektedir.

//?! Bu baglamda syntatic sugar benzetmesi yapilabilir.

//!throw ile hata fırlatırsak kodumuz o satırda durur. Kodumuzu durdurmak istemezsek diğer sayfadaki kodları kullanırız.

// Informational responses (100 – 199)
// Successful responses (200 – 299)
// Redirection messages (300 – 399)
// Client error responses (400 – 499)
// Server error responses (500 – 599)

// fetch("https://api.github.com/users")
//   .then((res) => res.json())
//   .then((veri) => console.log(veri));

// console.log("merhaba");

// butona basildiktan sonra verilerin gelmesi icin yazilan kod:

document.querySelector(".btn").onclick = () => {
  fetch("https://api.github.com/users")
    .then((res) => {
      if (res.ok != true) {
        throw new Error("url de hata var");
      }

      return res.json();
    })
    .then((veri) => ekranaBastir(veri));
};

const ekranaBastir = (veri) => {
  veri.forEach((person) => {
    document.querySelector(
      ".users"
    ).innerHTML += `<h1>${person.login} </h1> <img width="50%" src=${person.avatar_url}/> <h3>${person.node_id}</h3>`;
  });
};
