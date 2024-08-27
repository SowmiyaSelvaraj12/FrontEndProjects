// const API_key = "ff1d3aaeb5435dacfcb1a1125c1e2352";

// const URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const weather_icon = document.querySelector(".weather-icon");

async function getData() {
  var cityName = document.getElementById("data").value;

  console.log("Searchbox", cityName);

  const API_Data = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=1b00d2b6dfdc18fd86385b61929823c9`
  );

  var data = await API_Data.json();
  console.log("Dataaa", data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = data.main.temp + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

  /*if (data.weather[0].main == "Fog" || data.weather[0].main == "Mist") {
    weather_icon.src = "./images/mist.png";
  } else if (data.weather[0].main == "Clouds") {
    weather_icon.src = "./images/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    weather_icon.src = "./images/clear.png";
    
  } else if (data.weather[0].main == "Rain") {
    weather_icon.src = "./images/rain.png";
  }*/

  document.querySelector(".weather").style.display = "block";
}
