import { Platform, ScrollView, StyleSheet, Image, View } from "react-native";
import React from "react";
import DimensionsHook from "../../hooks/DimensionsHook";
import { colors } from "../../styles/GlobalStyle";
import { H1, H4, H5 } from "../TextsComponents";
import { LinearGradient } from "expo-linear-gradient";

const UpperSection = ({ data, selectedSeason, navigation }) => {
  const { width, isMobile, isBigScreen, isTablet, isDesktop } =
    DimensionsHook();
  const EpisodesNumber = data.content_links[selectedSeason.value].length;

  const Divider = () => {
    return (
      <View
        style={{
          height: 5,
          minWidth: 60,
          backgroundColor: colors.white,
          flexDirection: "row",
          width: (width - 120 * EpisodesNumber) / EpisodesNumber + 1,
        }}
      ></View>
    );
  };

  return (
    <View
      style={{
        height: isBigScreen ? 400 : isDesktop ? 400 : isTablet ? 300 : 250,
        width: "100%",
        backgroundColor: colors.blue3,
        justifyContent: "center",
      }}
    >
      <Image source={{ uri: data.poster_link }} style={styles.image} />
      <LinearGradient
        colors={["#1B496500", "#1B496566"]}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
        }}
      />

      {data.content_link ? (
        <ScrollView
          horizontal
          contentContainerStyle={{ alignItems: "center" }}
          showsHorizontalScrollIndicator={Platform.OS === "web" ? true : false}
        >
          {data.content_link[selectedSeason.value].map((item, index) => {
            return (
              <View
                key={index}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Divider />
                <View style={styles.episodeCircle}>
                  <H5 color={colors.white}>Ép. {index + 1}</H5>
                </View>
              </View>
            );
          })}
          <Divider />
        </ScrollView>
      ) : (
        <View style={{ width: "100%", textAlign: "center" }}>
          <H1
            color={colors.green0}
            style={{
              textShadowColor: colors.black,
              textShadowOffset: { width: 2, height: 2 },
              textShadowRadius: 3,
              transform: "scale(2)",
            }}
          >
            Coming Soon !
          </H1>
        </View>
      )}
    </View>
  );
};

export default UpperSection;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  episodeCircle: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: colors.white,
  },
});
