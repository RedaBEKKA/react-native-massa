import {
  StyleSheet,
  View,
  Image,
  Pressable,
  Animated,
  Easing,
} from "react-native";
import React, { useEffect, useRef } from "react";
import { BoldTxt, H6, Txt } from "../TextsComponents";
import { colors } from "../../styles/GlobalStyle";
import DimensionsHook from "../../hooks/DimensionsHook";
import { MTLogoWhite } from "../../assets/svg/Logo";
import { LinearGradient } from "expo-linear-gradient";
import { useDisclose } from "native-base";
import RolloverSmall from "../rollover/RolloverSmall";

const SwiperItem = ({ item, type, navigation, showStateBar }) => {
  const { isDesktop, isMobile } = DimensionsHook();
  const { isOpen, onOpen, onClose } = useDisclose();
  // generate a random progress
  const pourcentage = Math.floor(Math.random() * (90 - 40 + 1) + 40) / 100;
  const progress = pourcentage * 240;
  const barWidth = useRef(new Animated.Value(0)).current;

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

  useEffect(() => {
    Animated.timing(barWidth, {
      toValue: progress,
      duration: 1000,
      delay: 300,

      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }, []);

  return (
    <Pressable
      onPress={navigationHandler}
      style={[styles.container, { width: isDesktop ? 370 : 270 }]}
    >
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
        <BoldTxt color={colors.white}>{type}</BoldTxt>
        <H6 color={colors.white}>{item.ressourceTitle}</H6>
        {/** progress bar */}
        {showStateBar && (
          <View
            style={{
              width: 240,
              alignSelf: "center",
              height: 3,
              borderRadius: 20,
              overflow: "hidden",
              justifyContent: "center",
              backgroundColor: colors.grayBorder,
            }}
          >
            <Animated.View
              style={{
                height: 3,
                backgroundColor: colors.green2,

                width: barWidth,
              }}
            ></Animated.View>
          </View>
        )}
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

export default SwiperItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.grayBackground,
    height: 240,
    borderRadius: 20,
    marginRight: 15,
    marginBottom: 20,
    overflow: "hidden",
  },
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
