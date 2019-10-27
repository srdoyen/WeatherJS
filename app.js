//Init weather object
const WeatherJS = new Weather("Huntsville", "us");

//Get weather when DOM loads
document.addEventListener("DOMContentLoaded", getWeather);

function getWeather() {
  WeatherJS.getWeather()
    .then(responseData => {
      console.log(responseData);
    })
    .catch(err => {
      console.log(err);
    });
}
