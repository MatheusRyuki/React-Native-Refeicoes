import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

const FavoritesContextProvider = ({ children }) => {
  const [favoriteMealsId, setFavoritesMealsId] = useState([]);

  const addFavorite = (id) => {
    setFavoritesMealsId((prevState) => [...prevState, id]);
  };

  const removeFavorite = (id) => {
    setFavoritesMealsId((prevState) =>
      prevState.filter((mealId) => mealId !== id)
    );
  };

  const value = {
    ids: favoriteMealsId,
    addFavorite,
    removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
