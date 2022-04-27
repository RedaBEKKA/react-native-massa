import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import React, { useState } from "react";
import DimensionsHook from "../../hooks/DimensionsHook";
import { BoldTxt, H3 } from "../TextsComponents";
import { DropDown } from "../Inputs";
import { colors } from "../../styles/GlobalStyle";
import { PrimaryButton } from "../Buttons";

const SettingsScreen = () => {
  const { isDesktop, width, isTablet, isMobile } = DimensionsHook();
  const [language, setLanguage] = useState({ label: "Français", value: "fr" });
  const [showLanguage, setShowLanguage] = useState(false);
  const languages = [
    { label: "Français", value: "fr" },
    { label: "English", value: "en" },
  ];

  return (
    // <TouchableWithoutFeedback onPress={() => setShowLanguage(false)}>
    <View style={{ marginTop: isDesktop ? 0 : 20 }}>
      <H3 style={{ fontSize: isDesktop ? 26 : 22 }}>Paramètres</H3>
      {/** language */}
      <View
        style={{
          marginVertical: 20,
          marginBottom: 30,
          flexDirection: !isMobile ? "row" : "column",
          alignItems: !isMobile ? "center" : "flex-start",
          justifyContent: !isMobile ? "space-between" : "flex-start",
        }}
      >
        <BoldTxt style={{ marginBottom: 20 }}>Votre langue</BoldTxt>
        <View
          style={{
            width: isMobile ? "90%" : 300,
            alignSelf: "center",
          }}
        >
          <DropDown
            show={showLanguage}
            setShow={() => setShowLanguage(!showLanguage)}
            value={language}
            setValue={setLanguage}
            options={languages}
            placeholder={language}
            height={64}
            smallLabel="Langue"
          />
        </View>
      </View>
      <View style={{ zIndex: -1 }}>
        <View style={styles.divider} />
        {/** logout */}
        <View
          style={{
            marginVertical: 20,
            marginBottom: 30,
            flexDirection: !isMobile ? "row" : "column",
            alignItems: !isMobile ? "center" : "flex-start",
            justifyContent: !isMobile ? "space-between" : "flex-start",

            zIndex: -1,
          }}
        >
          <BoldTxt style={{ marginBottom: isMobile ? 20 : 0 }}>
            Se déconnecter de tous les appareils
          </BoldTxt>
          <PrimaryButton>Se déconnecter</PrimaryButton>
        </View>
      </View>
    </View>
    // </TouchableWithoutFeedback>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: colors.grayBorder,
    marginBottom: 20,
  },
});
