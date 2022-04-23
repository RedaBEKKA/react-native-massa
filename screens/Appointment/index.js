import {
  View,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import BackHeader from "../../components/BackHeader";
import { colors } from "../../styles/GlobalStyle";
import Footer from "../../components/Footer";
import Mascotte from "../../assets/mascotte_1.png";
import { SpaceCoachingMascotte } from "../../assets/svg/space";
import { H5, Txt } from "../../components/TextsComponents";
import { DropDown } from "../../components/Inputs";
import { Checkbox } from "react-native-paper";
import { PrimaryButton } from "../../components/Buttons";
import { IconeSeRelaxer, IconeSmile, TrailsIcon } from "../../assets/svg/Appointment";
import MaskGroup from "../../assets/Appointment/MaskGroup.png";
const Appointment = ({ navigation }) => {
  const { height, width } = useWindowDimensions();

  const [index, setIndex] = useState("1");
  const [text, setText] = useState("");
  const [text2, setText2] = useState("");

  const selectTrails = () => {
    setIndex("1");
  };
  const selectAtelier = () => {
    setIndex("2");
  };
  const selectOthers = () => {
    setIndex("3");
  };
  const [showCategories, setShowCategories] = useState(false);
  const [selectedCategorie, setSelectedCategorie] = useState("");

  const categories = [
    { label: "Trail 1", value: "Trail 1 " },
    { label: "Trail 2", value: "Trail 2 " },
  ];

  const [showLangue, setShowLangue] = useState(false);
  const [selectedLangue, setSelectedLangue] = useState("");

  const Langue = [
    { label: "Français", value: "Français " },
    { label: "English", value: "English " },
  ];

  const [showTimeZone, setShowTimeZone] = useState(false);
  const [selectedTimeZone, setSelectedTimeZone] = useState("");

  const TimeZone = [
    { label: "zone 1", value: "zone 1 " },
    { label: "zone 2", value: "zone 2 " },
  ];

  const Container = {
    height:
      width <= 800
        ? height - 70
        : width <= 1300
        ? height - 70 * 2
        : height - 70 * 2,
  };

  const [checked, setChecked] = useState(false);

  // TextWraaper
  const CustomPadding = width <= 800 ? 10 : 0;
  //Square
  const Square = {
    width: width <= 800 ? "92%" : width <= 1200 ? "45%" : "30%",
    marginTop: 40,
    height: 101,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-around",
  };
  // Select Trail
  const SelectTrail = {
    width: width <= 800 ? "92%" : width <= 1200 ? "45%" : "30%",
    alignSelf: "center",
    marginTop: 20,
  };
  // TextAppointment
  const TextAppointment = {
    width: width <= 800 ? "95%" : width <= 1200 ? "45%" : "30%",
    alignSelf: "center",
    overflow: "hidden",
    boxSizing: "borderBox",
    marginTop: 20,
  };
  // Time Zone + language
  const SelectTrailRow = {
    width: width <= 800 ? "92%" : width <= 1200 ? "45%" : "30%",
    alignSelf: "center",
    marginTop: 20,
    flexDirection: width <= 800 ? "column" : "row",
    justifyContent: "space-between",
  };
  const Col = {
    width: width <= 800 ? "100%" : width <= 1200 ? "48%" : "48%",
    marginBottom: width <= 800 ? 20 : 0,
  };
  //  politique && conditions
  const conditions = {
    width: width <= 800 ? "92%" : width <= 1200 ? "45%" : "30%",
    alignSelf: "center",
    marginTop: 15,
    flexDirection: "row",
  };
  // button wrapper
  const ButtonWrapper = {
    width: width <= 800 ? "92%" : width <= 1200 ? "45%" : "30%",
    alignSelf: "center",
    marginTop: 20,
    height: 57,
    alignItems: width <= 800 ? "flex-start" : "center",
  };
  const CustomShadow = index == "1" ? true : false;
  const CustomShadow2 = index == "2" ? true : false;
  const CustomShadow3 = index == "3" ? true : false;
  console.log("index", index);
  const StyleBoxes = {
    shadowColor: colors.green2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    width: "30%",
    height: "100%",
    backgroundColor: colors.white,
    borderColor: colors.green2,
    borderWidth: 1,
    borderRadius: 10,
    overflow:'hidden'

  };
  const StyleBox = {
    width: "30%",
    height: "100%",
    backgroundColor: colors.white,
    borderColor: colors.white,
    borderRadius: 10,
    overflow:'hidden'
  };
  const [isFocused, setIsFocused] = useState(null);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const TextArea = {
    borderColor: !isFocused ? colors.grayBorder : colors.green2,
    paddingLeft: 15,
    paddingTop: 20,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: colors.white,
  };
  return (
    <View style={styles.container}>
      <BackHeader navigation={navigation} />
      <ScrollView>
        <View style={Container}>
          <View style={styles.TitleWrapper}>
            <H5>Prendre rendez-vous avec un expert</H5>
          </View>
          <View
            style={[styles.TextWrapper, { paddingHorizontal: CustomPadding }]}
          >
            <Txt style={{ textAlign: "center" }}>
              Donnez-nous quelques informations pour que nous puissions vous
              diriger vers les bons interlocuteurs
            </Txt>

            {/* squares */}
            <View style={Square}>
              <TouchableOpacity
                style={!CustomShadow ? StyleBox : StyleBoxes}
                onPress={selectTrails}
              >
                <View style={styles.ImageBac}>
                  <Image
                    source={MaskGroup}
                    style={{ height: "100%", width: "100%" }}
                  />
                  <View style={styles.Icon}>
                    <TrailsIcon />
                  </View>
                </View>
                <Txt style={{ alignSelf: "center", marginTop: 10 }}>Trail</Txt>
              </TouchableOpacity>
              <TouchableOpacity
                style={!CustomShadow2 ? StyleBox : StyleBoxes}
                onPress={selectAtelier}
              >
                <View style={styles.ImageBac}>
                  <Image
                    source={MaskGroup}
                    style={{ height: "100%", width: "100%" }}
                  />
                  <View style={styles.Icon}>
                    <IconeSeRelaxer />
                  </View>
                </View>
                <Txt style={{ alignSelf: "center", marginTop: 10 }}>Atelier</Txt>
              </TouchableOpacity>
              <TouchableOpacity
                style={!CustomShadow3 ? StyleBox : StyleBoxes}
                onPress={selectOthers}
              >
                      <View style={styles.ImageBac}>
                  <Image
                    source={MaskGroup}
                    style={{ height: "100%", width: "100%" }}
                  />
                  <View style={styles.Icon}>
                    <IconeSmile />
                  </View>
                </View>
                <Txt style={{ alignSelf: "center", marginTop: 10}}>Autre</Txt>
              </TouchableOpacity>
            </View>

            {/* Select Trails */}
            <View style={SelectTrail}>
              {index == 1 ? (
                <DropDown
                  height={64}
                  placeholder="Sélectionnez le trail"
                  show={showCategories}
                  setShow={() => setShowCategories(!showCategories)}
                  value={selectedCategorie}
                  setValue={setSelectedCategorie}
                  options={categories}
                />
              ) : index == 2 ? (
                <View style={styles.textAreaContainer}>
                  <TextInput
                    multiline={true}
                    numberOfLines={7}
                    onChange={(event) => setText(event.target.value)}
                    value={text}
                    style={[TextArea, { outlineColor: colors.green2 }]}
                    placeholder="Votre message ..."
                    underlineColorAndroid="transparent"
                    placeholderTextColor="grey"
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                </View>
              ) : (
                <View style={styles.textAreaContainer}>
                  <TextInput
                    multiline={true}
                    numberOfLines={7}
                    onChange={(event) => setText2(event.target.value)}
                    value={text2}
                    style={[TextArea, { outlineColor: colors.green2 }]}
                    placeholder="Votre message ..."
                    underlineColorAndroid="transparent"
                    placeholderTextColor="grey"
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                </View>
              )}
            </View>
            {/* Text Appointment */}
            <View style={TextAppointment}>
              <Txt numberOfLines={5} style={{}}>
                Nous ferons notre maximum pour vous orienter vers les auteurs
                des trails ou des ateliers en lien avec votre prise de
                rendez-vous. S’ils ne sont pas disponibles, ou s’ils ne parlent
                pas votre langue, nous vous orienterons vers un autre expert
                qualifié sur le trail ou l’atelier en question, et dans la
                langue de votre choix.
              </Txt>
            </View>
            {/* time zone + language */}
            <View style={TextAppointment}>
              <Txt numberOfLines={5} style={{}}>
                Merci de vérifier la langue sélectionnée ainsi que votre time
                zone.
              </Txt>
            </View>
            <View style={SelectTrailRow}>
              <View style={Col}>
                <DropDown
                  height={64}
                  placeholder="Langue"
                  show={showLangue}
                  setShow={() => setShowLangue(!showLangue)}
                  value={selectedLangue}
                  setValue={setSelectedLangue}
                  options={Langue}
                />
              </View>
              <View style={Col}>
                <DropDown
                  height={64}
                  placeholder="Time zone"
                  show={showTimeZone}
                  setShow={() => setShowTimeZone(!showTimeZone)}
                  value={selectedTimeZone}
                  setValue={setSelectedTimeZone}
                  options={TimeZone}
                />
              </View>
            </View>
            {/* politique && conditions */}
            <View style={conditions}>
              <Checkbox
                uncheckedColor={colors.grayBorder}
                color={colors.green2}
                status={checked ? "checked" : "unchecked"}
                onPress={() => {
                  setChecked(!checked);
                }}
              />
              <Txt style={{ paddingTop: 5 }}>
                En cliquant sur "Envoyer" vous acceptez d'être contacté par
                Massa Trails et vous acceptez notre politique de
                confidentialité.
              </Txt>
            </View>
            {/* Button */}
            <View style={ButtonWrapper}>
              <PrimaryButton
                width={125}
                style={{
                  textAlign: "center",
                }}
                onPress={() => {
                  navigation.navigate("Appointment");
                }}
              >
                Envoyer
              </PrimaryButton>
            </View>
          </View>
        </View>
      </ScrollView>

      {width >= 1000 && <Image source={Mascotte} style={styles.Image} />}
      {width >= 800 && <Footer />}
    </View>
  );
};

export default Appointment;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.beige,
    flex: 1,
  },
  TitleWrapper: {
    marginTop: 40,
    alignSelf: "center",
  },
  TextWrapper: {
    marginTop: 20,
    alignSelf: "center",
  },
  Image: {
    height: 304,
    width: 184,
    resizeMode: "contain",
    position: "absolute",
    right: 30,
    bottom: 61,
  },
  SquareBox: {
    width: "30%",
    height: "100%",
    backgroundColor: "#eee",
    borderColor: colors.green2,
    borderWidth: 1,
    borderRadius: 10,
  },
  Col: {
    width: "48%",
  },
  TextArea: {
    borderColor: colors.grayBorder,
    paddingLeft: 10,
    paddingTop: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
  textAreaContainer: {
    borderColor: colors.grayBorder,
    padding: 5,
    borderRadius: 5,
  },
  Icon: {
    height: 27,
    width: 30,
    position: "absolute",
    top: 15,
    left: "40%",
  },
  ImageBac: {
    width: "100%",
    height: 58,
  },
});

{
  /* <View style={styles.Image}>
          <SpaceCoachingMascotte />
         </View> */
}
