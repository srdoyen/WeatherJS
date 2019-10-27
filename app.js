//Init weather object
const WeatherJS = new Weather("Seattle", "us");
const ui = new UI();
//Get weather when DOM loads
document.addEventListener("DOMContentLoaded", getWeather);

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
