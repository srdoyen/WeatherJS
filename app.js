//Init localstorage
const storage = new Storage();
//Get stored location data
const weatherLocation = storage.getLocationData();
const WeatherJS = new Weather(weatherLocation.city, weatherLocation.country);

const ui = new UI();
//Get weather when DOM loads
document.addEventListener("DOMContentLoaded", getWeather);
//Change location
document.getElementById("w-change-btn").addEventListener("click", e => {
  const city = document.getElementById("city").value;
  const country = document.getElementById("country").value;
  //Change Location
  WeatherJS.changeLocation(city, country);

  //Set location in LS
  storage.setLocationData(city, country);
  //Get and display weather
  getWeather();
  //Close Modal
  $("#locModal").modal("hide");
});

function getWeather() {
  WeatherJS.getWeather()
    .then(responseData => {
      console.log(responseData);
      ui.paint(responseData);
    })
    .catch(err => {
      console.log(err);
    });
}
