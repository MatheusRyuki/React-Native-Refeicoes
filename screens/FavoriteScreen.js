import { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import MealList from "../components/MealList/MealList";
import { MEALS } from "../data/dummy-data";
import { FavoritesContext } from "../store/context/favorite-context";

const FavoriteScreen = () => {
  const favoritesMealsCtx = useContext(FavoritesContext);

  const favoriteMeals = MEALS.filter((meal) =>
    favoritesMealsCtx.ids.includes(meal.id)
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>Você não tem receitas favoritas ainda.</Text>
      </View>
    );
  }
  return <MealList items={favoriteMeals} />;
};

export default FavoriteScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
