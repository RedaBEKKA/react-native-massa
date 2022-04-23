import {
  Platform,
  ScrollView,
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useRef, useState } from "react";
import DimensionsHook from "../../hooks/DimensionsHook";
import { colors } from "../../styles/GlobalStyle";
import { H1, H4, H5, H3 } from "../TextsComponents";
import { LinearGradient } from "expo-linear-gradient";
import { useHover } from "react-native-web-hooks";
import VideoModal from "../videos/VideoModal";
import MovementVideoModal from "../videos/MovementVideoModal";

const UpperSection = ({ data, selectedSeason, navigation }) => {
  const { width, isMobile, isBigScreen, isTablet, isDesktop } =
    DimensionsHook();

  const EpisodesNumber = data.content_link[selectedSeason.value].length;
  const [showTrailVideoModal, setShowTrailVideoModal] = useState(false);
  const [showMovementVideoModal, setShowMovementVideoModal] = useState(false);
  const [selectedEpisode, setSelectedEpisode] = useState(null);
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

      {data.comingSoon === true ? (
        <View style={{ width, textAlign: "center" }}>
          <H1
            color={colors.green0}
            style={{
              textShadowColor: colors.black,
              textShadowOffset: { width: 2, height: 2 },
              textShadowRadius: 3,
              alignSelf: "center",
              transform: [{ scale: 2 }],
            }}
          >
            Coming Soon !
          </H1>
        </View>
      ) : (
        <ScrollView
          horizontal
          contentContainerStyle={{ alignItems: "center" }}
          showsHorizontalScrollIndicator={Platform.OS === "web" ? true : false}
        >
          {data.content_link[selectedSeason.value].map((item, index) => {
            const hoverRef = useRef(null);
            const isHovered = useHover(hoverRef);
            return (
              <View
                key={index}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Divider />
                {/** episode circle button */}
                <TouchableOpacity
                  onPress={() => {
                    setSelectedEpisode({ ...item, number: index + 1 });
                    setShowTrailVideoModal(true);
                  }}
                  ref={hoverRef}
                  style={[
                    styles.episodeButton,
                    {
                      borderColor: isHovered ? colors.blue3 : colors.white,
                      backgroundColor: isHovered ? colors.blue3 : "transparent",
                    },
                  ]}
                >
                  <H5
                    style={{ fontSize: isHovered ? 24 : 20 }}
                    color={isHovered ? colors.green2 : colors.white}
                  >
                    Ép. {index + 1}
                  </H5>
                </TouchableOpacity>
              </View>
            );
          })}
          <Divider />
        </ScrollView>
      )}
      {/** show trail video modal onPress on Episode Circle */}
      {selectedEpisode && (
        <VideoModal
          title={`${data.ressourceTitle} | S${
            selectedSeason.value + 1 < 10 && "0"
          }${selectedSeason.value + 1} - E${
            selectedEpisode.number < 10 && "0"
          }${selectedEpisode.number} `}
          poster_link={data.poster_link}
          isOpen={showTrailVideoModal}
          setIsOpen={setShowTrailVideoModal}
          setOpenMovement={setShowMovementVideoModal}
          item={selectedEpisode}
        />
      )}
      {/** show movement video */}
      {selectedEpisode && selectedEpisode.movement && (
        <MovementVideoModal
          title={""}
          poster={selectedEpisode.movement.poster}
          isOpen={showMovementVideoModal}
          setIsOpen={setShowMovementVideoModal}
          item={selectedEpisode.movement}
        />
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
  episodeButton: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
  },
});
