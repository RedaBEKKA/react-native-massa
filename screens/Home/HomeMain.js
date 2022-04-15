import {
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import { colors } from "../../styles/GlobalStyle";
import HeaderComponent from "../../components/HeaderComponent";
import { H6, BoldTxt } from "../../components/TextsComponents";
import DimensionsHook from "../../hooks/DimensionsHook";
import Swiper from "../../components/swiper/Swiper";
import { SearchComponent } from "../../components/Inputs";
import Footer from "../../components/Footer";

import { ENDPOINT_WORKSHOPS, ENDPOINT_TRAILS } from "@env";

const HomeMain = ({ navigation }) => {
  const { isMobile, isDesktop, isTablet } = DimensionsHook();
  const [keyword, setKeyword] = useState("");
  const swiperContainerStye = {
    backgroundColor: colors.white,
    width: "95%",
    alignSelf: "center",
    paddingTop: 15,
    paddingBottom: 5,
    borderRadius: 20,
    marginTop: 20,
    paddingLeft: isMobile ? 10 : 20,
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={Platform.OS === "web"}
      >
        <HeaderComponent navigation={navigation} />
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
        {/** History swiper */}
        <View style={swiperContainerStye}>
          <H6>Reprendre avec le profil de Brigitte</H6>
          <Swiper
            navigation={navigation}
            type="Trail"
            showStateBar={true}
            endpoint={ENDPOINT_TRAILS}
          />
        </View>
        {/**  Trails Swiper */}
        <View style={swiperContainerStye}>
          <View style={styles.row}>
            <H6>Trails</H6>
            <TouchableOpacity
              onPress={() => navigation.navigate("SeeAllTrails")}
            >
              <BoldTxt style={{ paddingRight: isMobile ? 10 : 20 }}>
                Tout Voir
              </BoldTxt>
            </TouchableOpacity>
          </View>

          <Swiper
            navigation={navigation}
            type="Trail"
            endpoint={ENDPOINT_TRAILS}
          />
        </View>
        {/**  Workshops */}
        <View style={[swiperContainerStye, { marginBottom: 30 }]}>
          <View style={styles.row}>
            <H6>Ateliers</H6>
            <BoldTxt style={{ paddingRight: isMobile ? 10 : 20 }}>
              drop down here
            </BoldTxt>
          </View>

          <Swiper
            navigation={navigation}
            type="Atelier"
            endpoint={ENDPOINT_WORKSHOPS}
          />
        </View>
        {isDesktop && <Footer />}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default HomeMain;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.beige,
    flex: 1,
  },
  item: {
    height: 240,
    backgroundColor: colors.blue3,
    borderRadius: 20,
    marginRight: 10,
    marginBottom: 20,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",

    marginTop: 10,
  },
});
