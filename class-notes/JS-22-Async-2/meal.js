fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
  .then((res) => res.json())
  .then((data) => ekranaBastir(data.meals));

//! EKRANA BASTIRMA

const ekranaBastir = (veri) => {
  const foodDiv = document.querySelector(".food");

  veri.forEach((a) => {
    foodDiv.innerHTML += `
       <div>
       <p>${a.strMeal}</p>
       <img width="200px" src=${a.strMealThumb} />
       </div>
       `;
  });
};
