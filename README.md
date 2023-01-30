# solvo-global-weather-app

# This code challenge is not finished.

This application is part of a selection process for Solvo Global, it consists of an application that shows the weather of a city through a search engine or randomly. Each one can be saved in its context (not LocalStorage) and shows the weather of the cities marked as favorites by the user.

It has a login created entirely with Auth0.

# Run

In order to run the repository you must follow these steps:

1.npm install
2.npm run dev
3. Create a file called .env where it contains the following environment variables:

VITE_AUTH0_DOMAIN=%auth0 domain%
VITE_AUTH0_CLIENT_ID=%auth0 client%
VITE_WEATHER_API_APIKEY=&https://openweathermap.org APIKEY&
