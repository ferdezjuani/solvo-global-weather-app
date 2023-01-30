import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import WeatherCard from "../WeatherCard/WeatherCard";
import { useFavouriteCities } from "../../hooks/favouriteCities.hook";
import { Box } from "@mui/system";

const FavouriteCities = () => {
  const { data, isLoading } = useFavouriteCities();
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    if (!isLoading && data) {
      setWeather(data.data.list);
    }
  }, [isLoading, data]);
  return (
    <div>
      <Grid container>
        <Grid item xs={4}>
          <Typography variant="h3">Weather App Solvo Global</Typography>
        </Grid>
      </Grid>
      {weather ? (
        <Grid container direction="row" spacing={2}>
          <Box sx={{ paddingTop: 15 }}>
            {weather.map((city) => (
              <Grid item key={city.id}>
                <WeatherCard data={city} isLoading={isLoading} />
              </Grid>
            ))}
          </Box>
        </Grid>
      ) : (
        <div>No favourites cities found!</div>
      )}
    </div>
  );
};

export default FavouriteCities;
