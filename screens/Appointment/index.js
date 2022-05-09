import {
  View,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
  Image,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import BackHeader from "../../components/BackHeader";
import { colors } from "../../styles/GlobalStyle";
import Footer from "../../components/Footer";
import Mascotte from "../../assets/mascotte_1.png";
import { H5, Txt } from "../../components/TextsComponents";
import { DropDown } from "../../components/Inputs";
import { ActivityIndicator, Checkbox } from "react-native-paper";
import { PrimaryButton } from "../../components/Buttons";
import AppointmentModal from "./Components/Modal";
import DimensionsHook from "../../hooks/DimensionsHook";
import RadioButton from "./Components/RadioButton";
import { TOKEN, ENDPOINT_TRAILS, ENPOINT_EXPERT_APPOINTMENT } from "@env";
import axios from "axios";
import Toast from "./Components/Toast";
import {
  IconeSeRelaxer,
  IconeSmile,
  TrailsIcon,
} from "../../assets/svg/Appointment";



const Appointment = ({ navigation }) => {
  const data = [
    { value: "Trail", icon: <TrailsIcon /> },
    { value: "Atelier", icon: <IconeSeRelaxer /> },
    { value: "Autre", icon: <IconeSmile /> },
  ];
  const { width } = useWindowDimensions();
  const { isMobile } = DimensionsHook();
  const [userOption, setUserOption] = React.useState("Trail");
  // Text Message
  const [text, setText] = useState("");
  const [text2, setText2] = useState("");
  //  politique && conditions
  const [checked, setChecked] = useState(false);
  // Select Trails
  const [showCategories, setShowCategories] = useState(false);
  const [selectedCategorie, setSelectedCategorie] = useState("");
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

  //  Function Close all select Opned
  const CloseAll = () => {
    setShowCategories(false);
    setShowLangue(false);
    setShowTimeZone(false);
  };
  // Show modal
  const [visible, setVisible] = useState(false);

  const CloseModal = () => {
    setVisible(false);
  };
  const showModal = () => {
    setVisible(true);
  };
  const ToHome = () => {
    navigation.navigate("HomeMain");
  };

  const [Data, setData] = useState([]);
  const getData = async () => {
    const Response = await axios.post(ENDPOINT_TRAILS, {
      access_token: TOKEN,
    });
    setData(
      Response.data.map((i) => {
        return { label: i.ressourceTitle, value: i.ressourceTitle };
      })
    );
  };
  useEffect(() => {
    let mounted = true;
    if (mounted) {
      getData();
    }
    return (mounted = false);
  }, []);

  const [LoaderForm, setLoaderForm] = useState(false);
  const [alert, setAlert] = useState("");
  const SubmitForm = async () => {
    if (
      userOption &&
      (selectedCategorie || text || text2) &&
      selectedTimeZone &&
      selectedLangue &&
      checked
    ) {
      // send form
      setLoaderForm(true);
      const Response = await axios.post(ENPOINT_EXPERT_APPOINTMENT, {
        access_token: TOKEN,
        topic: userOption,
        message:
          userOption == "Atelier" ? text : userOption == "Autre" ? text2 : null,
        language: selectedLangue,
        time_zone: selectedTimeZone,
        resourceCode: userOption == "Trail" ? selectedCategorie : null,
      });
      // clean after succes result
      if (Response.data.acknowledged) {
        setLoaderForm(false);
        setSelectedCategorie("");
        setSelectedTimeZone("");
        setSelectedLangue("");
        setText("");
        setText2("");
        setChecked(false);
        showModal();
      }
    } else {
      //  activate alert
      setAlert("Veuillez remplir tous les champs");
      setTimeout(() => {
        setAlert("");
      }, 5000);
    }
  };

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
            <RadioButton
              data={data}
              userOption={userOption}
              setUserOption={setUserOption}
              CloseAll={CloseAll}
            />
          </View>

          {/* Form Rendez-Vous */}

          {/* Select Trails */}

          <View style={[styles.SelectTrail, { width: WidthCust }]}>
            {Data && userOption == "Trail" ? (
              Data ? (
                <DropDown
                  height={64}
                  placeholder="Sélectionnez le trail"
                  show={showCategories}
                  setShow={() => setShowCategories(!showCategories)}
                  value={selectedCategorie}
                  setValue={setSelectedCategorie}
                  options={Data}
                />
              ) : (
                <View style={[styles.Square, { width: WidthCust3 }]}>
                  <Txt>chargement ...</Txt>
                </View>
              )
            ) : userOption == "Atelier" ? (
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
                      outlineColor: isMobile ? null : colors.green2,
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
                      outlineColor: isMobile ? null : colors.green2,
                    },
                  ]}
                  placeholder="Votre message ... "
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
              { flexDirection: FlexD, width: WidthCust },
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
          <View style={[styles.conditions, { width: WidthCust2 }]}>
            <Checkbox
              uncheckedColor={colors.grayBorder}
              color={colors.green2}
              status={checked ? "checked" : "unchecked"}
              onPress={() => {
                setChecked(!checked);
              }}
            />
            <Txt
              style={{
                paddingTop: 5,
                width: width <= 800 ? "90%" : "100%",
              }}
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
                alignItems: width <= 800 ? "flex-start" : "center",
                marginLeft: width <= 800 ? 30 : 0,
              },
            ]}
          >
            <PrimaryButton
              width={width <= 800 ? "" : 125}
              style={{
                textAlign: "center",
              }}
              onPress={() => {
                SubmitForm();
              }}
            >
              {LoaderForm ? (
                <ActivityIndicator color={colors.white}></ActivityIndicator>
              ) : (
                "Envoyer"
              )}
            </PrimaryButton>
          </View>
        </View>
        {/*End  Form Rendez-Vous */}
      </ScrollView>
      <AppointmentModal
        visible={visible}
        CloseModal={CloseModal}
        ToHome={ToHome}
      />
      {alert ? <Toast severity="error">{alert} </Toast> : <></>}
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
    padding: 10,
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
    borderWidth: 0.5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderColor: colors.grayBorder,
  },
  textAreaContainer: {
    borderColor: colors.grayBorder,
    padding: 5,
    borderRadius: 5,
  },

  ButtonWrapper: {
    alignSelf: "center",
    marginTop: 20,
    height: 57,
    width: "100%",
  },
  conditions: {
    alignSelf: "center",
    marginTop: 15,
    flexDirection: "row",
    zIndex: -1,
    overflow: "hidden",
  },
});
