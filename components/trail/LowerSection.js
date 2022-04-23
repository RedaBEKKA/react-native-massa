import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
  Pressable,
} from "react-native";
import React, { useState, useRef } from "react";
import { BoldTxt, Txt, H1, H5 } from "../TextsComponents";
import { colors } from "../../styles/GlobalStyle";
import DimensionsHook from "../../hooks/DimensionsHook";
import Swiper from "../swiper/Swiper";
import { ENDPOINT_WORKSHOPS } from "@env";
import { FavoriteIcon, LikeIcon } from "../../assets/svg/Icons";
import { DropDown } from "../Inputs";
import { useHover } from "react-native-web-hooks";

const LowerSection = ({
  seasons,
  data,
  selectedSeason,
  setSelectedSeason,
  navigation,
}) => {
  const { width, isMobile, isBigScreen, isTablet, isDesktop } =
    DimensionsHook();
  const likeRef = useRef(null);
  const favoriteRef = useRef(null);
  const [showSeason, setShowSeason] = useState(false);

  const likeHover = useHover(likeRef);
  const favoriteHover = useHover(favoriteRef);

  const container = {
    flex: 1,
    width: isBigScreen ? "70%" : isDesktop ? "80%" : isTablet ? "90%" : "95%",
    alignSelf: "center",
    paddingBottom: 10,
    marginBottom: 30,
  };

  return (
    <TouchableWithoutFeedback onPress={() => setShowSeason(false)}>
      <View style={container}>
        <BoldTxt style={{ marginTop: 25, marginBottom: 10 }}>Trail</BoldTxt>
        <View
          style={{
            flexDirection: isMobile || isTablet ? "column" : "row",
            alignItems: isMobile || isTablet ? "flex-start" : "center",
            justifyContent:
              isMobile || isTablet ? "flex-start" : "space-between",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: isDesktop ? 0 : 20,
            }}
          >
            <H1>{data.ressourceTitle}</H1>
            {/** like button */}
            <Pressable
              ref={likeRef}
              style={[
                styles.likeButton,
                {
                  borderWidth: likeHover ? 0 : 1,
                  backgroundColor: likeHover ? colors.blue0 : "transparent",
                },
              ]}
            >
              <LikeIcon color={likeHover ? colors.white : colors.grayBorder} />
            </Pressable>
            {/** favorite button */}
            <Pressable
              ref={favoriteRef}
              style={[
                styles.favoriteButton,
                {
                  borderWidth: favoriteHover ? 0 : 1,
                  backgroundColor: favoriteHover ? colors.red0 : "transparent",
                },
              ]}
            >
              <FavoriteIcon
                color={favoriteHover ? colors.white : colors.grayBorder}
              />
            </Pressable>
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
        <View
          onPress={() => setShowSeason(!setShowSeason)}
          style={{
            width: isDesktop ? 250 : isTablet ? 200 : 160,

            position: "absolute",
            top: isDesktop ? 60 : isTablet ? 15 : 10,
            right: 0,
          }}
        >
          <DropDown
            height={50}
            placeholder=""
            show={showSeason}
            setShow={() => setShowSeason(!showSeason)}
            value={selectedSeason}
            setValue={setSelectedSeason}
            options={seasons}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
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
  dropdownContainer: {},
});
