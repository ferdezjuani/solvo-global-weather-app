import { useQuery } from "react-query";
import { WeatherApi } from "../services/weather.service";

export const useWeather = (cityname, enabled) => {
  return useQuery(
    ["weather", cityname],
    () => WeatherApi.getWeather(cityname),
    { refetchOnWindowFocus: false, enabled: enabled, retry: false }
  );
};
