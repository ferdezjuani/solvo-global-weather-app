import { useQuery } from "react-query";
import { WeatherApi } from "../services/weather.service";

export const useMultipleWeather = (cities) => {
  return useQuery(
    ["multipleWeather", cities],
    () => WeatherApi.getWeatherForMultipleCities(cities),
    { refetchOnWindowFocus: false, retry: false }
  );
};
