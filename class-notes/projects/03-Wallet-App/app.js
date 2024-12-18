//? Selectors

//! harcama formu

const harcamaFormu = document.getElementById("harcama-formu");
const tarihInput = document.getElementById("tarih");
const miktarInput = document.getElementById("miktar");
const harcamaAlaniInput = document.getElementById("harcama-alani");

//! ekle formu

const ekleBtn = document.getElementById("ekle-btn");
const gelirInput = document.getElementById("gelir-input");
const ekleFormu = document.getElementById("ekle-formu");

//! harcama tablosu

const harcamaBody = document.getElementById("harcama-body");
const temizleBtn = document.getElementById("temizle-btn");

//! sonuc tablosu

let gelirinizTable = document.getElementById("geliriniz");
const giderinizTable = document.getElementById("gideriniz");
const kalanTable = document.getElementById("kalan");

//? Variables

let gelirim = Number(localStorage.getItem("gehalt")) || 0;

let harcamaListesi = JSON.parse(localStorage.getItem("einkaufen")) || [];

//! ekle formu (yesil-kirmizi)

ekleFormu.onsubmit = (e) => {
  e.preventDefault(); //submit'in default hareketini bekletmek icin

  gelirim = gelirim + Number(gelirInput.value);

  gelirinizTable.textContent = gelirim;

  gelirInput.value = "";

  localStorage.setItem("gehalt", gelirim);

  hesaplaVeGuncelle();
};

//! ilk harcama formu doldurma (arka plani sari olan yer)

harcamaFormu.onsubmit = (e) => {
  e.preventDefault();

  const yeniHarcama = {
    tarih: tarihInput.value,
    miktar: miktarInput.value,
    alan: harcamaAlaniInput.value,
    id: new Date().getTime(),
  };

  harcamaListesi.push(yeniHarcama);

  // harcamaListesi.push({
  //   tarih: tarihInput.value,
  //   miktar: miktarInput.value,
  //   alan: harcamaAlaniInput.value,
  //   id: new Date().getTime(),
  // });

  //* localStorage'a kaydet

  localStorage.setItem("einkaufen", JSON.stringify(harcamaListesi));

  //* ekrana bastir

  harcamayiDomaYaz(yeniHarcama);

  //* inputlari temizle

  harcamaFormu.reset();

  hesaplaVeGuncelle();
};

//! harcamayi doma yazma metodu

const harcamayiDomaYaz = (yeniHarcama) => {
  const { id, miktar, tarih, alan } = yeniHarcama; // destruction

  harcamaBody.innerHTML += ` 
  <tr>
      <td class="bg-warning bir">${tarih}</td>
      <td class="bg-warning">${alan}</td>
      <td class="bg-warning">${miktar}</td>

      <td class="bg-warning">
      <i id=${id} class="fa-solid fa-trash-can text-danger"></i>
      </td>
    </tr>`;

  //! silme

  document.querySelectorAll(".fa-trash-can").forEach((sil) => {
    sil.onclick = () => {
      //* ekrandan sil

      sil.parentElement.parentElement.remove();

      // sil.closest("tr").remove(); // parent'ini silmenin 2.yolu

      //* diziden sil

      harcamaListesi = harcamaListesi.filter((a) => a.id != sil.id);

      //* localStorage'de de sil

      localStorage.setItem("einkaufen", JSON.stringify(harcamaListesi));
    };
  });
};

//! hesapla ve güncelle

const hesaplaVeGuncelle = () => {
  const giderler = harcamaListesi.reduce(
    (toplam, harcama) => toplam + Number(harcama.miktar)
  );

  giderinizTable.textContent = giderler;

  kalanTable.textContent = gelirim - giderler;
};

//! localStorage kullandigimizda refresh'te ekranda localdeki kayitli bilgiler gelsin diye yazilan komut

harcamaListesi.forEach((a) => harcamayiDomaYaz(a));
