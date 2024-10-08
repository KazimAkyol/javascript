let resim = document.querySelector(".resim");

//! ara butonuna tiklandiginda

document.querySelector(".ara").onclick = () => {
  resim.src = "./image/img.gif";
  audio.src = "./image/image_retro-ringtone .mp3";
};

//! baglat butonuna tiklayinca

document.querySelector(".baglat").onclick = () => {
  resim.src = "./image/telbagla.gif";
};

//! konus butonuna tiklayinca

document.querySelector(".btn-outline-danger").onclick = () => {
  resim.src = "./image/telfirlat.gif";
};
