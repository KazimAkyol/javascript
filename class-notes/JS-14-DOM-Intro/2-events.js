//? METHOD-1 (SADECE JAVASCRİPT TE YAZILAN YOL) 1.yol
//?---------------------------------------------------------------

//* example-1: onmouseover, onmouseout

const merhaba = document.querySelector("#js"); // merhaba h2'si

const badi = document.querySelector("#badi");

merhaba.onmouseover = () => {
  badi.style.background = "pink";
  merhaba.style.color = "red";
};

merhaba.onmouseout = () => {
  badi.style.background = "orange";
};

//* example-2: onclick, ondblclick (ondoubleclick)

const bir = document.querySelector(".bir");
const iki = document.querySelector(".iki");

bir.onclick = () => {
  bir.src = "./img/logo2.png";
  iki.src = "./img/js_logo.png";
};

iki.onclick = () => {
  bir.src = "./img/js_logo.png";
  iki.src = "./img/logo2.png";
};

bir.ondblclick = () => {
  bir.src = "./img/bir.jpeg";
  iki.src = "./img/iki.webp";
};

//* example-3:

const button = document.querySelector("#btn");

button.onclick = () => {
  button.textContent = "TIKLANDI";

  badi.style.background = "aqua";

  document.querySelector("#par1").style.fontSize = "50px";
};

//? METHOD-2 (sadece JAVASCRIPT'te yazilir - addEventListener()) 2.yol
// ? ---------------------------------------------------------------

button.addEventListener("click", () => {
  button.textContent = "TIKLANDI";

  badi.style.background = "aqua";

  document.querySelector("#par1").style.fontSize = "50px";
});

//* example-4: (Mouse Over, Mouse Out)

//? METHOD-3 (HTML-INLINE)
//?---------------------------------------------------------------

// kodlari html sayfasinda
