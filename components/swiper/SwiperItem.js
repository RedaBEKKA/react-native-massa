import {
  StyleSheet,
  View,
  Image,
  Pressable,
  Animated,
  Easing,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { BoldTxt, H6, H5, Txt, SmallTxt } from "../TextsComponents";
import { colors } from "../../styles/GlobalStyle";
import DimensionsHook from "../../hooks/DimensionsHook";
import { MTLogoWhite } from "../../assets/svg/Logo";
import { LinearGradient } from "expo-linear-gradient";
import { PresenceTransition, useDisclose } from "native-base";
import RolloverSmall from "../rollover/RolloverSmall";
import { useHover } from "react-native-web-hooks";
import { FavoriteIcon, LikeIcon, PlayIcon } from "../../assets/svg/Icons";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { ENDPOINT_LIKED, ENDPOINT_FAVOURITE, TOKEN } from "@env";
import { setUserInfo } from "../../redux/Actions";
const SwiperItem = ({ item, type, navigation, showStateBar }) => {
  const { isDesktop, isMobile } = DimensionsHook();
  const { isOpen, onOpen, onClose } = useDisclose();
  // generate a random progress
  const pourcentage = Math.floor(Math.random() * (90 - 40 + 1) + 40) / 100;
  const progress = pourcentage * 240;
  const barWidth = useRef(new Animated.Value(0)).current;
  //refs
  const hoverRef = useRef(null);
  const playRef = useRef(null);
  const likeRef = useRef(null);
  const favoriteRef = useRef(null);
  const isHovered = useHover(hoverRef);
  const playHover = useHover(playRef);
  const likeHover = useHover(likeRef);
  const favoriteHover = useHover(favoriteRef);

  // liked and favorite user lists
  const userInfo = useSelector((state) => state.userInfo);
  // like favorite states
  const [isLiked, setIsLiked] = useState(
    // userInfo?.liked.includes(item.ressourceCode)
  );
  const [isFavorite, setIsFavorite] = useState(
    userInfo?.favourite.includes(item.ressourceCode)
  );
  // PRESS LIKE & FAVOURITE FUNCTIONS
  const dispatch = useDispatch();
  const likePressHandler = () => {
    setIsLiked(!isLiked);
    axios
      .post(ENDPOINT_LIKED, {
        access_token: TOKEN,
        ressourceCode: item.ressourceCode,
      })
      .then((res) => {
        // console.log(res);
        dispatch(setUserInfo());
      })
      .catch((err) => console.log(err));
  };
  const favoritePressHandler = () => {
    setIsFavorite(!isFavorite);
    axios
      .post(ENDPOINT_FAVOURITE, {
        access_token: TOKEN,
        ressourceCode: item.ressourceCode,
      })
      .then((res) => {
        // console.log(res);
        dispatch(setUserInfo());
      })
      .catch((err) => console.log(err));
  };

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

  return (
    <Pressable
      disabled={isHovered && !isMobile}
      ref={hoverRef}
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
        {!isHovered && <BoldTxt color={colors.white}>{type}</BoldTxt>}
        {!isHovered && (
          <View style={{ flex: 1, flexDirection: "row" }}>
            <H6 style={{ textAlign: "center" }} color={colors.white}>
              {item.ressourceTitle}
            </H6>
          </View>
        )}
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
              onPress={likePressHandler}
              ref={likeRef}
              style={[
                styles.likeButton,
                {
                  borderWidth: isLiked ? 0 : likeHover ? 0 : 1,
                  backgroundColor: isLiked
                    ? colors.blue2
                    : likeHover
                    ? colors.blue0
                    : "transparent",
                },
              ]}
            >
              <LikeIcon
                color={
                  isLiked
                    ? colors.white
                    : likeHover
                    ? colors.white
                    : colors.grayBorder
                }
              />
            </Pressable>
            {/** favorite button */}
            <Pressable
              onPress={favoritePressHandler}
              ref={favoriteRef}
              style={[
                styles.favoriteButton,
                {
                  borderWidth: isFavorite ? 0 : favoriteHover ? 0 : 1,
                  backgroundColor: isFavorite
                    ? colors.red1
                    : favoriteHover
                    ? colors.red0
                    : "transparent",
                },
              ]}
            >
              <FavoriteIcon
                color={
                  isFavorite
                    ? colors.white
                    : favoriteHover
                    ? colors.white
                    : colors.grayBorder
                }
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
              <SmallTxt
                color={colors.white}
                style={{ textAlign: "center" }}
                fontSize={12}
              >
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
  statusBarContainer: {
    width: 240,
    alignSelf: "center",
    height: 3,
    borderRadius: 20,
    overflow: "hidden",
    justifyContent: "center",
    backgroundColor: colors.grayBorder,
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
});
