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
import { Token, ENDPOINT_TRAILS } from "@env";
import axios from "axios";
import { PrimaryButton } from "../components/Buttons";
import Spinner from "../components/Spinner";
import UpperSection from "../components/trail/UpperSection";
import LowerSection from "../components/trail/LowerSection";
import { Txt } from "../components/TextsComponents";
import Footer from "../components/Footer";
import DimensionsHook from "../hooks/DimensionsHook";

const Trail = ({ navigation, route }) => {
  const { isDesktop } = DimensionsHook();
  const { id } = route.params;
  const [loader, setLoader] = useState(true);
  const [data, setData] = useState({});
  const [seasons, setSeasons] = useState([]);
  const [selectedSeason, setSelectedSeason] = useState({
    label: "Saison 1",
    value: 0,
  });

  const getData = async () => {
    setLoader(true);
    const payload = { access_token: Token };
    const Response = await axios.post(ENDPOINT_TRAILS + "/" + id, payload);

    setData(Response.data);
    console.log(Response.data);
    // Create an array of season with label and value = [{value:0, label: 'Saison 1'}, ....]
    let s = [];
    Array.from(Array(Response.data.content_links.length).keys()).forEach(
      (i) => {
        s.push({ label: `Saison ${i + 1}`, value: i });
      }
    );

    setSeasons(s);
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
        style={{ width: 170, position: "absolute", right: 20, top: 5 }}
      >
        <Txt>Une question ?</Txt>
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
            saisons={seasons}
            data={data}
            selectedSeason={selectedSeason}
            setSelectedSeason={setSelectedSeason}
            navigation={navigation}
          />
        </ScrollView>
      )}
      {isDesktop && <Footer />}
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
