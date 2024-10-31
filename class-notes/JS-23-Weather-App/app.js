console.log("App.js working");

//! Variables
let apiKey = "4ed283ae2ece6cf1fe2fe7e75b2ea7a5";
let url; // API istegi kullanilacak
let units = "metric";
let lang = "en";
let cities = [];

url = `https://api.openweathermap.org/data/2.5/weather?q=${şehiradı}&units=${units}&lang=${lang}&appid=${apiKey}`;

const iconUrl = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${"diziden img url si gelecek"}.svg`;
//!index.html den bir etiketin innerHTML sine gelen veriler bastırılacak
card.innerHTML = ` 
<div class="card mb-4 rounded-3 shadow-sm">
        <ul class="list-unstyled mt-2 mb-4">
            <li class="text-end me-2"><i class="bi bi-x-circle"></i></li>
            <h4 class="my-0 fw-normal">${""} <span ><sup><img src="https://flagsapi.com/${""}/shiny/24.png" class="rounded-circle" alt=${""}/> </sup></span></h4>
            <h1 class="card-title pricing-card-title"><i class="bi bi-thermometer-half"></i> ${" "}<sup>°C</sup></h1>
            <h6 class="card-title pricing-card-title">Min : ${""}<sup>°C</sup> - Max : ${""}<sup>°C</sup>  </h6>
            <h6 class="card-title pricing-card-title"><img src="./assets/wi-barometer.svg" height="30px"/>${""} <img src="./assets/wi-humidity.svg" height="30px"/>${""} </h6>
            <li><img src="${iconUrl}"/></li>
            <li>${""}</li>
        </ul>
</div>
`;
