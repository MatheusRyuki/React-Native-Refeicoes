import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealsDetails";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoriteScreen from "./screens/FavoriteScreen";

import { Ionicons } from "@expo/vector-icons";
import FavoritesContextProvider from "./store/context/favorite-context";

export default function App() {
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();

  const DrawerNavigator = () => {
    return (
      <Drawer.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#351401",
          },
          headerTintColor: "white",
          sceneContainerStyle: {
            backgroundColor: "#3f2f25",
          },
          drawerContentStyle: {
            backgroundColor: "#351401",
          },
          drawerInactiveTintColor: "white",
          drawerActiveTintColor: "#351401",
          drawerActiveBackgroundColor: "#e4baa1",
        }}
      >
        <Drawer.Screen
          name="Categories"
          component={CategoriesScreen}
          options={{
            title: "Todas Categorias",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="list" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="Favoritas"
          component={FavoriteScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="star" color={color} size={size} />
            ),
          }}
        />
      </Drawer.Navigator>
    );
  };

  return (
    <>
      <StatusBar style="light" />
      <FavoritesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: "#351401",
              },
              headerTintColor: "white",
              contentStyle: {
                backgroundColor: "#3f2f25",
              },
            }}
          >
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigator}
              options={{
                title: "Todas Categorias",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
            />
            <Stack.Screen
              name="MealDetail"
              component={MealDetailScreen}
              options={{
                title: "Sobre a Refeição",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesContextProvider>
    </>
  );
}
