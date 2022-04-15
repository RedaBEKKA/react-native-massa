import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Spinner from "../Spinner";
import { colors } from "../../styles/GlobalStyle";
import DimensionsHook from "../../hooks/DimensionsHook";

const LoaderItem = () => {
  const { isDesktop } = DimensionsHook();
  return (
    <View style={[styles.container, { width: isDesktop ? 370 : 270 }]}>
      <Spinner size="large" />
    </View>
  );
};

export default LoaderItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.grayBackground,
    height: 240,
    borderRadius: 20,
    marginRight: 15,
    marginBottom: 20,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
});
