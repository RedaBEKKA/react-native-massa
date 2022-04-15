import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { ArrowBack } from "../assets/svg/Icons";
import { colors } from "../styles/GlobalStyle";
import { Txt } from "./TextsComponents";
const BackHeader = ({ navigation }) => {
  const onBackPress = () => navigation.goBack();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onBackPress} style={styles.button}>
        <View style={{ width: 24, height: 24 }}>
          <ArrowBack />
        </View>
      </TouchableOpacity>
      <Txt style={{ marginLeft: 20 }}>Retour</Txt>
    </View>
  );
};

export default BackHeader;

const styles = StyleSheet.create({
  container: {
    height: 70,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: colors.beige,
    borderBottomColor: colors.grayBorder,
    borderBottomWidth: 1,
  },
  button: {
    width: 70,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1B496515",
  },
});
