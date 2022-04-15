import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Platform,
  FlatList
} from "react-native";
import axios from "axios";
import SwiperItem from "../../components/swiper/SwiperItem";
import React, { useState, useEffect } from "react";
import HeaderComponent from "../../components/HeaderComponent";
import { ENDPOINT_WORKSHOPS, ENDPOINT_TRAILS } from "@env";
import {
  BoldTxt,
  H2,
  H5,
  H6,
  H7,
  SmallBoldTxt,
  SmallLightTxt,
  Txt,
} from "../../components/TextsComponents";
import { PrimaryButton } from "../../components/Buttons";
import DimensionsHook from "../../hooks/DimensionsHook";
import styles from "./Hooks/Styles";
import bacImg from "../../assets/Espace/Rectangle429.png";
import Coaching from "./Components/coaching";
import Status from "./Components/Status";
import Score from "./Components/Score";
import GrenCards from "./Components/GreenCard";
import { TOKEN } from "@env";
import Swiper from "../../components/swiper/Swiper";
import { colors } from "../../styles/GlobalStyle";
const Espace = ({ navigation }) => {
  const { isDesktop, isMobile, isTablet } = DimensionsHook();
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

  const PaddingVertical = !isDesktop ? 15 : 10;
  const Left = isDesktop ? 90 : 10;
  const [Data, setData] = useState([]);
  const [loader, setLoader] = useState(false);


  return (
    <View style={styles.container}>
      <HeaderComponent navigation={navigation} />
      <ScrollView>
        <>
          <H5 style={{ paddingLeft: Left, paddingVertical: PaddingVertical }}>
            Mon Espace
          </H5>
          <View
            style={isDesktop ? styles.desktopContent : styles.MobileContent}
          >
            <Status />
            <Score />
            <GrenCards />
            <Coaching navigation={navigation} />
          </View>
        

          <View
            style={isDesktop ? styles.desktopContent : styles.MobileContent}
          >
            <View style={swiperContainerStye}>
              <View style={styles.row}>
                <H6>Recommandation</H6>
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

          </View>
        </>
      </ScrollView>
    </View>
  );
};

export default Espace;
