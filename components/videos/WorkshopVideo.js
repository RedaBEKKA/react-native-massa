import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useRef, useState } from "react";
import { colors } from "../../styles/GlobalStyle";
import { Video } from "expo-av";
import DimensionsHook from "../../hooks/DimensionsHook";
import { SmallTxt, Txt } from "../TextsComponents";
import {
  PauseIcon,
  PlayIcon,
  FullScreenIcon,
} from "../../assets/svg/VideoIcons";
import { MTLogoWhite } from "../../assets/svg/Logo";
import { LinearGradient } from "expo-linear-gradient";
import { useHover } from "react-native-web-hooks";
import { FavoriteIcon, LikeIcon } from "../../assets/svg/Icons";
import { MaterialIcons } from "@expo/vector-icons";

const WorkshopVideo = ({ data }) => {
  const { isMobile, isDesktop, width, height } = DimensionsHook();
  const video = useRef(null);
  const likeRef = useRef(null);
  const favoriteRef = useRef(null);
  const likeHover = useHover(likeRef);
  const favoriteHover = useHover(favoriteRef);
  const [status, setStatus] = useState({});
  const [progressBarWidth, setProgressBarWidth] = useState(0);

  function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  }

  return (
    <View>
      {/** header */}
      <View
        style={[
          styles.header,
          {
            borderTopLeftRadius: isDesktop ? 20 : 0,
            borderTopRightRadius: isDesktop ? 20 : 0,
          },
        ]}
      >
        <View style={styles.mtLogo}>
          <MTLogoWhite />
        </View>
        <Txt numberOfLines={1} color={colors.white}>
          {data.ressourceTitle}
        </Txt>
      </View>
      {/** video  */}
      <View>
        <Image source={{ uri: data.poster_link }} style={styles.image} />
        <LinearGradient
          colors={["#1B496500", "#1B496566"]}
          style={styles.image}
        />

        <Video
          ref={video}
          shouldPlay
          volume={1}
          style={{
            aspectRatio: 16 / 9,
            width: !isDesktop ? width : "auto",
            height: isDesktop ? height * 0.6 : "auto",
          }}
          source={{
            // uri: "https://www.massatrails.com/media/video/confEpigenetique.mp4",
            uri: data.content_link[0].link,
            // uri: "https://www.massatrails.com/media/video/WS-Braingym/playlist-Braingym-01/master.m3u8",
          }}
          useNativeControls={false}
          resizeMode="contain"
          onPlaybackStatusUpdate={(status) => {
            setStatus(() => status);
          }}
        />

        {/** timer */}
        {status.durationMillis ? (
          <View
            style={[
              styles.timerContainer,
              {
                width: !isDesktop ? width : "100%",
              },
            ]}
          >
            <SmallTxt color={colors.white}>
              {millisToMinutesAndSeconds(status.positionMillis)}
            </SmallTxt>

            <SmallTxt color={colors.white}>
              {millisToMinutesAndSeconds(status.durationMillis)}
            </SmallTxt>
          </View>
        ) : (
          <View
            style={[
              styles.timerContainer,
              {
                width: !isDesktop ? width : "100%",
              },
            ]}
          />
        )}
      </View>
      {/** progress bar */}
      <Pressable
        onLayout={(event) => {
          setProgressBarWidth(event.nativeEvent.layout.width);
        }}
        onPress={(e) => {
          const offset = (width - progressBarWidth) / 2;
          const x = e.nativeEvent.pageX;
          const pourcentage = (x - offset) / progressBarWidth;
          video.current.setPositionAsync(pourcentage * status.durationMillis);
        }}
        style={styles.progressBarContainer}
      >
        <View
          style={{
            width: !isDesktop ? width : "100%",

            height: 4,
            backgroundColor: colors.grayBorder,
          }}
        >
          {status.isLoaded && (
            <View
              style={[
                styles.progressBar,
                {
                  width: `${
                    (status.positionMillis / status.durationMillis) * 100
                  }%`,
                },
              ]}
            >
              <View style={styles.progressCircle} />
            </View>
          )}
        </View>
      </Pressable>
      {/** bottom bar */}
      <View
        style={[
          styles.bottomBar,
          {
            width: !isDesktop ? width : "100%",
            borderBottomLeftRadius: isDesktop ? 20 : 0,
            borderBottomRightRadius: isDesktop ? 20 : 0,
          },
        ]}
      >
        {/** like and favorite */}
        <View style={{ flexDirection: "row" }}>
          {/** like button */}
          <TouchableOpacity
            ref={likeRef}
            style={[
              styles.likeButton,
              {
                borderColor: likeHover ? "transparent" : colors.white,
                backgroundColor: likeHover ? colors.blue0 : colors.white,
              },
            ]}
          >
            <LikeIcon color={likeHover ? colors.white : colors.grayBorder} />
          </TouchableOpacity>
          {/** favorite button */}
          <TouchableOpacity
            ref={favoriteRef}
            style={[
              styles.favoriteButton,
              {
                borderColor: favoriteHover ? "transparent" : colors.white,
                backgroundColor: favoriteHover ? colors.red0 : colors.white,
              },
            ]}
          >
            <FavoriteIcon
              color={favoriteHover ? colors.white : colors.grayBorder}
            />
          </TouchableOpacity>
        </View>
        {/** play +-10 buttons bottom bar*/}
        <View style={styles.palyButtonsContainer}>
          <TouchableOpacity
            onPress={() =>
              video.current.setPositionAsync(status.positionMillis - 10000)
            }
          >
            <MaterialIcons name="replay-10" size={30} color="white" />
          </TouchableOpacity>
          {status.isPlaying ? (
            <TouchableOpacity
              onPress={() => video.current.pauseAsync()}
              style={[
                styles.iconContainer,
                { marginHorizontal: isMobile ? 30 : 40 },
              ]}
            >
              <PauseIcon />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => video.current.playAsync()}
              style={[
                styles.iconContainer,
                { marginHorizontal: isMobile ? 30 : 40 },
              ]}
            >
              <PlayIcon />
            </TouchableOpacity>
          )}

          <TouchableOpacity
            onPress={() =>
              video.current.setPositionAsync(status.positionMillis + 10000)
            }
          >
            <MaterialIcons name="forward-10" size={30} color="white" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={[styles.iconContainer, { marginRight: 20 }]}
          onPress={() => video.current.presentFullscreenPlayer()}
        >
          <FullScreenIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WorkshopVideo;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.black,
    height: 40,
  },
  mtLogo: { width: 30, height: 30, marginRight: 10 },
  image: { position: "absolute", width: "100%", height: "100%" },
  timerContainer: {
    position: "absolute",
    bottom: 5,
    flexDirection: "row",
    paddingHorizontal: 5,
    alignItems: "center",
    justifyContent: "space-between",
  },
  likeButton: {
    width: 35,
    height: 35,
    borderWidth: 1,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    padding: 6,
  },
  favoriteButton: {
    width: 35,
    height: 35,
    borderWidth: 1,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    padding: 6,
    marginLeft: 12,
  },
  palyButtonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  iconContainer: { width: 20, height: 20 },
  progressBarContainer: {
    height: 10,
    zIndex: 10,

    backgroundColor: colors.black,
  },
  progressBar: {
    height: 4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    minWidth: 8,
    backgroundColor: colors.green2,
  },
  progressCircle: {
    width: 14,
    height: 14,
    borderRadius: 10,

    backgroundColor: colors.white,
  },
  bottomBar: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    backgroundColor: colors.black,
    marginTop: -2,
  },
});
