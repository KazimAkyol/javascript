//* ===================================================
//*                 Checkout Page Solution
//*  map filter, dest,spread ==========================

//!table da kullanılacak değişkenler
// const kargo = 15.0;
// const vergi = 0.18;

let sepettekiler = [
  { name: "Vintage Backbag", price: 34.99, adet: 1, img: "./img/photo1.png" },
  { name: "Levi Shoes", price: 54.99, adet: 1, img: "./img/photo2.png" },
  { name: "Antique Clock", price: 94.99, adet: 1, img: "./img/photo3.jpg" },
];

//! ekrana bastir

sepettekiler.forEach((a) => {
  document.querySelector(
    "#urun-rowlari"
  ).innerHTML += `<div class="card mb-3" style="max-width: 540px;">
   <div class="row g-0">

    <div class="col-lg-3 col-md-5">
      <img src=${a.img} class=" w-100 rounded-start" alt="..." />
    </div>

    <div class="col-md-7 ">
      <div class="card-body">
        <h5 class="card-title">${a.name}</h5>

        <div class="ürün-price">
          <p class="text-warning h2">
            $<span class="indirim-price">${(a.price * 0.789).toFixed(2)}</span>
            <span class="h5 text-dark text-decoration-line-through">${
              a.price
            }</span>
          </p>
        </div>

        <div class="border border-1 border-dark shadow-lg d-flex justify-content-center p-2">
          <div class="adet-controller">
            <button class="btn btn-secondary btn-sm minus">
              <i class="fas fa-minus"></i>
            </button>
            <p class="d-inline mx-4" id="ürün-adet">${a.adet}</p>
            <button class="btn btn-secondary btn-sm plus">
              <i class="fas fa-plus"></i>
            </button>
          </div>
        </div>

        <div class="ürün-removal mt-4">
          <button class="btn btn-danger btn-sm w-100 remove-ürün">
            <i class="fa-solid fa-trash-can me-2"></i>Remove
          </button>
        </div>

        <div class="mt-2">
          Ürün Toplam: $<span class="ürün-toplam">${(
            a.price *
            0.789 *
            a.adet
          ).toFixed(2)}</span>
        </div>
      </div>
    </div>
  </div>
</div>`;
});

hesaplaCardTotal();

//! silme

document.querySelectorAll(".remove-ürün").forEach((btn) => {
  btn.onclick = () => {
    // tiklanan ögenin 5.dereceden parent'ini silmek
    // btn.parentElement.parentElement.parentElement.parentElement.parentElement.remove()

    //* kisayol
    btn.closest(".card").remove();

    //* tikladigin ürünü diziden de sil

    sepettekiler = sepettekiler.filter(
      (a) => a.name != btn.closest(".card").querySelector("h5").textContent
    );
    console.log(sepettekiler); // kontrol edilebilir, silindikten sonra
  };
});

//! adet arttirma - azaltma

document.querySelectorAll(".adet-controller").forEach((kutu) => {
  const eksi = kutu.firstElementChild; // children[0] seklinde de yazilabilir, cünkü arttirma-azaltma butonunda eksi 0.sirada
  const arti = kutu.lastElementChild; // children[2] seklinde de yazilabilir, cünkü arttirma-azaltma butonunda arti 2.sirada
  const adet = kutu.children[1];

  //? + butonuna tiklandiginda
  arti.onclick = () => {
    //* ekranda adet degistirme

    adet.textContent = +adet.textContent + 1;

    //* ürüntoplam kismini güncelleme (tiklanan adet veya arti üzerinden sülalesinin oldugu card'a gidiyorum ve tüm html(document) yerine, tikladigim sülaleden, ihtiyacim olan ürüntoplam span'ini getirdim textcontent'ine gerekli sonucu bastirdim)

    adet.closest(".card").querySelector(".ürün-toplam").textContent =
      adet.closest(".card").querySelector(".indirim-price").textContent *
      adet.textContent;

    hesaplaCardTotal();
  };

  //? - butonuna tiklandiginda
  eksi.onclick = () => {
    //* ekranda adet degistirme

    adet.textContent = +adet.textContent - 1;

    //* ürüntoplam kismini güncelleme (tiklanan adet veya arti üzerinden sülalesinin oldugu card'a gidiyorum ve tüm html(document) yerine, tikladigim sülalaeden, ihtiyacim olan ürüntoplam span'ini getirdim textcontent'ine gerekli sonucu bastirdim)

    adet.closest(".card").querySelector(".ürün-toplam").textContent =
      adet.closest(".card").querySelector(".indirim-price").textContent *
      adet.textContent;

    hesaplaCardTotal();

    //* adet 1 iken eksiye basilirsa ürünün sülalesi silinsin

    if (adet.textContent < 1) {
      alert("sileyim mi?");

      adet.closest(".card").remove();
    }
  };
});

//! ödenecek tutari hesaplayan fonksiyon

function hesaplaCardTotal() {
  const urunToplam = document.querySelectorAll(".ürün-toplam");

  //! querySelectorAll(), statik bir NodeList döndürür.
  //! burada netten https://softauthor.com/javascript-htmlcollection-vs-nodelist/ adresinden göster
  //* Dizi Değil!
  //* Bir NodeList bir dizi gibi görünebilir ama öyle değildir.
  //* Bir NodeList içinde döngü yapabilir ve düğümlerine index'ine göre başvurabilirsiniz.
  //* Ancak, bir NodeList'te push(), pop() veya join() ve reduce gibi Array yöntemlerini kullanamazsınız.

  //! 2.yol
  // console.log(
  //   Number(urunToplam[0].textContent) +
  //     +urunToplam[1].textContent +
  //     +urunToplam[2].textContent
  // );

  //? Reduce tam olarak Array istiyor, Nodelist yeterli değil

  const araToplam = Array.from(urunToplam).reduce(
    (topl, item) => topl + Number(item.textContent),
    0
  );

  //* ara toplam
  document.querySelector(".aratoplam").textContent = araToplam;

  //* vergi
  document.querySelector(".vergi").textContent = araToplam * 0.18;

  //* kargo
  document.querySelector(".kargo").textContent = 15.0;

  //* sontoplam
  document.querySelector(".toplam").textContent =
    araToplam + araToplam * 0.18 + 15.0;
}
