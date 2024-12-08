setInterval(function () {

//Cape Town
let capeTownElement = document.querySelector("#cape-town");
let capeTownDateElement = capeTownElement.querySelector(".date");
let capeTownTimeElement = capeTownElement.querySelector(".time");
let capeTownTime = moment().tz("Africa/Johannesburg");

capeTownDateElement.innerHTML = 
capeTownTime.format("dddd MMMM Do YYYY");
capeTownTimeElement.innerHTML = 
capeTownTime.format("h:mm:ss [<small>]A[</small>]");


//Paris
let parisElement = document.querySelector("#paris");
let parisDateElement = parisElement.querySelector(".date");
let parisTimeElement = parisElement.querySelector(".time");
let parisTime = moment().tz("Europe/Paris");

parisDateElement.innerHTML = 
parisTime.format("dddd MMMM Do YYYY");
parisTimeElement.innerHTML = 
parisTime.format("h:mm:ss [<small>]A[</small>]");


//Tokyo
let tokyoElement = document.querySelector("#tokyo");
let tokyoDateElement = tokyoElement.querySelector(".date");
let tokyoTimeElement = tokyoElement.querySelector(".time");
let tokyoTime = moment().tz("Asia/Tokyo");

tokyoDateElement.innerHTML = 
tokyoTime.format("dddd MMMM Do YYYY");
tokyoTimeElement.innerHTML = 
tokyoTime.format("h:mm:ss [<small>]A[</small>]");


function updateCity(event) {
    let cityTimeZone = event.target.value;

if (cityTimeZone === "current") {
cityTimeZone = moment.tz.guess();
}

    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment.tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");

    citiesElement.innerHTML = `
        <div class="city">
            <div>
                <h2>${cityName}</h2>
                <div class="date">${cityTime.format("dddd MMMM Do YYYY")}</div>
            </div>
            <div class="time">${cityTime.format("h:mm:ss")} 
                <small>${cityTime.format("A")}</small>
            </div>
        </div>
    `;
}

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);

}, 1000);



