import { StyleSheet, Pressable } from "react-native";
import React from "react";
import { colors } from "../styles/GlobalStyle";

export const PrimaryButton = ({ children, style, onPress }) => {
  return (
    <Pressable onPress={onPress} style={[styles.buttonPrimary, { ...style }]}>
      {children}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonPrimary: {
    height: 57,
    width: "100%",
    borderRadius: 5000,
    backgroundColor: colors.green2,
    alignItems: "center",
    justifyContent: "center",
  },
});
