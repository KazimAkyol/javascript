//! Selectors

const form = document.querySelector("form");
const input = document.querySelector("form input");
const alertMessage = document.getElementById("alert");
const cardContainer = document.getElementById("card-container");

//! Variables

const apiKey = "d9742631ab44926faeb8d55a66b17a05";
let url; // API istegi icin kullanacagiz

//! Event Listeners

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (input.value) {
    const city = input.value;

    url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    console.log(url);
    getWeatherData();
  }

  form.reset();
});

//! Functions

const getWeatherData = async () => {
  try {
    const response = await fetch(url).then((response) => response.json()); //& fetch ile API istegi

    console.log(response);
  } catch (error) {
    // console.log(error); //& API ile gelen veri

    //? Dta Destructure

    const { main, name, weather, sys } = response; //& fetch

    console.log(main, name, weather, sys);

    const iconUrl = `https://api.openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

    // console.log(iconUrl); // hava durumu koduna göre API'den icon getirmek icin

    let card = `       <div class="col" id="${name}">
    <div class="card mb-4 rounded-3 shadow-sm">
            <ul class="list-unstyled mt-2 mb-4">
                <li class="text-end me-2"><i class="bi bi-x-circle"></i></li>
                <h4 class="my-0 fw-normal">${name} <span ><sup><img src="https://flagsapi.com/${
      sys.country
    }/shiny/24.png" class="rounded-circle" alt=${
      sys.country
    }/> </sup></span></h4>
                <h1 class="card-title pricing-card-title"><i class="bi bi-thermometer-half"></i> ${Math.round(
                  main.temp
                )}<sup>°C</sup></h1>
                <h6 class="card-title pricing-card-title">Min : ${Math.round(
                  main.temp_min
                )}<sup>°C</sup> - Max : ${Math.round(
      main.temp_max
    )}<sup>°C</sup>  </h6>
                <h6 class="card-title pricing-card-title"><img src="./assets/wi-barometer.svg" height="30px"/>${
                  main.pressure
                } <img src="./assets/wi-humidity.svg" height="30px"/>${
      main.humidity
    } </h6>
                <li><img src="${iconUrl}"/></li>
                <li>${weather[0].description.toUpperCase()}</li>
            </ul>
    </div>
    </div>`;

    cardContainer.innerHTML = card + cardContainer.innerHTML
  }
};
