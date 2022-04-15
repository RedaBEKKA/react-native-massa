import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Actionsheet } from "native-base";
import { CloseIcon } from "../../assets/svg/Logo";
import {
  PlayIcon,
  LikeIcon,
  FavoriteIcon,
  ArrowRight,
} from "../../assets/svg/Icons";
import { BoldTxt, H6, H5, Txt } from "../TextsComponents";
import { colors } from "../../styles/GlobalStyle";
import DimensionsHook from "../../hooks/DimensionsHook";
import { MTLogoWhite } from "../../assets/svg/Logo";
import { LinearGradient } from "expo-linear-gradient";

const RolloverSmall = ({ item, isOpen, onClose, type, navigation }) => {
  const { width } = DimensionsHook();

  const playHandler = () => {
    onClose();
    if (type === "Trail") {
      navigation.navigate("Trail", { id: item.ressourceCode });
    } else {
      navigation.navigate("Workshop");
    }
  };

  return (
    <Actionsheet
      backgroundColor="#00000050"
      hideDragIndicator
      isOpen={isOpen}
      onClose={onClose}
    >
      <View style={styles.container}>
        <View>
          <Image
            source={{ uri: item.poster_link }}
            style={{ width, height: width * 0.7, resizeMode: "cover" }}
          />
          <LinearGradient
            colors={["#1B496500", "#1B496566"]}
            style={{
              width,
              height: width * 0.7,
              position: "absolute",
            }}
          />
          <View style={[styles.logoCloseCotnainer, { width }]}>
            <View style={styles.logoContainer}>
              <MTLogoWhite />
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              {item.new ? (
                <View style={styles.newButton}>
                  <Txt fontSize={13}>Nouveau</Txt>
                </View>
              ) : (
                <></>
              )}
              <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                <CloseIcon />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.textsContainer}>
            <BoldTxt color={colors.white}>{type}</BoldTxt>
            <H6 color={colors.white}>{item.ressourceTitle}</H6>
          </View>
        </View>
        <View style={{ padding: 16 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 10,
            }}
          >
            {/** play button */}
            <TouchableOpacity onPress={playHandler} style={styles.playButton}>
              <PlayIcon />
            </TouchableOpacity>
            {/** like button */}
            <TouchableOpacity style={styles.likeButton}>
              <LikeIcon />
            </TouchableOpacity>
            {/** favorite button */}
            <TouchableOpacity style={styles.favoriteButton}>
              <FavoriteIcon />
            </TouchableOpacity>
          </View>
          {/** introduction */}
          <View>
            <H5>{item.metadata.introduction}</H5>
            <Txt
              numberOfLines={3}
              style={{ textAlign: "justify", marginVertical: 10 }}
            >
              {item.metadata.description}
            </Txt>
          </View>
          {/** seasons and go button */}
          {type === "Trail" && (
            <View style={styles.bottomRow}>
              {item.metadata.seasonsTotal > 0 ? (
                <BoldTxt fontSize={12}>
                  {item.metadata.seasonsTotal +
                    ` saison${item.metadata.seasonsTotal > 1 ? "s" : ""}`}
                </BoldTxt>
              ) : (
                <BoldTxt></BoldTxt>
              )}
              <View style={styles.goButton}>
                <ArrowRight />
              </View>
            </View>
          )}
          <View style={{ marginBottom: 10 }} />
        </View>
      </View>
    </Actionsheet>
  );
};

export default RolloverSmall;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: "hidden",
  },
  logoCloseCotnainer: {
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingVertical: 15,
  },
  logoContainer: {
    width: 40,
    height: 40,
  },

  newButton: {
    backgroundColor: colors.white,
    paddingHorizontal: 8,
    borderRadius: 100,
  },
  textsContainer: {
    alignItems: "center",
    width: "100%",
    position: "absolute",
    bottom: 20,
  },
  closeButton: {
    width: 30,
    height: 30,
    marginHorizontal: 12,
    padding: 8,
  },
  playButton: {
    width: 50,
    height: 50,
    backgroundColor: colors.green2,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 12,
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
  bottomRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 15,
  },
  goButton: { width: 18, height: 18 },
});
