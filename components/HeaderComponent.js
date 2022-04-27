import { StyleSheet, View, TouchableOpacity } from "react-native";
import React, { useRef } from "react";
import DimensionsHook from "../hooks/DimensionsHook";
import { useHover } from "react-native-web-hooks";
import { Avatar } from "../assets/svg/Icons";
import { colors } from "../styles/GlobalStyle";
import { MTLogoGreen } from "../assets/svg/Logo";
import { BoldTxt, Txt } from "./TextsComponents";

const HeaderComponent = ({ navigation, myaccount, name }) => {
  const { isDesktop } = DimensionsHook();

  const hoverRef = useRef(null);
  const isHovered = useHover(hoverRef);

  const routing = [
    { name: "Accueil", link: "Home" },
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
                let isActive = r.name === name;
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
        <TouchableOpacity
          ref={hoverRef}
          style={[
            styles.avatar,
            {
              backgroundColor: isHovered ? colors.blue3 : colors.grayBackground,
              borderWidth: 2,
              borderColor: myaccount ? colors.green2 : "transparent",
            },
          ]}
          onPress={() => navigation.navigate("MyAccount")}
        >
          <Avatar color={isHovered ? colors.white : colors.blue3} />
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
    width: 48,
    padding: 10,
    height: 48,
    borderRadius: 50,
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
