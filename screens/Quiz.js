import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Checkbox, ProgressBar } from "react-native-paper";
import {
  H2,
  SmallBoldTxt,
  H5,
  LightTxt,
  Txt,
  H6,
  H7,
  SmallLightTxt,
  SmallTxt,
} from "../components/TextsComponents";
import BackHeader from "../components/BackHeader";
import { colors } from "../styles/GlobalStyle";
import Footer from "../components/Footer";
import DimensionsHook from "../hooks/DimensionsHook";
import { PrimaryButton } from "../components/Buttons";
import { SpaceCoachingMascotte } from "../assets/svg/space";

const Quiz = ({ navigation }) => {
  const { isDesktop, isMobile, isTablet } = DimensionsHook();
  const {height, width } = useWindowDimensions();
  const [checked, setChecked] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  const QuizContainer = {
    width: "100%",
    alignSelf: "center",
    overflow: "hidden",
    paddingLeft: 0,
    marginTop: 10,
    marginTop: 30,
    flexDirection: "column",
    position: "relative",
  };
  const CustW = width <= 800 ? "90%" : "45%";
  const CustW2 = width <= 1000 ? "90%" : width <= 1300 ?'80%':"20%";

  const progressc = width <= 800 ? 0.5 : 0.25;

  const ButtonsBox = {
    marginTop: 20,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    width: width <= 1300 ? "95%" : "22%",
    marginBottom: width <= 1300 ? 20 : 0
  };
  const ContainerMd ={
    height:height-70*2,
    justifyContent: width <= 800 ? 'space-between' : ''
  }
  return (
    <View style={styles.container}>
      <BackHeader navigation={navigation} />
      <ScrollView>
        <View style={ContainerMd}>
          <View style={QuizContainer}>
            <ProgressBar
              style={[styles.ProgressBar, { width: CustW }]}
              progress={progressc}
              color={colors.green2}
            />

            <View style={styles.QuestionsCounter}>
              <SmallTxt>Question 1/32</SmallTxt>
            </View>

            <View
              style={[
                styles.Questions,
                { width: width <= 1300 ? "80%" : "45%" },
              ]}
            >
              <H6 style={{ textAlign: "center" }}>
                Titre de la question sur 2 lignes possible
              </H6>
            </View>
            {/* reponse */}
            <View style={[styles.Reponses, { width: CustW2 }]}>
              <View style={styles.BoxResponse}>
                <Checkbox
                  status={checked ? "checked" : "unchecked"}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                  uncheckedColor={colors.grayBackground}
                  color={colors.green2}
                />
                <Txt>Réponse 1</Txt>
              </View>
              <View style={styles.BoxResponse}>
                <Checkbox
                  status={checked2 ? "checked" : "unchecked"}
                  onPress={() => {
                    setChecked2(!checked2);
                  }}
                  uncheckedColor={colors.grayBackground}
                  color={colors.green2}
                />
                <Txt>Réponse 2</Txt>
              </View>
              <View style={styles.BoxResponse}>
                <Checkbox
                  status={checked3 ? "checked" : "unchecked"}
                  onPress={() => {
                    setChecked3(!checked3);
                  }}
                  uncheckedColor={colors.grayBackground}
                  color={colors.green2}
                />
                <Txt>Réponse 3</Txt>
              </View>
              <View style={styles.BoxResponse}>
                <Checkbox
                  status={checked4 ? "checked" : "unchecked"}
                  onPress={() => {
                    setChecked4(!checked4);
                  }}
                  uncheckedColor={colors.grayBackground}
                  color={colors.green2}
                />
                <Txt>Réponse 4</Txt>
              </View>
            </View>
          </View>
          <View style={ButtonsBox}>
            <TouchableOpacity style={styles.Buttons}>
              <Txt>Quitter</Txt>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Buttons}>
              <Txt>Mettre en pause</Txt>
            </TouchableOpacity>
          </View>
        </View>
      {width >= 1300 &&  <View style={styles.Image}>
            <SpaceCoachingMascotte />
        </View>}
        {isDesktop && <Footer />}

      </ScrollView>
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.beige,
    flex: 1,
  },
  ProgressBar: {
    borderRadius: 20,
    alignSelf: "center",
    backgroundColor: "#D5CBCA",
    height: 13,
    marginTop: 10,
  },
  QuestionsCounter: {
    alignSelf: "center",
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
    marginVertical: 20,
  },
  Questions: {
    alignSelf: "center",
    alignItems: "center",
    width: "45%",
    justifyContent: "center",
  },
  Reponses: {
    marginTop: 20,
    alignSelf: "center",
  },
  BoxResponse: {
    flexDirection: "row",
    alignItems: "center",
    height: 67,
    backgroundColor: colors.white,
    borderRadius: 10,
    marginBottom: 5,
    paddingLeft: 10,
  },
  Checkbox: {
    borderRadius: 20,
    backgroundColor: colors.green1,
  },
  ButtonsBox: {
    marginTop: 20,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  Buttons: {
    borderRadius: 20,
    borderWidth: 1,
    width: "48%",
    paddingVertical: 8,
    alignItems: "center",
    justifyContent: "center",
    borderColor: colors.grayBorder,
  },
  Image:{
      height:'',
      width:'',
      position:'absolute',
      right:10,
      bottom:61
  }

});
