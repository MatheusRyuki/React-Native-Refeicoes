import { Image, Text, View } from "react-native";

import { MEALS } from "../data/dummy-data";
import MealDetail from "../components/MealDetails";

const MealDetailScreen = ({ route }) => {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return (
    <View>
      <Image source={{ uri: selectedMeal.imageUrl }} />
      <Text>{selectedMeal.title}</Text>
      <MealDetail
        duration={selectedMeal.duration}
        affordability={selectedMeal.affordability}
        complexity={selectedMeal.complexity}
      />
      <Text>Ingredientes</Text>
      {selectedMeal.ingredients.map((ingredient) => (
        <Text key={ingredient}>{ingredient}</Text>
      ))}
      <Text>Passos</Text>
      {selectedMeal.steps.map((steps) => (
        <Text key={steps}>{steps}</Text>
      ))}
    </View>
  );
};

export default MealDetailScreen;
