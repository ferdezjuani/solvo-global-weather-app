import { useContext } from "react";
import { useQuery } from "react-query";
import { FavouritesContext } from "../context/FavouritesContext";
import { WeatherApi } from "../services/weather.service";

export const useFavouriteCities = () => {
  const { favouriteCities } = useContext(FavouritesContext);
  return useQuery(
    ["favouriteCities"],
    () => WeatherApi.getWeatherFromFavouriteCities(favouriteCities),
    { refetchOnWindowFocus: false, retry: false }
  );
};
