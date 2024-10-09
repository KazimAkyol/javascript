let resim = document.querySelector(".resim");

//! ara butonuna tiklandiginda:

document.querySelector(".ara").onclick = () => {
  resim.src = "./image/img.gif";
};

//* audio calistir. play() komutu HTML'deki audi'yu calistirir
ses1.play();

//* sesin volume'ünü 0 ile 1 arasinda degerler vererek ayarlayabiliriz

//! baglat butonuna tiklandiginda:

document.querySelector(".baglat").onclick = () => {
  resim.src = "./image/telbagla.gif";

  //*audio'nun sesini kapatmak icin pause() komutu
  ses1.pause();
};

//! konus butonuna tiklandiginda:

document.querySelector(".btn-outline-danger").onclick = () => {
  resim.src = "./image/telfirlat.gif";
};

//! mouse ile resmin üzerine gelince

// resim.onmouseover = () => {}

resim.addEventListener("mouseover", () => {
  resim.src = "./image/aslan1.jpeg";
});

//! mouse ile resmin üzerinden ayrilinca

resim.addEventListener("mouseout", () => {
  resim.src = "./image/aslan2.jpeg";

  document.querySelector(".ses2").play();
});

//! klavyeden input'a veri girisi yapilirken, checked'in tikli olmasina bagli olarak, elimizi klavyeden cektigimizde olacaklar

const textInput = document.querySelector("#textbox");
const checkInput = document.querySelector("#checkbox");

textInput.onkeyup = () => {
  // checked=metodu checkbox inputun tikli olup olmadığını kontrol eder. tıklanmışsa true döndürür
  if (checkInput.checked) {
    //console.log(textInput.value);
    textInput.value = textInput.value.toUpperCase();
  } else {
    textInput.value = textInput.value.toLowerCase();
  }
  //inputa veri girişi yaptığımızda, küçük input tikliyse benim büyük inputa girdiğim harfleri büyüt, aksi durumda küçült
};

//! listemin basina "Programlama Dilleri" h1 etiketi ekleme

//? HTML'de h1 etiketi olusturmak
const baslik = document.createElement("h1");

// <h1></h1>

//? baslik2 seklinde class ismi ekleyelim
baslik.className = "baslik2";

// <h1 class="baslik2"></h1>

//? Programlama Dilleri seklinde yazi olusturduk
const yazi = document.createTextNode("Programlama Dilleri");

//? h1 elementi icin olusturdugum text'i h1'e child yapalim

baslik.appendChild(yazi);

// <h1 class="baslik2">Programlama Dilleri</h1>

//? Listemin üstündeki div'in sonrasina ekleyelim

document.querySelector("main").after(baslik);

//!  "append" metodu ile seçtiğimiz Html etiketi bitmeden önceki son kısma ekleme yapabiliriz (<div>merhaba -buraya-  </div>).  "prepend" metodu ile seçtiğimiz Html etiketi başladıktan sonraki ilk kısma ekleme yapabiliriz  (<div> -buraya-  merhaba   </div>).  "after" metodu ile ile seçtiğimiz Html etiketi bittikten sonraki ilk kısma ekleme yapabiliriz (<div> merhaba </div>  -buraya-).
//! *******kısayol**********
