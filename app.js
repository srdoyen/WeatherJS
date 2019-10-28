//Init weather object
const WeatherJS = new Weather("Seattle", "us");
const ui = new UI();
//Get weather when DOM loads
document.addEventListener("DOMContentLoaded", getWeather);
//Change location
document.getElementById("w-change-btn").addEventListener("click", e => {
  const city = document.getElementById("city").value;
  const country = document.getElementById("country").value;
  WeatherJS.changeLocation(city, country);
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
