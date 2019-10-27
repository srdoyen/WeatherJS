//Weather Class
class Weather {
  constructor(city, country) {
    this.apiKey = "4713263dd744588192fc446b3c8e129a";
    this.city = city;
    this.country = country;
  }

  async getWeather() {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&APPID=${this.apiKey}`
    );
    const responseData = await response.json();
    return responseData;
  }

  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}
