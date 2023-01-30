import React, { createContext, useState } from 'react';

export const FavouritesContext = createContext();

const FavouritesProvider = (props) => {
  const [favouriteCities, setFavouriteCities] = useState([]);

  const addFavourite = (city) => {
    setFavouriteCities([...favouriteCities, city]);
  };

  const removeFavourite = (city) => {
    setFavouriteCities(favouriteCities.filter((f) => f !== city));
  };

  return (
    <FavouritesContext.Provider value={{ favouriteCities, addFavourite, removeFavourite }}>
      {props.children}
    </FavouritesContext.Provider>
  );
};

export default FavouritesProvider;