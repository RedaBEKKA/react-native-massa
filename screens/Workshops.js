import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState, useEffect } from "react";
import { colors } from "../styles/GlobalStyle";
import HeaderComponent from "../components/HeaderComponent";
import { H2 } from "../components/TextsComponents";
import DimensionsHook from "../hooks/DimensionsHook";
import { DropDown, SearchComponent } from "../components/Inputs";
import Spinner from "../components/Spinner";
import ResponsiveItem from "../components/seeall/ResponsiveItem";
import axios from "axios";
import { TOKEN, ENDPOINT_WORKSHOP } from "@env";
import Footer from "../components/Footer";

const Workshops = ({ navigation }) => {
  const [keyword, setKeyword] = useState("");
  const { isMobile, isDesktop, isTablet, isBigScreen, width, height } =
    DimensionsHook();

  const [Data, setData] = useState([]);
  const [loader, setLoader] = useState(true);
  const [showCategories, setShowCategories] = useState(false);
  const [selectedCategorie, setSelectedCategorie] = useState("");
  const categories = [
    { label: "Atelier Conscience", value: "Atelier Conscience" },
    { label: "Atelier Corps", value: "Atelier Corps" },
    { label: "Atelier Rituels", value: "Atelier Rituels" },
    { label: "Atelier Témoignages", value: "Atelier Témoignages" },
  ];

  const getData = async () => {
    setLoader(true);
    const Response = await axios.post(ENDPOINT_WORKSHOP, {
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
    <TouchableWithoutFeedback onPress={() => setShowCategories(false)}>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={Platform.OS === "web"}>
          <HeaderComponent name='Ateliers' navigation={navigation} />
          <View style={{ marginHorizontal: "2.5%" }}>
            <View
              style={{
                flexDirection: !isDesktop ? "column" : "row-reverse",
                alignItems: !isDesktop ? "flex-start" : "center",
                justifyContent: !isDesktop ? "flex-start" : "space-between",
                marginTop: 10,
              }}
            >
              {/** search bar & dropwdown */}
              <View
                style={{
                  flexDirection: !isDesktop ? "column" : "row-reverse",
                  alignItems: "center",
                  width: !isDesktop ? "100%" : "auto",
                }}
              >
                {/** search bar */}
                <View
                  style={{
                    width: !isDesktop ? "100%" : 280,
                  }}
                >
                  <SearchComponent
                    placeholder="Rechercher"
                    value={keyword}
                    setValue={setKeyword}
                  />
                </View>
                {/** dropdown */}
                <View
                  style={{
                    width: !isDesktop ? "100%" : 280,
                    marginTop: 5,
                    marginRight: !isDesktop ? 0 : 15,
                  }}
                >
                  <DropDown
                    height={58}
                    placeholder="Toutes les catégories"
                    show={showCategories}
                    setShow={() => setShowCategories(!showCategories)}
                    value={selectedCategorie}
                    setValue={setSelectedCategorie}
                    options={categories}
                  />
                </View>
              </View>
              <H2 style={{ marginTop: !isDesktop ? 20 : 0 }}>Mes ateliers</H2>
            </View>
            {/** list of workshops in rows  */}
            <View style={{ minHeight: height - 220, zIndex: -1 }}>
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
                          oneOnSmall={true}
                          key={item.ressourceTitle}
                          item={item}
                          type={"Atelier"}
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
    </TouchableWithoutFeedback>
  );
};

export default Workshops;

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
