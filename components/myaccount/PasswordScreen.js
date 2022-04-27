import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-paper";
import { Input } from "../Inputs";
import { colors } from "../../styles/GlobalStyle";
import DimensionsHook from "../../hooks/DimensionsHook";
import { PrimaryButton, SecondaryButton } from "../Buttons";
import { H3 } from "../TextsComponents";

const PasswordScreen = ({ navigation }) => {
  const { width } = DimensionsHook();
  const isDesktop = width > 900;
  // current password
  const [currentPassword, setCurrentPassword] = useState("");
  const [isCurrentPasswordSecure, setCurrentPasswordIsSecure] = useState(true);
  // new password
  const [newPassword, setNewPassword] = useState("");
  const [isNewPasswordSecure, setNewPasswordIsSecure] = useState(true);
  // confirm password
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isConfirmPasswordSecure, setConfirmPasswordIsSecure] = useState(true);
  return (
    <View style={{ marginTop: isDesktop ? 0 : 20 }}>
      <H3 style={{ fontSize: isDesktop ? 26 : 22 }}>Mot de passe</H3>
      <View style={styles.container}>
        {/** currentPassword */}
        <View style={{ width: isDesktop ? "49%" : "100%" }}>
          <Input
            mode="outlined"
            style={{ marginTop: 10 }}
            placeholder="Ancien mot de passe"
            secureTextEntry={isCurrentPasswordSecure}
            value={currentPassword}
            onChangeText={(val) => setCurrentPassword(val)}
            right={
              isCurrentPasswordSecure ? (
                <TextInput.Icon
                  forceTextInputFocus={false}
                  onPress={() =>
                    setCurrentPasswordIsSecure(!isCurrentPasswordSecure)
                  }
                  name={"eye"}
                  size={24}
                  color={colors.blue3}
                />
              ) : (
                <TextInput.Icon
                  forceTextInputFocus={false}
                  onPress={() =>
                    setCurrentPasswordIsSecure(!isCurrentPasswordSecure)
                  }
                  name="eye-off"
                  size={24}
                  color={colors.blue3}
                />
              )
            }
          />
        </View>
        {/** newPassword */}
        <View style={{ width: isDesktop ? "49%" : "100%" }}>
          <Input
            mode="outlined"
            style={{ marginTop: 10 }}
            placeholder="Nouveau mot de passe"
            secureTextEntry={isNewPasswordSecure}
            value={newPassword}
            onChangeText={(val) => setNewPassword(val)}
            right={
              isNewPasswordSecure ? (
                <TextInput.Icon
                  forceTextInputFocus={false}
                  onPress={() => setNewPasswordIsSecure(!isNewPasswordSecure)}
                  name={"eye"}
                  size={24}
                  color={colors.blue3}
                />
              ) : (
                <TextInput.Icon
                  forceTextInputFocus={false}
                  onPress={() => setNewPasswordIsSecure(!isNewPasswordSecure)}
                  name="eye-off"
                  size={24}
                  color={colors.blue3}
                />
              )
            }
          />
        </View>
        {/** confirm password */}
        <View style={{ width: isDesktop ? "49%" : "100%" }}>
          <Input
            mode="outlined"
            style={{ marginTop: 10 }}
            placeholder="Confirmation du nouveau mot de passe"
            secureTextEntry={isConfirmPasswordSecure}
            value={confirmPassword}
            onChangeText={(val) => setConfirmPassword(val)}
            right={
              isConfirmPasswordSecure ? (
                <TextInput.Icon
                  forceTextInputFocus={false}
                  onPress={() =>
                    setConfirmPasswordIsSecure(!isConfirmPasswordSecure)
                  }
                  name={"eye"}
                  size={24}
                  color={colors.blue3}
                />
              ) : (
                <TextInput.Icon
                  forceTextInputFocus={false}
                  onPress={() =>
                    setConfirmPasswordIsSecure(!isConfirmPasswordSecure)
                  }
                  name="eye-off"
                  size={24}
                  color={colors.blue3}
                />
              )
            }
          />
        </View>
        {/** divider */}
        <View style={styles.divider} />
      </View>
      {/** buttons */}
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          alignItems: "center",
          justifyContent: isDesktop ? "flex-end" : "center",
        }}
      >
        <SecondaryButton>Annuler</SecondaryButton>
        <PrimaryButton style={{ marginLeft: 10 }}>Enregistrer</PrimaryButton>
      </View>
    </View>
  );
};

export default PasswordScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  divider: {
    height: 1,
    width: "100%",
    alignSelf: "center",
    backgroundColor: colors.grayBorder,
    marginVertical: 20,
  },
});
