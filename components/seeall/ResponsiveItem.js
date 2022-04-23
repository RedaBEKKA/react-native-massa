import {
  StyleSheet,
  View,
  Image,
  Pressable,
  Animated,
  Easing,
} from "react-native";
import React, { useRef, useEffect } from "react";
import { BoldTxt, H6, H5, SmallTxt, Txt } from "../TextsComponents";
import { colors } from "../../styles/GlobalStyle";
import DimensionsHook from "../../hooks/DimensionsHook";
import { MTLogoWhite } from "../../assets/svg/Logo";
import { LinearGradient } from "expo-linear-gradient";
import { PresenceTransition, useDisclose } from "native-base";
import RolloverSmall from "../rollover/RolloverSmall";
import { FavoriteIcon, LikeIcon, PlayIcon } from "../../assets/svg/Icons";
import { useHover } from "react-native-web-hooks";
import { ScienceIcon } from "../../assets/svg/WorkshopBadgeIcons";

const ResponsiveItem = ({
  item,
  type,
  navigation,
  oneOnSmall,
  showStateBar,
}) => {
  const { isDesktop, isMobile, isTablet, isBigScreen, width } =
    DimensionsHook();
  const { isOpen, onOpen, onClose } = useDisclose();
  // generate a random progress
  const pourcentage = Math.floor(Math.random() * (90 - 40 + 1) + 40) / 100;
  const progress = pourcentage * 240;
  const barWidth = useRef(new Animated.Value(0)).current;
  const hoverRef = useRef(null);
  const playRef = useRef(null);
  const likeRef = useRef(null);
  const favoriteRef = useRef(null);
  const isHovered = useHover(hoverRef);
  const playHover = useHover(playRef);
  const likeHover = useHover(likeRef);
  const favoriteHover = useHover(favoriteRef);

  const playHandler = () => {
    if (type === "Trail") {
      navigation.navigate("Trail", { id: item.ressourceCode });
    } else {
      navigation.navigate("Workshop", { id: item.ressourceCode });
    }
  };

  const navigationHandler = () => {
    if (isMobile) {
      onOpen();
    } else {
      if (type === "Trail") {
        navigation.navigate("Trail", { id: item.ressourceCode });
      } else {
        navigation.navigate("Workshop", { id: item.ressourceCode });
      }
    }
  };

  useEffect(() => {
    Animated.timing(barWidth, {
      toValue: progress,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }, []);

  const itemContainer = {
    backgroundColor: colors.grayBackground,
    marginTop: 15,
    height: 240,
    borderRadius: 20,
    overflow: "hidden",
    width: isBigScreen
      ? (width * 0.95 - 15) * 0.25 - 20
      : isDesktop
      ? (width * 0.95 - 15) * 0.5 - 20
      : isTablet
      ? (width * 0.95 - 15) * 0.5 - 20
      : oneOnSmall
      ? width * 0.95
      : (width * 0.95 - 15) * 0.5 - 20,
    marginLeft: isMobile && oneOnSmall ? 0 : 15,
  };

  return (
    <Pressable
      disabled={isHovered && !isMobile}
      ref={hoverRef}
      onPress={navigationHandler}
      style={itemContainer}
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
        {/** new && badge  */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {/** category badge */}
          {type === "Atelier" && (
            <View style={styles.badge}>
              <View style={{ width: 16, height: 16, marginRight: 8 }}>
                <ScienceIcon />
              </View>

              <SmallTxt color={colors.white}>Atelier Science</SmallTxt>
            </View>
          )}
          {item.new ? (
            <View style={styles.newButton}>
              <SmallTxt>Nouveau</SmallTxt>
            </View>
          ) : (
            <></>
          )}
        </View>
      </View>
      <View style={[styles.textsContainer]}>
        <BoldTxt numberOfLines={1} color={colors.white}>
          {type}
        </BoldTxt>
        <H6
          numberOfLines={1}
          style={{ textAlign: "center" }}
          color={colors.white}
        >
          {item.ressourceTitle}
        </H6>
        {/** progress bar */}
        {showStateBar && (
          <View style={styles.statusBarContainer}>
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
      <PresenceTransition
        style={styles.rolloverContainer}
        visible={isHovered && !isMobile}
        initial={{
          translateY: -240,
        }}
        animate={{
          translateY: 0,
          transition: {
            duration: 300,
          },
        }}
      >
        <View style={{ padding: 16, paddingTop: 35 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 10,
            }}
          >
            <Pressable
              ref={playRef}
              onPress={playHandler}
              style={[
                styles.playButton,
                { backgroundColor: playHover ? colors.blue3 : colors.green2 },
              ]}
            >
              <PlayIcon />
            </Pressable>
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

          <View>
            <H5
              color={colors.white}
              numberOfLines={2}
              style={{ lineHeight: 26, marginVertical: 5 }}
            >
              {item.metadata.introduction}
            </H5>
            <SmallTxt color={colors.white} numberOfLines={3}>
              {item.metadata.description}
            </SmallTxt>
            {/** seasons */}
          </View>
        </View>

        {type === "Trail" && (
          <View style={styles.seasonNumberContainer}>
            {item.metadata.seasonsTotal > 0 ? (
              <BoldTxt color={colors.white} fontSize={12}>
                {item.metadata.seasonsTotal +
                  ` saison${item.metadata.seasonsTotal > 1 ? "s" : ""}`}
              </BoldTxt>
            ) : (
              <SmallTxt color={colors.white} fontSize={12}>
                Coming soon ...
              </SmallTxt>
            )}
          </View>
        )}
      </PresenceTransition>

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
    height: 26,
    alignItems: "center",
    justifyContent: "center",
  },
  badge: {
    backgroundColor: colors.blue3,
    paddingHorizontal: 8,
    marginRight: 5,
    borderRadius: 100,
    height: 26,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  textsContainer: {
    alignItems: "center",
    width: "90%",
    alignSelf: "center",
    position: "absolute",
    bottom: 20,
  },
  playButton: {
    width: 40,
    height: 40,
    backgroundColor: colors.green2,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 12,
  },
  likeButton: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: colors.grayBorder,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    marginLeft: 6,
  },
  favoriteButton: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: colors.grayBorder,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    marginLeft: 6,
  },
  rolloverContainer: {
    backgroundColor: "#00000090",
    position: "absolute",
    width: "100%",
    height: 240,
    top: 0,
    zIndex: 20,

    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flexDirection: "column",
  },
  seasonNumberContainer: { position: "absolute", bottom: 10, left: 16 },
  statusBarContainer: {
    width: 240,
    alignSelf: "center",
    height: 3,
    borderRadius: 20,
    overflow: "hidden",
    justifyContent: "center",
    backgroundColor: colors.grayBorder,
  },
});
