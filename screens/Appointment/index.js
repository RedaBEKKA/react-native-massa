import {
  View,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import BackHeader from "../../components/BackHeader";
import { colors } from "../../styles/GlobalStyle";
import Footer from "../../components/Footer";
import Mascotte from "../../assets/mascotte_1.png";
import { H5, Txt } from "../../components/TextsComponents";
import { DropDown } from "../../components/Inputs";
import { Checkbox } from "react-native-paper";
import { PrimaryButton } from "../../components/Buttons";
import {
  IconeSeRelaxer,
  IconeSmile,
  TrailsIcon,
} from "../../assets/svg/Appointment";
import AppointmentModal from "./Components/Modal";
import MaskGroup from "../../assets/Appointment/MaskGroup.png";
import DropDownMob from "./Components/DropDownMob";
import DimensionsHook from "../../hooks/DimensionsHook";

const Appointment = ({ navigation }) => {
  const { width } = useWindowDimensions();

  const [index, setIndex] = useState("1");
  const CustomShadow = index == "1" ? true : false;
  const CustomShadow2 = index == "2" ? true : false;
  const CustomShadow3 = index == "3" ? true : false;

  const selectTrails = () => {
    setIndex("1");
  };
  const selectAtelier = () => {
    setIndex("2");
  };
  const selectOthers = () => {
    setIndex("3");
  };

  // Select Trails
  const [showCategories, setShowCategories] = useState(false);
  const [selectedCategorie, setSelectedCategorie] = useState("");
  const categories = [
    { label: "Trail 1", value: "Trail 1 " },
    { label: "Trail 2", value: "Trail 2 " },
  ];
  // Select Langue
  const [showLangue, setShowLangue] = useState(false);
  const [selectedLangue, setSelectedLangue] = useState("");
  const Langue = [
    { label: "Français", value: "Français " },
    { label: "English", value: "English " },
  ];
  // Select TimeZone
  const [showTimeZone, setShowTimeZone] = useState(false);
  const [selectedTimeZone, setSelectedTimeZone] = useState("");
  const TimeZone = [
    { label: "zone 1", value: "zone 1 " },
    { label: "zone 2", value: "zone 2 " },
  ];

  const WidthCust = width <= 800 ? "92%" : width <= 1200 ? "45%" : "30%";
  const WidthCust2 = width <= 800 ? "95%" : width <= 1200 ? "45%" : "30%";
  const WidthCust3 = width <= 800 ? "100%" : width <= 1200 ? "48%" : "48%";
  const FlexD = width <= 800 ? "column" : "row";

  const Col = {
    width: WidthCust3,
    marginBottom: width <= 800 ? 20 : 0,
    zIndex: 10,
  };

  //  politique && conditions
  const [checked, setChecked] = useState(false);
  // Text Message
  const [text, setText] = useState("");
  const [text2, setText2] = useState("");
  //  Function Close all select Opned
  const CloseAll = () => {
    setShowCategories(false);
    setShowLangue(false);
    setShowTimeZone(false);
  };
  // send data function
  const [visible, setVisible] = useState(false);
  const CloseModal = () => {
    setVisible(false);
  };
  const handleSend = () => {
    if (index == "3") {
      setVisible(true);
    }
  };
  const ToHome = () => {
    navigation.navigate("HomeMain");
  };
  const { isMobile, isTablet, isDesktop } = DimensionsHook();

  return (
    <View style={styles.container}>
      <BackHeader navigation={navigation} />
      <ScrollView>
        <View>
          <View style={styles.TitleWrapper}>
            <H5
              style={{
                paddingHorizontal: width <= 800 ? 5 : 0,
                textAlign: "center",
              }}
            >
              Prendre rendez-vous avec un expert
            </H5>
          </View>
          <View
            style={[
              styles.TextWrapper,
              { paddingHorizontal: width <= 800 ? 10 : 0 },
            ]}
          >
            <Txt
              style={{
                paddingHorizontal: width <= 800 ? 5 : 0,
                textAlign: "center",
              }}
            >
              Donnez-nous quelques informations pour que nous puissions vous
              diriger vers les bons interlocuteurs
            </Txt>
          </View>

          {/* squares */}
          <View style={[styles.Square, { width: WidthCust }]}>
            <TouchableOpacity
              style={!CustomShadow ? styles.StyleBox : styles.StyleBoxes}
              onPress={() => {
                selectTrails();
                CloseAll();
              }}
            >
              <View style={styles.ImageBac}>
                <Image
                  source={MaskGroup}
                  style={{ height: "100%", width: "100%" }}
                />

                {/* 
                  <View  style={{ height: 58, width: "100%" }}>
                    <MaskGroup />
                  </View> */}
                <View style={styles.Icon}>
                  <TrailsIcon />
                </View>
              </View>
              <Txt style={{ alignSelf: "center", marginTop: 10 }}>Trail</Txt>
            </TouchableOpacity>
            <TouchableOpacity
              style={!CustomShadow2 ? styles.StyleBox : styles.StyleBoxes}
              onPress={() => {
                selectAtelier();
                CloseAll();
              }}
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
              style={!CustomShadow3 ? styles.StyleBox : styles.StyleBoxes}
              onPress={() => {
                selectOthers();
                CloseAll();
              }}
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
              <Txt style={{ alignSelf: "center", marginTop: 10 }}>Autre</Txt>
            </TouchableOpacity>
          </View>

          {/* Select Trails */}
          <View style={[styles.SelectTrail, { width: WidthCust }]}>
            {index == 1 ? (
              true ? (
                <DropDown
                  height={64}
                  placeholder="Sélectionnez le trail"
                  show={showCategories}
                  setShow={() => setShowCategories(!showCategories)}
                  value={selectedCategorie}
                  setValue={setSelectedCategorie}
                  options={categories}
                />
              ) : (
                <View style={[styles.Square, { width: WidthCust3 }]}>
                  <DropDownMob />
                </View>
              )
            ) : index == 2 ? (
              <View style={styles.textAreaContainer}>
                <TextInput
                  multiline={true}
                  numberOfLines={7}
                  onChange={(event) => setText(event.target.value)}
                  value={text}
                  style={[
                    styles.TextArea,
                    {
                      paddingTop: width <= 800 ? 15 : 20,
                      fontSize: isMobile ? 16 : 18,
                      outlineColor: isMobile ? null : colors.green2

                    },
                  ]}
                  placeholder="Votre message ..."
                  underlineColorAndroid="transparent"
                  placeholderTextColor="grey"
                />
              </View>
            ) : (
              <View style={styles.textAreaContainer}>
                <TextInput
                  multiline={true}
                  numberOfLines={7}
                  onChange={(event) => setText2(event.target.value)}
                  value={text2}
                  style={[
                    styles.TextArea,
                    {
                      fontSize: isMobile ? 16 : 18,
                      paddingTop: width <= 800 ? 15 : 20,
                      outlineColor: isMobile ? null : colors.green2
                    },
                  ]}
                  placeholder="Votre message ..."
                  underlineColorAndroid="transparent"
                  placeholderTextColor="grey"
                />
              </View>
            )}
          </View>
          {/* Text Appointment */}
          <View style={[styles.TextAppointment, { width: WidthCust2 }]}>
            <Txt>
              Nous ferons notre maximum pour vous orienter vers les auteurs des
              trails ou des ateliers en lien avec votre prise de rendez-vous.
              S’ils ne sont pas disponibles, ou s’ils ne parlent pas votre
              langue, nous vous orienterons vers un autre expert qualifié sur le
              trail ou l’atelier en question, et dans la langue de votre choix.
            </Txt>
          </View>

          {/* time zone + language */}
          <View style={[styles.TextAppointment, { width: WidthCust2 }]}>
            <Txt>
              Merci de vérifier la langue sélectionnée ainsi que votre time
              zone.
            </Txt>
          </View>
          <View
            style={[
              styles.SelectTrailRow,
              { width: WidthCust, flexDirection: FlexD },
            ]}
          >
            <View style={[Col, { zIndex: 15 }]}>
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

            <View style={[Col, { zIndex: 5 }]}>
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
          <View style={[styles.conditions, { width: WidthCust }]}>
            <Checkbox
              uncheckedColor={colors.grayBorder}
              color={colors.green2}
              status={checked ? "checked" : "unchecked"}
              onPress={() => {
                setChecked(!checked);
              }}
            />
            <Txt
              style={{ paddingTop: 5, width: width <= 800 ? "90%" : "100%" }}
            >
              En cliquant sur "Envoyer" vous acceptez d'être contacté par Massa
              Trails et vous acceptez notre politique de confidentialité.
            </Txt>
          </View>
          {/* Button */}
          <View
            style={[
              styles.ButtonWrapper,
              {
                width: WidthCust,
                alignItems: width <= 800 ? "flex-start" : "center",
              },
            ]}
          >
            <PrimaryButton
              width={width <= 800 ? "" : 125}
              style={{
                textAlign: "center",
              }}
              onPress={() => {
                handleSend();
              }}
            >
              Envoyer
            </PrimaryButton>
          </View>
        </View>
      </ScrollView>
      <AppointmentModal
        visible={visible}
        CloseModal={CloseModal}
        ToHome={ToHome}
      />
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
  SelectTrail: {
    alignSelf: "center",
    marginTop: 20,
    zIndex: 5,
    elevation: 5,
  },
  Square: {
    marginTop: 40,
    height: 101,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  TextAppointment: {
    alignSelf: "center",
    overflow: "hidden",
    marginTop: 20,
    zIndex: -1,
  },
  SelectTrailRow: {
    alignSelf: "center",
    marginTop: 20,
    justifyContent: "space-between",
  },

  Col: {
    width: "48%",
  },
  TextArea: {
    borderRadius: 5,
    backgroundColor: colors.white,
    fontFamily: "OxygenRegular",
    color: colors.blue3,
    textAlignVertical: "top",
    borderWidth:0.5,
    paddingHorizontal:10,
    paddingVertical:5,
    borderColor:colors.grayBorder
  },
  textAreaContainer: {
    borderColor: colors.grayBorder,
    padding: 5,
    borderRadius: 5,
  },
  Icon: {
    height: 27,
    width: 30,
    top: -35,
  },
  ImageBac: {
    width: "100%",
    height: 58,
    // backgroundColor:'#ccc',
    justifyContent: "center",
    alignItems: "center",
  },
  StyleBoxes: {
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
    overflow: "hidden",
  },
  StyleBox: {
    width: "30%",
    height: "100%",
    backgroundColor: colors.white,
    borderColor: colors.white,
    borderRadius: 10,
    overflow: "hidden",
  },
  ButtonWrapper: {
    alignSelf: "center",
    marginTop: 20,
    height: 57,
    zIndex: -1,
  },
  conditions: {
    alignSelf: "center",
    marginTop: 15,
    flexDirection: "row",
    zIndex: -1,
    overflow: "hidden",
  },
});

{
  /* <View style={styles.Image}>
          <SpaceCoachingMascotte />
         </View> */
}
