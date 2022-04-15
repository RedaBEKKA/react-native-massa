import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Platform,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import BackHeader from "../../components/BackHeader";
import { colors } from "../../styles/GlobalStyle";
import { SearchComponent } from "../../components/Inputs";
import DimensionsHook from "../../hooks/DimensionsHook";
import { H6 } from "../../components/TextsComponents";
import Footer from "../../components/Footer";
import { TOKEN, ENDPOINT_TRAILS } from "@env";
import Spinner from "../../components/Spinner";
import axios from "axios";
import ResponsiveItem from "../../components/seeall/ReponsiveItem";

const SeeAllTrails = ({ navigation }) => {
  const [keyword, setKeyword] = useState("");
  const { isMobile, isDesktop, isTablet, isBigScreen, width } =
    DimensionsHook();

  const [Data, setData] = useState([]);
  const [loader, setLoader] = useState(true);

  const getData = async () => {
    setLoader(true);
    const Response = await axios.post(ENDPOINT_TRAILS, {
      access_token: TOKEN,
    });
    setData(Response.data);
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  };

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      getData();
    }
    return (mounted = false);
  }, []);

  const itemContainer = {
    backgroundColor: colors.grayBackground,
    marginTop: 15,
    height: 240,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    overflow: "hidden",
    width: isBigScreen
      ? (width * 0.95 - 15) * 0.25 - 20
      : isDesktop
      ? (width * 0.95 - 15) * 0.33 - 20
      : isTablet
      ? (width * 0.95 - 15) * 0.5 - 20
      : (width * 0.95 - 20) * 0.5 - 15,
    marginLeft: 15,
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={Platform.OS === "web"}
      >
        <BackHeader navigation={navigation} />
        {/** search bar */}
        <View
          style={[
            styles.searchBarContainer,
            {
              justifyContent: isMobile ? "center" : "flex-end",
              marginRight: isMobile ? 0 : "2.5%",
            },
          ]}
        >
          <View style={{ width: isMobile ? "90%" : 400 }}>
            <SearchComponent
              placeholder="Rechercher"
              value={keyword}
              setValue={setKeyword}
            />
          </View>
        </View>
        {/** trails list */}
        <View style={styles.trailsContainer}>
          <H6 style={{ marginLeft: 15 }}>Trails</H6>
          {/** list of trails in rows  */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",

              paddingBottom: 15,
              flexWrap: "wrap",
            }}
          >
            {loader
              ? Array.from(Array(6)).map((_, i) => {
                  return (
                    <View key={i} style={itemContainer}>
                      <Spinner />
                    </View>
                  );
                })
              : Data.map((item) => {
                  return (
                    <ResponsiveItem
                      key={item.ressourceTitle}
                      item={item}
                      type={"Trail"}
                      navigation={navigation}
                    />
                  );
                })}
          </View>
        </View>
        {isDesktop && <Footer />}
      </ScrollView>
    </View>
  );
};

export default SeeAllTrails;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.beige,
    flex: 1,
  },
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",

    marginTop: 10,
  },
  trailsContainer: {
    minHeight: 500,
    width: "95%",
    alignSelf: "center",
    backgroundColor: colors.white,
    marginVertical: 20,
    borderRadius: 15,
    paddingVertical: 15,
  },
});
