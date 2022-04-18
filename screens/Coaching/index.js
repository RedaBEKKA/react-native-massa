import {
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  Image,
  useWindowDimensions,
} from "react-native";
import React from "react";
import {
  H5,
  LightTxt,
  H7,
  SmallLightTxt,
} from "../../components/TextsComponents";
import BackHeader from "../../components/BackHeader";
import { colors } from "../../styles/GlobalStyle";
import DimensionsHook from "../../hooks/DimensionsHook";

import Question from "../../assets/question.png";
import Rendez from "../../assets/rendez.png";
import Mascotte from "../../assets/mascotte_1.png";

import { PrimaryButton } from "../../components/Buttons";
import {
  CoachingCalender,
  CoachingMascotte2,
  CoachingQuestion,
  SpaceCoachingMascotte,
} from "../../assets/svg/space";
import CoachingTitle from "./Components/CoachingTitle";
import UseCoachingCards from "./Components/UseCardCoaching";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Coaching = ({ navigation }) => {
  const { isDesktop, isMobile, isTablet } = DimensionsHook();
  const { height, width } = useWindowDimensions();

  const mascotteWidth = useWindowDimensions().width;

  const Container = {
    width: "100%",
    backgroundColor: "#ccc",
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
            <UseCoachingCards Imge={CoachingCalender} />
            <UseCoachingCards Imge={CoachingQuestion} />
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
