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
  const city = input.value;

  url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  console.log(url);
});

//! Functions

const getWeatherData = async () => {
  try {
    const response = await fetch(url).then((response) => response.json()); //& fetch ile API istegi

    console.log(response);
  } catch (error) {
   // console.log(error); //& API ile gelen veri
  }
};
