import { StyleSheet, View, Image, Pressable } from "react-native";
import React from "react";
import { BoldTxt, H6, Txt } from "../TextsComponents";
import { colors } from "../../styles/GlobalStyle";
import DimensionsHook from "../../hooks/DimensionsHook";
import { MTLogoWhite } from "../../assets/svg/Logo";
import { LinearGradient } from "expo-linear-gradient";
import { useDisclose } from "native-base";
import RolloverSmall from "../rollover/RolloverSmall";

const ResponsiveItem = ({ item, type, navigation }) => {
  const { isDesktop, isMobile, isTablet, isBigScreen, width } =
    DimensionsHook();
  const { isOpen, onOpen, onClose } = useDisclose();

  const navigationHandler = () => {
    if (isMobile) {
      onOpen();
    } else {
      if (type === "Trail") {
        navigation.navigate("Trail", { id: item.ressourceCode });
      } else {
        navigation.navigate("Workshop");
      }
    }
  };

  const itemContainer = {
    backgroundColor: colors.grayBackground,
    marginTop: 15,
    height: 240,
    borderRadius: 20,
    overflow: "hidden",
    width: isBigScreen
      ? (width * 0.95 - 15) * 0.25 - 20
      : isDesktop
      ? (width * 0.95 - 15) * 0.33 - 20
      : isTablet
      ? (width * 0.95 - 15) * 0.5 - 20
      : (width * 0.95 - 15) * 0.5 - 20,
    marginLeft: 15,
  };

  return (
    <Pressable onPress={navigationHandler} style={itemContainer}>
      <Image source={{ uri: item.poster_link }} style={styles.image} />
      <LinearGradient
        colors={["#1B496500", "#1B496566"]}
        style={styles.image}
      />

      <View style={styles.row}>
        <View style={styles.logoContainer}>
          <MTLogoWhite />
        </View>
        {item.new ? (
          <View style={styles.newButton}>
            <Txt fontSize={13}>Nouveau</Txt>
          </View>
        ) : (
          <></>
        )}
      </View>
      <View style={styles.textsContainer}>
        <BoldTxt numberOfLines={1} color={colors.white}>
          {type}
        </BoldTxt>
        <H6 numberOfLines={1} color={colors.white}>
          {item.ressourceTitle}
        </H6>
      </View>
      {isMobile && isOpen && (
        <RolloverSmall
          type={type}
          item={item}
          navigation={navigation}
          isOpen={isOpen}
          onClose={onClose}
        />
      )}
    </Pressable>
  );
};

export default ResponsiveItem;

const styles = StyleSheet.create({
  logoContainer: {
    width: 30,
    height: 30,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 12,
  },
  newButton: {
    backgroundColor: colors.white,
    paddingHorizontal: 8,
    borderRadius: 100,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  textsContainer: {
    alignItems: "center",
    width: "100%",
    position: "absolute",
    bottom: 20,
  },
});
