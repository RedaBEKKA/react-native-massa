import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { ProgressBar } from "react-native-paper";
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
import { PrimaryButton, SecondaryButton } from "../components/Buttons";
import { CheckCircle } from "../assets/svg/space";
import { MascotteComplete } from "../assets/svg/Coaching";

const Message = ({ navigation }) => {
  const width = useWindowDimensions().width;
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <BackHeader navigation={navigation} />
        <ScrollView>
          <View style={styles.section}>
            <View style={styles.image}>
              <CheckCircle />
            </View>
            <View style={styles.Text}>
              {true && (
                <>
                  <H6 style={{ textAlign: "center" }}>
                    Nous vous remercions d’avoir pris le temps de répondre à
                    toutes{"\n"} ces questions. Elles sont protégées par les
                    règlementations de {"\n"}protections de données les plus
                    strictes (lien sur nos conditions).{"\n"} Vous pouvez à tous
                    moments décider de supprimer ces{"\n"} informations, en nous
                    contactant.
                  </H6>
                  <Txt style={{ textAlign: "center" }}>
                    {"\n"}
                    Lorsque vous choisissez l’activité « PARLER » dans votre
                    espace personnel, les informations du questionnaire {
                      "\n"
                    }{" "}
                    ne sont pas utilisées, il est possible que nous vous
                    proposions de les exprimer de nouveau dans les échanges.
                    {"\n"}
                    {"\n"} En première analyse, nous vous recommandons vivement
                    de prendre contact avec votre médecin.{"\n"} Il est
                    également possible que le fait d’avoir répondu à toutes ces
                    questions vous ait un peu ébranlé, en vous{"\n"} faisant
                    prendre conscience de certaines choses. N’hésitez pas à nous
                    en faire part, et/ou à prendre rendez-vous{"\n"} avec un de
                    nos experts. Vous pouvez aussi vous rapprocher de votre
                    médecin.{"\n"}
                    {"\n"} Rendez-vous maintenant dans votre espace personnel,
                    rubrique Recommandations.
                  </Txt>
                </>
              )}
            </View>
            {width > 800 ? (
              <SecondaryButton
                onPress={() => {
                  //  navigation.goBack()
                  navigation.navigate("Coaching");
                }}
                style={{ width: "22%", marginTop: 40 }}
              >
                Retour
              </SecondaryButton>
            ) : (
              <SecondaryButton
                onPress={() => {
                  //  navigation.goBack()
                  navigation.navigate("Coaching");
                }}
                style={{ width: "48%", marginTop: 40 }}
              >
                Retour
              </SecondaryButton>
            )}
          </View>
        </ScrollView>
        {width >= 1000 && (
          <View style={styles.Image}>
            <MascotteComplete />
          </View>
        )}
      </View>
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.beige,
    flex: 1,
  },
  image: {
    width: 60,
    height: 60,
  },
  section: {
    top: "10%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    position: "relative",
    width: "65%",
  },
  Text: {
    marginTop: 30,
  },
  Image: {
    height: 304,
    width: 184,
    resizeMode: "contain",
    position: "absolute",
    right: 10,
    bottom: 61,
  },
});
