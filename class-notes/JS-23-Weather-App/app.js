console.log("App.js working");

//! Variables
let apiKey = "4ed283ae2ece6cf1fe2fe7e75b2ea7a5";
let url; // API istegi icin kullanilacak
let units = "metric"; // fahrenheit icin 'imperial' yazilmasi
let lang = "en"; // ALmanya icin de 'DE' yazilmasi
let cities = [];

const btn = document.querySelector("#search");
const card = document.querySelector("#alert");
const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const sehirAdi = document.querySelector(".form-control").value;
  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${sehirAdi}&units=${units}&lang=${lang}&appid=${apiKey}`
  );
  const veri = await data.json();
  if (cities.length < 4) {
    cities.push(veri);
    ekranaBastir(veri);
  }
  console.log(veri);
  form.value = "";
});

const ekranaBastir = (veri) => {
  document.querySelector(".row").innerHTML = `
    <div class="card mb-4 rounded-3 shadow-sm">
        <ul class="list-unstyled mt-2 mb-4">
            <li class="text-end me-2"><i class="bi bi-x-circle"></i></li>
            <h4 class="my-0 fw-normal">${
              veri.main[0]
            } <span ><sup><img src="https://flagsapi.com/${
    veri.sys.country
  }/shiny/24.png" class="rounded-circle" alt=${""}/> </sup></span></h4>
            <h1 class="card-title pricing-card-title"><i class="bi bi-thermometer-half"></i> ${
              veri.main.temp
            }<sup>°C</sup></h1>
            <h6 class="card-title pricing-card-title">Min : ${
              veri.main.temp_min
            }<sup>°C</sup> - Max : ${veri.main.temp_max}<sup>°C</sup></h6>
            <h6 class="card-title pricing-card-title"><img src="./assets/wi-barometer.svg" height="30px"/>${
              veri.main.pressure
            } <img src="./assets/wi-humidity.svg" height="30px"/>${
    veri.main.humidity
  }</h6>
            <li><img src=${`https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${veri.weather[0].icon}.svg`}"/></li>
            <li>${""}</li>
        </ul>
</div>`;
};
// const sehirAdi = document.querySelector(".form-control");

// url = `https://api.openweathermap.org/data/2.5/weather?q=${şehiradi}&units=${units}&lang=${lang}&appid=${apiKey}`;

//! index.html den bir etiketin innerHTML sine gelen veriler bastırılacak
// card.innerHTML = `
// <div class="card mb-4 rounded-3 shadow-sm">
//         <ul class="list-unstyled mt-2 mb-4">
//             <li class="text-end me-2"><i class="bi bi-x-circle"></i></li>
//             <h4 class="my-0 fw-normal">${""} <span ><sup><img src="https://flagsapi.com/${
//   veri.sys.country
// }/shiny/24.png" class="rounded-circle" alt=${""}/> </sup></span></h4>
//             <h1 class="card-title pricing-card-title"><i class="bi bi-thermometer-half"></i> ${" "}<sup>°C</sup></h1>
//             <h6 class="card-title pricing-card-title">Min : ${""}<sup>°C</sup> - Max : ${""}<sup>°C</sup>  </h6>
//             <h6 class="card-title pricing-card-title"><img src="./assets/wi-barometer.svg" height="30px"/>${""} <img src="./assets/wi-humidity.svg" height="30px"/>${""} </h6>
//             <li><img src="${iconUrl}"/></li>
//             <li>${""}</li>
//         </ul>
// </div>
// `;
