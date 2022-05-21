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
import { DropDownAppointment } from "../../components/Inputs";
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
import Head from "./Components/head";
import styles from "./Hooks/Styles";
import Spinner from "../../components/Spinner";

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
    { label: "Français", value: "Fr" },
    { label: "English", value: "En" },
  ];
  // Select TimeZone
  const [showTimeZone, setShowTimeZone] = useState(false);
  const [selectedTimeZone, setSelectedTimeZone] = useState("");
  const TimeZone = [
    { label: "GMT +1", value: "GMT +1" },
    { label: "GMT +2", value: "GMT +2" },
    { label: "GMT +3", value: "GMT +3" },
    { label: "GMT +4", value: "GMT +4" },
    { label: "GMT +5", value: "GMT +5" },
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
    setSelectedTimeZone("");
    setSelectedLangue("");
    setSelectedCategorie("");
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
        return { label: i.ressourceTitle, value: i.ressourceCode };
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
  const [LabelDropdown, setLabelDropdown] = useState("");
  const [LabelDropdownLanguage, setLabelDropdownLanguage] = useState("");
  const [LabelDropdownZone, setLabelDropdownZonou] = useState("");
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
        setLabelDropdown("");
        setLabelDropdownLanguage("");
        setLabelDropdownZonou("");
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
        <>
          {/* Form Rendez-Vous */}
          <Head />
          {/* squares */}
          <View style={[styles.Square, { width: WidthCust }]}>
            <RadioButton
              data={data}
              userOption={userOption}
              setUserOption={setUserOption}
              CloseAll={CloseAll}
            />
          </View>

          {/* Select : Trails - Atelier - autre */}

          <View
            style={[
              styles.SelectTrail,
              { width: WidthCust, padding: width <= 800 ? 0 : 10 },
            ]}
          >
            {Data && userOption == "Trail" ? (
              Data ? (
                <DropDownAppointment
                  height={64}
                  placeholder="Sélectionnez le trail"
                  show={showCategories}
                  setShow={() => setShowCategories(!showCategories)}
                  value={selectedCategorie}
                  setValue={setSelectedCategorie}
                  options={Data}
                  isDiffVal={true}
                  setLabel={setLabelDropdown}
                  label={LabelDropdown}
                />
              ) : (
                <View style={[styles.Square, { width: WidthCust3 }]}>
                  <Spinner />
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
              <DropDownAppointment
                height={64}
                placeholder="Langue"
                show={showLangue}
                setShow={() => setShowLangue(!showLangue)}
                value={selectedLangue}
                setValue={setSelectedLangue}
                options={Langue}
                isDiffVal={true}
                setLabel={setLabelDropdownLanguage}
                label={LabelDropdownLanguage}
              />
            </View>

            <View style={[Col, { zIndex: 5 }]}>
              <DropDownAppointment
                height={64}
                placeholder="Time zone"
                show={showTimeZone}
                setShow={() => setShowTimeZone(!showTimeZone)}
                value={selectedTimeZone}
                setValue={setSelectedTimeZone}
                options={TimeZone}
                isDiffVal={true}
                setLabel={setLabelDropdownZonou}
                label={LabelDropdownZone}
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
              Trails et vous acceptez
              <Txt
                style={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                notre politique de confidentialité.
              </Txt>
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
        </>
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
