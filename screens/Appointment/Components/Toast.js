import { View, StyleSheet, useWindowDimensions } from "react-native";
import React from "react";
import { colors } from "../../../styles/GlobalStyle";
import { Txt } from "../../../components/TextsComponents";
import { FontAwesome5 } from "@expo/vector-icons";
const Toast = ({ children, severity }) => {
  const { width } = useWindowDimensions();

  const WidthCust2 = width <= 800 ? "95%" : width <= 1200 ? "45%" : "30%";
  const left = width <= 800 ? 10 : width <= 1200 ? 20 : 40;

  return (
    <View style={[styles.container, { width: WidthCust2, right: left }]}>
      <Txt style={{ color: colors.white, paddingLeft: 5 }}>{children}</Txt>
      <FontAwesome5 name="info-circle" size={24} color={colors.white} />
    </View>
  );
};

export default Toast;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.red1,
    flex: 1,
    position: "absolute",
    top: "8%",
    height: 40,
    borderRadius: 5,
    paddingLeft: 5,
    justifyContent: "space-between",
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 9,
  },
});
