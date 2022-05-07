import {
  View,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
  Image,
} from "react-native";
import React from "react";
import BackHeader from "../../components/BackHeader";
import { colors } from "../../styles/GlobalStyle";
import Footer from "../../components/Footer";
import Mascotte from "../../assets/mascotte_1.png";
import { SecondaryButton } from "../../components/Buttons";
import Questions from "./Components/Questions";

const Quiz = ({ navigation }) => {
  const { height, width } = useWindowDimensions();

  const ContainerMd = {
    justifyContent:
      width <= 800 ? "space-between" : width <= 1300 ? "space-between" : "",
    height:
      width <= 800
        ? height - 70
        : width <= 1300
        ? height - 70 * 2
        : height - 70 * 2,
  };

  return (
    <View style={styles.container}>
      <BackHeader navigation={navigation} />
      <ScrollView>
        <View style={ContainerMd}>
          <Questions />
          <View
            style={[
              styles.ButtonsBox,
              { width: width <= 800 ? "95%" : width <= 1500 ? "55%" : "22%" },
            ]}
          >
            <SecondaryButton
              style={{ width: "48%" }}
              onPress={() => navigation.navigate("Message")}
            >
              Quitter
            </SecondaryButton>
            <SecondaryButton style={{ width: "48%" }}>
              Mettre en pause
            </SecondaryButton>
          </View>
        </View>
      </ScrollView>

      {width >= 1000 && (
        // <View style={styles.Image}>
        //   <SpaceCoachingMascotte />
        // </View>
        <Image source={Mascotte} style={styles.Image} />
      )}
      {width >= 800 && <Footer />}
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
    paddingLeft: 15,
  },
  Checkbox: {
    borderRadius: 20,
    backgroundColor: colors.green1,
    borderWidth: 2,
  },
  ButtonsBox: {
    marginTop: 20,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  ButtonsNext: {
    borderRadius: 20,
    borderWidth: 1,
    width: "48%",
    paddingVertical: 8,
    alignItems: "center",
    justifyContent: "center",
    borderColor: colors.grayBorder,
  },
  ButtonsQuit: {
    borderRadius: 20,
    borderWidth: 1,
    width: "48%",
    paddingVertical: 8,
    alignItems: "center",
    justifyContent: "center",
    borderColor: colors.grayBorder,
  },
  Image: {
    height: 304,
    width: 184,
    resizeMode: "contain",
    position: "absolute",
    right: 10,
    bottom: 61,
  },
  ButtonsBox: {
    marginTop: 20,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
});
