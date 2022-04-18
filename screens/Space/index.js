import {
  View,
  ScrollView,
  TouchableOpacity,
  useWindowDimensions,
  Text,
} from "react-native";
import React, { useEffect, useState } from "react";
import HeaderComponent from "../../components/HeaderComponent";
import { ENDPOINT_TRAILS } from "@env";
import { BoldTxt, H5, H6, H7 } from "../../components/TextsComponents";
import DimensionsHook from "../../hooks/DimensionsHook";
import styles from "./Hooks/Styles";
import Coaching from "./Components/coaching";
import Status from "./Components/Status";
import Score from "./Components/Score";
import GrenCards from "./Components/GreenCard";

import Swiper from "../../components/swiper/Swiper";
import { colors } from "../../styles/GlobalStyle";
import TrailsSwiper from "../../components/swiper/TrailsSwiper";
import Footer from "../../components/Footer";
const Espace = ({ navigation }) => {
  const { isDesktop, isMobile } = DimensionsHook();
  const { width } = useWindowDimensions();
  // section-Title
  const Title = {
    backgroundColor: colors.beige,
    width: "95%",
    alignSelf: "center",
    paddingTop: 15,
    paddingBottom: 5,
    borderRadius: 20,
    marginTop: 20,
    paddingLeft: 10,
  };
  // section Status & score & cards
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

  // section-Trails & favoris
  const Trails = {
    backgroundColor: colors.beige,
    width: `${95}%`,
    alignSelf: "center",
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: width <= 1300 ? "column" : "row",
    marginTop : width <= 1300 ? 0 : 20,
  };
  const TrailsContainer = {
    backgroundColor: colors.white,
    width: width <= 1300 ? `100%` : `49.5%`,
    alignSelf: "center",
    borderRadius: 20,
    marginLeft: 5,
    paddingLeft: 10,
    paddingTop: 8,
    marginBottom:20
  };

  // display Data trails
  const [Ready, setReady] = useState(false);
  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      setTimeout(() => {
        setReady(true);
      }, 5000);
    }
    return () => {
      isMounted = false;
    };
  }, []);
  // section-Recommandation
  const swiperContainerStye = {
    backgroundColor: Ready ? colors.white : "",
    width: "95%",
    alignSelf: "center",
    paddingTop: 15,
    paddingBottom: 5,
    borderRadius: 20,
    overflow: "hidden",
    marginBottom: 15,
    paddingLeft: Ready ? 10 : 0,
    marginTop: Ready ? 10 : 0,
  };

  const ContainerRecommandation = {
    backgroundColor: colors.white,
    width: width <= 1300 ? "100%" : Ready ? '100%' :`${50}%`,
    alignSelf: Ready ? "center" : "flex-start",
    borderRadius: 20,
  };
  return (
    <View style={styles.container}>
      <HeaderComponent navigation={navigation} />
      <ScrollView>
        <>
          <View style={Title}>
            <H5>Mon Espace</H5>
          </View>

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

          <View style={Trails}>
            {/* Trails */}

            <View style={TrailsContainer}>
              <View style={styles.row}>
                {Ready ? (
                  <H6>Trails et ateliers en cours</H6>
                ) : (
                  <H6>Trails en cours</H6>
                )}
                {Ready ? (
                  <TouchableOpacity
                    onPress={() => navigation.navigate("SeeAllTrails")}
                  >
                    <BoldTxt
                      style={{
                        paddingRight: isMobile ? 10 : 20,
                        textDecorationLine : "underline",
                      }}
                    >
                      Tout Voir
                    </BoldTxt>
                  </TouchableOpacity>
                ) : null}
              </View>
              {Ready ? (
                <TrailsSwiper
                  navigation={navigation}
                  type="Trail"
                  endpoint={ENDPOINT_TRAILS}
                  showStateBar={true}
                />
              ) : (
                <View
                  style={{
                    height: width <= 790 ? 130 : 260,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <H7>Aucun trail en cours</H7>
                  <TouchableOpacity
                    style={[styles.Button, { height: width <= 790 ? 42 : 47 }]}
                  >
                    <Text>Sélectionnez un trail </Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>

            {/* Favoris */}

            <View style={TrailsContainer}>
              <View style={styles.row}>
                <H6>Favoris</H6>

                {Ready ? (
                  <TouchableOpacity
                    onPress={() => navigation.navigate("SeeAllTrails")}
                  >
                    <BoldTxt
                      style={{
                        paddingRight: isMobile ? 10 : 20,
                        textDecorationLine : "underline",
                      }}
                    >
                      Tout Voir
                    </BoldTxt>
                  </TouchableOpacity>
                ) : null}
              </View>

              {Ready ? (
                <TrailsSwiper
                  navigation={navigation}
                  type="Trail"
                  endpoint={ENDPOINT_TRAILS}
                />
              ) : (
                <View
                  style={{
                    height: width <= 790 ? 130 : 260,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <H7>Vous n’avez pas encore ajouté de favoris</H7>
                  <TouchableOpacity
                    style={[styles.Button, { height: width <= 790 ? 42 : 47 }]}
                  >
                    <Text>Consulter notre catalogue </Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </View>
            {/* Recommandation */}

          <View style={swiperContainerStye}>
            <View style={ContainerRecommandation}>
              <View style={styles.row}>
                <H6 style={{paddingLeft:Ready ?0 :10,paddingTop:isDesktop?5:0}} >Recommandations</H6>

                {Ready ? (
                  <TouchableOpacity
                    onPress={() => navigation.navigate("SeeAllTrails")}
                  >
                    <BoldTxt
                      style={{
                        paddingRight: isMobile ? 10 : 20,
                        textDecorationLine : "underline",
                      }}
                    >
                      Tout Voir
                    </BoldTxt>
                  </TouchableOpacity>
                ) : null}
              </View>

              {Ready ? (
                <Swiper
                  navigation={navigation}
                  type="Trail"
                  endpoint={ENDPOINT_TRAILS}
                />
              ) : (
                <View
                  style={{
                    height: width <= 790 ? 190 : 260,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <H7 style={{textAlign:'center', padding:width <= 790 ? 5 :0}}>
                    Pour avoir des recommandations adaptée à votre profil, merci
                    de cliquer sur "Coaching" pour répondre au questionnaire.
                  </H7>
                  <TouchableOpacity
                    style={[styles.Button, { height: width <= 790 ? 42 : 47 }]}
                  >
                    <Text>Consulter notre catalogue</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </View>
        </>
        {isDesktop && <Footer />}

      </ScrollView>
    </View>
  );
};

export default Espace;
