import { View, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-paper";
import { colors } from "../../styles/GlobalStyle";
import { BoldTxt, SmallBoldTxt, Txt } from "../TextsComponents";
import { PrimaryButton } from "../Buttons";
import Spinner from "../Spinner";
import { Input } from "../Inputs";
import axios from "axios";
const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSecure, setIsSecure] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [submitLoader, setSubmitLoader] = useState(false);
  const toggleSecure = () => setIsSecure(!isSecure);
  const submitHandler = async () => {
    setSubmitLoader(true);
    setErrorMessage("");
    if (email.length < 3) {
      setSubmitLoader(false);
      setErrorMessage("Vérifier votre adresse mail");
      return;
    }
    if (password.length < 6) {
      setSubmitLoader(false);
      setErrorMessage("Vérifier votre mot de passe");
      return;
    }
    axios
      .post("https://dev.massatrails.net/be/signin", {
        email: email.trim().toLocaleLowerCase(),
        password,
      })
      .then((res) => {
        setTimeout(() => {
          setSubmitLoader(false);
          navigation.replace("TabNavigation");
        }, 500);
      })
      .catch((err) => {
        setTimeout(() => {
          setSubmitLoader(false);
        }, 500);
        if (err.response.status === 401 || err.response.status === 404) {
          setErrorMessage(
            "Les données que vous avez saisies sont incorrectes."
          );
        } else {
          setErrorMessage("Erreur lors de la communication avec le serveur...");
        }
      });
  };
  return (
    <View>
      <SmallBoldTxt
        style={{
          color: colors.red1,
          textAlign: "center",
          marginVertical: 10,
        }}
      >
        {errorMessage.length > 0 ? errorMessage : " "}
      </SmallBoldTxt>

      <Input
        placeholder="Email"
        value={email}
        onChangeText={(val) => setEmail(val)}
      />
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
      <PrimaryButton onPress={submitHandler} style={{ marginTop: 20 }}>
        {submitLoader ? (
          <Spinner color={colors.blue3} size="small" />
        ) : (
          <Txt>Se connecter</Txt>
        )}
      </PrimaryButton>
      <TouchableOpacity
        style={{ alignSelf: "center", marginTop: 40, marginBottom: 20 }}
      >
        <BoldTxt>Mot de passe oublié ?</BoldTxt>
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({});
