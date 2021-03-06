import { StyleSheet, Pressable } from "react-native";
import React, { useRef } from "react";
import { colors } from "../styles/GlobalStyle";
import { useHover } from "react-native-web-hooks";
import { Txt } from "./TextsComponents";

export const PrimaryButton = ({ children, style, onPress, width }) => {
  const hoverRef = useRef(null);
  const isHovered = useHover(hoverRef);

  return (
    <Pressable
      ref={hoverRef}
      onPress={onPress}
      style={[
        styles.buttonPrimary,
        {
          backgroundColor: isHovered ? colors.blue3 : colors.green2,
          width: width || "auto",
          paddingHorizontal: width ? "none" : 30,
        },

        { ...style },
      ]}
    >
      <Txt numberOfLines={1} color={isHovered ? colors.white : colors.blue3}>
        {children}
      </Txt>
    </Pressable>
  );
};

export const SecondaryButton = ({ children, style, onPress, width }) => {
  const hoverRef = useRef(null);
  const isHovered = useHover(hoverRef);

  return (
    <Pressable
      ref={hoverRef}
      onPress={onPress}
      style={[
        styles.buttonSecondary,
        {
          backgroundColor: isHovered ? colors.blue3 : "transparent",
          width: width || "auto",
          paddingHorizontal: width ? "none" : 30,
          borderColor: isHovered ? "transparent" : colors.grayBorder,
        },
        { ...style },
      ]}
    >
      <Txt color={isHovered ? colors.white : colors.blue3}>{children}</Txt>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  buttonPrimary: {
    height: 42,
    borderRadius: 5000,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonSecondary: {
    height: 42,
    borderRadius: 5000,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
  },
});
