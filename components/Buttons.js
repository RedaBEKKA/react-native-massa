import { StyleSheet, Pressable } from "react-native";
import React, { useRef } from "react";
import { colors } from "../styles/GlobalStyle";
import { useHover } from "react-native-web-hooks";
import { Txt } from "./TextsComponents";


export const PrimaryButton = ({ children, style, onPress }) => {
  return (
    <Pressable onPress={onPress} style={[styles.buttonPrimary, { ...style }]}>
      {children}
    </Pressable>
  );
};

export const SecondaryButton = ({ children, style, onPress }) => {
  const hoverRef = useRef(null);
  const isHovered = useHover(hoverRef);

  return (
    <Pressable
      ref={hoverRef}
      onPress={onPress}
      style={[
        styles.buttonSecondary,
        { borderColor: isHovered ? colors.blue3 : colors.grayBorder },
        { ...style },
      ]}
    >
      <Txt color={colors.blue3}>{children}</Txt>
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
  buttonSecondary: {
    height: 57,
    width: "100%",
    borderRadius: 5000,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    // borderColor: colors.grayBorder,
  },
});




