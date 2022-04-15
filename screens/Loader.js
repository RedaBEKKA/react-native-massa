import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { colors } from "../styles/GlobalStyle";
import { H1, H2 } from "../components/TextsComponents";
import * as Animatable from "react-native-animatable";

const Loader = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("TabNavigation");
    }, 2000);
  }, []);
  return (
    <View style={styles.container}>
      <Animatable.View
        animation="pulse"
        duration={1500}
        iterationCount="infinite"
        direction="alternate"
        easing="linear"
        delay={0}
      >
        <H1>Respirer et Souriez ... :)</H1>
      </Animatable.View>
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.beige,
    alignItems: "center",
    justifyContent: "center",
  },
});
