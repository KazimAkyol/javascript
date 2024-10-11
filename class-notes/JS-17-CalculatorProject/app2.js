//* ======================================================
//*                     IOS CALCULATOR
//* ======================================================

const numberButtons = document.querySelectorAll(".num");
const operationButtons = document.querySelectorAll(".operator");
const equalButtons = document.querySelector(".equal");
const ustEkranDiv = document.querySelector(".previous-display");

const altEkranDiv = document.querySelector(".current-display");

//?operator değişkenleri (*******bu şekil global tutmayıp sürekli textcontent te değişiklik yaparsak işlem girildikten sonra, if ile üst ekrana geçer ya sayılar, işlem sonrası bir daha altta sayı göremeyiz ve sürekli uzun uzun yazmamak için, ve işlem e diğer fonksiyonlardan erişemeyiz)
let ustEkranText = "";
let altEkranText = "";
 let islem = "";



//?*********** herhangi bir number a basılınca

numberButtons.forEach((number) => {
 number.onclick=()=>{
    if (number.value == ) {
        
    }



  //!ekranı hazırla
   

   //?basılan numaraları arka arkaya ekle

   altEkranText = ["div0", "div1", "div2", "div3", "div4", "div5", "div6", "div7", "div8", "div9"];
  

   updateEkran();
 }

});



//!BURADA YAPILANLARI EKRANA BASTIR

const updateEkran = () => {


 

  //?işlem girilince
// üstekranda altta yazan rakam + işlem gözükmeli
  
}
//?**************HERHANGİ BİR İŞLEME TIKLANDIĞINDA

operationButtons.forEach((op) => {
  op.onclick = () => {
 



  

    updateEkran()
  };
});
//?**************eşittir butonuna tıklandığında

equalButtons.onclick = () => {

hesapla()
updateEkran()
};

//! HESAPLA FONKSİYONU

const hesapla = () => {
  switch (islem === true) {
    case "+":
      sonuc = ""
      break;
    case "-":
      sonuc =""
      break;
    case "x":
      sonuc = ""
      break;
    case "÷":
      sonuc =""
      break;
    default:
      break;
  }


};

//?AC butonuna basıldığında
document.querySelector(".ac").onclick=()=>{


updateEkran()

}


//? PM butonuna basıldığında
document.querySelector(".pm").onclick=()=>{


  updateEkran()
}



//?percent % butonuna basıldığında
document.querySelector(".percent").onclick=()=>{


  updateEkran()




}

