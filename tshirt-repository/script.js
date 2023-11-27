const weather =
  "https://api.openweathermap.org/data/2.5/weather?lat=40.7265&lon=-73.9815&appid=e07b29941583cb00aaf217ae8de172a7&units=imperial";

async function getWeather() {
  const weather_response = await fetch(weather);
  const weather_data = await weather_response.json();

  document.getElementById("description").textContent =
    weather_data.weather[0].description;
  document.getElementById("temp").textContent = weather_data.main.temp;
  document.getElementById("high").textContent = weather_data.main.temp_max;
  document.getElementById("low").textContent = weather_data.main.temp_min;
}

const sun = "https://api.sunrisesunset.io/json?lat=40.7265&lng=-73.9815";

async function getSun() {
  const sun_response = await fetch(sun);
  const sun_data = await sun_response.json();

  document.getElementById("first").textContent = sun_data.results.first_light;
  document.getElementById("rise").textContent = sun_data.results.sunrise;
  document.getElementById("last").textContent =
    sun_data.results.last_light + ".";
  document.getElementById("set").textContent = sun_data.results.sunset;
}

getWeather();
getSun();
