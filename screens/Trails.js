import { StyleSheet, Text, View, ScrollView, Platform } from "react-native";
import React, { useState, useEffect } from "react";
import { colors } from "../styles/GlobalStyle";
import HeaderComponent from "../components/HeaderComponent";
import { H2 } from "../components/TextsComponents";
import DimensionsHook from "../hooks/DimensionsHook";
import { SearchComponent } from "../components/Inputs";
import Spinner from "../components/Spinner";
import ResponsiveItem from "../components/seeall/ResponsiveItem";
import axios from "axios";
import { TOKEN, ENDPOINT_TRAILS } from "@env";
import Footer from "../components/Footer";

const Trails = ({ navigation }) => {
  const [keyword, setKeyword] = useState("");
  const { isMobile, isDesktop, isTablet, isBigScreen, width, height } =
    DimensionsHook();

  const [Data, setData] = useState([]);
  const [loader, setLoader] = useState(true);

  const getData = async () => {
    setLoader(true);
    const Response = await axios.post(ENDPOINT_TRAILS, {
      access_token: TOKEN,
    });
    setData(Response.data);

    setLoader(false);
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
      : width * 0.95,
    marginLeft: isMobile ? 0 : 15,
    alignSelf: isMobile ? "center" : "flex-start",
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={Platform.OS === "web"}>
        <HeaderComponent name='Trails' navigation={navigation} />
        <View style={{ marginHorizontal: "2.5%" }}>
          <View
            style={{
              flexDirection: isMobile ? "column" : "row-reverse",
              alignItems: isMobile ? "flex-start" : "center",
              justifyContent: isMobile ? "flex-start" : "space-between",
              marginTop: 10,
            }}
          >
            {/** search bar */}
            <View
              style={{
                width: isMobile ? "100%" : 280,
              }}
            >
              <SearchComponent
                placeholder="Rechercher"
                value={keyword}
                setValue={setKeyword}
              />
            </View>
            <H2 style={{ marginTop: isMobile ? 20 : 0 }}>Mes trails</H2>
          </View>
          {/** list of trails in rows  */}
          <View style={{ minHeight: height - 220 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",

                paddingBottom: 15,

                flexWrap: "wrap",
              }}
            >
              {loader
                ? Array.from(Array(2)).map((_, i) => {
                    return (
                      <View key={i} style={itemContainer}>
                        <Spinner />
                      </View>
                    );
                  })
                : Data.map((item) => {
                    return (
                      <ResponsiveItem
                        showStateBar={true}
                        oneOnSmall={true}
                        key={item.ressourceTitle}
                        item={item}
                        type={"Trail"}
                        navigation={navigation}
                      />
                    );
                  })}
            </View>
          </View>
        </View>
        {isDesktop && <Footer />}
      </ScrollView>
    </View>
  );
};

export default Trails;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.beige,
    flex: 1,
  },
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
