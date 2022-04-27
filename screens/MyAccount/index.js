import { StyleSheet } from "react-native";
import React from "react";
import { colors } from "../../styles/GlobalStyle";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AccountGeneral from "./AccountGeneral";
import AccountPassword from "./AccountPassword";
import AccountPayment from "./AccountPayment";
import AccountGift from "./AccountGift";
import AccountSettings from "./AccountSettings";
import AccountHelp from "./AccountHelp";
import AccountMentions from "./AccountMentions";
import AccountContact from "./AccountContact";
import AccountScore from "./AccountScore";

const Stack = createNativeStackNavigator();

const MyAccount = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="AccountGeneral"
        component={AccountGeneral}
        options={{ title: "Général" }}
      />
      <Stack.Screen
        name="AccountPassword"
        component={AccountPassword}
        options={{ title: "Mot de passe" }}
      />
      <Stack.Screen
        name="AccountPayment"
        component={AccountPayment}
        options={{ title: "Mes informations de paiement" }}
      />
      <Stack.Screen
        name="AccountScore"
        component={AccountScore}
        options={{ title: "Mon Score" }}
      />
      <Stack.Screen
        name="AccountGift"
        component={AccountGift}
        options={{ title: "Offrir un cadeau / Parrainage" }}
      />
      <Stack.Screen
        name="AccountSettings"
        component={AccountSettings}
        options={{ title: "Paramètres" }}
      />
      <Stack.Screen
        name="AccountHelp"
        component={AccountHelp}
        options={{ title: "Aide" }}
      />
      <Stack.Screen
        name="AccountMentions"
        component={AccountMentions}
        options={{ title: "Mentions légales" }}
      />
      <Stack.Screen
        name="AccountContact"
        component={AccountContact}
        options={{ title: "Nous contacter" }}
      />
    </Stack.Navigator>
  );
};

export default MyAccount;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.beige,
    flex: 1,
  },
});
