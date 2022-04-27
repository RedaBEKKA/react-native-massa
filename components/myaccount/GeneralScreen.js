import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import React, { useState } from "react";
import DimensionsHook from "../../hooks/DimensionsHook";
import { H3, H5, H6, SmallLightTxt, Txt, SmallTxt } from "../TextsComponents";
import { colors } from "../../styles/GlobalStyle";
import { GeneralBadge } from "../../assets/svg/Icons";
import { PrimaryButton, SecondaryButton } from "../Buttons";
import { Input } from "../Inputs";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";

const GeneralScreen = () => {
  const userInfo = useSelector((state) => state.userInfo);

  const { isDesktop, width } = DimensionsHook();
  const [name, setName] = useState(userInfo.name);
  const [surname, setSurname] = useState(userInfo.surname);
  const [pseudo, setPseudo] = useState(userInfo.pseudo ? userInfo.pseudo : "");
  const [company, setCompany] = useState(
    userInfo.company ? userInfo.company : ""
  );
  const [email, setEmail] = useState(userInfo.email);
  return (
    <View style={{ marginTop: isDesktop ? 0 : 20 }}>
      <H3 style={{ fontSize: isDesktop ? 26 : 22 }}>Général</H3>
      {/** profile image with badge + upload buttons */}
      <View style={styles.profileImageContainer}>
        <View>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            }}
            style={styles.avatar}
          />
          <View style={styles.imageBadge}>
            <GeneralBadge />
          </View>
        </View>
        <View>
          <View style={styles.uploadButtons}>
            <PrimaryButton
              style={{ height: 28, paddingHorizontal: 10, marginLeft: 20 }}
            >
              Télécharger
            </PrimaryButton>
            <SecondaryButton
              style={{ height: 28, paddingHorizontal: 10, marginLeft: 10 }}
            >
              Réinitialiser
            </SecondaryButton>
          </View>
          <View style={{ marginTop: 10 }}>
            <SmallLightTxt color={colors.grayLabel} style={{ marginLeft: 20 }}>
              JPG et PNG autorisés.
            </SmallLightTxt>
            <SmallLightTxt color={colors.grayLabel} style={{ marginLeft: 20 }}>
              Taille maximale de 800 Ko.
            </SmallLightTxt>
          </View>
        </View>
      </View>
      {/** formulaire */}
      <View style={styles.formContainer}>
        {/** name */}
        <View style={{ width: isDesktop ? "49%" : "100%", marginTop: 15 }}>
          <Input
            placeholder=""
            value={name}
            onChangeText={(val) => setName(val)}
            smallLabel="Nom *"
          />
        </View>

        {/** surname */}
        <View style={{ width: isDesktop ? "49%" : "100%", marginTop: 15 }}>
          <Input
            placeholder=""
            value={surname}
            onChangeText={(val) => setSurname(val)}
            smallLabel="Prénom *"
          />
        </View>
        {/** pseudo */}
        <View style={{ width: isDesktop ? "49%" : "100%", marginTop: 15 }}>
          <Input
            placeholder=""
            value={pseudo}
            onChangeText={(val) => setPseudo(val)}
            smallLabel="Pseudo (Facultatif)"
          />
        </View>
        {/** company */}
        <View style={{ width: isDesktop ? "49%" : "100%", marginTop: 15 }}>
          <Input
            placeholder=""
            value={company}
            onChangeText={(val) => setCompany(val)}
            smallLabel="Entreprise (Facultatif)"
          />
        </View>
        {/** email */}
        <View style={{ width: isDesktop ? "49%" : "100%", marginTop: 15 }}>
          <Input
            placeholder=""
            value={email}
            onChangeText={(val) => setEmail(val)}
            smallLabel="Email *"
          />
        </View>
      </View>
      {/** ↑↑ end form */}
      <View style={styles.divider} />
      <View style={styles.row}>
        <Ionicons name="checkmark-circle" size={24} color={colors.green2} />
        <H5 style={{ marginLeft: 5 }}>Vous êtes Massa Sherpa</H5>
      </View>
      <Txt style={{ marginTop: 20 }}>
        Vous pourrez modifier votre statut lors du prochain revouvellement de
        votre abonnement.
      </Txt>

      <View style={styles.divider} />
      {/** buttons */}
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          alignItems: "center",
          marginBottom: !isDesktop ? 30 : 0,
          justifyContent: isDesktop ? "flex-end" : "center",
        }}
      >
        <SecondaryButton>Annuler</SecondaryButton>
        <PrimaryButton style={{ marginLeft: 10 }}>Enregistrer</PrimaryButton>
      </View>
    </View>
  );
};

export default GeneralScreen;

const styles = StyleSheet.create({
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  profileImageContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: 10,
  },
  imageBadge: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.beige,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    right: -10,
  },
  uploadButtons: {
    flexDirection: "row",
    alignItems: "center",
  },
  formContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: colors.grayBorder,
    marginVertical: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
});
