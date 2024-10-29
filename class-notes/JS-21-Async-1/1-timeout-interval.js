//*=================================================================
//*              1- Senkron-Asenkron Programlama
//* ================================================================

//! Javascript, bir single-threaded ve Asenkron Programlama dilidir.

//? Asenkron Programlama
//? --------------------------------------------------------------
//? Asenkron Programlama, bir alt gorevin uygulamanin asil thread'inden
//? bagimsiz olarak arka planda calistirilmasina izin veren paralel programlama
//? teknigidir. Bu alt gorev tamamlandiginda (basariyla veya basarisizlikla)
//? asil thread bu konuda bilgilendirilir. Asenkron programlama, uygulamalarin
//? performansininin artirilmasina ve daha iyi kullanici deneyimine katki saglamaktadir.

//? Ozellikle bir API'den veya Veritabanindan veri cekme, Giris/Cikis islemleri,
//? Dosya Okuma/Yazma islemleri gibi zaman tuketen kodlarda Async Programlama
//? kullanilmasi cok onemlidir.

//*Asenkron (setTimeout) 1 seferlik

setTimeout(() => {
  console.log("günaydın nasılsınız");
}, 2000);

console.log("selamun hello");

setTimeout(() => {
  console.log("aleyküm selam");
}, 4000);

//!yukarıdaki kodlar şu sırayla çalışır selamun hello- günaydın nasılsınız-aleyküm selam

//*Asenkron(setInterval, clearInterval) belli aralıklarla durdurulana kadar devam eder. mesela 1 dakikada bir döviz kurunu güncellemek için kullanılabilir
//***************************** */

//?setInterval non-blocking (kod burada takılı kalmaz alttaki kodlarda çalışır)
let sayac = 0;

const interv = setInterval(() => {
  console.log(++sayac);

  if (sayac == 7) {
    clearInterval(interv); //başlayan intervalı durdurma metodu
  }
}, 1000);
