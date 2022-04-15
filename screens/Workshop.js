import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BackHeader from "../components/BackHeader";
import { H3 } from "../components/TextsComponents";
import { colors } from "../styles/GlobalStyle";

const Workshop = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <BackHeader navigation={navigation} />
      <H3 style={{ textAlign: "center", marginTop: 40 }}>
        Streaming video Workshop here
      </H3>
    </View>
  );
};

export default Workshop;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.beige,
  },
});
