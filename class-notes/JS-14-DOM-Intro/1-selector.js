//* ======================================================
//*                   GETELEMENTBYID()
//* ======================================================

//*example1 buton style

const buton = document.getElementById("btn");

buton.style.width = "200px";
buton.style.height = "80px";
buton.style.fontSize = "80px";
buton.style.backgroundColor = "red";

//* example-2 paragraf style

const paragraf = document.getElementById("par1");

paragraf.style.background = "yellow";
paragraf.style.color = "red";
paragraf.style.margin = "200px";
paragraf.width = "300px";

//* ======================================================
//*                   GETELEMENTSBYTAGNAME()
//* tag ismiyle çağırıyoruz.aynı tag den çok olacağı için index le hangisini seçtiğimizi belirtiyoruz (HTMLCollection- Array özellikleri gösterir)
//*================================================

const resim = document.getElementsByTagName("img");
console.log(resim); // HTMLCollection

resim[0].style.width = "300px";

resim[1].style.border = "2px solid red";

//* ======================================================
//*                   GETELEMENTSBYCLASSNAME()
//* class ismiyle çağırıyoruz
//*======================================================

const baslik = document.getElementsByClassName("HBIR");

//* HTMLCollecton (arrayimsi)'larda ARRAY'i degistirmeyen metodlari kullanabilirsiniz

for (let i = 0; i < 2; i++) {
  baslik[i].style.color = "red";
  baslik[i].style.textAlign = "center";
}

baslik[0].innerHTML =
  " H1'in ici <a href ='https://clarusway.com/'>DOM COK GÜZEL</a>";

baslik[1].textContent = "HALLO";

//* sadece içerik değişecekse textContent tercih edilir, ama innerHTML de etiketi değiştirebildiği gibi, sadece içeriği de değiştirebilir

//* ======================================================
//*                  QUERYSELECTOR,QUERYSELECTORALL
//*======================================================

document.querySelector("title").textContent = "DOM MANIPULASYON 💖";

document.querySelector("#badi").style.backgroundImage =
  "linear-gradient(green,pink)";

document.querySelector(".HIKI").style.color = "pink";

console.log(document.querySelector("p"));

document.querySelector("p").style.fontSize = "50px";

//querySelector ile çağırdığınız (normalde birden fazla varsa) etiketin ilki gelir

const paragraflar = document.querySelectorAll("p");
console.log(paragraflar);
