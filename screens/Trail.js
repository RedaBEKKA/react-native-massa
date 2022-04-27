import {
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
  Platform,
} from "react-native";
import React, { useEffect, useState } from "react";
import { colors } from "../styles/GlobalStyle";
import BackHeader from "../components/BackHeader";
import { TOKEN, ENDPOINT_TRAILS } from "@env";
import axios from "axios";
import { PrimaryButton } from "../components/Buttons";
import Spinner from "../components/Spinner";
import UpperSection from "../components/trail/UpperSection";
import LowerSection from "../components/trail/LowerSection";
import { Txt } from "../components/TextsComponents";
import Footer from "../components/Footer";
import DimensionsHook from "../hooks/DimensionsHook";
import ChallengeModal from "../components/modals/ChallengeModal";
import FirstVisitModal from "../components/modals/FirstVisitModal";
import VideoModal from "../components/videos/VideoModal";
import MovementVideoModal from "../components/videos/MovementVideoModal";

const Trail = ({ navigation, route }) => {
  const { isDesktop } = DimensionsHook();
  const [isOpenChallenge, setIsOpenChallenge] = useState(false);
  const [isOpenFirstVisit, setIsOpenFirstVisit] = useState(false);
  const [showFirstVideo, setShowFirstVideo] = useState(false);
  const [showMovementVideoModal, setShowMovementVideoModal] = useState(false);

  const { id } = route.params;
  const [loader, setLoader] = useState(true);
  const [data, setData] = useState({});
  const [seasons, setSeasons] = useState([
    {
      label: "Saison 1",
      value: 0,
    },
  ]);
  const [selectedSeason, setSelectedSeason] = useState({
    label: "Saison 1",
    value: 0,
  });

  // check if first visit (E1S1 ?)
  const firstVisit = true;

  const getData = async () => {
    setLoader(true);
    const payload = { access_token: TOKEN };
    const Response = await axios.post(ENDPOINT_TRAILS + "/" + id, payload);

    setData(Response.data[0]);
    // console.log(Response.data);
    // Create an array of season with label and value = [{value:0, label: 'Saison 1'}, ....]

    if (Response.data[0].comingSoon) {
    } else {
      let s = [];
      Array.from(Array(Response.data[0].content_link.length).keys()).forEach(
        (i) => {
          s.push({ label: `Saison ${i + 1}`, value: i });
        }
      );
      setSeasons(s);
      if (firstVisit) {
        setIsOpenFirstVisit(true);
      } else {
        setIsOpenChallenge(true);
      }
    }

    setLoader(false);
  };

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      getData();
    }
    return (mounted = false);
  }, []);

  return (
    <View style={styles.container}>
      <BackHeader navigation={navigation} />
      {/** question button */}
      <PrimaryButton
        style={{
          position: "absolute",
          right: 20,
          top: 14,
        }}
      >
        Une question ?
      </PrimaryButton>
      {loader ? (
        <View style={styles.loadingContainer}>
          <Spinner size="large" />
        </View>
      ) : (
        <ScrollView
          style={{ flex: 1 }}
          showsVerticalScrollIndicator={Platform.OS === "web"}
        >
          <UpperSection
            data={data}
            selectedSeason={selectedSeason}
            navigation={navigation}
          />

          <LowerSection
            data={data}
            selectedSeason={selectedSeason}
            setSelectedSeason={setSelectedSeason}
            navigation={navigation}
            seasons={seasons}
          />

          {/** T3 / T3_1 T3_2 */}
          <ChallengeModal
            navigation={navigation}
            isOpen={isOpenChallenge}
            setIsOpen={setIsOpenChallenge}
          />
          {/** T4_1 */}
          <FirstVisitModal
            navigation={navigation}
            isOpen={isOpenFirstVisit}
            setIsOpen={setIsOpenFirstVisit}
            setShowFirstVideo={setShowFirstVideo}
          />
          {/** open S1E1 video Modal */}
          {data.content_link[0][0] && (
            <VideoModal
              title={`${data.ressourceTitle} | S01 - E01`}
              poster_link={data.poster_link}
              isOpen={showFirstVideo}
              setIsOpen={setShowFirstVideo}
              item={data.content_link[0][0]}
              setOpenMovement={setShowMovementVideoModal}
            />
          )}
          {data.content_link[0][0] && data.content_link[0][0].movement && (
            <MovementVideoModal
              title=""
              isOpen={showMovementVideoModal}
              setIsOpen={setShowMovementVideoModal}
              item={data.content_link[0][0].movement}
            />
          )}
          {/** case S1E1 Has movement video */}
          {isDesktop && <Footer />}
        </ScrollView>
      )}
    </View>
  );
};

export default Trail;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.beige,
    flex: 1,
  },
  loadingContainer: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
