let yemekler = [];

fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
  .then((res) => res.json())
  .then((data) => {
    yemekler = data;
    ekranaBastir(data.meals);
  });

//! EKRANA BASTIRMA

const ekranaBastir = (veri) => {
  const foodDiv = document.querySelector(".food");

  foodDiv.innerHTML = ""; // bu kod bu fonksiyona ne gönderilirse sadece onu bastirmamiza yarar, yani önce browser'i temizle sonra bastirirsin demis olduk

  veri.forEach((a) => {
    foodDiv.innerHTML += `
       <div class="col-lg-2 col-md-3 m-1">
       <p>${a.strMeal}</p>
       <img width="200px" src=${a.strMealThumb} />
       </div>
       `;
  });
};

//! arama inputuna yazdigim harfleri iceren yemekleri ekrana bastir (oninput=kullanici input elemanina her veri girisinde calismaktadir)

//? e.target.value=> input'a her veri girisindeki degerleri alabilmek icin kullanilir. document.querySelector("input").value.target.value

const input = document.querySelector("input");

input.oninput = () => {
  //console.log(yemekler);
  let inputYemekler = yemekler.meals.filter((a) =>
    a.strMeal.toLowerCase().includes(input.value.toLowerCase())
  );

  ekranaBastir(inputYemekler);
};
