import {
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import React, { useContext, useState } from "react";
import { FavouritesContext } from "../../context/FavouritesContext";

const WeatherCard = (data, isLoading) => {
  const weather = data.data;
  const { favouriteCities, addFavourite, removeFavourite } =
    useContext(FavouritesContext);
  const [selected, setSelected] = useState(false);
  const handleAddFavourite = (weatherId) => {
    if (selected) {
      removeFavourite(weatherId);
      setSelected(false);
    } else {
      addFavourite(weatherId);
      setSelected(true);
    }
  };

  const LikeIcon = selected ? (
    <FavoriteBorderIcon style={{ color: "red" }} />
  ) : (
    <FavoriteBorderIcon />
  );

  console.log(favouriteCities);
  return (
    <>
      {isLoading ? (
        <Card sx={{ maxWidth: 500, backgroundColor: "#F4CD8B" }}>
          <Grid container direction="row" justifyContent="flex-end">
            <IconButton
              aria-label="add to favorites"
              onClick={() => handleAddFavourite(weather.id)}
            >
              {LikeIcon}
            </IconButton>
          </Grid>
          <CardMedia
            component="img"
            image={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" color="#fff">
              {weather.name}
            </Typography>
            <Typography gutterBottom variant="h5" component="div" color="#fff">
              {weather.main.temp}°F
            </Typography>
          </CardContent>
        </Card>
      ) : (
        <CircularProgress />
      )}
    </>
  );
};

export default WeatherCard;
