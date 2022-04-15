import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { BoldTxt, Txt, H1, H5 } from "../TextsComponents";
import { colors } from "../../styles/GlobalStyle";
import DimensionsHook from "../../hooks/DimensionsHook";
import Swiper from "../swiper/Swiper";
import { ENDPOINT_WORKSHOPS } from "@env";
import { FavoriteIcon, LikeIcon } from "../../assets/svg/Icons";

const LowerSection = ({
  saisons,
  data,
  selectedSeason,
  setSelectedSeason,
  navigation,
}) => {
  const { width, isMobile, isBigScreen, isTablet, isDesktop } =
    DimensionsHook();

  const container = {
    flex: 1,
    width: isBigScreen ? "70%" : isDesktop ? "80%" : isTablet ? "90%" : "95%",

    alignSelf: "center",
    paddingBottom: 10,
    marginBottom: 30,
  };

  return (
    <View style={container}>
      <BoldTxt style={{ marginTop: 25, marginBottom: 10 }}>Trail</BoldTxt>
      <View
        style={{
          flexDirection: isMobile || isTablet ? "column" : "row",
          alignItems: isMobile || isTablet ? "flex-start" : "center",
          justifyContent: isMobile || isTablet ? "flex-start" : "space-between",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <H1>{data.ressourceTitle}</H1>
          {/** like favorite button */}
          <TouchableOpacity style={styles.likeButton}>
            <LikeIcon />
          </TouchableOpacity>
          {/** favorite button */}
          <TouchableOpacity style={styles.favoriteButton}>
            <FavoriteIcon />
          </TouchableOpacity>
        </View>
        <View
          style={[
            styles.dropdownContainer,
            {
              width: isBigScreen ? 300 : isDesktop ? 200 : "90%",
              marginTop: isMobile || isTablet ? 10 : 0,
            },
          ]}
        >
          <Txt>Saison 1 </Txt>
        </View>
      </View>
      <Txt style={{ marginVertical: 30 }}>{data.metadata.description}</Txt>
      <View style={styles.divider} />
      <H5 style={{ marginVertical: 10 }}>Ateliers suggérés</H5>
      <Swiper
        navigation={navigation}
        type="Atelier"
        endpoint={ENDPOINT_WORKSHOPS}
      />
    </View>
  );
};

export default LowerSection;

const styles = StyleSheet.create({
  divider: {
    width: "90%",
    alignSelf: "center",
    height: 1,
    backgroundColor: colors.grayBorder,
    marginVertical: 20,
  },
  likeButton: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: colors.grayBorder,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    marginLeft: 12,
  },
  favoriteButton: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: colors.grayBorder,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    marginLeft: 12,
  },
  dropdownContainer: {
    height: 50,
    borderRadius: 5,
    alignItems: "center",
    alignSelf: "center",

    justifyContent: "center",

    backgroundColor: colors.grayBackground,
  },
});
