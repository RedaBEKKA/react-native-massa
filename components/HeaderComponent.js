import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import DimensionsHook from "../hooks/DimensionsHook";

import Avatar from "../assets/avatar.png";
import { colors } from "../styles/GlobalStyle";
import { useRoute } from "@react-navigation/native";
import { MTLogoGreen } from "../assets/svg/Logo";
import { BoldTxt, Txt } from "./TextsComponents";
const HeaderComponent = ({ navigation }) => {
  const { isDesktop, isMobile, isTablet } = DimensionsHook();
  const route = useRoute();

  const routing = [
    { name: "Acceuil", link: "Home" },
    { name: "Mon Espace", link: "Espace" },
    { name: "Trails", link: "Trails" },
    { name: "Ateliers", link: "Workshops" },
    { name: "Communauté", link: "Communaute" },
  ];

  return (
    <View style={{ backgroundColor: colors.beige }}>
      <View
        style={[
          styles.header,
          {
            width: isDesktop ? "85%" : "95%",
            alignSelf: "center",
          },
        ]}
      >
        <View style={styles.row}>
          <View style={styles.logoContainer}>
            <MTLogoGreen />
          </View>
          {isDesktop && (
            <View style={styles.linksContainer}>
              {routing.map((r) => {
                const isActive = route.name === r.link;
                return (
                  <TouchableOpacity
                    key={r.name}
                    onPress={() => navigation.navigate(r.link)}
                    style={styles.linkButton}
                  >
                    {isActive ? (
                      <BoldTxt>{r.name}</BoldTxt>
                    ) : (
                      <Txt>{r.name}</Txt>
                    )}

                    {isActive && <View style={styles.activeDot}></View>}
                  </TouchableOpacity>
                );
              })}
            </View>
          )}
        </View>
        <TouchableOpacity>
          <Image source={Avatar} style={styles.avatar} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.beige,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 70,
    borderBottomWidth: 1,
    borderBottomColor: colors.grayBorder,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  logoContainer: {
    width: 50,
    height: 50,
  },
  avatar: {
    width: 45,
    height: 45,
    backgroundColor: colors.grayBackground,
    borderRadius: 20,
  },
  activeDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.green1,
    alignSelf: "center",
    position: "absolute",
    bottom: 0,
  },
  linksContainer: {
    flexDirection: "row",
    alignItems: "center",

    marginLeft: 15,
  },
  linkButton: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginLeft: 10,
  },
});
