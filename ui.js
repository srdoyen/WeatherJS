class UI {
  constructor() {
    this.location = document.getElementById("w-location");
    this.desc = document.getElementById("w-desc");
    this.string = document.getElementById("w-string");
    this.details = document.getElementById("w-details");
    this.icon = document.getElementById("w-icon");
    this.humidity = document.getElementById("w-humidity");
    this.coordinates = document.getElementById("w-coordinates");
    this.wind = document.getElementById("w-wind");
  }
  findIcon(weather) {
    //Choose correct icon
    var icon;
    if (weather.weather[0].description.indexOf("cloud") !== -1) {
      icon = "./imgs/cloudy.PNG";
    } else if (weather.weather[0].description.indexOf("rain") !== -1) {
      icon = "./imgs/rainy.PNG";
    } else if (weather.weather[0].description.indexOf("snow") !== -1) {
      icon = "./imgs/snowy.PNG";
    } else if (weather.weather[0].description.indexOf("storm") !== -1) {
      icon = "./imgs/stormy.PNG";
    } else {
      icon = "./imgs/sunny.PNG";
    }
    return icon;
  }

  paint(weather) {
    //Convert Kelvin to F/C
    const cTemp = parseFloat(weather.main.temp) - 273.15;
    const fTemp = (cTemp * 9) / 5 + 32.0;
    var icon = this.findIcon(weather);
    this.location.textContent = weather.name;
    this.desc.textContent = weather.weather[0].description;
    this.string.textContent = `${fTemp.toFixed(2)} F (${cTemp.toFixed(1)}C)`;
    this.icon.setAttribute("src", icon);
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}%`;
    this.wind.textContent = `Wind Speed: ${weather.wind.speed} mph`;
    this.coordinates.textContent = `Longitude: ${weather.coord.lon}, Latitude: ${weather.coord.lat}`;
  }
}
