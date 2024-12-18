let selectedCityTimeZone = null; 

setInterval(function () {
  // Cape Town
  let capeTownElement = document.querySelector("#cape-town");
  let capeTownDateElement = capeTownElement.querySelector(".date");
  let capeTownTimeElement = capeTownElement.querySelector(".time");
  let capeTownTime = moment().tz("Africa/Johannesburg");

  capeTownDateElement.innerHTML = capeTownTime.format("dddd MMMM Do YYYY");
  capeTownTimeElement.innerHTML = capeTownTime.format("h:mm:ss [<small>]A[</small>]");

  // Paris
  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  let parisTime = moment().tz("Europe/Paris");

  parisDateElement.innerHTML = parisTime.format("dddd MMMM Do YYYY");
  parisTimeElement.innerHTML = parisTime.format("h:mm:ss [<small>]A[</small>]");

  // Tokyo
  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  let tokyoTime = moment().tz("Asia/Tokyo");

  tokyoDateElement.innerHTML = tokyoTime.format("dddd MMMM Do YYYY");
  tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss [<small>]A[</small>]");

 
  if (selectedCityTimeZone) {
    let cityTime = moment().tz(selectedCityTimeZone);
    let selectedCityElement = document.querySelector("#selected-city");

    selectedCityElement.innerHTML = `
      <div class="city">
          <div>
              <h2>${selectedCityTimeZone.replace("_", " ").split("/")[1]}</h2>
              <div class="date">${cityTime.format("dddd MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format("h:mm:ss")} 
              <small>${cityTime.format("A")}</small>
          </div>
      </div>
    `;
  }
}, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;

  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess(); 
  }

  selectedCityTimeZone = cityTimeZone;

  let citiesElement = document.querySelector("#cities");
  let selectedCityElement = document.querySelector("#selected-city");

  if (!selectedCityElement) {
  
    selectedCityElement = document.createElement("div");
    selectedCityElement.id = "selected-city";
    citiesElement.prepend(selectedCityElement); 
  }
}


let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
