import { View, Text, StyleSheet, useWindowDimensions } from "react-native";
import React from "react";
import { colors } from "../../../../styles/GlobalStyle";
import {
  H7,
  LightTxt,
  SmallLightTxt,
} from "../../../../components/TextsComponents";
import { PrimaryButton } from "../../../../components/Buttons";

const UseCoachingCards = ({ Imge }) => {
  const { height, width } = useWindowDimensions();

  const card = {
    width: width <= 800 ? "95%" : width <= 1300 ? "45%" : "27%",
    borderRadius: 20,
    height: width <= 800 ? 411 : 490,
    backgroundColor: colors.white,
    marginBottom: 10,
    position: "relative",
    zIndex: 1,
    overflow: "hidden",
    alignSelf: "center",
    marginRight: width <= 800 ? 0 : 20,
  };
  return (
    <View style={card}>
      <View style={styles.semiCircle}></View>
      <View style={styles.image}>
        <Imge />
      </View>
      {/* <Image source={Rendez}  /> */}
      <H7
        style={{
          position: "absolute",
          top: 165,
          paddingHorizontal: 25,
        }}
      >
        Rendez-vous avec un expert
      </H7>
      <View
        style={{
          position: "absolute",
          top: 205,
          textAlign: "justify",
        }}
      >
        <LightTxt style={{ paddingHorizontal: 25 }}>
          Vous avez suivi un ou plusieurs Trails, et vous souhaitez échanger
          avec un de nos experts pour poursuivre votre chemin. Vous aimeriez
          avoir des précisions sur un de vos trails pour vous orienter. Vous
          souhaitez aller plus loin en rencontrant un de nos experts « Trails »
          ou « Atelier ».
        </LightTxt>
      </View>
      <PrimaryButton
        style={{
          position: "absolute",
          bottom: 20,
          left: 20,
          width: 249,
          height: 42,
        }}
        onPress={() => {}}
      >
        <SmallLightTxt>Répondez à nos questions</SmallLightTxt>
      </PrimaryButton>
    </View>
  );
};

export default UseCoachingCards;
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.beige,
    flex: 1,
  },

  card: {
    borderRadius: 20,
    height: 490,
    backgroundColor: colors.white,
    marginTop: 15,
    marginBottom: 10,
    position: "relative",
    zIndex: 1,
    overflow: "hidden",
    alignSelf: "center",
  },
  semiCircle: {
    position: "absolute",
    height: 527,
    top: -393,
    borderRadius: 360,
    zIndex: 1,
    backgroundColor: colors.green2,
    opacity: 0.25,
  },
});
