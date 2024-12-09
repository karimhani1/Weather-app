
const apiKey = "2093cd00ac2f78a0fab352d1dd78b21a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".my-form input");
const weatherImage = document.querySelector(".image");

async function checkWeather(thelocation) {
    
    const response = await fetch(apiUrl + thelocation + `&appid=${apiKey}`);
    let data = await response.json();
    console.log(data);
    document.querySelector(".the-location").innerHTML = data.name;

document.querySelector(".number").innerHTML = Math.round(data.main.temp) + "°C";
document.getElementById("temp").innerHTML = data.main.temp + "°C";
document.getElementById("small-temp").innerHTML = data.main.temp_min + "°";
document.getElementById("last").innerHTML =data.main.temp + "°C";
document.getElementById("last-small").innerHTML = data.main.temp_min  + "°";
document.querySelector(".word").innerHTML = data.sys.sunrise;
document.getElementById("pressure").innerHTML = data.wind.deg + "%";
document.getElementById("spee").innerHTML = data.wind.speed + "km/h";

}


searchBox.addEventListener("keyup", e => {

    checkWeather(searchBox.value) ;
    }
    );