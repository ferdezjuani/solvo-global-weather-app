import axios from "axios";
import { getRandomCityIds } from "../helpers/randomCities";

const apiKey = import.meta.env.VITE_WEATHER_API_APIKEY;
const baseUrl = "http://api.openweathermap.org/data/2.5";

export class WeatherApi {
  static getWeather(cityname) {
    return axios.get(
      `${baseUrl}/weather?q=${cityname}&appid=${apiKey}&units=imperial`
    );
  }
  static getWeatherForMultipleCities(cities) {
    return axios.get(
      `${baseUrl}/group?id=${getRandomCityIds(
        cities
      )}&appid=${apiKey}&units=imperial`
    );
  }
  static getWeatherFromFavouriteCities(cities) {
    return axios.get(
      `${baseUrl}/group?id=${cities}&appid=${apiKey}&units=imperial`
    );
  }
}
