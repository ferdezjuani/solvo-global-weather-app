import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { citiesId } from "../../helpers/randomCities";
import { useMultipleWeather } from "../../hooks/multipleWeather.hook";
import WeatherCard from "../WeatherCard/WeatherCard";

const RandomWeather = () => {
  const { data, isLoading } = useMultipleWeather(citiesId, false);
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    if (!isLoading) {
      setWeather(data.data.list);
    }
  }, [isLoading, data]);

  return (
    <div>
      <Typography variant="h3">See random cities!</Typography>
      {weather && (
        <Grid container direction="row" spacing={2}>
          {weather.map((city) => (
            <Grid item xs={2} key={city.id}>
              <WeatherCard data={city} isLoading={isLoading} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default RandomWeather;
