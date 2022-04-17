import { StyleSheet, View, ScrollView, Dimensions, Image,useWindowDimensions } from "react-native";
import React from "react";
import {
  H2,
  SmallBoldTxt,
  H5,
  LightTxt,
  Txt,
  H6,
  H7,
  SmallLightTxt,
} from "../components/TextsComponents";
import BackHeader from "../components/BackHeader";
import { colors } from "../styles/GlobalStyle";
import Footer from "../components/Footer";
import DimensionsHook from "../hooks/DimensionsHook";
import Question from "../assets/question.png";
import Rendez from "../assets/rendez.png";
import Mascotte from "../assets/mascotte_1.png";
import { PrimaryButton } from "../components/Buttons";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Coaching = ({ navigation }) => {
  const { isDesktop, isMobile, isTablet } = DimensionsHook();
  const mascotteWidth = useWindowDimensions().width
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <BackHeader navigation={navigation} />
        <ScrollView>
          <View style={{ position: "relative" }}>
            <View style={styles.content}>
              <View style={styles.TitleCoaching}>
                <H5 style={styles.textJustify}>Coaching</H5>
              </View>
              <View style={styles.Title}>
                <LightTxt style={styles.textJustify}>
                  Vous pouvez prendre rendez-vous avec l’un de nos experts ou
                  répondre à nos questionnaires.
                </LightTxt>
              </View>

              <View style={isDesktop && styles.desktopContent}>
                <View style={styles.card}>
                  <View style={styles.semiCircle}></View>
                  <Image source={Rendez} style={styles.image} />
                  <H7
                    style={{
                      position: "absolute",
                      top: 165,
                      paddingHorizontal: 25,
                    }}
                  >
                    Rendez-vous avec un expert
                  </H7>
                  <View
                    style={{
                      position: "absolute",
                      top: 205,
                      textAlign: "justify",
                    }}
                  >
                    <LightTxt style={{ paddingHorizontal: 25 }}>
                      Vous avez suivi un ou plusieurs Trails, et vous souhaitez
                      échanger avec un de nos experts pour poursuivre votre
                      chemin. Vous aimeriez avoir des précisions sur un de vos
                      trails pour vous orienter. Vous souhaitez aller plus loin
                      en rencontrant un de nos experts « Trails » ou « Atelier
                      ».
                    </LightTxt>
                  </View>
                  {(isDesktop || isTablet) && (
                    <PrimaryButton
                      style={{
                        position: "absolute",
                        bottom: 20,
                        left: 20,
                        width: 249,
                        height: 42,
                      }}
                      onPress={() => {}}
                    >
                      <SmallLightTxt>Répondez à nos questions</SmallLightTxt>
                    </PrimaryButton>
                  )}
                  {isMobile && (
                    <PrimaryButton
                      style={{
                        position: "absolute",
                        bottom: 20,
                        left: 30,
                        width: 249,
                        height: 42,
                      }}
                      onPress={() => {}}
                    >
                      <SmallLightTxt>Répondez à nos questions</SmallLightTxt>
                    </PrimaryButton>
                  )}
                </View>
                <View style={styles.card}>
                  <View style={styles.semiCircle}></View>
                  <Image source={Question} style={styles.image} />
                  
                  <H7
                    style={{
                      position: "absolute",
                      top: 165,
                      paddingHorizontal: 25,
                    }}
                  >
                    Questionnaire
                  </H7>
                  <View
                    style={{
                      position: "absolute",
                      top: 205,
                      textAlign: "justify",
                    }}
                  >
                    <LightTxt style={{ paddingHorizontal: 25 }}>
                      Ces questionnaires nous permettent dans un premier temps
                      de vous recommander des contenus en lien avec votre
                      situation. Ils nous permettent aussi de vous orienter vers
                      un service extérieur si nous détectons une situation à
                      risque. A terme, ils nous permettront de construire des
                      trails uniques et personnalisés, pour vous uniquement.
                    </LightTxt>
                  </View>
                  {(isDesktop || isTablet) && (
                    <PrimaryButton
                      style={{
                        position: "absolute",
                        bottom: 20,
                        left: 20,
                        width: 249,
                        height: 42,
                      }}
                      onPress={() => {navigation.navigate("Quiz");}}
                    >
                      <SmallLightTxt>Répondez à nos questions</SmallLightTxt>
                    </PrimaryButton>
                  )}
                  {isMobile && (
                    <PrimaryButton
                      style={{
                        position: "absolute",
                        bottom: 20,
                        left: 30,
                        width: 249,
                        height: 42,
                        alignSelf:'center'
                      }}
                      onPress={() => {navigation.navigate("Quiz");}}
                    >
                      <SmallLightTxt>Répondez à nos questions</SmallLightTxt>
                    </PrimaryButton>
                  )}
                </View>
              </View>
            </View>
            {mascotteWidth>1200 && (
              <Image source={Mascotte} style={styles.mascotteImg} />
            )}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Coaching;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.beige,
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.beige,
  },
  desktopContent: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  TitleCoaching: {
    marginTop:30,
    
    paddingVertical:8,
    marginLeft: windowWidth > 500 ? 25 : 0,
  },
  Title: {
    paddingVertical: 8,
    marginLeft: windowWidth > 500 ? 25 : 0,
  },
  textJustify: {
    textAlign: "center",
     },
  card: {
    borderRadius: 20,
    width: windowWidth > 800 ? 453 : windowWidth*.95,
    height: 490,
    backgroundColor: colors.white,
    marginTop: 15,
    marginRight: windowWidth > 500 ? 15 : 0,
    marginBottom: 10,
    position: "relative",
    zIndex: 1,
    overflow: "hidden",
    alignSelf:'center'
  },
  semiCircle: {
    position: "absolute",
    height: 527,
    width: windowWidth > 800 ? 527 : windowWidth*1,
    left: windowWidth >= 800 ? -41 : -21,
    top: -393,
    borderRadius: 360,
    zIndex: 1,
    backgroundColor: colors.green2,
    opacity: 0.25,
  },
  image: {
    width: 50,
    height: windowHeight <= 500 ? 40 : 60,
    position: "absolute",
    bottom: -455,
    top: 60,
    left: windowWidth > 800 ? 210 : 144,
    zIndex: 200,
    tintColor: colors.green2,
  },
  mascotteImg: {
    position: 'absolute',
    height: 240,
    width: 184,
    resizeMode: 'contain',
    left: "87%",
    
    bottom:"-2.5%"
  }
});
