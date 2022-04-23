import { StyleSheet, Text, View,useWindowDimensions } from "react-native";
import React from "react";
import Spinner from "../Spinner";
import { colors } from "../../styles/GlobalStyle";
import DimensionsHook from "../../hooks/DimensionsHook";

const LoaderItem = ({SwiperItem}) => {
  const { isDesktop } = DimensionsHook();
  // fix Width
  const { width } = useWindowDimensions();
  return (
    <View style={[styles.container, { width: width >= 1300 ?  SwiperItem ? "48%" : 369 : 270 }]}>
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
