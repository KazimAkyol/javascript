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
