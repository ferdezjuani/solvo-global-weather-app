import React, { useContext, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useWeather } from "../../hooks/weather.hook";
import {
  Alert,
  Button,
  CircularProgress,
  Grid,
  IconButton,
  InputBase,
  Paper,
  Box,
  Divider,
  Typography,
} from "@mui/material";
import WeatherCard from "../../components/WeatherCard/WeatherCard";
import RandomWeather from "../../components/RandomWeather/RandomWeather";
import { Link } from "react-router-dom";
import { FavouritesContext } from "../../context/FavouritesContext";

const Home = () => {
  const [cityname, setCityname] = useState("");
  const [enabled, setEnabled] = useState(false);
  const { logout } = useAuth0();
  const {
    data: weatherData,
    isLoading: isLoadingWeather,
    isError: isErrorWeather,
    error,
  } = useWeather(cityname, enabled);
  const { favouriteCities } = useContext(FavouritesContext);

  return (
    <div>
      <Grid container>
        <Grid item xs={4}>
          <Typography variant="h3">Weather App Solvo Global</Typography>
        </Grid>
        <Grid item xs={5}>
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 400,
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search your city"
              inputProps={{ "aria-label": "search cities" }}
              value={cityname}
              onChange={(e) => setCityname(e.target.value)}
            />
            <IconButton
              type="button"
              sx={{ p: "10px" }}
              aria-label="search"
              onClick={() => setEnabled(true)}
            >
              {/* //TODO: change for icon */}
              {isLoadingWeather ? <CircularProgress /> : "Search"}
            </IconButton>
          </Paper>
        </Grid>
        <Grid item xs={1}>
          <Link to="/favourites">
            <Button variant="outlined" color="secondary" onClick={() => {}}>
              Favourites ({favouriteCities.length})
            </Button>
          </Link>
        </Grid>
        <Grid item xs={2}>
          <Button variant="outlined" onClick={() => logout()}>
            Logout
          </Button>
        </Grid>
      </Grid>
      {weatherData && (
        <Box sx={{ paddingTop: 5 }} justifyContent="center" alignItems="center">
          <WeatherCard data={weatherData.data} isLoading={isLoadingWeather} />
        </Box>
      )}
      {isErrorWeather && (
        <Box sx={{ maxWidth: 350, padding: 5 }}>
          <Alert severity="error">{error.response.data.message}</Alert>
        </Box>
      )}
      <Box sx={{ paddingTop: 15 }}>
        <RandomWeather />
      </Box>
    </div>
  );
};

export default Home;
