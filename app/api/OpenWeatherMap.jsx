const axios = require('axios');

// API Key
const LIMIT = 5;
const OPEN_WEATHER_URL = "http://api.openweathermap.org/geo/1.0/direct";

module.exports = {
  getTemp: function(location) {
    let encodedLocation = encodeURIComponent(location);
    let requestUrl = `${OPEN_WEATHER_URL}?q=${encodedLocation}&limit=${LIMIT}&appid=${process.env.REACT_PUBLIC_OPENWEATHER_KEY}`;

    return axios.get(requestUrl).then(function (res) {
      // Resolve
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function(res){
      // Error
      throw new Error(res.message);
    });
  }
}