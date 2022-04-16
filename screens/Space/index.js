import {
  View,
  ScrollView,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import React from "react";
import HeaderComponent from "../../components/HeaderComponent";
import { ENDPOINT_TRAILS } from "@env";
import { BoldTxt, H5, H6 } from "../../components/TextsComponents";
import DimensionsHook from "../../hooks/DimensionsHook";
import styles from "./Hooks/Styles";
import Coaching from "./Components/coaching";
import Status from "./Components/Status";
import Score from "./Components/Score";
import GrenCards from "./Components/GreenCard";

import Swiper from "../../components/swiper/Swiper";
import { colors } from "../../styles/GlobalStyle";
const Espace = ({ navigation }) => {
  const { isDesktop, isMobile } = DimensionsHook();
  const { width } = useWindowDimensions();


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
  const ContainerC1 = {
    backgroundColor: colors.beige,
    width: "95%",
    alignSelf: "center",
    paddingTop: 15,
    paddingBottom: 5,
    borderRadius: 20,
    flexDirection: width <= 1300 ? "column" : "row",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: width <= 790 ? 5 : 0,
    paddingBottom: width <= 790 ? 15 : 0,
  };

  const PaddingVertical = !isDesktop ? 15 : 10;
  const Left = isDesktop ? 90 : 10;

  const BoxA = {
    flexDirection: width >= 790 ? "row" : "column",
    width: width <= 1300 ? "100%" : "50%",
    alignItems: "center",
    justifyContent: "space-evenly",
  };
  const BoxB = {
    flexDirection: width >= 1300 ? "row" : "column",
    width: width <= 790 ? "100%" : width <= 1300 ? "100%" : "50%",
    alignItems: "center",
    justifyContent: "space-between",
    overflow: "hidden",

  };
  return (
    <View style={styles.container}>
      <HeaderComponent navigation={navigation} />
      <ScrollView>
        <>
          <H5 style={{ paddingLeft: Left, paddingVertical: PaddingVertical }}>
            Mon Espace
          </H5>
          <View style={ContainerC1}>
            <View style={BoxA}>
              <Status />
              <Score />
            </View>

            <View style={BoxB}>
              <GrenCards />
              <Coaching navigation={navigation} />
            </View>
          </View>

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
        </>
      </ScrollView>
    </View>
  );
};

export default Espace;
