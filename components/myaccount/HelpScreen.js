import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Categories from "./HelpScreens/Categories";
import Facturation from "./HelpScreens/Facturation";
import Abonnement from "./HelpScreens/Abonnement";
import Application from "./HelpScreens/Application";

const HelpScreen = () => {
  const [state, setState] = useState("Categories");

  switch (state) {
    case "Facturation":
      return <Facturation setState={setState} />;
    case "Abonnement":
      return <Abonnement setState={setState} />;
    case "Application":
      return <Application setState={setState} />;

    default:
      return <Categories setState={setState} />;
  }
};

export default HelpScreen;
