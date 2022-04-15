import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeMain from "./HomeMain";
import SeeAllTrails from "./SeeAllTrails";

const Stack = createNativeStackNavigator();

const Home = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="HomeMain"
        component={HomeMain}
        options={{ title: "Acceuil" }}
      />
      <Stack.Screen
        name="SeeAllTrails"
        component={SeeAllTrails}
        options={{ title: "Trails" }}
      />
    </Stack.Navigator>
  );
};

export default Home;

const styles = StyleSheet.create({});
