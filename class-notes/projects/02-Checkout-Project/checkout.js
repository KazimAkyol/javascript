//* ===================================================
//*                 Checkout Page Solution
//*  map filter, dest,spread ==========================

//! table'da kullanılacak değişkenler
const kargo = 15.0;
const vergi = 0.18;

let sepettekiler = [
  { name: "Vintage Backbag", price: 34.99, adet: 1, img: "./img/photo1.png" },
  { name: "Levi Shoes", price: 54.99, adet: 1, img: "./img/photo2.png" },
  { name: "Antique Clock", price: 94.99, adet: 1, img: "./img/photo3.jpg" },
];

//! ekrana bastir

sepettekiler.forEach((a) => {
  document.querySelector("#urun-rowlari").innerHTML += ` 
<div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-lg-3 col-md-5">
      <img src=${a.img} class=" w-100 rounded-start" alt="..."/>
    </div>

    <div class="col-md-7 ">
     <div class="card-body">
       <h5 class="card-title">${a.name}</h5>
        
        <div class="ürün-price">
            <p class="text-warning h2">$
                <span class="indirim-price">${(a.price * 0.789).toFixed(
                  2
                )}</span>
                    <span class="h5 text-dark text-decoration-line-through">${
                      a.price
                    }</span>
                </p>
                </div>

                <div
                class="border border-1 border-dark shadow-lg d-flex justify-content-center p-2">
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
                  adet
                ).toFixed(2)} </span>
        </div>
      </div>
    </div>
  </div>
</div> `;
});

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

//! adet arttirma - azaltma (buradaki cözüm daha karisik !!!)

document.querySelectorAll(".adet-controller").forEach((dl) => {
  const arttir = dl.lastElementChild;
  const azalt = dl.firstElementChild;
  const adet1 = dl.children[1];

  arttir.onclick = () => {
    console.log(dl.closest(".card").querySelector(".card-title").textContent);
    const deger = dl.closest(".card").querySelector(".card-title").textContent;
    console.log(deger);
    adet1.textContent = +adet1.textContent + 1;
    adet1.closest(".card").querySelector(".ürün-toplam").textContent =
      Number(adet1.textContent) *
      Number(
        adet1.closest(".card").querySelector(".indirim-price").textContent
      );
    console.log(dl.closest(".card").querySelector("#ürün-adet").innerHTML);
    sepettekiler = sepettekiler.filter((dl) => dl.name != deger);
    console.log(sepettekiler);
    console.log(dl.closest(".card").querySelector("img").src, "resim");
    sepettekiler.push({
      name: deger,
      price: dl.closest(".card").querySelector(".h5").textContent,
      adet: adet1.textContent,
      img: dl.closest(".card").querySelector("img").src,
    });
    console.log(sepettekiler, "son");
  };

  azalt.onclick = () => {
    adet1.textContent = adet1.textContent - 1;
    adet1.closest(".card").querySelector(".ürün-toplam").textContent =
      Number(adet1.textContent) *
      Number(
        adet1.closest(".card").querySelector(".indirim-price").textContent
      );
    console.log(dl.closest(".card").querySelector(".card-title").textContent);
    const deger = dl.closest(".card").querySelector(".card-title").textContent;
    console.log(deger);
    console.log(dl.closest(".card").querySelector("#ürün-adet").innerHTML);
    sepettekiler = sepettekiler.filter((dl) => dl.name != deger);
    console.log(sepettekiler);
    console.log(dl.closest(".card").querySelector("img").src, "resim");

    if (adet1.textContent == 0) {
      er.closest(".card").remove();
    } else {
      sepettekiler.push({
        name: deger,
        price: dl.closest(".card").querySelector(".h5").textContent,
        adet: adet1.textContent,
        img: dl.closest(".card").querySelector("img").src,
      });
      console.log(sepettekiler, "son");
    }
  };
});

const urunToplam = document.querySelectorAll(".ürün-toplam");
//total Calculator
const araToplam = Array.from(urunToplam).reduce(
  (a, b) => a + Number(b.textContent),
  0
);
document.querySelector(".aratoplam").textContent = araToplam;
document.querySelector(".kargo").textContent = kargo;
document.querySelector(".vergi").textContent = (araToplam * vergi).toFixed(2);
const toplam = (document.querySelector(".toplam").textContent =
  araToplam + (araToplam * vergi).toFixed(2) + kargo);
