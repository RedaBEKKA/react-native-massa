import {
  Pressable,
  StyleSheet,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  Platform,
} from "react-native";
import React, { useState, useRef } from "react";
import { Modal, VStack } from "native-base";
import { colors } from "../../styles/GlobalStyle";
import { H5, SmallTxt, Txt } from "../TextsComponents";
import DimensionsHook from "../../hooks/DimensionsHook";
import { PrimaryButton } from "../Buttons";
import { ArrowBack } from "../../assets/svg/Icons";
import { Video } from "expo-av";
import { LinearGradient } from "expo-linear-gradient";
import {
  FullScreenIcon,
  PauseIcon,
  PlayIcon,
} from "../../assets/svg/VideoIcons";
import { MaterialIcons } from "@expo/vector-icons";

const VideoModal = ({
  isOpen,
  setIsOpen,
  item,
  poster_link,
  title,
  setOpenMovement,
}) => {
  const { isDesktop, isMobile, width, height } = DimensionsHook();

  const video = useRef(null);
  const [status, setStatus] = useState({});
  const [progressBarWidth, setProgressBarWidth] = useState(0);

  const closeHandler = () => {
    setIsOpen(false);
    video.current.stopAsync();
  };

  const openMovmentModalHandler = () => {
    video.current.stopAsync();
    setIsOpen(false);
    setOpenMovement(true);
  };

  function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  }

  return (
    <Modal isOpen={isOpen} onClose={closeHandler}>
      <Modal.Content
        style={[
          styles.modalContainer,
          {
            backgroundColor: isMobile ? colors.beige : colors.white,

            borderRadius: isMobile ? 0 : 20,
            width: isMobile ? "100%" : "95%",
          },
        ]}
      >
        {isMobile ? (
          <View style={styles.backContainer}>
            <Pressable onPress={closeHandler} style={styles.backButton}>
              <View onPress={closeHandler} style={{ width: 24, height: 24 }}>
                <ArrowBack />
              </View>
            </Pressable>
          </View>
        ) : (
          <Modal.CloseButton style={{ marginRight: 10 }} />
        )}
        <Modal.Body
          style={{
            height:
              Platform.OS === "android"
                ? height - StatusBar.currentHeight - 70
                : isMobile
                ? height - 70
                : "auto",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <VStack justifyContent="center" alignItems="center">
            <Txt style={{ marginTop: isMobile ? 0 : 30, marginBottom: 10 }}>
              {title}
            </Txt>
            <View
              style={{
                width: isMobile ? width : "90%",

                borderRadius: !isMobile ? 20 : 0,
                overflow: "hidden",
              }}
            >
              <Image
                source={{ uri: poster_link }}
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                }}
              />
              <LinearGradient
                colors={["#1B496500", "#1B496566"]}
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                }}
              />
              <View>
                {/** video */}
                <Video
                  ref={video}
                  volume={1}
                  style={{
                    width: "100%",
                    aspectRatio: 16 / 9,
                  }}
                  source={{
                    uri: item.link,
                    // uri: "https://www.massatrails.com/media/video/confEpigenetique.mp4",
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
                      styles.timeContainer,
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
                      styles.timeContainer,
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
                  video.current.setPositionAsync(
                    pourcentage * status.durationMillis
                  );
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
                            (status.positionMillis / status.durationMillis) *
                            100
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

              <View style={styles.bottomBar}>
                {/** like and favorite */}
                <View style={styles.iconContainer} />
                {/** play +-10 buttons bottom bar*/}
                <View style={styles.palyButtonsContainer}>
                  <TouchableOpacity
                    onPress={() =>
                      video.current.setPositionAsync(
                        status.positionMillis - 10000
                      )
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
                      video.current.setPositionAsync(
                        status.positionMillis + 10000
                      )
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
            {/** if movement */}
            {item.movement && (
              <View
                style={[
                  styles.mouvementContainer,
                  {
                    backgroundColor: isMobile ? colors.white : colors.beige,
                    width: isMobile ? "100%" : "90%",
                    flexDirection: isMobile ? "column" : "row",
                    alignItems: isMobile ? "flex-start" : "center",
                    justifyContent: isMobile ? "flex-start" : "space-between",
                  },
                ]}
              >
                <H5 style={{ paddingBottom: isMobile ? 12 : 0 }}>
                  Mouvement corporel
                </H5>

                <PrimaryButton onPress={openMovmentModalHandler}>
                  Start Video
                </PrimaryButton>
              </View>
            )}
            <View style={{ marginBottom: 20 }} />
          </VStack>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
};

export default VideoModal;

const styles = StyleSheet.create({
  backContainer: {
    height: 70,
    width: "100%",
    flexDirection: "row",
    backgroundColor: colors.beige,
    borderBottomWidth: 1,
    borderColor: colors.grayBorder,
  },
  backButton: {
    height: 70,
    width: 70,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1B496515",
  },
  bottomBar: {
    height: 50,
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    backgroundColor: colors.black,
    marginTop: -2,
  },
  modalContainer: {
    maxWidth: 800,
    maxHeight: 5000,
  },
  palyButtonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  iconContainer: { width: 20, height: 20 },
  timeContainer: {
    position: "absolute",
    bottom: 5,
    flexDirection: "row",
    paddingHorizontal: 5,
    alignItems: "center",
    justifyContent: "space-between",
  },
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
  mouvementContainer: {
    marginTop: 20,
    padding: 16,
    borderRadius: 16,
    alignSelf: "center",
  },
});
