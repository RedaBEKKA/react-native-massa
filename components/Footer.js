import { StyleSheet, View } from "react-native";
import React from "react";
import { Txt } from "./TextsComponents";
import DimensionsHook from "../hooks/DimensionsHook";
import { colors } from "../styles/GlobalStyle";

const Footer = () => {
  const { isDesktop } = DimensionsHook();
  return (
    <View style={styles.footer}>
      <View
        style={{
          width: isDesktop ? "85%" : "95%",
          borderTopWidth: 1,
          backgroundColor: colors.white,
          borderTopColor: colors.grayBorder,
          alignItems: "center",
          justifyContent: "center",
          height: 70,
        }}
      >
        <Txt>Copyright © MASSA TRAILS 2021. Tous droits réservés.</Txt>
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footer: {
    backgroundColor: colors.white,

    alignItems: "center",
    justifyContent: "center",
  },
});
