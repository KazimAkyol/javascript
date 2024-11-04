//! Selectors

const form = document.querySelector("form");
const input = document.querySelector("form input");
const alertMessage = document.getElementById("alert");
const cardContainer = document.getElementById("card-container");

//! Variables

const apiKey = "d9742631ab44926faeb8d55a66b17a05";
let url; // API istegi icin kullanacagiz
let cities = []; // sergilenen tüm sehirlerin listesi
let lang = "EN";

//? Location find

const locate = document.getElementById("locate");
const userLocatonDiv = document.getElementById("userLocation");
let userLocation = false;

//? Language

const langButton = document.querySelector(".language");

//! Event Listeners

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (input.value) {
    const city = input.value;

    url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=${lang}`;

    // console.log(url);
    getWeatherData();
  }

  form.reset(); // formu sifirlar
});

//location

locate.addEventListener("click", () => {
  navigator.geolocation?.getCurrentPosition(({ coords }) => {
    // console.log(coords)

    const { latitude, longitude } = coords;

    url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}&lang=${lang}`;
    userLocation = true;
    getWeatherData();
  });
});

// language

langButton.addEventListener("click", (e) => {
  // console.log(e.target.textContent)

  if (e.target.textContent == "DE") {
    input.setAttribute("placeholder", "Suche nach einer Stadt");
    lang = "DE";
  } else if (e.target.textContent == "EN") {
    input.setAttribute("placeholder", "Search for a city");
    lang = "EN";
  }
});

// Functions

const getWeatherData = async () => {
  try {
    //  const response = await fetch(url).then((response) => response.json()) //& fetch ile API isteği

    const response = await axios(url); //^Axios ile istek atma

    //  console.log(response) //& API den gelen veri.

    //? Data destructure

    // const {main, name, weather, sys} = response //& fetch
    const { main, name, weather, sys } = response.data; //^ Axios

    // console.log(main, name, weather, sys)

    const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

    // console.log(iconUrl) //hava durumu koduna göre api den icon getirmek için

    if (cities.indexOf(name) == -1) {
      cities.unshift(name);

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
        )}<sup>°C</sup> - Max : ${Math.round(main.temp_max)}<sup>°C</sup>  </h6>
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

      if (userLocation) {
        userLocationDiv.innerHTML = card;
        userLocation = false;
      } else {
        cardContainer.innerHTML = card + cardContainer.innerHTML; //son arananı başa tutturur
        // cardContainer.innerHTML =  cardContainer.innerHTML + card //son arananı sona tutturur
      }
    } else {
      alertMessage.textContent = `You already know the weather for ${name}, Please search for another city 😉`;
      alertMessage.classList.replace("d-none", "d-block");

      setTimeout(() => {
        alertMessage.classList.replace("d-block", "d-none");
      }, 3000);
    }

    //! Remove cities

    const singleClearButton = document.querySelectorAll(".bi-x-circle");

    singleClearButton.forEach((button) => {
      button.addEventListener("click", (e) => {
        delete cities[cities.indexOf(e.target.closest(".col").id)];

        e.target.closest(".col").remove(); //! x ya basılan kartı dom dan siler
      });
    });
  } catch (error) {
    alertMessage.textContent = `City Not Found`;
    alertMessage.classList.replace("d-none", "d-block");

    setTimeout(() => {
      alertMessage.classList.replace("d-block", "d-none");
    }, 3000);
  }
};
