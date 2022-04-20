import {
  StyleSheet,
  View,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import React from "react";

import BackHeader from "../../components/BackHeader";
import { colors } from "../../styles/GlobalStyle";

import {
  CoachingCalender,
  CoachingMascotte2,
  CoachingQuestion,
} from "../../assets/svg/space";
import CoachingTitle from "./Components/CoachingTitle";
import UseCoachingCards from "./Components/UseCardCoaching";

const Coaching = ({ navigation }) => {
  const { width } = useWindowDimensions();

  const Container = {
    width: "100%",
    alignItems: "center",
  };

  const desktopContent = {
    width: "100%",
    flexDirection: width <= 1000 ? "column" : "row",
    justifyContent: "center",
  };

  return (
    <View style={styles.container}>
      <BackHeader navigation={navigation} />
      <ScrollView>
        <View style={Container}>
          {/* Top Text  */}
          <CoachingTitle />

          {/* Body Cards */}
          <View style={desktopContent}>
            <UseCoachingCards
              TitleCard={"Rendez-vous avec un expert"}
              Imge={CoachingCalender}
              BodyText={
                "Vous avez suivi un ou plusieurs Trails, et vous souhaitez échanger avec un de nos experts pour poursuivre votre chemin. Vous aimeriez avoir des précisions sur un de vos trails pour vous orienter. Vous souhaitez aller plus loin en rencontrant un de nos experts « Trails » ou « Atelier »."
              }
              ButtonText={"Prenez rdv avec un de nos experts"}
            />
            <UseCoachingCards
              Imge={CoachingQuestion}
              TitleCard={"Questionnaire"}
              BodyText={
                "Ces questionnaires nous permettent dans un premier temps de vous recommander des contenus en lien avec votre situation. Ils nous permettent aussi de vous orienter vers un service extérieur si nous détectons une situation à risque. A terme, ils nous permettront de construire des trails uniques et personnalisés, pour vous uniquement."
              }
              ButtonText={"Répondez à nos questions"}
              navigation={navigation}
              To="Quiz"
            />
          </View>
        </View>
      </ScrollView>

      {width >= 1300 && (
        <View style={styles.image}>
          <CoachingMascotte2 />
        </View>
      )}
    </View>
  );
};

export default Coaching;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.beige,
    flex: 1,
  },

  image: {
    position: "absolute",
    bottom: 5,
    right: 5,
    height: 240,
    width: 184,
  },
  mascotteImg: {
    position: "absolute",
    height: 240,
    width: 184,
    resizeMode: "contain",
    left: "87%",
    bottom: "-2.5%",
  },
  Image: {
    height: "",
    width: "",
    position: "absolute",
    right: 10,
    bottom: 1,
  },
});

{
  /* <View style={styles.card}>
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
    Ces questionnaires nous permettent dans un premier temps de
    vous recommander des contenus en lien avec votre situation.
    Ils nous permettent aussi de vous orienter vers un service
    extérieur si nous détectons une situation à risque. A terme,
    ils nous permettront de construire des trails uniques et
    personnalisés, pour vous uniquement.
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
    onPress={() => {
      navigation.navigate("Quiz");
    }}
  >
    <SmallLightTxt>Répondez à nos questions</SmallLightTxt>
  </PrimaryButton>
)}
</View> */
}
{
  /* {isMobile && (
                  <PrimaryButton
                    style={{
                      position: "absolute",
                      bottom: 20,
                      left: 30,
                      width: 249,
                      height: 42,
                      alignSelf: "center",
                    }}
                    onPress={() => {
                      navigation.navigate("Quiz");
                    }}
                  >
                    <SmallLightTxt>Répondez à nos questions</SmallLightTxt>
                  </PrimaryButton>
                )} */
}
{
  /* {mascotteWidth > 1200 && (
              <Image source={Mascotte} style={styles.mascotteImg} />
            )} */
}
{
  /* {isMobile && (
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
                )} */
}
