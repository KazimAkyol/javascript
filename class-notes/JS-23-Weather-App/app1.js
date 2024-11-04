//! Selectors

const form = document.querySelector("form");
const input = document.querySelector("form input");
const alertMessage = document.getElementById("alert");
const cardContainer = document.getElementById("card-container");

//! Variables

const apiKey = "d9742631ab44926faeb8d55a66b17a05";

//! Event Listeners

form.addEventListener("submit", () => {
  console.log("Form submit edildi");
});
