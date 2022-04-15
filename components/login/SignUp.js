import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SmallBoldTxt, SmallTxt, Txt, BoldTxt } from "../TextsComponents";
import DimensionsHook from "../../hooks/DimensionsHook";
import { Input, RadioInput } from "../Inputs";
import { TextInput } from "react-native-paper";
import { colors } from "../../styles/GlobalStyle";
import { PrimaryButton } from "../Buttons";
import Spinner from "../Spinner";
import { MaterialIcons } from "@expo/vector-icons";
import { CheckBox } from "react-native-elements";

const SignUp = ({ navigation }) => {
  const [name, setName] = useState("");
  const [surname, setsurname] = useState("");
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [isSecure, setIsSecure] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validationType, setValidationType] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [submitLoader, setSubmitLoader] = useState(false);

  const toggleSecure = () => setIsSecure(!isSecure);
  const submitHandler = () => {
    setSubmitLoader(true);
    setTimeout(() => {
      setSubmitLoader(false);
      navigation.replace("Loader");
    }, 2000);
  };

  return (
    <View>
      <Txt
        style={{
          textAlign: "center",
          marginVertical: 10,
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt earum
        quam quibusdam quaerat, molestias ea sunt?
      </Txt>
      {/** name */}
      <Input
        placeholder="Nom"
        value={name}
        onChangeText={(val) => setName(val)}
        style={{ marginTop: 10 }}
      />
      {/** surname */}
      <Input
        placeholder="Prénom"
        value={surname}
        onChangeText={(val) => setsurname(val)}
        style={{ marginTop: 10 }}
      />
      {/** email */}
      <Input
        placeholder="Email"
        value={email}
        onChangeText={(val) => setEmail(val)}
        style={{ marginTop: 10 }}
      />

      {/** password */}
      <Input
        mode="outlined"
        style={{ marginTop: 10 }}
        placeholder="Mot de passe"
        secureTextEntry={isSecure}
        value={password}
        onChangeText={(val) => setPassword(val)}
        right={
          isSecure ? (
            <TextInput.Icon
              forceTextInputFocus={false}
              onPress={toggleSecure}
              name={"eye"}
              size={24}
              color={colors.blue3}
            />
          ) : (
            <TextInput.Icon
              forceTextInputFocus={false}
              onPress={toggleSecure}
              name="eye-off"
              size={24}
              color={colors.blue3}
            />
          )
        }
      />
      {/** confirm password */}
      <Input
        mode="outlined"
        style={{ marginTop: 10 }}
        placeholder="Confirmation du mot de passe"
        secureTextEntry={isSecure}
        value={confirmPassword}
        onChangeText={(val) => setConfirmPassword(val)}
        right={
          isSecure ? (
            <TextInput.Icon
              forceTextInputFocus={false}
              onPress={toggleSecure}
              name={"eye"}
              size={24}
              color={colors.blue3}
            />
          ) : (
            <TextInput.Icon
              forceTextInputFocus={false}
              onPress={toggleSecure}
              name="eye-off"
              size={24}
              color={colors.blue3}
            />
          )
        }
      />
      {/** validation type */}
      <BoldTxt style={{ marginTop: 20 }}>
        Comment souhaitez-vous confirmer votre inscription ?
      </BoldTxt>
      <View style={styles.row}>
        <RadioInput
          onPress={() => setValidationType("phone")}
          checked={validationType === "phone"}
          title={<Txt style={{ marginLeft: 5 }}>Phone</Txt>}
        />
        <RadioInput
          onPress={() => setValidationType("email")}
          checked={validationType === "email"}
          title={<Txt style={{ marginLeft: 5 }}>Email</Txt>}
        />
      </View>
      {/** accept terms */}
      <View style={styles.acceptTermsContainer}>
        <CheckBox
          containerStyle={{
            alignSelf: "flex-start",
            margin: 0,
            padding: 0,
            backgroundColor: "transparent",
            borderWidth: 0,
          }}
          onPress={() => setAcceptTerms(!acceptTerms)}
          checked={acceptTerms}
          title={<></>}
          checkedIcon={
            <MaterialIcons name="check-box" size={24} color={colors.green2} />
          }
          uncheckedIcon={
            <MaterialIcons
              name="check-box-outline-blank"
              size={24}
              color={colors.grayBorder}
            />
          }
        />
        <SmallTxt style={{ letterSpacing: 0.5 }}>
          En vous inscrivant, vous acceptez{" "}
          <SmallBoldTxt>nos Conditions Générales d’Utilisation</SmallBoldTxt> et
          notre <SmallBoldTxt>Politique de Confidentialité.</SmallBoldTxt>
        </SmallTxt>
      </View>
      {/** submit button */}
      <PrimaryButton
        onPress={submitHandler}
        style={{ marginTop: 20, marginBottom: 40 }}
      >
        {submitLoader ? (
          <Spinner color={colors.blue3} size="small" />
        ) : (
          <Txt>S’inscrire</Txt>
        )}
      </PrimaryButton>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginVertical: 20,
  },
  acceptTermsContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    margin: 5,
  },
});
