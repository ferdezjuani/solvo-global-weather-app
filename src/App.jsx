import * as React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Favourites from "./pages/Favourites/Favourites";
import FavouritesProvider from "./context/FavouritesContext";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <FavouritesProvider>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </FavouritesProvider>
    </QueryClientProvider>
  );
}

export default App;
