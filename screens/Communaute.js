import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../styles/GlobalStyle";
import HeaderComponent from "../components/HeaderComponent";
import { H2 } from "../components/TextsComponents";

const Communaute = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <HeaderComponent name="Communauté" navigation={navigation} />
    </View>
  );
};

export default Communaute;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.beige,
    flex: 1,
  },
});
